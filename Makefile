
all:
	@echo "**running docker image**"
	docker login -u howechristopher -p Jackamo5150$
	docker pull howechristopher/prime-finder 
	docker run -d -p80:80 --name prime-container howechristopher/prime-finder
	@echo "docker container now running"


        
