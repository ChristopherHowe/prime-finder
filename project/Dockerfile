#updates automatically off of github script
FROM python:3.8

WORKDIR /code

COPY project/requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY . /code/project

CMD ["uvicorn", "project.main:myApp", "--host", "0.0.0.0","--port" ,"80", "--reload"]