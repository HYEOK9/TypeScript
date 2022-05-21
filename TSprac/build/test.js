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
                console.log(`${k} : ${v}`);
            }
        };
        this.dict = {};
    }
}
const a = new Student('a', 1);
const b = new Student('b', 2);
const c = new Student('c', 3);
const stuDict = new Dict();
stuDict.add(a);
stuDict.add(b);
stuDict.add(c);
stuDict.print();
export {};
