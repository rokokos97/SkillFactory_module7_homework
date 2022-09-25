// cоздадим функцию конструктор
function SmartHomeDevice(type, power) {
    this.designedBy = "Xiaomi"
    this.madeIn = "China"
    this.type = type
    this.powerConsumption = power
}

// методы объекта вынесим из функции конструктара и запишим через prototyp.
// это позволит не занимать память
SmartHomeDevice.prototype.plugIn = function (type) {
    console.log(type + " plugged in and ready to work!")
}
SmartHomeDevice.prototype.turnOffDevicePower = function (type) {
    console.log(type + " turn off!")
}
// создадим обьект
const hoover = new SmartHomeDevice("Hoover", 350)
// добавим собстевенное свойство
hoover.energySavingClass = "A1"
// вызовем метод прототипа
hoover.plugIn(hoover.type)

// создадим подклас и присвоим ему некоторые свойства прототипа (designedBy, powerConsumption)
WashSmartHomeDevice.prototype = new SmartHomeDevice();

//добавим в подклас собственное свойство
function WashSmartHomeDevice(color) {
    this.color = color
}

//добавим собственный метод для подкласса
WashSmartHomeDevice.prototype.setTimer = function (type, timer) {
    console.log("The " + type + " will be working in " + timer + " minutes.")
}
//создадим объект подкласса
const washMachine = new WashSmartHomeDevice("white")
//вызовем у объекта методы прототипа класса
washMachine.plugIn("Wash Machine")
washMachine.turnOffDevicePower("Wash Machine")
//вызовем у объекта методы прототипа подкласса
washMachine.setTimer("Wash Machine", 10)
//все работает!!!
//выведем в консоль свойства объекта прототипа класса
console.log(washMachine.madeIn, washMachine.designedBy,)
//тоже работает

// washMachine.turnOffDevicePower(washMachine.type) - свойства прототипа подкласса у обьекта созданого из прототипа класса
//вызываться не будут


