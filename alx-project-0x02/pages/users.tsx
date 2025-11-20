import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users = ({ users }: UsersPageProps) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          address={user.address}
        />
      ))}
    </div>
  );
};

// use getStaticProps() to fetch users data
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
    revalidate: 60, // optional
  };
}

export default Users;
