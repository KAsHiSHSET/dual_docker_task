# 🐳 PM2 + Docker

This task demonstrates how to run two separate Node.js apps in parallel using **Docker**, **Docker Compose**, and **PM2** as the process manager inside each container. It also supports safe updates to one app without affecting the other.

---

## 📁 Project Structure
<img width="236" height="253" alt="image" src="https://github.com/user-attachments/assets/ca6bb9e7-fe89-4f36-b573-e9368f4374c9" />


---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/KAsHiSHSET/pm2-docker-dual-container.git
cd pm2-docker-dual-container
```

### 2. Build & Run Both Containers
```bash
docker-compose up --build -d
```
This will:

Build and run app-v1 on port 3000

Build and run app-v2 on port 3001

Use PM2 as the process manager inside each container

<img width="835" height="638" alt="image" src="https://github.com/user-attachments/assets/be74a3d8-40f4-4b51-bb62-6391c877f631" />

### 3. Access the Apps
http://localhost:3000 → App V1

http://localhost:3001 → App V2


Checking through CURL
```bash
curl http://localhost:3000
```
<img width="1005" height="557" alt="image" src="https://github.com/user-attachments/assets/391bf32c-ceae-443a-bb2c-12b29c7687e9" />



```bash
curl http://localhost:3001
```


<img width="1014" height="578" alt="image" src="https://github.com/user-attachments/assets/9be55198-506e-44d0-8a31-63809a4fb9ca" />

### 4. Updating One App Without Disrupting the Other


```bash
# Rebuild only app-v2
docker-compose build app-v2

# Restart only app-v2 (app-v1 remains uninterrupted)
docker-compose up -d app-v2
```
 #### no downtime or disruption in the other running app.

 
### Made changes in APP V2
<img width="1003" height="924" alt="image" src="https://github.com/user-attachments/assets/d66ccd09-518e-43c2-9ac8-c90b92cd7b15" />

Rebuilt only V2 container:
```
bash

docker-compose build app-v2
docker-compose up -d app-v2
```

#### Verified that the other app (app-v1) continued handling requests without interruption.



<img width="1303" height="664" alt="image" src="https://github.com/user-attachments/assets/6b2e0371-c994-4900-98eb-dbfa4964f922" />

#### app v2 is started after updated code 
<img width="744" height="411" alt="image" src="https://github.com/user-attachments/assets/3585ae95-7b26-47a3-a9b1-b7ed7887095f" />




### 🎯 Conclusion
#### ✅ Both containers run independently using separate ports and PM2.

#### ✅ You can update or restart one container without affecting the other.

#### ✅ This setup enables safe development, testing, and deployment practices — similar to real-world blue-green deployments.
