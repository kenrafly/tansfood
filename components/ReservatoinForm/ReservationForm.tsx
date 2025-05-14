"use client";

import { createReservation } from "@/lib/actions/reservation.action";
import Link from "next/link";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Reservation {
  id: string;
  username: string;
  name: string;
  email: string;
  date: string;
  time: string;
  numberOfPeople: number;
}

const ReservationForm = () => {
  const [formData, setFormData] = useState<Reservation>({
    id: uuidv4(), // auto-generate ID
    username: "",
    name: "",
    email: "",
    date: "",
    time: "",
    numberOfPeople: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "numberOfPeople" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createReservation(formData);
      alert("Reservation submitted!");
      setFormData({
        id: uuidv4(),
        username: "",
        name: "",
        email: "",
        date: "",
        time: "",
        numberOfPeople: 1,
      });
    } catch (err) {
      console.error("Failed to submit:", err);
      alert("Failed to submit reservation.");
    }
  };

  return (
    <div
      id="reservation"
      className="min-h-screen bg-[#3a6ecf] flex items-center justify-center px-4 py-12"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-[#fad345] p-8 rounded-2xl shadow-md max-w-lg w-full space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-black">
          Make a Reservation
        </h2>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a6ecf]"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a6ecf]"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a6ecf]"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1 space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a6ecf]"
            />
          </div>

          <div className="flex-1 space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a6ecf]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Number of People
          </label>
          <input
            type="number"
            name="numberOfPeople"
            min={1}
            value={formData.numberOfPeople}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a6ecf]"
          />
        </div>
        <button className="relative inline-block text-lg group w-full">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black hover:scale-110 w-full">
            <span className=" absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="w-full absolute left-0 h-48  transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-yellow-300 group-hover:-rotate-180 ease"></span>
            <span className="relative">Reserve Now</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
