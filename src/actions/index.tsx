export const increment = (nr: number) => {
    return {
        type: 'INCREMENT',
        payload: nr,
    };
};

export const decrement = (nr: number) => {
    return {
        type: 'DECREMENT',
        payload: nr,
    };
};
