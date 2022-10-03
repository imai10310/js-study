import VendingMachine from './vendingMachine.mjs';

const cola = new VendingMachine('コカ・コーラ', 150);
cola.checkPrice(150);
cola.sellDrink(150);
