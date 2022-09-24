// создаем некий объект со своими парами ключ - значение
const developer = {
    education: "SkillFactory",
    course: "Front-End",
}
developer.stack = {
    HTML: "know",
    CSS: "know",
    JavaScript: "study",
    ReactJs: "study",
    VueJs: "dont know"
}

// при помощи Object.create создаем из прототипа обект конкретного разработчика со своими парами
// ключ - объект
const Rostyslav = Object.create(developer)
Rostyslav.name = "Rostyslav Lisovyi"
Rostyslav.age = 36
Rostyslav.sex = "male"

// создаем функция которая принимает как аргумент объект
function showOnlyOwnKeys(object) {
    // при помощи цикла перебераем все ключи обьекта
    for (let key in object) {
        // console.log(key,":", object[key])
        // чтобы исключить ключи и методы прототипа включаем проверку на ключи объекта
        if (object.hasOwnProperty(key)) {
            // выводим в консоль пару ключ - значение
            console.log(key, ":", object[key])
        }
    }
    // пустой ретерн чтобы функция ничего не возвращала

}

showOnlyOwnKeys(Rostyslav);