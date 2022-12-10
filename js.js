// Поясніть своїми словами, як ви розумієте, як працює прототипне наслідування в Javascript
// обʼєкти переймають один у одного якісь властивості(наприклад змінні та методи)
// Для чого потрібно викликати super() у конструкторі класу-нащадка?
// дозволяє викликати у нащадка коснтруктор батьківського классу


// Завдання

// Створити клас Employee, у якому будуть такі характеристики - name (ім'я), age (вік), salary (зарплата). 
//Зробіть так, щоб ці характеристики заповнювалися під час створення об'єкта.
// Створіть гетери та сеттери для цих властивостей.
// Створіть клас Programmer, який успадковуватиметься від класу Employee, і який матиме властивість lang (список мов).
// Для класу Programmer перезапишіть гетер для властивості salary. Нехай він повертає властивість salary, помножену на 3.
// Створіть кілька екземплярів об'єкта Programmer, виведіть їх у консоль.


class Employee {
    constructor(name, age, salary) {
        this._name = name;
        this._age = age;
        this._salary = salary;
    }
    get name() {
        return this._name
    }
    set name(value) {
        if (value.length > 2) {
            this._name = value
        }
    }

    get age() {
        return this._age
    }
    set age(value) {
    try{
        if(typeof value !== "number") {
            throw new Error("age must be a number")
        }

        if(typeof value < 18 && value > 70) {
            throw new Error("age must be a normal")
        }
        
        this._age = value
    }
    catch(error){
    console.log(error)
    }
    }

    get salary() {
        return this._salary
    }
    set salary(value) {
        try {
            if (typeof value !== "number") {
                throw new Error("salary must be a number")
            }
            this._salary = value
        }
        catch (error) {
            console.log(error)
        }
    }
}

class Programmer extends Employee{
    constructor(name, age, salary, lang){
      super(name, age, salary)   
      this._lang = lang;
    }

    get salary() {
        return (this._salary * 3)
    }
}

const programmer1 = new Programmer("nika", 12, 222, "html")
const programmer2 = new Programmer("keke", 14, 2225, "css")
console.log(programmer1, programmer1.salary)
console.log(programmer2, programmer2.salary)