"use client";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/schemas/index";
import * as z from "zod";
import FormError from "../formMessage/formError";
import FormSuccess from "../formMessage/formSuccess";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignInForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof SignInSchema>) => {
    setError(null);
    setSuccess(null);
    setIsPending(true);
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })
      .then((res) => {
        console.log("res", res);
        if (res?.error) {
          if (res.status === 401) {
            setError("Credentials are invalid");
          }
          if (res.status === 500) {
            setError("Server error");
          }
        } else {
          setSuccess("Signed in");
          router.push("/selectStore");
        }
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  const toggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="w-3/5 px-12">
      <form
        className="flex flex-col gap-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          label="Email"
          placeholder="Name"
          isDisabled={isPending}
          variant="bordered"
          isInvalid={form.formState.errors.email ? true : false}
          errorMessage={form.formState.errors.email?.message}
          {...form.register("email")}
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
        <Button
          isDisabled={isPending}
          radius="sm"
          type="submit"
          className="bg-indigo-600 hover:bg-blue-800 text-white hover:scale-105 transition-all mt-5"
        >
          {isPending ? (
            <ClipLoader color="white" loading={isPending} size={20} />
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
      <div className="mt-2">
        <div className="flex gap-2">
          <p>Dont have an account?</p>
          <Link className="font-bold" href="/auth/signup">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <FormError message={error} />
        <FormSuccess message={success} />
      </div>
    </div>
  );
};

export default SignInForm;
