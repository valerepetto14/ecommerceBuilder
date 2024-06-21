export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <div className="flex justify-center items-center h-screen">
          <div className="w-2/3 h-screen flex flex-col justify-center bg-sky-900">
            <h1 className="font-bold text-[1.5rem] text-white absolute top-10 left-10">
              EcommerceBuilder
            </h1>
            <BoxRevealDemo />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}

import BoxReveal from "@/components/magicui/box-reveal";

function BoxRevealDemo() {
  return (
    <div className="h-full w-4/5 flex flex-col items-start justify-center overflow-hidden pt-8 ml-10">
      <BoxReveal boxColor={"#22C55E"} duration={0.5}>
        <p className="text-[4.0rem] font-semibold text-white">
          Bienvenido a la experiencia de{" "}
          <span className="font-extrabold text-green-500 text-[4.3rem]">
            Ecommerce
          </span>{" "}
          más completa
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#22C55E"} duration={0.5}>
        <p className="text-white text-center mt-5 text-[1.2rem]">
          Crea la cuenta de tu tienda en línea y comienza a vender tus productos
        </p>
      </BoxReveal>
    </div>
  );
}
