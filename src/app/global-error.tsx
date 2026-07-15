"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen bg-white text-black font-sans p-6">
        <div className="max-w-md w-full text-center space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight">Something went wrong</h1>
          <p className="text-neutral-600">
            An unexpected error occurred. Please try reloading the page or contact support if the issue persists.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-black text-white font-medium hover:bg-neutral-800 transition-colors cursor-pointer border-2 border-black"
            >
              Try again
            </button>
            <a
              href="/"
              className="px-6 py-3 bg-white text-black font-medium hover:bg-neutral-100 transition-colors border-2 border-black"
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
