import { useGetAlbumsByUserIdQuery } from '../store';
import Button from './Button';
interface AlbumsListProps {
  id: string;
}

const AlbumsList = ({ id }: AlbumsListProps) => {
  const { data, error, isLoading } = useGetAlbumsByUserIdQuery(id);

  if (isLoading) {
    return <div>Loading albums...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  console.log(data);

  return (
    <div>
      {data!.length ? data!.map(({ title, _id }) => <p key={_id}>{title}</p>) : 'No albums found'}
      <Button className='mt-4' success>
        + Add Album
      </Button>
    </div>
  );
};

export default AlbumsList;
