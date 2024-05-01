import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import useThunk from "../hooks/useThunk";
import { deleteUser } from "../store";
import { type MouseEvent } from "react";
import AlbumsList from "./AlbumsList";

interface UsersListItemProps {
  name: string;
  id: string;
}

const UsersListItem = ({ name, id }: UsersListItemProps) => {
  const [doDeleteUser, isDeletingUser, deletingUserError] =
    useThunk(deleteUser);

  const handleDelete = (id: string, e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    doDeleteUser(id);
  };

  const header = (
    <>
      {name}
      <Button
        className="ml-auto"
        danger
        loading={isDeletingUser}
        onClick={(e) => handleDelete(id, e)}
      >
        {deletingUserError ? "Oopsy!" : "Delete"}
      </Button>
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList id={id} />
    </ExpandablePanel>
  );
};

export default UsersListItem;
