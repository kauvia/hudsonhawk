pipeline {
    agent any
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