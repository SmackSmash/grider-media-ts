import { type PropsWithChildren, type MouseEvent } from 'react';
import { useDeleteAlbumMutation } from '../store';
import { type Album } from '../store/apis/albumsApi';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';

type AlbumsListItemProps = PropsWithChildren<{
  album: Album;
}>;

const AlbumsListItem = ({ album, children }: AlbumsListItemProps) => {
  const [deleteAlbum, deleteAlbumResults] = useDeleteAlbumMutation();

  const handleDeleteAlbum = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteAlbum(album);
  };

  const albumHeader = (
    <div className='flex w-full items-center'>
      <h3>{album.title}</h3>
      <Button
        className='ml-auto mr-2'
        warning
        loading={deleteAlbumResults.isLoading}
        onClick={handleDeleteAlbum}
      >
        Delete Album
      </Button>
    </div>
  );

  return <ExpandablePanel header={albumHeader}>{children}</ExpandablePanel>;
};

export default AlbumsListItem;
