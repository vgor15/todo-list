"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
// import "./styles.css"; // Import the CSS file for animations

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

  const deleteTaskHandler = (index) => {
    const newTasks = mainTasks.filter((_, i) => i !== index);
    setMainTasks(newTasks);
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 animate-bg-gradient"></div>

      <h1 className="text-5xl font-bold text-white mb-6 relative z-10">
        My Todo List
      </h1>
      <motion.form
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-xl w-full max-w-lg relative z-10"
        onSubmit={submitHandler}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
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
        <motion.button
          className="bg-indigo-600 px-4 py-2 rounded-md text-xl text-white cursor-pointer hover:bg-indigo-700 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Add Task
        </motion.button>
      </motion.form>
      <div className="mt-8 w-full max-w-lg relative z-10">
        {mainTasks.length > 0 ? (
          <div className="grid gap-4">
            {mainTasks.map((task, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-lg text-gray-900">
                  {task.title}
                </h3>
                <p className="text-gray-600 mt-1">{task.description}</p>
                <motion.button
                  className="mt-4 bg-red-500 px-4 py-2 rounded-md text-xl text-white cursor-pointer hover:bg-red-700 transition-all"
                  onClick={() => deleteTaskHandler(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Delete Task
                </motion.button>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.p
            className="text-center text-white mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            No tasks available
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default Page;
