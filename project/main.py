# ParaCloud internship project
# Author: Chris Howe
# Started 6/13/22
import math
from fastapi import FastAPI, Request
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
    global userInput
    userInput = int(req_info["new_input"])
    if type(userInput) != int:
        return{
            "status" : "FAILED",
            "msg" : "type is not int",
            "attempted post": userInput
            }
    else:
        return {
            "status" : "SUCCESS",
            "posted number" : userInput,
        }

@myApp.delete("/clearData")
async def clearEntry():
    global userInput
    userInput = 0
    return {
        "msg": "data is cleared",
        "input": userInput
            }