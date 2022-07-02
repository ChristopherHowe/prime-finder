from main import default, getInformation
def func(x):
    return x + 1

def test_default():
    assert default() == {"root"}
