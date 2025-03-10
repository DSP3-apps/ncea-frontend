export const validateUrl = (url: string) => {
  const regex = /^(https?):\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(:\d+)?(\/[^\s]*)?$/;
  return regex.test(url);
};
