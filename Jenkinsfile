pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Ricardo0974/primeros-auxilios-prevencion', branch: 'develop'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy compose build') {
            steps {
                sh 'docker-compose down --volumes --remove-orphans'
                sh 'docker rm -f primeros-auxilios-prevencion || true'
                sh 'docker rm -f backend || true'
                sh 'docker compose up -d'
            }
        }
    }

    post {
        success {
            echo "Despliegue completado con exito"
        }
        failure {
            echo "El despliegue fallo"
        }
    }
}