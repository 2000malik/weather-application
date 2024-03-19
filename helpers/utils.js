import { Cloud } from '@/components/icons/Cloud';
import { CloudMoonRain } from '@/components/icons/CloudMoonRain';
import { CloudRain } from '@/components/icons/CloudRain';
import { CloudShowerHeavy } from '@/components/icons/CloudShowerHeavy';
import { Sun } from '@/components/icons/Sun';
import { daysOfWeek } from './constant';

export const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
export const IconToDisplay = (name) => {
  const ENUM = {
    Clear: <Sun width='35' height='35' />,
    Clouds: <Cloud width='35' height='35' />,
    Rain: <CloudShowerHeavy width='35' height='35' />,
    Drizzle: <CloudRain width='35' height='35' />,
    Mist: <CloudRain width='35' height='35' />,
    default: <CloudMoonRain width='35' height='35' />,
  };
  // Check if name is among ENUM values, else use default icon
  return Object.prototype.hasOwnProperty.call(ENUM, name) ? ENUM[name] : ENUM.default;
};
export const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
export const milesPerHourToKmPerHour = (milesPerHour) => {
  return milesPerHour * 1.60934;
};
export const unitAbbreviationForTemperature = (unit) => {
  if (unit === 'imperial') {
    return '°F';
  }
  return '°C';
};
export const unitAbbreviationForSpeed = (unit) => {
  if (unit === 'imperial') {
    return 'mph';
  }
  return 'm/s';
};
export const ISODateToDaysOfTheWeek = (dateStr) => {
  const date = new Date(dateStr);

  // Get the day of the week as a number (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeekNumber = date.getDay();

  // Array of day names


  // Get the day name from the array using the day of the week number
  const dayOfWeek = daysOfWeek[dayOfWeekNumber];
  return dayOfWeek;
};
export function getWeekDays() {
  const dayInAWeek = new Date().getDay();
  const days = daysOfWeek.slice(dayInAWeek, daysOfWeek.length).concat(
    daysOfWeek.slice(0, dayInAWeek)
  );
  return days;
}