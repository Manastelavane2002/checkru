import { useState } from 'react';
export enum LoadingState {
  FAILED = 'failed',
  INITIAL = 'initial',
  LOADING = 'loading',
  SUCCESS = 'success',
}
export function useLoader(initialState?: LoadingState) {
  const [loadingState, setLoadingState] = useState<LoadingState>(
    initialState || LoadingState.INITIAL
  );
  const isLoading = loadingState == LoadingState.LOADING;
  const isInitialLoad = loadingState == LoadingState.INITIAL;

  const startLoading = () => {
    setLoadingState(LoadingState.LOADING);
  };
  const endLoading = (isSuccess: boolean) => {
    setLoadingState(isSuccess ? LoadingState.SUCCESS : LoadingState.FAILED);
  };
  const resetLoadingState = () => {
    setLoadingState(LoadingState.INITIAL);
  };

  const makeLoaderCall = async (functionToExecute: (value?: unknown) => void, delay?: number) => {
    setLoadingState(LoadingState.LOADING);
    try {
      await functionToExecute();
      if (delay) {
        const timer = setTimeout(() => {
          endLoading(true);
          clearTimeout(timer);
        }, delay);
      } else {
        endLoading(true);
      }
    } catch (error) {
      endLoading(false);
    }
  };

  return {
    endLoading,
    isLoading,
    isInitialLoad,
    loadingState,
    makeLoaderCall,
    resetLoadingState,
    startLoading,
  };
}
