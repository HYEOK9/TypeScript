import chalk from 'chalk';

abstract class Student {
    constructor(
        public id: number,
        public name: string,
        public grade: number,
        private address: string
    ) {}
    print(): void {
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

class cseStudent extends Student {}

const me = new cseStudent(2018102219, '이재혁', 3, '서울 마포구');

me.print();
