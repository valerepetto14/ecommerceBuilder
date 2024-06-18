"use client";
import { Input, Textarea } from "@nextui-org/react";
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

const CreateStoreForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="w-full relative">
      <form
        className="w-full flex gap-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-2/3 gap-4">
          <Input
            type="text"
            label="Nombre"
            placeholder="Nombre de la tienda"
            isDisabled={isPending}
            variant="bordered"
            isInvalid={form.formState.errors.email ? true : false}
            errorMessage={form.formState.errors.email?.message}
            {...form.register("email")}
          />
          <Textarea
            type="text"
            label="Descripcion"
            placeholder="Descripcion de la tienda"
            isDisabled={isPending}
            variant="bordered"
            isInvalid={form.formState.errors.email ? true : false}
            errorMessage={form.formState.errors.email?.message}
            {...form.register("email")}
          />
          <Input
            type="text"
            label="Nombre"
            placeholder="Nombre de la tienda"
            isDisabled={isPending}
            variant="bordered"
            isInvalid={form.formState.errors.email ? true : false}
            errorMessage={form.formState.errors.email?.message}
            {...form.register("email")}
          />
          <Input
            type="text"
            label="Nombre"
            placeholder="Nombre de la tienda"
            isDisabled={isPending}
            variant="bordered"
            isInvalid={form.formState.errors.email ? true : false}
            errorMessage={form.formState.errors.email?.message}
            {...form.register("email")}
          />
          <Input
            type="text"
            label="Nombre"
            placeholder="Nombre de la tienda"
            isDisabled={isPending}
            variant="bordered"
            isInvalid={form.formState.errors.email ? true : false}
            errorMessage={form.formState.errors.email?.message}
            {...form.register("email")}
          />
        </div>
        <div className="relative w-1/3 flex flex-col items-center">
          <ImageUploader />
        </div>
      </form>
    </div>
  );
};

export default CreateStoreForm;

const ImageUploader = () => {
  const [file, setFile] = useState(null as File | null);
  const [imageSrc, setImageSrc] = useState("");
  const [isEventListenerAdded, setIsEventListenerAdded] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImageSrc("");
    }
  };

  return (
    <section className="container w-full mx-auto items-center">
      <div className="px-4 ">
        <div
          id="image-preview"
          className="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer"
        >
          <input
            id="upload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
          <label htmlFor="upload" className="cursor-pointer">
            {imageSrc ? (
              <img
                src={imageSrc}
                className="max-h-48 rounded-lg mx-auto"
                alt="Image preview"
              />
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-700 mx-auto mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                  Upload picture
                </h5>
                <p className="font-normal text-sm text-gray-400 md:px-6">
                  Choose photo size should be less than{" "}
                  <b className="text-gray-600">2mb</b>
                </p>
                <p className="font-normal text-sm text-gray-400 md:px-6">
                  and should be in{" "}
                  <b className="text-gray-600">JPG, PNG, or GIF</b> format.
                </p>
                <span id="filename" className="text-gray-500 bg-gray-200 z-50">
                  {file ? file.name : ""}
                </span>
              </>
            )}
          </label>
        </div>
      </div>
    </section>
  );
};
