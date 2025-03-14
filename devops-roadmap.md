# Stage 1:
## os & linux Fundamentals

1. Shell commands
2. Shell scripting
3. File Permissions
4. SSH key management
5. Networking
6. Virtualization

## Build and package management tools
npm, yarn, maven, etc

# Stage 2: Devops fundamental
 - docker
 - Artifect repository: central storage for managing various types of build artifacts generated during the software development process.
 - Cloud basics: learn cloud fundamentals like 
  * compute - virtual machines
  *  storage
  * Networking - firewall etc

# stage 3: Devops core: Container orchestration - Kubernetes
- k8S is container orchestration platform
- orchestration tools automate the deployment, scaling and management of the containerized appliations
- Makes sure apps run smoothly and reliably
scenario for understanding k82

Imagine having 10 linux servers on cloud working together to run millions and millions of services as if  `it is one giant machine doing the job `
 - k8s is self healing: K8s restarts, reschedule or recreate failed containers automatically.
 - Fault tolerance: if nod fails, k8s immediately shifts workloads to other nodes.

 ## Cloud services
 core aws services to know
 - access management: AWS identity and Access Management [IAM]
 - Compute services: Amazon Elastic compute cloud Amazon EC2
 - Storage services: Amazon simple storage  service S3
## Using kubernetes managed by cloud platform
1. AWS - EKS: Elastic kubernetes service
2. MICROSOFT Azure:AKS it is azure kubernetes service
3. GKE goodle Kubernetes Engine.

As EKS is widely used let's break down how it is configured
1. create EKS IAM Role
2. create VPC for Worker Nodes
3. create EKS cluster (Control Plane Nodes)
4. connect Kubectl with EKS cluster
5. create EC2 IAM Role for Node Group
6. create Node Group and attach to EKS cluster
7. configure auto scaling

## intermedially parts which verify is functioning the way it should is ci/cd piple lines 
-  jenkins, github actions, gitlab cli
## stage 4: Devops advanced
 ### infrastructure as code: terraform
  - With IaC we use code to manage and provision infrastructure instead of manually creating them
  - We define the desired state, which will be deployed and maintained in a `consistent, repeatable way`.

  - IaC  files are stored in Git allowing you to track changes, collaborate and rollback to previous states.
  you can use `terraform` alternatively `palumi` which  let's you your prefere language to write your configurations
### python 
- For automation and repetitive tasks like:
 1. interact with APIs
 2. Scheduling Tasks
 3. Monitoring Tasks
 4. Backup & Restore

### Configuration Management Ansible
- Automate configuration management of servers and applications
- Ansible is often prefered for its simplicity and agentles architecture
- you write it once and provide target servers
* update os packages on all server
* security patch on all servers
* Upgrade container runtime of all servers

## Monitoring & Observability - prometheus
- tracking app performance
- Diagnosing issues
- Maintaining system reliability
scenario: 
Thinks of prometheus as a listener in church choir singing then whenever something goes off he/she detects that and reveal where the issue is.

## final stage which could be five is SECURITY


