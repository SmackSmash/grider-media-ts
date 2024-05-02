import { useState, useCallback } from 'react';
import { useAppDispatch } from '../store';
import { type AxiosError } from 'axios';
import { AsyncThunk } from '@reduxjs/toolkit';

type UseThunkReturns = [(id?: string) => void, boolean, AxiosError | null];

const useThunk = (thunk: AsyncThunk<any, any, any>): UseThunkReturns => {
  const [isLoadingThunk, setIsLoadingThunk] = useState(false);
  const [loadingThunkError, setLoadingThunkError] = useState<AxiosError | null>(null);

  const dispatch = useAppDispatch();

  const doThunk = useCallback(
    async (id?: string) => {
      setIsLoadingThunk(true);
      try {
        await dispatch(thunk(id)).unwrap();
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
