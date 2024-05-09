import { useGetAlbumsByUserIdQuery, useCreateAlbumForUserMutation } from '../store';
import Button from './Button';
interface AlbumsListProps {
  userId: string;
}

const AlbumsList = ({ userId }: AlbumsListProps) => {
  const { data, error, isLoading } = useGetAlbumsByUserIdQuery(userId);
  const [createAlbum] = useCreateAlbumForUserMutation();

  const handleClick = () => {
    createAlbum(userId);
  };

  if (isLoading) {
    return <div>Loading albums...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      {data!.length ? data!.map(({ title, _id }) => <p key={_id}>{title}</p>) : 'No albums found'}
      <Button className='mt-4' success onClick={handleClick}>
        + Add Album
      </Button>
    </div>
  );
};

export default AlbumsList;
