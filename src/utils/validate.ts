/* eslint-disable @typescript-eslint/no-explicit-any */
export const validateUrl = (url: string) => {
  const regex = /^(https?):\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(:\d+)?(\/[^\s]*)?$/;
  return regex.test(url);
};

export const validateObjNullValues = (obj: Record<string, any>): boolean => {
  for (const key in obj) {
    if (Object.hasOwn(obj, key) && obj[key] === null) {
      return true;
    }
  }
  return false;
};
