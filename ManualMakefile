
all:
	@echo "**running docker image**"
	docker build -t prime-finder .
	docker run -d -p80:80 --name prime-container prime-finder
	@echo "docker container now running"


        
