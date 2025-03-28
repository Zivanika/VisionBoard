import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-purple-600 via-violet-500 to-indigo-700">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl text-center border border-white/20 max-w-lg">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4">
          Welcome to{" "}
          <span className="font-merienda text-extrabold text-yellow-400">
            VisionBoard
          </span>
        </h1>
        <p className="text-lg text-white/90 mb-6">
          Effortlessly sync and manage your data with Google Sheets integration.
        </p>
        <Button
          asChild
          className="relative px-8 py-3 text-lg font-semibold rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 hover:shadow-lg transition duration-300"
        >
          <Link href="/signin">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
