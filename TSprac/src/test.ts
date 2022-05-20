import chalk from 'chalk';

abstract class Student {
    constructor(
        protected id: number,
        protected name: string,
        protected grade: number,
        protected address: string
    ) {}
    abstract print(): void;
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
