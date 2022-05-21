import chalk from 'chalk';

type Students = {
    [key: string]: number;
};
class Student {
    constructor(public name: string, public id: number) {}
}

class Dict {
    private dict: Students;
    constructor() {
        this.dict = {};
    }
    add = (newStu: Student) => {
        this.dict[newStu.name] = newStu.id;
    };
    print = () => {
        for (const [k, v] of Object.entries(this.dict)) {
            console.log(chalk.green(`${k} : ${v}`));
        }
    };
    getIdByName(name: string) {
        return this.dict[name];
    }
}

const a = new Student('a', 1);
const b = new Student('b', 2);
const c = new Student('c', 3);
const stuDict = new Dict();
stuDict.add(a);
stuDict.add(b);
stuDict.add(c);

console.log(stuDict.getIdByName('a'));
console.log(stuDict.getIdByName('b'));
console.log(stuDict.getIdByName('c'));
