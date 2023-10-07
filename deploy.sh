aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 776469355126.dkr.ecr.us-east-1.amazonaws.com

#docker build -t backend -f Dockerfile backend
#docker build -t backend-dev -f mamabyc-spring/docker/dev/Dockerfile mamabyc-spring
#docker build -t nginx -f nginx/Dockerfile nginx

docker tag backend:latest 776469355126.dkr.ecr.us-east-1.amazonaws.com/backend:latest
#docker tag backend-dev:latest 094870135706.dkr.ecr.eu-central-1.amazonaws.com/backend-dev:latest
#docker tag nginx:latest 094870135706.dkr.ecr.eu-central-1.amazonaws.com/nginx:latest

docker push 776469355126.dkr.ecr.us-east-1.amazonaws.com/backend:latest
#docker push 094870135706.dkr.ecr.eu-central-1.amazonaws.com/backend-dev:latest
#docker push 094870135706.dkr.ecr.eu-central-1.amazonaws.com/nginx:latest

#exec $SHELL
