const getApiUrl = () => {
  return import.meta.env.VITE_BACKEND_API;
};

export { getApiUrl };
