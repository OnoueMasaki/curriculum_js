// 問1
let numbers = [2, 5, 12, 13, 15, 18, 22];
let num = [];

function isEven() {
    console.log(num + 'は偶数です');
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        num = numbers[i];
        isEven();
    }
} 

// 問2
class Car {
    constructor(gas, number) {
        this.gas = gas;
        this.number = number;
    }
}

function getNumGas() {
    console.log(`ガソリンは${car.gas}です。ナンバーは${car.number}です`);
}

let car = new Car(25, 1234);

getNumGas();