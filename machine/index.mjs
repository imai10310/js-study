import VendingMachine from './vendingMachine.mjs';
import Asahi from './Asahi.mjs';

const cola = new VendingMachine('コカ・コーラ', 150);
cola.checkPrice(150);
cola.sellDrink(1000);

const monsterEnergy = new VendingMachine('モンスターエナジー', 210);
monsterEnergy.checkPrice(150);
monsterEnergy.sellDrink(1000);

const asahiBeer = new Asahi('コカ・コーラ', 150);
asahiBeer.sellDrink(100);

const superDry = new Drink('アサヒスーパードライ', 280, 'cold', 500);
asahiBeer.setDrink(superDry, 10);
