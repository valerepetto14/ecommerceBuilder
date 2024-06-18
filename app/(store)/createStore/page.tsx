import { Button } from "@nextui-org/react";
import Link from "next/link";
import CreateStoreForm from "@/components/store/create-store-form";

const CreateStorePage = () => {
  return (
    <section className="w-1/2 h-[700px] bg-white rounded-xl shadow-xl p-10 flex flex-col justify-between">
      <div className="h-20 w-full flex flex-col items-start gap-10">
        <div className="flex h-10 justify-between items-center mt-4">
          <h2>Vamos a configurar tu nueva tienda!</h2>
        </div>
        <CreateStoreForm />
      </div>
      <div className="flex gap-2 justify-end">
        <Link href="/selectStore">
          <Button
            className="bg-indigo-600 hover:bg-blue-800 text-white hover:scale-105 transition-all shadow-xl"
            radius="sm"
          >
            Volver
          </Button>
        </Link>
        <Button
          className="bg-indigo-600 hover:bg-blue-800 text-white hover:scale-105 transition-all shadow-xl"
          radius="sm"
        >
          Crear tienda
        </Button>
      </div>
    </section>
  );
};

export default CreateStorePage;
