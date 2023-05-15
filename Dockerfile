FROM openjdk:17-alpine
MAINTAINER FML
COPY target/fml-0.0.1-SNAPSHOT.jar fml-app.jar
ENTRYPOINT ["java","-jar","/fml-app.jar"]
EXPOSE 8080
