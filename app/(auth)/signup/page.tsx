import SignUpForm from "@/components/auth/signUpForm";

const SignUpPage = () => {
  return (
    <div className="flex w-1/2 h-screen flex-col items-center justify-center gap-10">
      <h1 className="text-5xl font-bold mb-16 text-indigo-600">Sign Up</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
