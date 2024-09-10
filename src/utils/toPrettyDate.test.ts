import toPrettyDate from './toPrettyDate';

describe('GIVEN toPrettyDate', () => {
  test('WHEN a date is back in time THEN should return that date in correct format', () => {
    const prettiedDate = toPrettyDate('2023-01-03', (id) => `${id}`);
    expect(prettiedDate).toBe('2023-01-03');
  });

  test('WHEN date is today THEN should return label Today', () => {
    const prettiedDate = toPrettyDate(new Date().toDateString(), (id) => `${id}`);
    expect(prettiedDate).toBe('Today');
  });

  test('WHEN date is yesterday THEN should return label Today', () => {
    const date = new Date();
    date.setDate(new Date().getDate() - 1);
    const prettiedDate = toPrettyDate(date.toDateString(), (id) => `${id}`);
    expect(prettiedDate).toBe('Yesterday');
  });
});
