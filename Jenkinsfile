pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Ricardo0974/primeros-auxilios-prevencion'
                    branch: 'develop'
            }
        }

        stage('Build Docker Images'){
            steps {
                sh 'docker compose build'
            }
        }

        stage ('Deploy compose build') {
            steps {
                sh 'docker compose down',
                sh 'docker compose up -d'
            }
        }

        post {
            success {
                echo "Despliegue completado con exito"
            }
            failure{
                echo "El despliegue fallo"
            }
        }
    }
}