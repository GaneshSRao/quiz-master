## Installing Quiz-Master using a Scratch Org

### Clone Quiz Master repository
git clone https://<span></span>github.com/GaneshSRao/quiz-master.git  <br/>
cd quiz-master

### Authorise a dev hub
sfdx force:auth:web:login -d -a DevHub

### Create a scratch org
sfdx force:org:create -s -f config/project-scratch-def.json -a quiz-master

### Push the app to scratch org
sfdx force:source:push

### Assign permisison set to the default user
sfdx force:user:permset:assign -n Quiz_Master_Admin

### Open the scratch org
sfdx force:org:open
