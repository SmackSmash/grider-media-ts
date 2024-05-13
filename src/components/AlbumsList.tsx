import { useGetAlbumsByUserIdQuery, useCreateAlbumForUserMutation } from '../store';
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
interface AlbumsListProps {
  userId: string;
}

const AlbumsList = ({ userId }: AlbumsListProps) => {
  const { data, isError, isLoading } = useGetAlbumsByUserIdQuery(userId);
  const [createAlbum, results] = useCreateAlbumForUserMutation();

  const handleCreateAlbum = async () => {
    await createAlbum(userId);
  };

  const handleDeleteAlbum = (albumId: string) => {
    console.log(`Delete album with ID of ${albumId}`);
  };

  const albumsHeader = (
    <div className='mb-4 mt-2 flex items-center'>
      <h2>Albums</h2>
      <Button
        className='ml-auto mr-2'
        success
        loading={results.isLoading}
        onClick={handleCreateAlbum}
      >
        + Add Album
      </Button>
    </div>
  );

  const albumHeader = (title: string, albumId: string) => (
    <div className='flex w-full items-center'>
      <h3>{title}</h3>
      <Button
        className='ml-auto mr-2'
        warning
        loading={results.isLoading}
        onClick={() => handleDeleteAlbum(albumId)}
      >
        + Delete Album
      </Button>
    </div>
  );

  if (isLoading) {
    return (
      <>
        {albumsHeader}
        <Skeleton times={3} className='mb-4 mt-2 h-10 w-full' />
      </>
    );
  }

  if (isError) {
    return (
      <>
        {albumsHeader}
        <div>Something went wrong</div>
      </>
    );
  }

  return (
    <div>
      {albumsHeader}
      {data!.length
        ? data!.map(({ title, _id }) => (
            <ExpandablePanel header={albumHeader(title, _id)} key={_id}>
              {title}
            </ExpandablePanel>
          ))
        : 'No albums found'}
    </div>
  );
};

export default AlbumsList;
