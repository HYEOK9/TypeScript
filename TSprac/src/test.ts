interface CardPlate {
    name: string;
    cost: number;
    getName(): string;
    getCost(): number;
}

abstract class Hasuin implements CardPlate {
    constructor(
        protected readonly origin:
            | 'Normal'
            | 'Druid'
            | 'Mage'
            | 'Warrior'
            | 'Paladin',
        protected readonly grade:
            | 'no_grade'
            | 'normal'
            | 'unique'
            | 'hero'
            | 'legend',
        public readonly name: string,
        public readonly cost: number,
        protected attack: number,
        protected defense: number
    ) {}
    getName = (): string => {
        return this.name;
    };
    getCost = (): number => {
        return this.cost;
    };
}

class Dirty_Noum extends Hasuin implements CardPlate {
    constructor(
        protected readonly origin:
            | 'Normal'
            | 'Druid'
            | 'Mage'
            | 'Warrior'
            | 'Paladin',
        protected readonly grade:
            | 'no_grade'
            | 'normal'
            | 'unique'
            | 'hero'
            | 'legend',
        public readonly name: string,
        public readonly cost: number,
        protected attack: number,
        protected defense: number
    ) {
        super(origin, grade, name, cost, attack, defense);
    }
}

const card = new Dirty_Noum('Normal', 'normal', 'dirty_noum', 1, 2, 1);
console.log(card.cost);
