pipeline {
    agent any
    tools {
        nodejs 'nodejs 12.4.0'
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