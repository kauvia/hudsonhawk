pipeline {
    agent {
        docker {
            image 'node:10'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('build') {
            steps {
                dir('nodejs-server') {
                    sh 'npm install'
                    sh 'npm run test'
                }
            }
        }
    }
}