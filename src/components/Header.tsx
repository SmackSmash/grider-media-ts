import { addUser } from "../store";
import Button from "./Button";
import useThunk from "../hooks/useThunk";

const Header = () => {
  const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const handleClick = () => {
    doAddUser();
  };

  return (
    <header className="mb-4 flex items-center justify-between border-b-2 border-poimandres-darkgreen pb-4">
      <h1 className="text-2xl font-bold">User List</h1>
      {creatingUserError ? (
        <span className="text-poimandres-lightpink">
          {creatingUserError.message}
        </span>
      ) : (
        <Button success loading={isCreatingUser} onClick={handleClick}>
          + Add User
        </Button>
      )}
    </header>
  );
};

export default Header;
