const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-600 flex justify-center items-center">
      {children}
    </div>
  );
};

export default StoreLayout;
