import React from "react";

const page = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-4 mb-2">My Todo List</h1>
      <form>
        <input
          className="border-2 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-amber-500"
          type="text"
          name=""
          id=""
          placeholder="Add a task..."
        />
        <input
          className="border-2 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-amber-500"
          type="text"
          name=""
          id=""
          placeholder="Add a Description..."
        />
        <button></button>
      </form>
    </>
  );
};

export default page;
