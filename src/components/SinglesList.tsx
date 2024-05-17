import { type Album } from '../store/apis/albumsApi';
import { useCreateSingleForAlbumMutation, useGetSinglesByAlbumIdQuery } from '../store';
import Skeleton from './Skeleton';
import SinglesListItem from './SinglesListItem';
import Button from './Button';

interface SinglesListProps {
  album: Album;
}

const SinglesList = ({ album }: SinglesListProps) => {
  const { data, error, isFetching } = useGetSinglesByAlbumIdQuery(album._id);
  const [createSingle] = useCreateSingleForAlbumMutation();

  const handleCreateSingle = () => {
    createSingle(album._id);
  };

  const singlesHeader = (
    <div className='flex w-full'>
      <h3>Singles</h3>
      <Button className='ml-auto' success onClick={handleCreateSingle}>
        + Add Single
      </Button>
    </div>
  );

  if (isFetching) {
    return (
      <>
        {singlesHeader}
        <div className='flex flex-wrap'>
          <div className='aspect-square w-1/2 p-4'>
            <div className='relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl'>
              <Skeleton className='h-full w-full' times={1} />
            </div>
          </div>
          <div className='aspect-square w-1/2 p-4'>
            <div className='relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl'>
              <Skeleton className='h-full w-full' times={1} />
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        {singlesHeader}
        <div>Something went wrong...</div>;
      </>
    );
  }
  console.log(data);

  return (
    <>
      {singlesHeader}
      <div className='flex flex-wrap'>
        {data!.length ? (
          data!.map(single => <SinglesListItem single={single} key={single._id} />)
        ) : (
          <div>No singles added for this album</div>
        )}
      </div>
    </>
  );
};

export default SinglesList;
