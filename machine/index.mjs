import VendingMachine from './vendingMachine.mjs';

const cola = new VendingMachine('コカ・コーラ', 150);
cola.checkPrice(150);
cola.sellDrink(1000);

const monsterEnergy = new VendingMachine('モンスターエナジー', 210);
monsterEnergy.checkPrice(150);
monsterEnergy.sellDrink(1000);

const asahiBeer = new Asahi();
asahiBeer.sellDrink(1000);
