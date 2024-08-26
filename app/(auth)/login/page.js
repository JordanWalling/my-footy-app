"use client";
import { useState } from "react";
function Login() {
  return (
    <form>
      <div className="space-y-12 mt-5 p-2">
        <div className="border border-cyan-600/12 px-2 py-1 rounded">
          <h1 className="text-xl font-bold mb-2">Please Enter Your Details</h1>
          <div>
            <div className="grid grid-cols-1 mb-2">
              <label className="text-base font-medium">Email</label>
              <input
                type="email"
                placeholder="johnsmith@gmail.com"
                className="placeholder:text-sm"
              />
            </div>
            <div className="grid grid-cols-1 mb-2">
              <label className="text-base font-medium">Password</label>
              <input
                type="password"
                placeholder="*********"
                className="placeholder:text-sm"
              />
            </div>
            <div className="flex justify-center mb-2">
              <button
                type="submit"
                className="ring-1 ring-cyan-600 rounded px-2 py-1 text-cyan-600 text-sm font-medium hover:bg-cyan-600 hover:text-white"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
