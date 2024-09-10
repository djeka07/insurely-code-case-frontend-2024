export const isEmpty = <T>(arr: T[]): boolean => !arr || arr.length === 0;

export const groupBy = <T>(arr: T[], propertyToGroup: keyof T): Record<keyof T, T[]> => {
  if (isEmpty(arr)) return {} as Record<keyof T, T[]>;

  return arr.reduce((acc, val) => {
    const key = val[propertyToGroup] as keyof T;
    if (!acc[key]) acc[key] = [];

    acc[key].push(val);
    return acc;
  }, {} as Record<keyof T, T[]>);
};

export const sort = <T>(arr: T[]): T[] => {
  if (isEmpty(arr)) {
    return [];
  }
  const sorted = arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  return sorted as T[];
};

export const sortBy = <T>(arr: T[], propertyToSortBy: keyof T, thenBy: keyof T | null = null): T[] => {
  if (isEmpty(arr)) {
    return [];
  }
  return !propertyToSortBy
    ? sort(arr)
    : [...arr].sort((a, b) => {
        if (a[propertyToSortBy] < b[propertyToSortBy]) return -1;
        if (a[propertyToSortBy] > b[propertyToSortBy]) return 1;
        if (thenBy) {
          if (a[thenBy] < b[thenBy]) return -1;
          if (a[thenBy] > b[thenBy]) return 1;
        }

        return 0;
      });
};
