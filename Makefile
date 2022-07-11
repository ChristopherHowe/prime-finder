
all:
	@echo pulling docker images from docker hub
	docker login -u howechristopher -p Jackamo5150$
	docker pull howechristopher/prime-finder 
	docker pull howechristopher/prime-react-ui
	@echo running docker image
	docker run -d -p80:80 --name prime-container howechristopher/prime-finder
	docker run -d -p3000:3000 --name prime-react-container howechristopher/prime-react-ui
	@echo docker container now running


        
