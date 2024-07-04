"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import { fetchuser, initiate, fetchpayments } from "@/actions/useractions";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from "react-toastify";
import {useRouter} from 'next/navigation'


const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({name:"", message:"", amount:""});
  const [currentUser, setcurrentUser] = useState({});
  const [payments, setPayments] = useState([]);
  // const { data: session } = useSession();
  const SearchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if(SearchParams.get("paymentdone") == "true"){
    toast('Thanks for your Donation :)', {
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
  }
  // router.push(`/${username}`)
},);

  const handleChange = (e) => {
    setPaymentform({
      ...paymentform,
      [e.target.name]: e.target.value,
    });
  };

  const getData = async () => {
    let u = await fetchuser(username);
    setcurrentUser(u);
    let dbpayments = await fetchpayments(username);
    setPayments(dbpayments);
  };

  const pay = async (amount) => {
    // get the order id
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;
    let options = {
      key: currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "ChaiFund", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Reet Jain", //your customer's name
        email: "jreet121@gmail.com",
        contact: "9999444422", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    let rzp1 = new Razorpay(options);
    rzp1.open();
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
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full relative">
        <img
          className=" object-cover w-full h-[340px]"
          src={currentUser.coverpic}
          alt=""
        />
        <div className=" absolute -bottom-14 right-[47%] border-2 border-white rounded-full">
          <img
            width={100}
            height={100}
            src={currentUser.profilepic}
            alt=""
            className=" rounded-full"
          />
        </div>
      </div>
      <div className="info flex flex-col justify-center items-center gap-2 my-16">
        <div className=" font-bold text-lg">@{username}</div>
        <div className=" text-slate-300">Let help {username} get a Chai</div>
        <div className="text-slate-300">{payments.length} payments . {payments.reduce((a,b) => a+b.amount, 0)} raised </div>
        <div className="payment flex gap-3 w-[80%] mt-10">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            {/* Show list of all the supporters as a Leaderboard */}
            <h2 className=" text-xl font-bold my-5">Top 5 Supporters</h2>
            <ul className=" mx-4 text-lg">
              {payments.length == 0 && <li>No Paymenys Yet</li>}
              {payments.map((p, i) => {
                return (
                  <li className=" my-3 flex gap-2 items-center">
                    <img src="/avatar.png" width={25} alt="" />
                    <span>
                      {p.name} donated ₹
                      <span className="font-bold">{p.amount} </span>
                      with a message `{p.message}`
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10">
            <h2 className="text-xl font-bold my-5">Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              {/* input for name and message */}
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="w-full bg-slate-800 p-2 rounded-lg"
                onChange={handleChange}
                value={paymentform.name}
              />
              <input
                type="text"
                name="message"
                placeholder="Enter Message"
                className="w-full bg-slate-800 p-2 rounded-lg"
                onChange={handleChange}
                value={paymentform.message}
              />
              <input
                type="text"
                name="amount"
                placeholder="Enter amount"
                className="w-full bg-slate-800 p-2 rounded-lg"
                onChange={handleChange}
                value={paymentform.amount}
              />
              <button
                onClick={() => {
                  pay(Number.parseInt(paymentform.amount) * 100);
                }}
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-200"
                disabled={
                  paymentform.name?.length < 3 ||
                  paymentform.message?.length < 4 || paymentform.amount?.length < 1
                }
              >
                Pay
              </button>
            </div>
            {/* or choose from these amounts */}
            <div className="flex gap-2 mt-5">
              <button
                className="bg-slate-800 rounded-lg p-2"
                onClick={() => {
                  pay(1000);
                }}
              >
                Pay ₹10
              </button>
              <button
                className="bg-slate-800 rounded-lg p-2"
                onClick={() => {
                  pay(2000);
                }}
              >
                Pay ₹20
              </button>
              <button
                className="bg-slate-800 rounded-lg p-2"
                onClick={() => {
                  pay(3000);
                }}
              >
                Pay ₹30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
