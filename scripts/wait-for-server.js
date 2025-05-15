const http = require('http');
const { execSync } = require('child_process');

// Time to wait between retry attempts (in milliseconds)
const RETRY_INTERVAL = 2000;
// Maximum number of retries
const MAX_RETRIES = 60; // 2 minutes with a 2-second interval
// URL to check
const URL = 'http://localhost:3000';

/**
 * Checks if the server is responding
 * @returns {Promise<boolean>} True if server is accessible, false otherwise
 */
function checkServer() {
  return new Promise((resolve) => {
    const req = http.get(URL, (res) => {
      if (res.statusCode === 200) {
        console.log('✅ Server is up and running!');
        resolve(true);
      } else {
        console.log(`❌ Server responded with status code: ${res.statusCode}`);
        resolve(false);
      }
    });

    req.on('error', (err) => {
      console.log(`❌ Request error: ${err.message}`);
      resolve(false);
    });

    req.setTimeout(5000, () => {
      console.log('❌ Request timed out');
      req.destroy();
      resolve(false);
    });
  });
}

/**
 * Starts the server and waits for it to be responsive
 */
async function startAndWaitForServer() {
  let serverReady = false;
  let retries = 0;

  // Start the server in the background
  const serverProcess = require('child_process').spawn(
    'npm', 
    ['start'], 
    {
      stdio: 'inherit',
      detached: true,
      shell: true
    }
  );

  console.log('🚀 Starting development server...');
  
  // Wait a bit before checking server
  await new Promise(resolve => setTimeout(resolve, 5000));

  while (!serverReady && retries < MAX_RETRIES) {
    console.log(`Checking if server is ready (attempt ${retries + 1}/${MAX_RETRIES})...`);
    serverReady = await checkServer();
    
    if (!serverReady) {
      retries++;
      console.log(`Waiting ${RETRY_INTERVAL/1000} seconds before retrying...`);
      await new Promise(resolve => setTimeout(resolve, RETRY_INTERVAL));
    }
  }

  if (serverReady) {
    console.log('Server is ready! Running tests...');
    // Run tests here or continue with workflow
    try {
      execSync('npx cypress run', { stdio: 'inherit' });
    } catch (err) {
      console.error('❌ Cypress tests failed', err);
      process.exit(1);
    }
  } else {
    console.error('❌ Server failed to start in the allotted time. Aborting.');
    process.exit(1);
  }

  // Cleanup server process
  if (serverProcess && !serverProcess.killed) {
    process.kill(-serverProcess.pid);
  }
}

startAndWaitForServer();
