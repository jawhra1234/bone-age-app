
```markdown
# 🦴 Bone Age Predictor

A full-stack web application that predicts **bone age from hand X-ray images** using a machine learning model.  
The project demonstrates an **end-to-end workflow**: ML model development → FastAPI backend → React frontend → Docker deployment → Render cloud deployment.

---

## **Live Demo**

- Frontend: [https://bone-age-frontend.onrender.com/](https://bone-age-frontend.onrender.com/)  
- Backend API: [https://bone-age-backend.onrender.com/](https://bone-age-backend.onrender.com/)

---

## **Features**

- Upload X-ray images to predict bone age in months
- Live preview of uploaded images
- Regression and classification models
- REST API powered by FastAPI
- Responsive frontend UI with React
- Fully containerized with Docker
- Deployed on Render (Cloud)

---

## **Tech Stack**

- **Frontend:** React.js, CSS
- **Backend:** FastAPI, Python, Gunicorn
- **Machine Learning:** TensorFlow/Keras
- **Database:** None (stateless API)
- **Deployment:** Docker, Render

---

## **Project Structure**

```

bone-age-app/
│
├── bone-age-ui/           # React frontend
│   ├── src/
│   ├── public/
│   └── Dockerfile.frontend
│
├── notebooks&reports/     # Notebooks and project report
│   ├── regression.ipynb
│   ├── classification.ipynb
│   └── bone-age-report.pdf
│
├── app.py                 # FastAPI backend
├── Dockerfile.backend     # Backend Dockerfile
├── regression_model.h5    # Trained ML model
├── requirements.txt       # Python dependencies
└── docker-compose.yml     # Optional Docker compose

````

---

## **Notebooks & Reports**

This project includes detailed **analysis, model building, and evaluation**:

1. **Regression Notebook (`regression.ipynb`)**
   - Predicts exact bone age in months
   - Models tried: HOG + Random Forest, Baseline CNN, MobileNet (frozen & fine-tuned)
   - Best regression results (MobileNet Fine-Tuned):
     - MAE: 15.10 months
     - RMSE: 20.20 months
     - R²: 0.765
   - Grad-CAM visualizations show model focuses on clinically relevant regions (wrist and finger joints)

2. **Classification Notebook (`classification.ipynb`)**
   - Classifies bone age into developmental stages: Infant, Child, Pre-Adolescent, Adolescent, Adult-like
   - MobileNet-based classifier with transfer learning and early stopping
   - Best results:
     - Accuracy: 0.63
     - Weighted F1-score: 0.63
     - Pre-Adolescent stage predicted best; Adolescent stage worst
   - Confusion matrices and stage-wise metrics included

3. **Project Report (`bone-age-report.pdf`)**
   - Includes methodology, dataset preprocessing, model design, results, visualizations, discussion, and references

---

## **Getting Started (Local Setup)**

### **Backend**
```bash
# Navigate to backend folder
cd bone-age-api

# Build Docker image
docker build -f Dockerfile.backend -t bone-age-backend .

# Run backend
docker run -p 8000:8000 bone-age-backend
````

### **Frontend**

```bash
# Navigate to frontend folder
cd bone-age-ui

# Install dependencies
npm install

# Run locally
npm start
```

Visit `http://localhost:3000` to see the frontend and test predictions via the backend API.

---

## **Deployment**

Both frontend and backend are deployed on **Render**:

* Backend: [https://bone-age-backend.onrender.com/](https://bone-age-backend.onrender.com/)
* Frontend: [https://bone-age-frontend.onrender.com/](https://bone-age-frontend.onrender.com/)

---

## **Usage**

1. Open the frontend URL.
2. Upload a hand X-ray image.
3. Click "Predict" to get the bone age in months.

---

## **Screenshots**

<img width="296" height="392" alt="image" src="https://github.com/user-attachments/assets/4367a215-023f-48b2-8eb2-fffaa70d57ed" />


---

## **Future Improvements**

* Add **user authentication** to save predictions
* Store uploaded images and results in a database
* Improve UI/UX with more styling
* Add error handling for unsupported files
* Enhance classification accuracy via augmentation or ensemble models

---

## **Author**

**S M Jawhra**
[GitHub](https://github.com/jawhra1234)

```


```markdown
## 🔁 Visual Workflow (End-to-End ML → Web App → Cloud)

```

```
📓  Notebooks & Reports
    (EDA + Training + Evaluation)
        |
        |  → regression.ipynb
        |  → classification.ipynb
        |  → Grad-CAM, Metrics, Tuning
        v
🧠  Trained Model
    regression_model.h5
        |
        v
⚙️  Backend – FastAPI
    app.py
    • Loads trained ML model  
    • Handles /predict API requests  
    • Returns bone age predictions as JSON
        |
        v
🐳  Docker
    • Dockerfile.backend → Containerized API
    • Dockerfile.frontend → Built React UI
        |
        v
🖥️  Frontend – React
    bone-age-ui/
    • Image upload UI  
    • Calls backend API  
    • Displays prediction
        |
        v
☁️  Cloud Deployment – Render
    TWO SERVICES:
    
    1️⃣ Backend Service
       👉 https://bone-age-backend.onrender.com/
       
    2️⃣ Frontend Service
       👉 https://bone-age-frontend.onrender.com/

        |
        v
✅  Final End-User Web App
    🌐 User uploads X-ray → gets real-time prediction
```

```

**Complete ML Pipeline Demonstrated:**

- ✔ Data preprocessing & experimentation (Notebooks)  
- ✔ Model training & evaluation  
- ✔ API conversion via FastAPI  
- ✔ Web-based UI using React  
- ✔ Docker containerization  
- ✔ Cloud deployment  

---

