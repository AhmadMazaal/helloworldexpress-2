pipeline {
    environment {
        registry = "ahmadhmazaal1997/sl-capstone"
        registryCredential = 'cc5b88c4-198a-4900-8de7-0fccf3436eaa'
        dockerImage = ''
    }
    agent any
    tools {
        nodejs "nodejs"
    }

    stages{
         stage('Build & Clone Github Repo') {
            agent {
                docker {
                    image 'node:18.12.1-alpine'
                    args '-u root:root'
                    // reuseNode true
                }
            }

            steps {
                sh 'npm cache clean --force'
                sh 'npm i'
                sh 'ls -lah'
            }
        }

        stage('Building Docker Image') {
            steps {
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }

        stage('Running Tests') {
            steps {
                sh 'npm i'
                sh 'node app.js &'
                script {
                    final String baseUrl = "curl localhost:3000"
                    final String successStatusCode = sh(script: 'curl -s -o /dev/null -w "%{http_code}" localhost:3000/success', returnStdout: true).trim()
                    echo '*** successStatusCode ***:' + successStatusCode
                    // if (successStatusCode.equals("200")) {
                    //         sh 'pkill -f "node app.js"'
                    // }
                    final String failResponseStatusCode = sh(script: 'curl -s -o /dev/null -w "%{http_code}" localhost:3000/NOT_FOUND', returnStdout: true).trim()
                    echo '*** failResponseStatusCode *** : ' + failResponseStatusCode
                }
            }
        }

        stage('Deploying Docker Image to Dockerhub') {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                    dockerImage.push()
                    }
                }
            }
        }

        stage('Cleaning Up') {
            steps{
              sh "docker rmi --force $registry:$BUILD_NUMBER"
            }
        }
    }

}
    
    
    
    