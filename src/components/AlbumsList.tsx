import { useGetAlbumsByUserIdQuery, useCreateAlbumForUserMutation } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumsListItem from './AlbumsListItem';
interface AlbumsListProps {
  userId: string;
}

const AlbumsList = ({ userId }: AlbumsListProps) => {
  const { data, isError, isFetching } = useGetAlbumsByUserIdQuery(userId);
  const [createAlbum, createAlbumResults] = useCreateAlbumForUserMutation();

  const handleCreateAlbum = () => {
    createAlbum(userId);
  };

  const albumsHeader = (
    <div className='mb-4 mt-2 flex items-center'>
      <h2>Albums</h2>
      <Button
        className='ml-auto mr-2'
        success
        loading={createAlbumResults.isLoading}
        onClick={handleCreateAlbum}
      >
        + Add Album
      </Button>
    </div>
  );

  if (isFetching) {
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
        ? data!.map(album => (
            <AlbumsListItem album={album} key={album._id}>
              {album.title}
            </AlbumsListItem>
          ))
        : 'No albums found'}
    </div>
  );
};

export default AlbumsList;
