"use client";

import React from "react";

const TicketSelection = ({ next, formData, setFormData }) => {
  return (
    <div className="min-h-screen bg-[#0a1a1f] text-white flex justify-center items-center p-6">
      <div className="w-full max-w-xl bg-[#11252c] p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-light mb-2">Ticket Selection</h2>
        <div className="w-full h-1 bg-teal-500 mb-4" />
        <div className="bg-[#0f1e23] text-center p-6 rounded-xl">
          <h1 className="text-2xl font-bold text-cyan-400">
            Techember Fest '25
          </h1>
          <p className="text-gray-400 mt-2">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <p className="text-gray-500 mt-2 flex justify-center items-center">
            📍 [Event Location] ||📅 {new Date().toDateString()} |{" "}
            {new Date().toLocaleTimeString()}
          </p>
        </div>
        <div className="mt-6">
          <p className="mb-2 text-gray-300">Select Ticket Type:</p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { type: "Free", price: "Free", access: "REGULAR ACCESS" },
              { type: "VIP", price: "$150", access: "VIP ACCESS" },
              { type: "VVIP", price: "$150", access: "VVIP ACCESS" },
            ].map((ticket, index) => (
              <button
                key={index}
                className="bg-[#0f1e23] p-4 text-center cursor-pointer hover:ring-2 ring-teal-400 rounded-lg"
                onClick={(e) => {
                  setFormData({ target: { name: "type", value: ticket.type } });
                  console.log(e.target.value);
                }}
              >
                <p className="text-lg font-semibold">{ticket.price}</p>
                <p className="text-sm text-gray-400">{ticket.access}</p>
                <p className="text-xs text-gray-500">20/52</p>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <p className="mb-2 text-gray-300">Number of Tickets</p>
          <select
            className="w-full bg-[#0f1e23] p-2 rounded-lg border border-gray-700"
            value={formData.quantity}
            onChange={(e) =>
              setFormData({
                target: { name: "quantity", value: +e.target.value },
              })
            }
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-6 flex justify-between">
          <button className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-lg">
            Cancel
          </button>
          <button
            className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-lg"
            onClick={() => next()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
