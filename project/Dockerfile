#updates automatically off of github script
FROM python:3.8

WORKDIR /code

COPY ./API/requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./API /code/API

CMD ["uvicorn", "API.main:myApp", "--host", "0.0.0.0","--port" ,"80", "--reload"]