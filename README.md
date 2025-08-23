# MY_FIRST_PROJECT

# 🚀 CI/CD Pipeline with Jenkins, Maven, SonarQube, Nexus, and Tomcat  

## 📌 Project Overview  
This project demonstrates the implementation of an **end-to-end CI/CD pipeline** for a Java web application using **Jenkins**.  
The pipeline automates:  
1. Code checkout from GitHub  
2. Code Quality Analysis with SonarQube  
3. Build and package with Maven  
4. Artifact storage in Nexus Repository  
5. Deployment to Apache Tomcat on AWS EC2  

---

## 🛠️ Tools & Technologies  
- **Jenkins** – CI/CD automation  
- **Maven** – Build & dependency management  
- **SonarQube** – Code quality analysis  
- **Nexus Repository Manager** – Artifact storage  
- **Apache Tomcat** – Application server  
- **AWS EC2** – Cloud infrastructure  
- **GitHub** – Source code management  
- **Linux** – Environment setup  

---

## ⚙️ Jenkins Pipeline (Jenkinsfile)  
```groovy
pipeline {
    agent any
    tools {
        maven "mymaven"
    }
    stages {
        stage('Code') {
            steps {
                git "https://github.com/Kaparthirithish/firstproject.git"
            }
        }
        stage ("CQA") {
            steps {
                withSonarQubeEnv('mysonar') {
                    sh '''
                        mvn sonar:sonar \
                        -Dsonar.projectKey=MyProject \
                        -Dsonar.host.url=http://13.235.23.147:9000 \
                        -Dsonar.login=baeedfd2f3b41642da539b7ba59cbf5e3f79be93
                    '''
                }
            }
        }
        stage ("Build") {
            steps {
                sh 'mvn clean package'
            }
        }
        stage ("Artifact") {
            steps {
                nexusArtifactUploader artifacts: [[artifactId: 'myweb', classifier: '', file: 'target/myweb-8.6.9.war', type: 'war']], credentialsId: 'nexus', groupId: 'in.javahome', nexusUrl: '3.110.170.202:8081', nexusVersion: 'nexus3', protocol: 'http', repository: 'myrepo', version: '8.6.9'
            }
        }
        stage ("Deploy") {
            steps {
                deploy adapters: [tomcat9(credentialsId: 'tomcat', path: '', url: 'http://13.201.65.238:8080')], contextPath: 'myapp', war: 'target/*.war'
            }
        }
    }
}
```

---

## Project Workflow

   Developer
      │
      ▼
   GitHub (Source Code Repository)
      │
      ▼
   Jenkins (CI/CD Pipeline)
      │
      ├──► SonarQube (Code Quality Analysis)
      │
      ├──► Maven (Build & Package WAR)
      │
      ├──► Nexus Repository (Artifact Storage)
      │
      └──► Tomcat Server on AWS EC2 (Deployment)
      │
      ▼
   End User (Access Deployed Application)

---

## ✅ Outcomes
-> Automated complete CI/CD workflow
->Improved code quality with SonarQube integration
->Version-controlled artifacts in Nexus
->Faster and reliable deployments with Jenkins + Tomcat

---

## Implementation of Project
1.Launch 4 servers(Jenkins,SonarQube,Nexus,Tomcat)
2.Setup all the tools on their respective servers
3.Install the following plugins in Jenkins to deploy an application
    -SonarQube Scanner
    -Nexus Artifact Uploader
    -Deploy to Container
4.Make all the required integrations and setup the tools
5.Write the pipeline
