class ImageUploader {
  async upload(file) {
    const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
    const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const result = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });

    return await result.json();
  }
}

export default ImageUploader;
