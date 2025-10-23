import { useState } from "react";
import api from "../api";
import Back from "../components/Back";
function TeacherUploadPage() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Select a file first!");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);

    try {
      await api.post("/api/upload_file/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("File uploaded successfully!");
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed.");
    }
  };

  return <>
    <Back></Back>
    <div className="p-6">
      
      <h2 className="text-2xl font-bold mb-4">Upload a File</h2>
      <input
        type="text"
        placeholder="Enter file title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border px-2 py-1 rounded mr-3"
      />
      <input type="file" onChange={handleFileChange} className="mr-3" />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </div>
 </>
}

export default TeacherUploadPage;
