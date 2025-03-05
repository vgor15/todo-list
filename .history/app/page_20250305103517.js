import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState();
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-6xl font-bold text-center mb-4">My Todo List</h1>
      <form className="flex flex-col gap-4">
        <input
          className="border-2 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          name=""
          id=""
          placeholder="Add a task..."
          autoComplete="off"
        />
        <input
          className="border-2 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          name=""
          id=""
          placeholder="Add a Description..."
          autoComplete="off"
        />
        <button className="bg-indigo-500 px-4 py-2 rounded-md text-2xl text-white">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default page;
