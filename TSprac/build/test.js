import chalk from 'chalk';
class Student {
    constructor(id, name, grade, address) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.address = address;
    }
    print() {
        console.log(chalk.green('학번 :', this.id, '\n이름 :', this.name, '\n학년 :', this.grade));
    }
}
class cseStudent extends Student {
}
const me = new cseStudent(2018102219, '이재혁', 3, '서울 마포구');
me.print();
