import { FormatMessage } from 'hooks/useFormatMessage';
import { formatLocalDate } from 'translations/utils';

const toPrettyDate = (date: string, formatMessage: FormatMessage) => {
  const d = new Date(date);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(new Date().getDate() - 1);
  if (d.toDateString() === today.toDateString()) {
    return formatMessage('Today');
  }
  if (d.toDateString() === yesterday.toDateString()) {
    return formatMessage('Yesterday');
  }
  return formatLocalDate(date);
};

export default toPrettyDate;
