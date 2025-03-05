"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-6xl font-bold text-center mb-4">My Todo List</h1>
      <form
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        <input
          className="border-2 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          type="text"
          placeholder="Add a Title..."
          autoComplete="off"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border-2 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          type="text"
          placeholder="Add a Description..."
          autoComplete="off"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-indigo-500 px-4 py-2 rounded-md text-2xl text-white">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default page;
