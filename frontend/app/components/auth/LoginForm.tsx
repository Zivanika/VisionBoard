"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";
import BtnLoader from "../Loader";
import { loginUser } from "@/app/api/auth";
import { toast } from "react-toastify";
import { useState } from "react";
import { useAuth } from "@/app/context/authContext";
import { Label } from "@/components/ui/label";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setLoading(true);
    const { email, password } = data;

    try {
      const response = await loginUser(email, password);
      if (response.success && response.data) {
        const { token, userData, message } = response.data;
        toast.success(message || "Welcome back");
        login(token, userData);
      } else {
        toast.error(response.data.message || "Login failed. Try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex w-full items-center justify-center  px-4">
      <div className="w-full max-w-md rounded-3xl bg-white/10 p-8 backdrop-blur-md shadow-xl border border-white/20">
        <form
          className="flex flex-col gap-6 text-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Title */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-3xl font-bold tracking-wide">
              Welcome to{" "}
              <RoughNotation
                type="circle"
                animate
                show
                color="#facc15"
                animationDuration={800}
              >
                <span className="font-merienda text-yellow-300">
                  VisionBoard
                </span>
              </RoughNotation>
            </h1>
            <p className="text-sm text-white/80">
              Enter your details below to log in
            </p>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="placeholder:text-amber-100"
                {...register("email")}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="placeholder:text-amber-100"
                {...register("password")}
              />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full rounded-lg bg-yellow-400 px-4 py-3 text-lg font-semibold text-gray-900 transition duration-300 hover:bg-yellow-300 hover:shadow-lg"
          >
            Sign In
          </Button>

          {/* Signup Link */}
          <div className="text-center text-sm text-white/80">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-yellow-400">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
