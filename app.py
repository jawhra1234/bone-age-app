from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
from PIL import Image
import tensorflow as tf


# Load model (IGNORE old compile config)
model = tf.keras.models.load_model("regression_model.h5", compile=False)

IMG_SIZE = (224,224)
app = FastAPI(title="Bone Age Prediction API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


def preprocess_image(file):
    img = Image.open(file).convert("RGB")
    img = img.resize(IMG_SIZE)
    img = np.array(img) / 255.0
    img = np.expand_dims(img, axis=0)
    return img

@app.get("/")
def home():
    return {"message": "Bone Age Prediction API running"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image = preprocess_image(file.file)
    pred = model.predict(image)
    return {
        "predicted_bone_age_months": round(float(pred[0][0]), 2)
    }
