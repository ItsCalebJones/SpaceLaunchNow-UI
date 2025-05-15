# Jenkins to GitHub Actions Migration

This document outlines the process of migrating from Jenkins to GitHub Actions for the SpaceLaunchNow-UI project.

## Latest Update (May 15, 2025)

All GitHub Actions workflows have been updated to use the latest versions of actions:
- `actions/checkout@v4`
- `actions/setup-node@v4`
- `actions/upload-artifact@v4`
- `docker/build-push-action@v5`
- `docker/setup-buildx-action@v3`
- `azure/setup-kubectl@v4`
- `azure/setup-helm@v4`
- `sarisia/actions-status-discord@v1.13.0`
- `EnricoMi/publish-unit-test-result-action@v2.12.0`

## Overview of Changes

The original Jenkins pipeline has been replaced with the following GitHub Actions workflows:

1. **build-main.yml** - Builds, tests and deploys code from the main branch
2. **test.yml** - Runs tests and linting for all branches and pull requests
3. **manual-release.yml** - Allows manual deployment of specific environments

## GitHub Actions Workflows

### Build Main Branch (build-main.yml)

This workflow runs when:
- Code is pushed to the `main` branch
- A tag is pushed
- Manually triggered from GitHub UI

This workflow:
1. Runs Cypress tests
2. Builds a Docker image
3. Pushes the Docker image to the DigitalOcean registry
4. Deploys to Kubernetes using Helm
5. Sends a Discord notification about the deployment

### Test and Lint (test.yml)

This workflow runs when:
- A pull request is opened against the `main` branch
- Code is pushed to any branch except `main`
- Manually triggered from GitHub UI

This workflow:
1. Runs Cypress tests
2. Checks code formatting
3. Tests building the Docker image (without pushing)

### Manual Release (manual-release.yml)

This workflow can be manually triggered from GitHub UI and allows selecting between:
- Production deployment
- Staging deployment

## Secret Requirements

The following secrets need to be configured in the GitHub repository settings:

1. `DIGITALOCEAN_ACCESS_TOKEN` - Token for DigitalOcean API access
2. `KUBE_CONFIG` - Base64-encoded Kubernetes configuration
3. `DISCORD_WEBHOOK` - Discord webhook URL for notifications

## Migration Steps

1. ✅ Create GitHub Actions workflow files in `.github/workflows/`
2. Add required secrets to the GitHub repository:
   - Go to Repository → Settings → Secrets and variables → Actions → New repository secret
3. Remove the Jenkinsfile after GitHub Actions workflows are confirmed working
4. Update any documentation references to CI/CD from Jenkins to GitHub Actions
5. Ensure all GitHub Actions are using the latest versions (already done as of May 15, 2025)

## GitHub Actions vs Jenkins

| Feature | Jenkins (Before) | GitHub Actions (After) |
|---------|-----------------|------------------------|
| CI Server | Self-hosted Jenkins | GitHub-hosted runners |
| Configuration | Jenkinsfile | YAML files in `.github/workflows/` |
| Build Triggers | Git pushes, scheduled | Git pushes, PRs, manual triggers |
| Notifications | Discord webhook | Discord webhook |
| Docker Registry | DigitalOcean | DigitalOcean |
| Deployment | Helm to Kubernetes | Helm to Kubernetes |

## Testing

After setting up the GitHub Actions workflows, make sure to test:
1. A push to a feature branch (should trigger tests but not deployment)
2. A pull request to main (should trigger tests)
3. A push to main (should trigger full CI/CD pipeline)
4. A manual release deployment
