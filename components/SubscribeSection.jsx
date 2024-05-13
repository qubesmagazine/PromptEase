"use client"

import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setEmail("");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      setMessage("An error occurred while subscribing.");
    }
  };

  return (
    <section className="subscribe-section mt-10">
      <div className="gradient"></div>
      <div className="app glassmorphism">
        <h2 className="head_text orange_gradient">
          Subscribe to Our Newsletter
        </h2>
        <p className="desc">
          Stay updated with our latest news, articles, and promotions.
        </p>
        <div className="flex justify-center items-center mt-8">
          <input
            type="email"
            placeholder="Enter your email address"
            className="search_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="black_btn ml-2" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
        {message && <p className="text-gray-600 mt-2">{message}</p>}
      </div>
    </section>
  );
};

export default SubscribeSection;
