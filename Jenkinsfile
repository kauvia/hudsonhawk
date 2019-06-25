pipeline {
    agent any
    tools {
        nodejs 'nodejs 12.4.0'
    }
    stages {
        stage('build') {
            steps {
                sh 'ls -la'
                sh 'cd nodejs-server'
                sh 'ls -la'
            }
        }
    }
}