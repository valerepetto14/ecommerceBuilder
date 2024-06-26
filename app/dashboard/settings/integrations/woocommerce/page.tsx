import { Input, Button } from "@nextui-org/react";

const ShopifyIntegrationPage = () => {
  return (
    <div className="h-[700px] rounded-md mx-auto w-full flex flex-col bg-white shadow-md">
      <div className="flex items-center gap-2 border-b-1 p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          className="bg-white"
          viewBox="0 0 128 128"
        >
          <path
            fill="#7f54b3"
            d="M116.3 89.1H11.7C5.2 89.1 0 83.9 0 77.4v-40C0 31 5.2 25.8 11.7 25.8h104.7c6.4 0 11.7 5.2 11.7 11.7v40c-.1 6.4-5.3 11.6-11.8 11.6z"
          />
          <path
            fill="#FFF"
            d="M13.8 76.7s2.8 11.8 8.5 3.9 11.2-20.3 11.2-20.3.4-3.1 2 3.7S44 80 44 80s6.3 7.9 8.9-.4c-1-11 2.8-31 6.7-40.6 1.6-8.5-7.3-6.1-8.1-4.1s-6.3 14.8-6.7 28.2c0 0-4.7-12.8-5.1-17.4-.4-4.7-5.3-5.9-8.1-1.4S20.3 66.2 20.3 66.2l-5.5-28.4s-5.5-7.3-8.7 1.6c0 0 5.7 34.9 7.7 37.3zM87 45.7c-8.5-14.2-21.1-3.4-21.1-3.4s-9.6 11.1-5.3 26.2c6.9 14.9 16.6 8.3 19.2 7.1 2.7-1.3 14.1-14.3 7.2-29.9zm-6.5 12.5c0 5.9-4.9 11.4-8.9 10.2-2.2-1.3-3.6-4.8-3.6-10.8 2-9.7 6.4-11 8.7-10.8 4.3 2.3 4.1 7.4 3.8 11.4zM118.9 45.7c-8.5-14.2-21.1-3.4-21.1-3.4s-9.6 11.1-5.3 26.2c6.9 14.9 16.6 8.3 19.2 7.1 2.6-1.3 14.1-14.3 7.2-29.9zm-6.5 12.5c0 5.9-4.9 11.4-8.9 10.2-2.2-1.3-3.6-4.8-3.6-10.8 2-9.7 6.4-11 8.7-10.8 4.2 2.3 4 7.4 3.8 11.4z"
          />
          <path fill="#7f54b3" d="M61.3 89.1l22.3 13.1-4.7-13.1-12.8-3.6z" />
        </svg>
        <h3 className="text-xl font-semibold">Woocoomerce</h3>
      </div>
      <div className="p-5 flex flex-col gap-4 flex-1">
        <Input
          type="text"
          label="URL de la tienda"
          placeholder="Name"
          variant="bordered"
          labelPlacement="outside"
          classNames={{
            label:
              "text-default-400 text-xs font-normal text-gray-600 font-bold",
            input: "text-default-900",
            inputWrapper: "border border-default-300 rounded-xl",
          }}
        />
        <Input
          type="text"
          label="API Key"
          placeholder="Name"
          variant="bordered"
          labelPlacement="outside"
          classNames={{
            label:
              "text-default-400 text-xs font-normal text-gray-600 font-bold",
            input: "text-default-900",
            inputWrapper: "border border-default-300 rounded-xl",
          }}
        />
        <Input
          type="text"
          label="API Secret"
          placeholder="Name"
          variant="bordered"
          labelPlacement="outside"
          classNames={{
            label:
              "text-default-400 text-xs font-normal text-gray-600 font-bold",
            input: "text-default-900",
            inputWrapper: "border border-default-300 rounded-xl",
          }}
        />
      </div>
      <div className="border-t-1 flex justify-end mt-auto p-5">
        <Button size="md" radius="sm" className="bg-slate-200">
          Conectar
        </Button>
      </div>
    </div>
  );
};

export default ShopifyIntegrationPage;
