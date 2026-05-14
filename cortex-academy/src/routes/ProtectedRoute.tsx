import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({
  children,
}: Props) => {

  const user =
    localStorage.getItem(
      "user"
    );

  return user
    ? children
    : (
      <Navigate
        to="/login"
        replace
      />
    );
};

export default ProtectedRoute;