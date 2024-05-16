import { type Album } from '../store/apis/albumsApi';

interface SinglesListProps {
  album: Album;
}

const SinglesList = ({ album }: SinglesListProps) => {
  console.log(album);
  return <div>Singles list</div>;
};

export default SinglesList;
