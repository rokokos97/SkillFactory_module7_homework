//Создадим родительский класс
class SmartHomeDevice {
    // в конструктор запишим параметры
    constructor(type, power) {
        this.designedBy = "Xiaomi"
        this.madeIn = "China"
        this.type = type
        this.powerConsumption = power
    }

    // добавим методы
    plugIn(type) {
        console.log(type + " plugged in and ready to work!")
    }

    turnOffDevicePower(type) {
        console.log(type + " turn off!")
    }
}

// создадим экземпляр класса
const hoover = new SmartHomeDevice("Hoover", 350)
// добавим собстевенное свойство экземпляру
hoover.energySavingClass = "A1"
// вызовем метод
hoover.plugIn(hoover.type)
//выведим в консоль экземпляр
console.log(hoover);

// создадим подклас и присвоим ему часть свойств родителя (designedBy,madeIn) и методы
class WashSmartHomeDevice extends SmartHomeDevice {
    constructor(color, designedBy, madeIn) {
        super(designedBy, madeIn);
        //создадим собственное свойство
        this.color = color
    }

    //добавим собственный метод
    setTimer(type, timer) {
        console.log("The " + type + " will be working in " + timer + " minutes.")
    }
}

// создадим экземпляр подкласса
const washMachine = new WashSmartHomeDevice("white")
//у экземпляра подкласса вызовем методы родительского класса
washMachine.plugIn("Wash Machine")
washMachine.turnOffDevicePower("Wash Machine")
//у экземпляра подкласса вызовем собственный метод
washMachine.setTimer("Wash Machine", 10)
//выведим в консоль экземпляр подкласса
console.log(washMachine)

