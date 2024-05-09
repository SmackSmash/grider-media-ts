import { useGetAlbumsByUserIdQuery } from '../store';
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

  return <div>{data.length ? data.map(({ title }) => <p>{title}</p>) : 'No albums found'}</div>;
};

export default AlbumsList;
