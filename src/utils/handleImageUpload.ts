const handleImageUpload = async (file: string | Blob) => {
  const formData = new FormData();
  formData.append("image", file);
  try {
    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=9ac1556f347d63c312dc73536c680027",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
export default handleImageUpload;
