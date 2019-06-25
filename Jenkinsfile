pipeline {
    agent any
    tools {
        nodejs 'nodejs 12.4.0'
    }
    stages {
        stage('build') {
            steps {
                sh 'cd nodejs-server'
                sh 'npm install'
                sh 'test'
            }
        }
    }
}