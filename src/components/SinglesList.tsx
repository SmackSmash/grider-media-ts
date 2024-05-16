import { type Album } from '../store/apis/albumsApi';
import { useGetSinglesByAlbumIdQuery } from '../store';
import Skeleton from './Skeleton';

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

  // return {data.map(single => <div>{{</div>)};
  return <div>Singles list</div>;
};

export default SinglesList;
