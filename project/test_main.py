from fastapi import FastAPI
from fastapi.testclient import TestClient
from main import myApp

def test_default():
    assert myApp.default() == {"root"}

def test_is_prime():
    testResponse = {"new_input": 5}


