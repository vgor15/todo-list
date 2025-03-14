/*************  ✨ Codeium Command 🌟  *************/
"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTasks, setMainTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    setMainTasks([...mainTasks, { title, description }]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <h1 className="text-5xl font-bold text-white mb-6">My Todo List</h1>
      <form
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-xl w-full max-w-lg"
        onSubmit={submitHandler}
      >
        <input
          className="border px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          type="text"
          placeholder="Task Title..."
          autoComplete="off"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 bg-white resize-none"
          placeholder="Task Description..."
          autoComplete="off"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-indigo-600 px-4 py-2 rounded-md text-xl text-white cursor-pointer hover:bg-indigo-700 transition-all">
          Add Task
        </button>
      </form>
      <div className="mt-8 w-full max-w-lg">
        {mainTasks.length > 0 ? (
          <div className="grid gap-4">
            {mainTasks.map((task, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col"
              >
                <h3 className="font-semibold text-lg text-gray-900">
                  {task.title}
                </h3>
                <p className="text-gray-600 mt-1">{task.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-white mt-4">No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default Page;

/******  54e90c47-be83-42cf-a7d6-bb40627848ad  *******/