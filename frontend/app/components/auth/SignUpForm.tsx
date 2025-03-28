"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";
import { useState } from "react";
import { registerUser } from "@/app/api/auth";
import { toast } from "react-toastify";
import BtnLoader from "../Loader";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";

const signupSchema = z
  .object({
    userName: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    setLoading(true);
    const { userName, email, password } = data;

    try {
      const response = await registerUser(userName, email, password);
      if (response.success && response.data) {
        toast.success(response.data?.message || "Signup successful!");
        router.push("signin");
      } else {
        toast.error(response.data.message || "Signup failed. Try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong during signup. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white/10 p-8 backdrop-blur-md shadow-xl border border-white/20">
        <form
          className="flex flex-col gap-6 text-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Title */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-3xl font-bold tracking-wide">
              Create your{" "}
              <RoughNotation
                type="underline"
                animate
                show
                color="#facc15"
                strokeWidth={3}
                animationDuration={800}
              >
                <span className="font-merienda text-yellow-300">
                  VisionBoard
                </span>
              </RoughNotation>{" "}
              Account
            </h1>
            <p className="text-sm text-white/80">
              Enter your details below to get started
            </p>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <div className="grid gap-1">
              <Label htmlFor="userName">Username</Label>
              <Input
                id="userName"
                type="text"
                placeholder="john_104"
                className="placeholder:text-amber-100"
                {...register("userName")}
              />
              {errors.userName && (
                <p className="error">{errors.userName.message}</p>
              )}
            </div>

            <div className="grid gap-1">
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

            <div className="grid gap-1">
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

            <div className="grid gap-1">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Enter same password again"
                className="placeholder:text-amber-100"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full rounded-lg bg-yellow-400 px-4 py-3 text-lg font-semibold text-gray-900 transition duration-300 hover:bg-yellow-300 hover:shadow-lg"
          >
            Sign Up
          </Button>

          {/* Sign In Link */}
          <div className="text-center text-sm text-white/80">
            Already have an account? <Link href="/signin" className="text-yellow-400">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
