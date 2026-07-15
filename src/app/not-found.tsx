import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-4xl font-black font-sans text-black uppercase tracking-tight">404 - Page Not Found</h1>
      <p className="text-sm text-neutral-600 mt-2 max-w-md font-semibold">
        The page you are looking for does not exist or has been moved to a different location.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center bg-cyan-400 hover:bg-cyan-300 text-black font-sans text-xs font-bold uppercase tracking-wider py-3 px-6 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
      >
        Go Back Home
      </Link>
    </div>
  );
}
