let loadingCallback = null;

export const registerLoadingListener = cb => {
  loadingCallback = cb;
};

export const toggleGlobalLoading = show => {
  if (loadingCallback) loadingCallback(show);
};
