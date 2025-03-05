import React from "react";

const page = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-amber-500 to-amber-300">
      <h1 className="text-6xl font-bold text-center mb-4">My Todo List</h1>
      <form className="flex flex-col gap-4">
        <input
          className="border-2 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-amber-500"
          type="text"
          name=""
          id=""
          placeholder="Add a task..."
          autoComplete="off"
        />
        <input
          className="border-2 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-amber-500"
          type="text"
          name=""
          id=""
          placeholder="Add a Description..."
          autoComplete="off"
        />
        <button className="bg-amber-500 px-4 py-2 rounded-md text-2xl text-white">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default page;
