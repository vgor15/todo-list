/*************  ✨ Codeium Command 🌟  *************/
"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTasks, setMainTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTasks([...mainTasks, { title, description }]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-6xl font-bold text-center mb-4">My Todo List</h1>
      <form
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg ring-1 ring-gray-200"
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg"
        onSubmit={submitHandler}
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
        <button className="bg-indigo-500 px-4 py-2 rounded-md text-2xl text-white cursor-pointer hover:bg-indigo-600">
        <button className="bg-indigo-500 px-4  py-2 rounded-md text-2xl text-white cursor-pointer">
          Add Task
        </button>
      </form>
      <hr className="my-4 border-gray-200" />
      <hr />
      <div className="flex flex-col gap-4">
        {mainTasks.length > 0
          ? mainTasks.map((task, index) => (
              <div
                key={index}
                className="flex justify-between items-center px-4 py-2 border-t-2 border-gray-200"
              >
                <h3 className="font-bold">{task.title}</h3>
                <p className="text-sm text-gray-600">{task.description}</p>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            ))
          : (
              <p className="text-center text-gray-600">
                No tasks available
              </p>
            )}
          : "No tasks available"}
      </div>
    </div>
  );
};

export default page;

/******  de424a1d-b508-425b-8a87-775cc397b3bf  *******/