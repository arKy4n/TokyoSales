import { useState } from "react";
import axios from "axios";

function Upload() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/product/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Product uploaded successfully.");
    } catch (err) {
      console.error("Error during uploading the product: ", err);
    }
  };

  return (
    <>
      <h2>Upload Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Product Name"
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {image && (
        <div>
          <h4>Preview</h4>
          <img src={URL.createObjectURL(image)} alt="Preview" width="200" />
        </div>
      )}
    </>
  );
}

export default Upload;
