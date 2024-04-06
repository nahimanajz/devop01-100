writing a dockerfile == being given a computer with no OS and being told to install chrome

Why do we use alpine= why do You use windows, MacOS and Ubuntu=> they come with a preinstalled set of programs that are useful to you
tagging image
dockerId====>Repo/Project Name ===> (:) ===> version

## tagging this image run below command

docker build -t janvierna/redis:latest .

## windows users
docker commit -c 'CMD ["redis-server"]' CONTAINERID
docker commit -c "CMD 'redis-server'" CONTAINERID

## Starting server from tagged built image
docker build -t janvierna/simpleweb .

## mapping local ports to docker image 
docker run -p 8081(Route incoming request to this port on local host) : 8080 {this port inside the container} [image id] or image name

__Nb__ above line means anytime request comes to mentioned port redirect to mentioned port inside the container

# Docker run image
 docker-compose up
 
 # docker build . & docker run image
  docker-compose up --build 

# Launch in background
docker-compose up -d

# Stop container 
 docker-compose down

# container restart policies

- `"no"`: never attempt to restart this container if it stops/crashes, it it is written like with adding single/double quotes unlike other policies `N.B: restart: 'no'`
- `always`: if this container stops for any reason always attempt to restart it
- `on-failure`: only restart if the container stops with an error 
- `unless-stopped`: Alwyas restart unless we (the developer forcibly) stop it 

# docker compose status

docker-compose ps 

# Development flow
- Development -> Testing -> Deployment
# Flow specifics
[here](https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/learn/lecture/11437042#overview)
 ## tools
 - Vscode
 - Github (develop and master branch)
 - TravisCI
 - AWS ELASTIC BEAN STALK for deployment

# Building image from file which is not just Dockerfile
- docker build -f FILENAME .

# Referrencing docker image to reflect local changes to container image
NB: here we are testing ReactJs app
- docker run -p 3000:3000 -v $(pwd):/app IMAGE_ID