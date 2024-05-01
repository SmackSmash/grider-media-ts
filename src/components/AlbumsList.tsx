interface AlbumsListProps {
  id: string;
}

const AlbumsList = ({ id }: AlbumsListProps) => {
  return <div>Albums for user with id {id}</div>;
};

export default AlbumsList;
