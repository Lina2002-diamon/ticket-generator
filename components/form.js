"use client";

import React, { useState } from "react";

const AttendeeDetails = ({ formData, setFormData, next, back }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="min-h-screen bg-[#0a1a1f] text-white flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-[#11252c] p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-light mb-2">Attendee Details</h2>
        <div className="w-full h-1 bg-teal-500 mb-4" />
        <div className="bg-[#0f1e23] p-6 rounded-xl">
          <p className="mb-2 text-gray-300">Upload Profile Photo</p>
          <label className="block border border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-teal-400">
            <input
              type="file"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file) return;

                handleFileChange(e);

                // Store file URL instead of file object
                const fileURL = URL.createObjectURL(file);
                setFormData({ ...formData, photo: fileURL });

                console.log("Selected file:", file);
              }}
            />
            {file ? (
              <p>{file.name}</p>
            ) : (
              <p className="text-gray-500">Drag & drop or click to upload</p>
            )}
          </label>
        </div>
        <div className="mt-6">
          <label className="block text-gray-300">Enter your name</label>
          <input
            type="text"
            value={formData.name}
            className="w-full bg-[#0f1e23] p-2 rounded-lg border border-gray-700 mt-2"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-300">Enter your email *</label>
          <div className="flex items-center bg-[#0f1e23] p-2 rounded-lg border border-gray-700 mt-2">
            <span className="text-gray-400 mr-2">📧</span>
            <input
              type="email"
              className="bg-transparent w-full outline-none"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="hello@example.com"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-gray-300">Special request?</label>
          <textarea
            className="w-full bg-[#0f1e23] p-2 rounded-lg border border-gray-700 mt-2"
            rows="3"
            value={formData.specialRequest}
            onChange={(e) =>
              setFormData({ ...formData, specialRequest: e.target.value })
            }
          />
        </div>
        <div className="mt-6 flex justify-between">
          <button
            className="border border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-700"
            onClick={() => back()}
          >
            Back
          </button>
          <button
            className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-lg"
            onClick={() => next()}
          >
            Get My Free Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendeeDetails;
