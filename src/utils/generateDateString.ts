import { isEmpty } from './isEmpty';
import { IDateObject } from '../interfaces/searchPayload.interface';

const getMonth = (dateObject: IDateObject, isToDate: boolean): number => {
  let month: number;
  if (isToDate && (isEmpty(dateObject.month) || isNaN(dateObject.month!))) {
    month = 12;
  } else {
    month = !isEmpty(dateObject.month) && !isNaN(dateObject.month!) ? dateObject.month! : 1;
  }
  return month;
};

const generateDateString = (dateObject: IDateObject, isToDate: boolean = false): string => {
  const currentDate = new Date();
  const month = getMonth(dateObject, isToDate);
  let day: number;
  if (isToDate && (isEmpty(dateObject.day) || isNaN(dateObject.day!))) {
    if (month === currentDate.getMonth() + 1 && dateObject.year === currentDate.getFullYear()) {
      day = currentDate.getDate();
    } else {
      day = new Date(Date.UTC(dateObject.year, month, 0)).getDate();
    }
  } else {
    day = !isEmpty(dateObject.day) && !isNaN(dateObject.day!) ? dateObject.day! : 1;
  }

  const date = new Date(Date.UTC(dateObject.year, month - 1, day));

  const dateString = date.toISOString().slice(0, 10);

  return dateString;
};

export { generateDateString };
