import { type PropsWithChildren, type MouseEvent } from 'react';
import { useDeleteAlbumMutation } from '../store';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';

type AlbumsListItemProps = PropsWithChildren<{
  title: string;
  userId: string;
  albumId: string;
}>;

const AlbumsListItem = ({ title, userId, albumId, children }: AlbumsListItemProps) => {
  const [deleteAlbum, deleteAlbumResults] = useDeleteAlbumMutation();

  const handleDeleteAlbum = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteAlbum({ albumId, userId });
  };

  const albumHeader = (
    <div className='flex w-full items-center'>
      <h3>{title}</h3>
      <Button
        className='ml-auto mr-2'
        warning
        loading={
          deleteAlbumResults.isLoading && deleteAlbumResults.originalArgs?.albumId === albumId
        }
        onClick={handleDeleteAlbum}
      >
        Delete Album
      </Button>
    </div>
  );

  return <ExpandablePanel header={albumHeader}>{children}</ExpandablePanel>;
};

export default AlbumsListItem;
