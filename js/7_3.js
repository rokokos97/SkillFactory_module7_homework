// cоздадим функцию которая будет создавать обьект
function createEmptyObj (name){
    name = Object.create(null);
    return name;
}
// присвоим результат выполнения функции в переменную и выведем ее в консоль
const result = createEmptyObj("emptyObject");
console.log(result);
