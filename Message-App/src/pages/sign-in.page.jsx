import { IconMail, IconMessages, IconLock } from "@tabler/icons-react";
import { z } from "zod";
import { Heading } from "../components/heading";
import { Text } from "../components/text";
import { TextInput } from "../components/input";
import { PasswordInput } from "../components/password";
import { Button } from "../components/buton";
import { Anchor } from "../components/anchor";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const signInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be 8 characters long")
    .max(20, "Password must not exceed 20 characters")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
});

import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-900">
              Something went wrong
            </h2>
            <p className="mt-2 text-gray-600">Please try again later</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl mx-auto flex items-center justify-center">
            <IconMessages size={32} className="text-white" />
          </div>
          <Heading type={3} className="mt-6">
            Welcome back
          </Heading>
          <Text className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </Text>
        </div>

        {/* Sign In Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <TextInput
              type="email"
              label="Email address"
              placeholder="Enter your email"
              icon={<IconMail size={20} className="text-gray-400" />}
              error={errors.email?.message}
              {...register("email")}
            />

            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              icon={<IconLock size={20} className="text-gray-400" />}
              error={errors.password?.message}
              {...register("password")}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>

            <Anchor href="#">Forgot password?</Anchor>
          </div>

          <Button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </Button>
        </form>

        {/* Sign up link */}
        <div className="text-center text-sm">
          <Text className="text-gray-600">
            Don&apos;t have an account? <Anchor href="/sign-up">Sign up</Anchor>
          </Text>
        </div>
      </div>
    </div>
  );
}
