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
    return <Skeleton className='h-10 w-10' times={3} />;
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
