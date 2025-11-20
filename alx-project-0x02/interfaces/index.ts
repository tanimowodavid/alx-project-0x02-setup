export interface CardProps {
  title: string;
  content: string;
}

export interface PostProps extends CardProps {
  userId: number;
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
}
