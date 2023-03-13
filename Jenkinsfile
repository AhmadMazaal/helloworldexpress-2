pipeline {
    environment {
        registry = "ahmadhmazaal1997/sl-capstone"
        registryCredential = 'b59e5233-1bd5-40ab-9439-c9f3e7e636c6'
        dockerImage = ''
    }
    agent any
    
    stages{
         stage('Build') {
            agent {
                docker {
                    image 'node:18.12.1-alpine'
                    args '-u root:root'
                    // reuseNode true
                }
            }

            steps {
                // sh "chown -R 1010:1010 /home/storm/.npm"
                // sh "chown -R 115:122 /.npm"
                sh 'npm cache clean --force'
                sh 'ls -lah'
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
    
    
    
    