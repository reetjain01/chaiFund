"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchuser, updateProfile } from "@/actions/useractions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

const DashboardPage = () => {
  const { data: session, update } = useSession();
  const router = useRouter();
  const [form, setform] = useState({});

  useEffect(() => {
    getData();
    if (!session) {
      router.push("/login");
    }
  });

  const getData = async () => {
    let u = await fetchuser(session.user?.name);
    setform(u);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    let a = await updateProfile(e, session.user.name);
    toast('Profile Updated', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className=" container mx-auto py-5">
        <h1 className=" text-center my-5 text-2xl font-bold">
          Welcome to Your Dashboard
        </h1>

        <form  className=" max-w-2xl mx-auto" action={handleSubmit}>
          <div className="my-2">
            <label
              htmlFor="name"
              className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              value={form.name ? form.name : ""}
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              className=" block text-gray-900 border border-gray-300 w-full p-2 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="email"
              className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              value={form.email ? form.email : ""}
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className=" block text-gray-900 border border-gray-300 w-full p-2 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="username"
              className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              value={form.username ? form.username : ""}
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              className=" block text-gray-900 border border-gray-300 w-full p-2 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="profilepic"
              className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Profile Picture
            </label>
            <input
              value={form.profilepic ? form.profilepic : ""}
              type="text"
              name="profilepic"
              id="profilepic"
              onChange={handleChange}
              className=" block text-gray-900 border border-gray-300 w-full p-2 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="coverpic"
              className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cover Picture
            </label>
            <input
              value={form.coverpic ? form.coverpic : ""}
              type="text"
              name="coverpic"
              id="coverpic"
              onChange={handleChange}
              className=" block text-gray-900 border border-gray-300 w-full p-2 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="razorpayid"
              className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Razorpay ID
            </label>
            <input
              value={form.razorpayid ? form.razorpayid : ""}
              type="text"
              name="razorpayid"
              id="razorpayid"
              onChange={handleChange}
              className=" block text-gray-900 border border-gray-300 w-full p-2 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="razorpaysecret"
              className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Razorpay Secret
            </label>
            <input
              value={form.razorpaysecret ? form.razorpaysecret : ""}
              type="text"
              name="razorpaysecret"
              id="razorpaysecret"
              onChange={handleChange}
              className=" block text-gray-900 border border-gray-300 w-full p-2 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="my-6">
            <button className=" block w-full p-3 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DashboardPage;
