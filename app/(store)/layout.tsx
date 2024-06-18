const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-violet-600 to-indigo-600 flex justify-center items-center">
      {children}
    </div>
  );
};

export default StoreLayout;
