import prisma from "@/lib/database";

const Page = async () => {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1 className="font-bold text-2xl mb-5">Page</h1>
      <h2 className="font-semibold text-xl">Users</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="border-b border-gray-200 py-4 flex items-center justify-between"
          >
            <p>
              {`Email: ${user.email}, Name: ${user.firstName}, Created: ${user.createdAt}`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
