#!/bin/bash
# author Ahmad Baderkhan
SERVER_IP=174.138.33.121
SERVER_ACCOUNT=root

docker build -t color-pallete .
docker save -o color-pallete.zip color-pallete:latest 
clear 
echo COPYING ZIP IMAGE TO SERVER ... 
scp color-pallete.zip $SERVER_ACCOUNT@$SERVER_IP:/home/docker 
clear 
echo DEPLOYING REACT APP ON PORT 80 IN SERVER ... 
ssh $SERVER_ACCOUNT@$SERVER_IP "
cd /home/docker 
docker load -i ./color-pallete.zip;
docker kill color-pallete ;
docker container rm color-pallete; 
docker run -d -p 80:80 --name color-pallete color-pallete:latest; 
docker ps"