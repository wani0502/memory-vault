"use client";

import { useState } from "react";

export default function UploadZone() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selected = e.target.files[0];

    if (!selected) return;

    setFile(selected);
    setImage(URL.createObjectURL(selected));
  };

  const handleUpload = () => {
    console.log(file);
    alert("Upload coming soon ");
  };

  return (
    <div className="flex flex-col items-center gap-6">

      <label className="cursor-pointer border border-white/20 rounded-2xl p-10 hover:border-white/50 transition">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />

        <span>Select Image</span>
      </label>

     {image && (
  <>
    <img
      src={image}
      alt="preview"
      className="w-80 rounded-2xl border border-white/10"
    />

    <div className="text-sm text-gray-400">
      <p>Name: {file?.name}</p>
      <p>
        Size: {(file?.size / 1024 / 1024).toFixed(2)} MB
      </p>
      <p>Type: {file?.type}</p>
    </div>

    <button
      onClick={handleUpload}
      className="px-6 py-3 rounded-xl bg-white text-black font-semibold"
    >
      Upload Memory
    </button>
  </>
)}
    </div>
  );
}