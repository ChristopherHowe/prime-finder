
# ParaCloud internship project
# Author: Chris Howe
# Started 6/13/22
import math
from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware


myApp = FastAPI()
userInput = 0

origins = [
    "http://localhost:3000",
    "localhost:3000"
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

    return {"prime": prime} 


@myApp.post("/postData/")
def post_input(new_input: int):
    global userInput
    userInput = new_input
    return {"posted number": new_input}
