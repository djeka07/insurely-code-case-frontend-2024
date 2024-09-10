export type FetchState = 'pending' | 'repending' | 'ready' | 'errored' | 'initial';

export type ProgressState<T, Err = unknown> = {
  state: FetchState;
  data?: T;
  error?: Err;
};
