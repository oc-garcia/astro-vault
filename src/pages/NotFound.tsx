import React from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <section className="bg-slate-700 p-4 text-gray-50 flex flex-col items-center justify-center gap-10">
      <h1 className="font-bold text-9xl">404</h1>
      <h2 className="text-left font-bold text-4xl">Page not found!</h2>
      <div className="flex items-center gap-10">
        <p className="text-xl">Take me back!</p>
        <Link to="/">
          <svg
            className="hover:border-red-600 hover:bg-slate-900 fill-slate-50 w-10 p-2 bg-slate-800 cursor-pointer border-solid border-2 border-blue-700 rounded"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
