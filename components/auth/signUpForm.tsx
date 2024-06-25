"use client";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/schemas/index";
import * as z from "zod";
import FormError from "../formMessage/formError";
import FormSuccess from "../formMessage/formSuccess";
import { signUp } from "@/actions/auth";
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
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof SignUpSchema>) => {
    setError(null);
    setIsPending(true);
    setSuccess(null);
    signUp(data)
      .then((res) => {
        if (res?.error) {
          setError(res.error);
        }
        if (res?.success) {
          setSuccess(res.success);
          router.push("/signin");
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
        className="flex flex-col gap-5"
        {...form}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          label="First Name"
          placeholder="First Name"
          isDisabled={isPending}
          variant="bordered"
          labelPlacement="outside"
          isInvalid={form.formState.errors.firstName ? true : false}
          errorMessage={form.formState.errors.firstName?.message}
          classNames={{
            label: "text-default-400 text-xs font-normal text-gray-600",
            input: "text-default-900",
            inputWrapper: "border border-default-300 rounded-md",
          }}
          {...form.register("firstName")}
        />
        <Input
          type="text"
          label="Last Name"
          placeholder="Last Name"
          isDisabled={isPending}
          variant="bordered"
          labelPlacement="outside"
          isInvalid={form.formState.errors.lastName ? true : false}
          errorMessage={form.formState.errors.lastName?.message}
          classNames={{
            label: "text-default-400 text-xs font-normal text-gray-600",
            input: "text-default-900",
            inputWrapper: "border border-default-300 rounded-md",
          }}
          {...form.register("lastName")}
        />
        <Input
          type="text"
          label="Email"
          placeholder="Name"
          isDisabled={isPending}
          variant="bordered"
          labelPlacement="outside"
          isInvalid={form.formState.errors.email ? true : false}
          errorMessage={form.formState.errors.email?.message}
          classNames={{
            label: "text-default-400 text-xs font-normal text-gray-600",
            input: "text-default-900",
            inputWrapper: "border border-default-300 rounded-md",
          }}
          {...form.register("email")}
        />
        <Controller
          control={form.control}
          name="phoneNumber"
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <PhoneInputCustom
              {...field}
              inputExtraProps={{
                ref,
                required: true,
                autoFocus: true,
              }}
              errorMessage={form.formState.errors.phoneNumber?.message}
            />
          )}
        />
        <Input
          type={isPasswordVisible ? "text" : "password"}
          label="Password"
          placeholder="Email"
          isDisabled={isPending}
          variant="bordered"
          labelPlacement="outside"
          isInvalid={form.formState.errors.password ? true : false}
          errorMessage={form.formState.errors.password?.message}
          classNames={{
            label: "text-default-400 text-xs font-normal text-gray-600",
            input: "text-default-900",
            inputWrapper: "border border-default-300 rounded-md",
          }}
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
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          isDisabled={isPending}
          variant="bordered"
          labelPlacement="outside"
          isInvalid={form.formState.errors.confirmPassword ? true : false}
          errorMessage={form.formState.errors.confirmPassword?.message}
          classNames={{
            label: "text-default-400 text-xs font-normal text-gray-600",
            input: "text-default-900",
            inputWrapper: "border border-default-300 rounded-md",
          }}
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
        <Link className="font-bold" href="/signin">
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
