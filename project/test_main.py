from fastapi.testclient import TestClient
from main import myApp
from main import is_prime, default, userInput

client = TestClient(myApp)

postData = {"new_input": 9}


##Happy path testing
    ##unit tests 
def test_default():
    assert default() == {"root"}

def test_is_prime():
    assert is_prime() == {
        'prime': True,
        'input': 0
    }

    ##integration tests
def test_defaultGet():
    response = client.get('/')
    assert response.status_code == 200
    assert response.json() == ["root"]

def test_is_primeGet():
    client.post("/postData", json=postData)
    response = client.get('/is-prime')
    assert response.status_code == 200
    assert response.json() == {
        "prime": False,
        "input": 9
            }
    client.delete("clearData")

def test_getInformationPost():
    response = client.post("/postData", json=postData)
    assert response.status_code == 200
    assert response.json() == {
            "status" : "SUCCESS",
            "posted number" : 9,
        }

def test_clearEntryDelete():
    client.post("/postData", json=postData)
    response = client.delete("/clearData")
    assert response.status_code == 200
    if response.json()["input"] == 9:
        print("the delete function failed to clear the posted number")
    assert response.json() == {
        "msg": "data is cleared",
        "input": 0
            }
  
##error condition testing
    ##integration error tests

faultyPost1 = {"new_input": "jared"}
faultyPost2 = {"incorrect_key": 9}

def test_getInformationPostFaultyInput():
    response = client.post("/postData", json=faultyPost1)
    assert response.status_code == 415
    assert response.json() == {
        "detail" : "user input is not of type int"
            }
    client.delete("clearData")

def test_getInformationPostFaultyKey():
    response = client.post("/postData", json=faultyPost2)
    assert response.status_code == 500
    assert response.json() == {
        "detail" : "correct key for JSON post is new_input"
            }
    client.delete("clearData")

def test_is_primeFaultyInput():
    client.post('/postData', json=postData)
    response = client.get("/is-prime")
    assert response.json() == {
            "prime": False,
            "input": 9
                }
    client.post('/postDataUntyped',json=faultyPost1)
    response = client.get("/is-prime")
    assert response.json() == {
            "detail": "number is not of type int"
                } 