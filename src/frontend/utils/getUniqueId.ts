export const getUniqueId = <T extends { id: number }>(array: T[]): number => {
    if (array.length === 0) return 1;

    return array[array.length - 1].id + 1;
};
