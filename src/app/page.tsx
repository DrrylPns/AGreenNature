"use client";
import { Kaisei_Decol } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [counter, setCounter] = useState(0);

  const Increase = () => {
    setCounter(counter + 1);
  };
  const Decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="container drop-shadow-xl">
      <h1 className="bg-red-100">Testing {counter}</h1>
      <button
        className="bg-indigo-500 hover:bg-red-200 rounded-lg"
        onClick={Increase}
      >
        Increase
      </button>
      <button
        className="bg-indigo-500 hover:bg-red-200 rounded-lg"
        onClick={Decrease}
      >
        Decrease
      </button>
    </div>
  );
}
