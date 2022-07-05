# ParaCloud internship project
# Author: Chris Howe
# Started 6/13/22
import math
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware


myApp = FastAPI()
userInput = 0

origins = [
    "http://localhost:3000",
]


myApp.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@myApp.get("/")
def default():
    return {"root"}


@myApp.get("/is-prime/")
def is_prime():
    prime = True
    if type(userInput) != int:
        raise HTTPException(status_code = 415, detail = "number is not of type int")
    else:
        sqrt = int(math.sqrt(userInput))
        for i in range(2, sqrt + 1):
            if userInput % i == 0:
                prime = False
                break

        return {
            "prime": prime,
            "input": userInput
                } 


@myApp.post("/postData")
async def getInformation(info: Request):
    req_info = await info.json()
    
    ##exceptions
    if not "new_input" in req_info:
        raise HTTPException(status_code=500, detail="correct key for JSON post is new_input")
    if type(req_info["new_input"]) != int:
        raise HTTPException(status_code=415, detail="user input is not of type int")
    
    global userInput
    userInput = int(req_info["new_input"])
    
    return {
        "status" : "SUCCESS",
        "posted number" : userInput,
    }

@myApp.post('/postDataUntyped')
async def postDataUntyped(info: Request):
    newData = await info.json()
    global userInput
    userInput = newData["new_input"]

@myApp.delete("/clearData")
async def clearEntry():
    global userInput
    userInput = 0
    return {
        "msg": "data is cleared",
        "input": userInput
            }