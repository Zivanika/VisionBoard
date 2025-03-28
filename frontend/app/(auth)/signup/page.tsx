import { SignupForm } from "@/app/components/auth/SignUpForm";
import { FileSpreadsheet } from "lucide-react";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-1 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
