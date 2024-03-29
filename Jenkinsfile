#!/usr/bin/env groovy

def defineBranchName() {
    def branchName = "${env.BRANCH_NAME}"
    branchName = branchName.replace ('/', '-')
    branchName = branchName.replace ('_', '-')
    branchName = branchName.replace ('.', '')
    return branchName
}

def defineImageName() {
    def branchName = defineBranchName()
    return "${branchName}-b${BUILD_NUMBER}"
}

def commitMessage() {
    def message = sh(returnStdout: true, script: "git log --format='medium' -1 ${GIT_COMMIT}").trim()
    return "${message}"
}

def defineDockerTag() {
    def branchName = "${env.BRANCH_NAME}"
    branchName = branchName.replace ('/', '')
    branchName = branchName.replace ('_', '')
    branchName = branchName.replace ('.', '')
    return "${branchName}b${BUILD_NUMBER}"
}

def projectName() {
  def jobNameParts = env.JOB_NAME.tokenize('/') as String[]
  return jobNameParts.length < 2 ? env.JOB_NAME : jobNameParts[jobNameParts.length - 2]
}

pipeline{
	agent any

	environment {
		BRANCH = "${BRANCH_NAME}"
		registry="registry.digitalocean.com/spacelaunchnow-registry/sln-ui"
		registryURL = "https://registry.digitalocean.com/spacelaunchnow-registry/sln-ui"
		registryCredential = 'digitalocean_registry'
		dockerTag = defineDockerTag()
        imageName = defineImageName()
		branchName = defineBranchName()
		dockerReg = "${registry}:${imageName}"
		dockerImage = ''
        DISCORD_URL = credentials('DiscordURL')
        COMMIT_MESSAGE = commitMessage()
        PROJECT_NAME = projectName()
	}

    options {
        ansiColor('xterm')
    }

	stages{
        stage('Build and Test') {
            parallel {
                stage('Run Cypress Tests') {
                    steps {
                        script{
                            sh "npm ci"
                            sh "npm run ci:e2e"
                            sh "npm run cypress:report:createBundle"
                        }
                    }
                    post {
                        always {
                            publishHTML(
                                allowMissing: false,
                                alwaysLinkToLastBuild: false,
                                keepAll: true,
                                reportDir: 'cypress/reports/html',
                                reportFiles: 'index.html',
                                reportName: 'Cypress Test Report',
                                reportTitles: 'Space Launch Now - UI'
                            )
                            junit(
                                testResults: 'cypress/results/junit/testresults-*.xml'
                            )
                            archiveArtifacts(
                                artifacts: 'cypress/results/**/*.json',
                                fingerprint: true,
                            )
                            archiveArtifacts(
                                artifacts: 'cypress/results/**/*.xml',
                                fingerprint: true,
                            )
                        }
                    }
                }
                stage('Build Docker Image'){
                    steps{
                        script{
                            dockerImage = docker.build(dockerReg)
                        }
                    }
                }
            }
        }
		stage('Deploy Docker Image'){
			steps{
				script{
					docker.withRegistry(registryURL, registryCredential){
						dockerImage.push()
						if (env.BRANCH_NAME == 'main') {
						    dockerImage.push("${dockerTag}")
						    dockerImage.push("production")
						} else {
                            dockerImage.push("${dockerTag}")
						}
					}
				}
			}
		}
		stage('Deploy Helm Release'){
            when {
                branch 'main'
            }
		    steps {
		        script {
                    sh '''
                        kubectl config use-context do-nyc1-k8s-spacelaunchnow-dev
                        export STAGING_NAMESPACE=sln-prod
                        export RELEASE_NAME=sln-prod-ui
                        export DEPLOYS=$(helm ls --all-namespaces | grep $RELEASE_NAME | wc -l)
                        if [ $DEPLOYS  -eq 0 ];
                        then
                            helm install $RELEASE_NAME k8s/helm/ --namespace=$STAGING_NAMESPACE --values k8s/helm/values.yaml;
                        else
                            helm upgrade $RELEASE_NAME k8s/helm/ --namespace=$STAGING_NAMESPACE --values k8s/helm/values.yaml --recreate-pods;
                        fi
                    '''
		        }
		    }
		}
    }
    post {
        always {
            discordSend description: "**Status:** ${currentBuild.currentResult}\n**Branch: **${env.BRANCH_NAME}\n**Build: **${env.BUILD_NUMBER}\n\n${COMMIT_MESSAGE}",
                footer: "",
                link: env.BUILD_URL,
                result: currentBuild.currentResult,
                title: PROJECT_NAME,
                webhookURL: DISCORD_URL,
                thumbnail: "https://i.imgur.com/FASV6fJ.png",
                notes: "Hey <@&641718676046872588>, new build completed for ${PROJECT_NAME}!"
        }
    }
}