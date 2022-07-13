# Prime-Finder
Name: Christopher Howe

Project date: 6/13/22 - 7/13/22

Created for Paracloud AI internship application 

Determines if a given number is prime or not.

Uses Fast API backend and react frontend to create a singlepage web application

# Quick Start
In order to see the final product you just have to run these commands on a machine with docker installed
```
docker pull howechristopher/prime-finder 
docker pull howechristopher/prime-react-ui
docker run -d -p80:80 --name prime-container howechristopher/prime-finder
docker run -d -p3000:3000 --name prime-react-container howechristopher/prime-react-ui
```
# How it Works
Pushing project to git causes docker images to be built and pushed to docker hub. This is done using actions. 
In order to run tests, call npm test in the prime-app directory and call pytest in the project directory.
App can also be run by running make utility in main directory

call `npm test` in prime-app directory and call `pytest` in project directory to test

call `make` in the main directory to run application

# future Improvements
In the future I would add support to run a final product with an alternative makefile that does not push application to docker hub and just built it an ran it on the local side. I would also set up an additional action that automatically ran tests when the project is pushed to github. Additionally, I would prefer if the images were in the same repository. Finally there are a few bugs that need to be ironed out such as the first submit click does not work.


