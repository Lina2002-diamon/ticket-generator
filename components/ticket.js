"use client";

import React, { useState } from "react";
import image from "@/assets/bar-code.svg";
import Image from "next/image";

const TicketConfirmation = ({ back }) => {
  const data = JSON.parse(localStorage.getItem("ticketData"));

  console.log(data);

  return (
    <div className="min-h-screen bg-[#0a1a1f] text-white flex justify-center items-center p-6">
      <div className="w-full max-w-xl bg-[#11252c] p-6 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-semibold">Your Ticket is Booked!</h2>
        <p className="text-gray-400 mt-2">
          Check your email for a copy or you can{" "}
          <span className="text-teal-400 cursor-pointer">download</span>
        </p>

        <div className="mt-6 bg-[#0f1e23] p-6 rounded-xl relative w-full max-w-md mx-auto border border-gray-600">
          <h3 className="text-lg font-semibold text-teal-400">
            Techember Fest '25
          </h3>
          <p className="text-gray-400">📍 04 Runners road, Ikoyi, Lagos</p>
          <p className="text-gray-400">
            📅 {new Date().toDateString()} | {new Date().toLocaleTimeString()}
          </p>

          <div className="mt-4 flex justify-center">
            <img
              src={data.photo}
              alt="User"
              width={80}
              height={80}
              className="rounded-full h-32 w-32"
            />
          </div>

          <div className="mt-4 text-left">
            <p className="text-gray-300">
              <strong>Enter your name:</strong> {data.name}
            </p>
            <p className="text-gray-300">
              <strong>Enter your email:</strong> {data.email}
            </p>
            <p className="text-gray-300">
              <strong>Ticket Type:</strong> {data.type}
            </p>
            <p className="text-gray-300">
              <strong>Ticket for:</strong> {data.quantitty}
            </p>
            <p className="text-gray-400">
              <strong>Special request?</strong> {data.specialRequest}
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="">
              <Image
                src={image}
                alt="Barcode"
                width={200}
                height={50}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 grid lg:flex lg:justify-between gap-y-3 lg:gap-x-10">
          <button
            className="border border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-700 w-full"
            onClick={back}
          >
            Book Another Ticket
          </button>
          <button className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-lg w-full">
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketConfirmation;
