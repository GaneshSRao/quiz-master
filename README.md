## Clone Quiz Master repository
git clone https://github.com/GaneshSRao/quiz-master.git
cd quiz-master

## Authorise a dev hub
sfdx force:auth:web:login -d -a DevHub

## Create a scratch org
sfdx force:org:create -s -f config/project-scratch-def.json -a quiz-master

## Push the app to scratch org
sfdx force:source:push

## Assign permisison set to the default user
sfdx force:user:permset:assign -n Quiz_Master_Admin

## Open the scratch org
sfdx force:org:open
