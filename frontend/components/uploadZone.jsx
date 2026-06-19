"use client";

import { useState } from "react";

export default function UploadZone() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));
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
        <img
          src={image}
          alt="preview"
          className="w-80 rounded-2xl border border-white/10"
        />
      )}
    </div>
  );
}