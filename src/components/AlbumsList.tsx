import { useGetAlbumsByUserIdQuery, useCreateAlbumForUserMutation } from '../store';
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
interface AlbumsListProps {
  userId: string;
}

const AlbumsList = ({ userId }: AlbumsListProps) => {
  const { data, error, isLoading } = useGetAlbumsByUserIdQuery(userId);
  const [createAlbum, results] = useCreateAlbumForUserMutation();

  const handleClick = () => {
    createAlbum(userId);
  };

  const albumsHeader = (
    <div className='mb-4 mt-2 flex items-center'>
      <h2>Albums</h2>
      <Button className='ml-auto mr-2' success loading={results.isLoading} onClick={handleClick}>
        + Add Album
      </Button>
    </div>
  );

  if (isLoading) {
    return (
      <>
        {albumsHeader}
        <Skeleton times={3} className='mb-4 mt-2 h-10 w-full' />;
      </>
    );
  }

  if (error) {
    return (
      <>
        {albumsHeader}
        <div>Something went wrong</div>;
      </>
    );
  }

  return (
    <div>
      {albumsHeader}
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
