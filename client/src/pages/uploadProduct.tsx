import axios from 'axios';
import React, { useState } from 'react';

const UploadProduct: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    try {
      if (!imagePreview) {
        console.error('No image selected');
        return;
      }

      const formData = new FormData();
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement; // Explicitly type fileInput as HTMLInputElement
      if (fileInput && fileInput.files && fileInput.files[0]) {
        formData.append('image', fileInput.files[0]); // Append the file object directly
      } else {
        console.error('No file selected');
        return;
      }

      console.log('Starting upload...');
      await axios.post('http://localhost:5000/product/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image sent');
    } catch (error) {
      console.error('Error uploading', error);
    }
  };

  return (
    <div>
      <h2>Upload Product</h2>
      <form encType="multipart/form-data">
        <input type="file" onChange={handleFileChange} />
        {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '100px' }} />}
        <button type="button" onClick={handleUpload}>Upload</button>
      </form>
    </div>
  );
};

export default UploadProduct;
