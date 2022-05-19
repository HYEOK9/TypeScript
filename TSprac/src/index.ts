type Print = {
    <T>(array: T[]): void;
};

const printArray: Print = (array) => {
    console.log(array);
};

printArray([2, 1, 3]);
printArray([true, false, true]);
printArray([1, 2, 'tasdf']);
