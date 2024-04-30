import { useState, useCallback } from 'react';
import { useAppDispatch } from '../store';
import { type AsyncThunk } from '@reduxjs/toolkit';
import { type AxiosError } from 'axios';

type UseThunkReturns = [() => void, boolean, AxiosError | null];

const useThunk = (thunk: AsyncThunk<string, void, object>): UseThunkReturns => {
  const [isLoadingThunk, setIsLoadingThunk] = useState(false);
  const [loadingThunkError, setLoadingThunkError] = useState<AxiosError | null>(
    null
  );

  const dispatch = useAppDispatch();

  const doThunk = useCallback(async () => {
    setIsLoadingThunk(true);
    try {
      await dispatch(thunk()).unwrap();
    } catch (error) {
      setLoadingThunkError(error as AxiosError);
    } finally {
      setIsLoadingThunk(false);
    }
  }, [dispatch, thunk]);

  return [doThunk, isLoadingThunk, loadingThunkError];
};

export default useThunk;
