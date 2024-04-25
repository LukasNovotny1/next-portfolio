import React from 'react'

export default function Hero() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-5xl font-semibold max-w-2xl text-center">
        This is my portfolio! Checkout my new projects
      </h1>
      <p className="text-xl mt-4 max-w-sm text-center">
        I create modern websites using Figma. Send me a message!
      </p>
      <div className="flex mt-8 gap-4 justify-center items-center">
        <button className="bg-black text-white px-6 py-3 rounded-md">
          Contact me
        </button>
        <button className="text-black px-2 py-2 rounded-md">My projects</button>
      </div>
    </div>
  )
}
