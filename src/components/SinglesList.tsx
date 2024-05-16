import { type Album } from '../store/apis/albumsApi';
import { useGetSinglesByAlbumIdQuery } from '../store';
import Skeleton from './Skeleton';
import SinglesListItem from './SinglesListItem';

interface SinglesListProps {
  album: Album;
}

const SinglesList = ({ album }: SinglesListProps) => {
  const { data, error, isFetching } = useGetSinglesByAlbumIdQuery(album._id);

  if (isFetching) {
    return (
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
    );
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }
  console.log(data);

  return (
    <div className='flex flex-wrap'>
      {data!.length ? (
        data!.map(single => <SinglesListItem single={single} key={single._id} />)
      ) : (
        <div>No singles added for this album</div>
      )}
    </div>
  );
};

export default SinglesList;
