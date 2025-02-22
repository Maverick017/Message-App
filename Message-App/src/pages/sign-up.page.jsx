import {
  IconMail,
  IconShieldCheck,
  IconDeviceDesktop,
  IconRocket,
  IconMessages,
  IconLock,
} from "@tabler/icons-react";
import { Heading } from "../components/heading";
import { Text } from "../components/text";
import { TextInput } from "../components/input";
import { PasswordInput } from "../components/password";
import { Button } from "../components/buton";
import { Anchor } from "../components/anchor";
import { useForm } from "react-hook-form";

const features = [
  {
    Icon: IconShieldCheck,
    title: "Enterprise-grade security",
    description: "Your data is protected with end-to-end encryption",
  },
  {
    Icon: IconDeviceDesktop,
    title: "Cross-platform support",
    description: "Work seamlessly across all your devices",
  },
  {
    Icon: IconRocket,
    title: "Lightning fast experience",
    description: "Real-time messaging with instant delivery",
  },
];

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signUpSchema = z.object({
  firstName: z.string().min(2, "Name can not be less than 2 characters"),
  lastName: z.string().min(2, "Name can not be less than 2 characters"),
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

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Marketing content */}
      <div className="w-1/2 bg-indigo-50 p-12 flex flex-col justify-center">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
              <IconMessages size={24} className="text-white" />
            </div>
            <Heading type={4} className="text-indigo-600">
              ChatApp
            </Heading>
          </div>
          <Heading type={2} className="mb-6">
            Connect like never before
          </Heading>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.Icon size={20} className="text-indigo-600" />
                </div>
                <div>
                  <Heading type={6} className="font-semibold mb-1">
                    {feature.title}
                  </Heading>
                  <Text className="text-gray-600">{feature.description}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Sign up form */}
      <div className="w-1/2 bg-white flex items-center justify-center p-12">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <Heading type={3} className="text-3xl font-bold text-gray-900">
              Create your account
            </Heading>
            <Text className="mt-2 text-sm  text-gray-700">
              Join thousands of teams already using ChatApp
            </Text>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <TextInput
                label="First name"
                placeholder="John"
                error={errors.firstName?.message}
                {...register("firstName")}
              />

              <TextInput
                label="Last Name"
                placeholder="Doe"
                error={errors.lastName?.message}
                {...register("lastName")}
              />
            </div>

            <TextInput
              type="email"
              label="Email address"
              placeholder="john.doe@example.com"
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

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the <Anchor href="#">Terms</Anchor> and{" "}
                <Anchor href="#">Privacy Policy</Anchor>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create account
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?
            <Anchor href="/sign-in">Sign in</Anchor>
          </p>
        </div>
      </div>
    </div>
  );
}
