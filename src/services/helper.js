export const getLocalStorage = (key, defaultValue) => {
  JSON.parse(localStorage.getItem(key)) || defaultValue;
};
