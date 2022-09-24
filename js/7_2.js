// создаем некий объект со своими парами ключ - значение
const developer = {
    education: "SkillFactory",
    course: "Front-End",
}
developer.stack = {HTML : "know",
    CSS : "know",
    JavaScript: "study",
    ReactJs: "study",
    VueJs: "dont know"}

// создаем функцию кокторая принимает в качестве аргумента строку и объект
function checkKeyInObj (str,obj){
    // оператор in вернет нам true если принимаемая сторока имееться как ключ в объекте
    return (str in obj);
}
// присвоим результат выполнения функции в переменную и выведем ее в консоль
const result = checkKeyInObj("mail",developer)
console.log(result);