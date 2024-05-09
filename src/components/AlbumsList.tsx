import { useGetAlbumsByUserIdQuery, useCreateAlbumForUserMutation } from '../store';
import ExpandablePanel from './ExpandablePanel';
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
      <div className='mb-4 mt-2 flex items-center'>
        <h2>Albums</h2>
        <Button className='ml-auto mr-2' success onClick={handleClick}>
          + Add Album
        </Button>
      </div>
      {data!.length
        ? data!.map(({ title, _id }) => (
            <ExpandablePanel header={<h3>{title}</h3>} key={_id}>
              {title}
            </ExpandablePanel>
          ))
        : 'No albums found'}
    </div>
  );
};

export default AlbumsList;
