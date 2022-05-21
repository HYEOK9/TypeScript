import chalk from 'chalk';
class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class Dict {
    constructor() {
        this.add = (newStu) => {
            this.dict[newStu.name] = newStu.id;
        };
        this.print = () => {
            for (const [k, v] of Object.entries(this.dict)) {
                console.log(chalk.green(`${k} : ${v}`));
            }
        };
        this.dict = {};
    }
    getID(name) {
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
console.log(stuDict.getID('a'));
console.log(stuDict.getID('b'));
console.log(stuDict.getID('c'));
