"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Check, Eye, EyeOff, Mountain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [agreed, setAgreed] = useState(false);

    return (
        <div className="min-h-screen w-full flex bg-stone-50 lg:p-4 md:p-4 pt-24 mt-10">
            {/* Visual Side (Left) - Hidden on mobile, visible on lg */}
            <div className="hidden lg:flex w-1/2 relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop"
                    alt="Mountain landscape"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-12 left-12 text-white z-10 max-w-lg">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl w-fit mb-6">
                        <Mountain className="w-8 h-8 text-white" />
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-4 leading-tight">Begin your journey.</h2>
                    <p className="text-lg text-white/80 leading-relaxed">
                        "The best view comes after the hardest climb."
                        <br />— Join 30°North today.
                    </p>
                </div>
            </div>

            {/* Form Side (Right/Center) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
                {/* Background blobs for premium feel */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

                <div className="w-full max-w-md space-y-8">

                    <div className="text-center lg:text-left space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Create an account</h1>
                        <p className="text-zinc-500">
                            Enter your details to create your personalized trekking account.
                        </p>
                    </div>

                    <form className="space-y-6 mt-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-4">
                            {/* Email Input */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email address</label>
                                <div className="relative">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="saurabh@example.com"
                                        required
                                        className="block w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all bg-white/50 backdrop-blur-sm shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <label htmlFor="password" className="block text-sm font-medium text-zinc-700">Password</label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        className="block w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all bg-white/50 backdrop-blur-sm shadow-sm pr-10"
                                        placeholder="Create a password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Privacy Policy Checkbox */}
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <button
                                        type="button"
                                        role="checkbox"
                                        aria-checked={agreed}
                                        onClick={() => setAgreed(!agreed)}
                                        className={cn(
                                            "h-5 w-5 rounded-md border flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:ring-offset-2",
                                            agreed
                                                ? "bg-orange-600 border-orange-600 text-white"
                                                : "bg-white border-zinc-300 hover:border-orange-500"
                                        )}
                                    >
                                        {agreed && <Check className="w-3.5 h-3.5 stroke-[3px]" />}
                                    </button>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label onClick={() => setAgreed(!agreed)} className="font-medium text-zinc-700 cursor-pointer select-none">
                                        I agree to the <a href="#" className="text-orange-600 hover:text-orange-500">Terms of Service</a> and <a href="#" className="text-orange-600 hover:text-orange-500">Privacy Policy</a>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={!agreed}
                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-700 hover:shadow-orange-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                        >
                            Create account
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-zinc-200"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-stone-50 px-2 text-sm text-zinc-500">Or sign up with</span>
                        </div>
                    </div>

                    {/* Social Logins */}
                    <div className="grid grid-cols-2 gap-3">
                        {/* Google */}
                        <button className="flex items-center justify-center px-4 py-3 border border-zinc-200 rounded-xl bg-white hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm group">
                            <svg className="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                                    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.059 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                                    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                                    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.799 L -6.744 42.389 C -8.804 40.469 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                                </g>
                            </svg>
                            <span className="ml-2 text-sm font-medium text-zinc-600 group-hover:text-zinc-900">Google</span>
                        </button>

                        {/* Apple */}
                        <button className="flex items-center justify-center px-4 py-3 border border-zinc-200 rounded-xl bg-white hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm group">
                            <svg className="h-5 w-5 text-black opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.258 10.152c-2.076-.14-3.606 1.332-4.336 1.332-.731 0-2.083-1.226-3.877-1.189-2.007.038-4.008 1.481-5.118 3.593-2.181 4.167-.404 9.949 1.638 13.256 1.056 1.709 2.193 3.328 3.731 3.298 1.439-.03 2.039-.982 3.824-.982 1.782 0 2.298.982 3.856.953 1.605-.03 2.656-1.74 3.702-3.328 1.157-1.769 1.616-2.502 1.644-2.585-.036-.017-3.139-1.309-3.187-5.152-.047-3.21 2.399-4.751 2.508-4.819-.047-.11-1.528-5.323-5.337-5.376h-.048zm-2.094-3.527c.915-1.183 1.543-2.484 1.363-3.957-1.294.062-2.903.956-3.839 2.079-.838 1.002-1.564 2.404-1.385 3.864 1.455.12 2.924-.811 3.861-1.986z" transform="translate(-1 -2)" /></svg>
                            <span className="ml-2 text-sm font-medium text-zinc-600 group-hover:text-zinc-900">Apple</span>
                        </button>
                    </div>

                    <p className="text-center text-sm text-zinc-500 mt-8">
                        Already have an account?{" "}
                        <Link href="/login" className="font-semibold text-orange-600 hover:text-orange-500 transition-colors">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
