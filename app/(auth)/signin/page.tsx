import SignInForm from "@/components/auth/signInForm";

const SignUpPage = () => {
  return (
    <div className="flex w-1/2 h-screen flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-bold">Iniciar sesión</h1>
      <h2 className="text-xs text-gray-500">
        Ingresa tus credenciales para iniciar sesion
      </h2>
      <SignInForm />
    </div>
  );
};

export default SignUpPage;
