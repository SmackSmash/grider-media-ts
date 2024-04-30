import { useState, useCallback } from 'react';
import { useAppDispatch } from '../store';
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { type AxiosError } from 'axios';

type UseThunkReturns = [(id?: string) => void, boolean, AxiosError | null];

const useThunk = (
  thunk: (id?: string) => AsyncThunkAction<string, void, object>
): UseThunkReturns => {
  const [isLoadingThunk, setIsLoadingThunk] = useState(false);
  const [loadingThunkError, setLoadingThunkError] = useState<AxiosError | null>(
    null
  );

  const dispatch = useAppDispatch();

  const doThunk = useCallback(
    async (id?: string) => {
      setIsLoadingThunk(true);
      try {
        if (id) {
          await dispatch(thunk(id)).unwrap();
        } else {
          await dispatch(thunk()).unwrap();
        }
      } catch (error) {
        setLoadingThunkError(error as AxiosError);
      } finally {
        setIsLoadingThunk(false);
      }
    },
    [dispatch, thunk]
  );

  return [doThunk, isLoadingThunk, loadingThunkError];
};

export default useThunk;
