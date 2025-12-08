import React from "react";

export default function Newsletter() {
  return (
    <div className="w-full py-20 flex flex-col items-center">
      <h2 className="text-4xl font-semibold mb-4">Newsletter</h2>

      <p className="text-gray-600 text-center max-w-xl mb-10">
        Tristique risus nec feugiat sit amet, consectetur adipiscing elit.
      </p>

      <div className="flex items-center gap-5">
        {/* Input */}
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Your email address"
            className="outline-none border-b border-black w-72 pb-1 text-gray-700"
          />
        </div>

        {/* Submit Button */}
        <button className="flex flex-col items-center cursor-pointer">
          <span className="text-gray-700">Submit</span>
          <span className="w-full border-b border-black mt-1"></span>
        </button>
      </div>
    </div>
  );
}
