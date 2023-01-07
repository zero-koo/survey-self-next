import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

export function timeago(datetime: Parameters<typeof format>[0], locale: 'ko' | 'en' = 'ko') {
  return format(datetime, locale);
}
