class Hasuin {
    constructor(origin, grade, name, cost, attack, defense) {
        this.origin = origin;
        this.grade = grade;
        this.name = name;
        this.cost = cost;
        this.attack = attack;
        this.defense = defense;
        this.getName = () => {
            return this.name;
        };
        this.getCost = () => {
            return this.cost;
        };
    }
}
class Dirty_Noum extends Hasuin {
    constructor(origin, grade, name, cost, attack, defense) {
        super(origin, grade, name, cost, attack, defense);
        this.origin = origin;
        this.grade = grade;
        this.name = name;
        this.cost = cost;
        this.attack = attack;
        this.defense = defense;
    }
}
const card = new Dirty_Noum('Normal', 'normal', 'dirty_noum', 1, 2, 1);
console.log(card.cost);
