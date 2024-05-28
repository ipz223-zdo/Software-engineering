import HeroBuilder from './builder/HeroBuilder';
import EnemyBuilder from './builder/EnemyBuilder';

const heroBuilder = new HeroBuilder();
const hero = heroBuilder
    .setHeight(180)
    .setBuild('Athletic')
    .setHairColor('Blonde')
    .setEyeColor('Blue')
    .setClothing('Armor')
    .setInventory(['Sword', 'Shield', 'Potion'])
    .addGoodDeed('Saved a village')
    .addGoodDeed('Defeated a dragon')
    .getResult();

const enemyBuilder = new EnemyBuilder();
const enemy = enemyBuilder
    .setHeight(190)
    .setBuild('Muscular')
    .setHairColor('Black')
    .setEyeColor('Red')
    .setClothing('Dark Robe')
    .setInventory(['Poison', 'Dagger'])
    .addEvilDeed('Burned a village')
    .addEvilDeed('Stole treasure')
    .getResult();

console.log("Hero Description:");
hero.describe();

console.log("\nEnemy Description:");
enemy.describe();
