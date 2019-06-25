pipeline {
    agent any
    tools {
        nodejs 'nodejs 12.4.0'
    }
    stages {
        stage('build') {
            steps {
                dir('nodejs-server') {
                    sh 'cd nodejs-server && npm install'
                    sh 'cd nodejs-server && npm run test'
                }
            }
        }
    }
}