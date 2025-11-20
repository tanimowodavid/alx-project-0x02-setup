import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded-lg shadow mb-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700">{email}</p>

      <div className="mt-2 text-sm text-gray-600">
        <p>{address.street}</p>
        <p>{address.suite}</p>
        <p>{address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
