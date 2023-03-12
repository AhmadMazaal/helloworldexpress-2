pipeline {
    environment {
        registry = "ahmadhmazaal1997/sl-capstone"
        registryCredential = '993b5358-2def-4395-a7e0-0093fe566b76'
        dockerImage = ''
    }
    agent any
    
    stages{
         stage('Build') {
            agent {
                docker {
                    image 'node:18.12.1-alpine'
                    // reuseNode true
                }
            }

            steps {
                // sh 'sudo npm cache clean --force '
                sh 'ls -lah'
                sudo chown -R 115:122 "/.npm"
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
    
    
    
    