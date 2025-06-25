// prototype design pattern

abstract class EnemiesPrototype {
    abstract clone(): EnemiesPrototype;
}

class Enemy implements EnemiesPrototype {
    private health: number;
    private type: string;
    private speed: number;
    private armored: boolean;
    private weapon: string;

    constructor(health, type, speed, armored, weapon) {
        this.armored = armored;
        this.health = health;
        this.weapon = weapon;
        this.speed = speed;
        this.type = type;
    }

    clone(): EnemiesPrototype {
        return new Enemy(
            this.health,
            this.type,
            this.speed,
            this.armored,
            this.weapon
        );
    }
}
