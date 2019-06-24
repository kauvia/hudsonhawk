pipeline {
    agent any
        stage('build') {
            steps {
                sh 'cd nodejs-server'
                sh 'npm install'
                sh 'test'
            }
        }
    }
}