import { useState } from "react";
import "./App.css";

function App() {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    let img = e.target.files[0];
    setFile(img);
    setPreview(URL.createObjectURL(img));
  };

  const predict = async () => {
    if(!file) return alert("Select image first");

    setLoading(true);

    let form = new FormData();
    form.append("file", file);

    let res = await fetch("https://bone-age-backend.onrender.com/predict", {
      method:"POST",
      body: form
    });

    let data = await res.json();

    setLoading(false);
    setResult(`Predicted Bone Age: ${data.predicted_bone_age_months} months`);
  };

  return (
    <div className="app">

      <h1>🦴 Bone Age Predictor</h1>

      <input type="file" onChange={handleFile} />

      {preview && <img src={preview} alt="preview" />}

      <button onClick={predict}>
        {loading? "Predicting..." : "Predict"}
      </button>

      {result && <h2 className="result">{result}</h2>}
      
    </div>
  );
}

export default App;
