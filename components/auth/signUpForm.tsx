"use client";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/schemas/index";
import * as z from "zod";
import FormError from "../formMessage/formError";
import FormSuccess from "../formMessage/formSuccess";
// import { signUp } from "@/actions/auth";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInputCustom from "../phoneInput";

const SignUpForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof SignUpSchema>) => {
    setError(null);
    setIsPending(true);
    setSuccess(null);
    // signUp(data)
    //   .then((res) => {
    //     setError(res.error as string);
    //     setSuccess(res.success as string);
    //   })
    //   .finally(() => {
    //     setIsPending(false);
    //   });
  };

  const toggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="w-3/5 px-12">
      <form
        className="flex flex-col gap-5"
        {...form}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          label="Name"
          placeholder="Name"
          isDisabled={isPending}
          variant="bordered"
          isInvalid={form.formState.errors.name ? true : false}
          errorMessage={form.formState.errors.name?.message}
          {...form.register("name")}
        />
        <Input
          type="email"
          label="Email"
          placeholder="Email"
          isDisabled={isPending}
          variant="bordered"
          isInvalid={form.formState.errors.email ? true : false}
          errorMessage={form.formState.errors.email?.message}
          {...form.register("email")}
        />
        <PhoneInputCustom
          label="Phone Number"
          placeholder="Phone Number"
          isDisabled={isPending}
          variant="bordered"
        />
        <Input
          type={isPasswordVisible ? "text" : "password"}
          label="Password"
          placeholder="Email"
          isDisabled={isPending}
          variant="bordered"
          isInvalid={form.formState.errors.password ? true : false}
          errorMessage={form.formState.errors.password?.message}
          {...form.register("password")}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isPasswordVisible ? (
                <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <FaEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
        <Input
          type={isPasswordVisible ? "text" : "password"}
          label="Confirm Password"
          placeholder="Confirm Password"
          isDisabled={isPending}
          variant="bordered"
          isInvalid={form.formState.errors.confirmPassword ? true : false}
          errorMessage={form.formState.errors.confirmPassword?.message}
          {...form.register("confirmPassword")}
        />
        <Button
          isDisabled={isPending}
          radius="sm"
          type="submit"
          className="bg-indigo-600 hover:bg-blue-800 text-white hover:scale-105 transition-all mt-5"
        >
          {isPending ? (
            <ClipLoader color="white" loading={isPending} size={20} />
          ) : (
            "Sign Up"
          )}
        </Button>
        <FormError message={error} />
        <FormSuccess message={success} />
      </form>
      <div className="mt-2 flex gap-2">
        <p>Already have an account?</p>
        <Link className="font-bold" href="/auth/signin">
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
