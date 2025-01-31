# Intern Test Project

## Python Program  
- Determines if a user-inputted number is a prime number or not.  
- Runs in a Docker container.  
- Exposes a REST API using FastAPI for user input.

## Web Application UI (React)  
- Allows the user to enter a number and check if it's prime.  
- Uses the REST API endpoint from the Python program.

## Tests to be Written  
- **Unit Tests**:  
  - Test the Python program (happy path and error conditions).  
- **Integration Test**:  
  - Ensure the web app communicates correctly with the Python program.

## CI/CD  
- Use **GitHub** for source control.  
- Build the Docker container using GitHub.  
- Use **Microsoft DevOps** to create test cases.  
- After a successful build:  
  1. Automatically run all tests.  
  2. Report test results to DevOps.

## Final Proof of Success  
1. Kick off a build.  
2. Deploy the build.  
3. Run tests against the deployed build.  
4. Report results to DevOps.  

