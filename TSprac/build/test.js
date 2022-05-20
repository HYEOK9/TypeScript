import chalk from 'chalk';
class Student {
    constructor(id, name, grade, address) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.address = address;
    }
}
class cseStudent extends Student {
    print() {
        console.log(
            chalk.green(
                '학번 :',
                this.id,
                '\n이름 :',
                this.name,
                '\n학년 :',
                this.grade
            )
        );
    }
}
const me = new cseStudent(2018102219, '이재혁', 3, '서울 마포구');
me.print();
