"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AttendeeDetails from "@/components/form";
import TicketSelection from "@/components/ticket-selection";
import TicketConfirmation from "@/components/ticket";

function App() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get step from URL or default to 1
  const [step, setStep] = useState(Number(searchParams.get("step")) || 1);

  const [ticketData, setTicketData] = useState({
    name: "",
    photo: "",
    email: "",
    type: "VIP",
    quantity: 1,
    specialRequest: "",
  });

  useEffect(() => {
    // Sync step state with URL
    router.push(`?step=${step}`, { scroll: false });
  }, [step]);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("ticketData"));
    if (savedData) setTicketData(savedData);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("ticketData", JSON.stringify(ticketData));
  }, [ticketData]);

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        { method: "POST", body: formData }
      );
      const data = await response.json();
      setTicketData((prev) => ({ ...prev, avatar: data.secure_url }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, avatar: "Image upload failed" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!ticketData.name.trim()) newErrors.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(ticketData.email))
      newErrors.email = "Invalid email";
    if (!ticketData.avatar) newErrors.avatar = "Avatar is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) setSubmitted(true);

    alert(submitted);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {step === 1 && (
        <TicketSelection
          formData={ticketData}
          setFormData={handleChange}
          next={handleNext}
        />
      )}

      {step === 2 && (
        <AttendeeDetails
          formData={ticketData}
          setFormData={setTicketData}
          errors={errors}
          handleImageUpload={handleImageUpload}
          handleSubmit={handleSubmit}
          back={handleBack}
          next={handleNext}
        />
      )}

      {step === 3 && <TicketConfirmation data={ticketData} back={handleBack} />}
    </main>
  );
}

export default App;
