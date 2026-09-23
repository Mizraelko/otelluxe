import * as SunCalc from 'suncalc';
import { CONTACTS } from '@/config/contacts';

const LAT = CONTACTS.coordinates.latitude;
const LNG = CONTACTS.coordinates.longitude;

function getSunTimes(date: Date) {
  const { sunrise, sunset } = SunCalc.getTimes(date, LAT, LNG);
  return { sunrise, sunset };
}

export function isNightInBogorodsk(date = new Date()): boolean {
  const { sunrise, sunset } = getSunTimes(date);
  if (!sunrise || !sunset) {
    const hour = date.getHours();
    return hour < 7 || hour >= 20;
  }
  return date < sunrise || date > sunset;
}

export function getMsUntilNextSunEvent(date = new Date()): number {
  const { sunrise, sunset } = getSunTimes(date);

  let next: Date | null = null;
  if (sunrise && date < sunrise) {
    next = sunrise;
  } else if (sunset && date < sunset) {
    next = sunset;
  } else {
    const tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1);
    next = getSunTimes(tomorrow).sunrise;
  }

  if (!next) {
    return 60 * 60 * 1000;
  }

  return Math.max(next.getTime() - date.getTime() + 1000, 1000);
}
