class Student {
    constructor(
        public id: number,
        public name: string,
        public grade: number,
        private address: string
    ) {}
}

const me = new Student(2018102219, '이재혁', 3, '서울 마포구');
