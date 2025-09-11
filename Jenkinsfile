pipeline {
    agent any

    tools {
        nodejs "Node16"   // asegúrate de configurar Node16 en Manage Jenkins > Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/JuanJoseCascante/cypress-demo-poc.git'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress tests') {
            steps {
                sh 'npx cypress run'
            }
        }

        stage('Archive results') {
            steps {
                // guarda reportes y videos si existen
                junit allowEmptyResults: true, testResults: 'cypress/results/*.xml'
                archiveArtifacts artifacts: 'cypress/videos/**', followSymlinks: false, allowEmptyArchive: true
            }
        }
    }
}
