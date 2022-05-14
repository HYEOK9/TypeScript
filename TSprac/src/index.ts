type Student = {
    id: number;
    name: string;
    age: number;
    grade?: number;
};

const jaehyeok: Student = {
    id: 2018102219,
    name: 'jaehyeok Lee',
    age: 23,
    grade: 3,
};

const enrollStudent = (
    id: number,
    name: string,
    age: number,
    grade: number
): Student => {
    return { id, name, age, grade };
};

const a = enrollStudent(123, 'a', 23, 2);
console.log(typeof a);
