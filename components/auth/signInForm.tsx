"use client";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/schemas/index";
import * as z from "zod";
import FormError from "../formMessage/formError";
import FormSuccess from "../formMessage/formSuccess";
import { signIn } from "next-auth/react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Toaster, toast } from "sonner";

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
            setError("Credenciales inválidas");
            toast.error("Credenciales inválidas");
          }
          if (res.status === 500) {
            setError("Server error");
          }
        } else {
          setSuccess("Inicio de sesión exitoso");
          toast.success("Inicio de sesión exitoso");
          router.push("/dashboard");
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
        onSubmit={form.handleSubmit(onSubmit)}
      >
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
            inputWrapper: "border border-default-300 rounded-xl",
          }}
          {...form.register("email")}
        />
        <Input
          type={isPasswordVisible ? "text" : "password"}
          label="Contraseña"
          placeholder="Contraseña"
          isDisabled={isPending}
          variant="bordered"
          labelPlacement="outside"
          isInvalid={form.formState.errors.password ? true : false}
          errorMessage={form.formState.errors.password?.message}
          {...form.register("password")}
          classNames={{
            label: "text-default-400 text-xs font-normal text-gray-600",
            input: "text-default-900",
            inputWrapper: "border border-default-300 rounded-xl",
          }}
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
          className="bg-green-500 hover:bg-blue-800 text-white hover:scale-105 transition-all mt-5"
        >
          {isPending ? (
            <ClipLoader color="white" loading={isPending} size={20} />
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
      <div className="mt-10">
        {/* <FormError message={error} />
        <FormSuccess message={success} /> */}
        <Toaster richColors />
      </div>
    </div>
  );
};

export default SignInForm;
