FROM adoptopenjdk:17-jdk-hotspot
MAINTAINER FML
COPY target/fml-0.0.1-SNAPSHOT.jar fml-app.jar
ENTRYPOINT ["java","-jar","/fml-app.jar"]
