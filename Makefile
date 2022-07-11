
all:
	@echo "**running docker image**"
	docker login -u howechristopher -p Jackamo5150$
	docker pull howechristopher/prime-finder 
	docker run -d -p80:80 --name prime-container howechristopher/prime-finder
	cd prime-app && @echo "switching to directory prime-app" && \
		npm run build && \
		serve -s build
	@echo "docker container now running"


        
