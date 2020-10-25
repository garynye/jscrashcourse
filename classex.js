

//class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    getBirthYear() {
        return this.dob.getFullYear()
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


//instantiate object

const person1 = new Person('gary', 'nye', '07/29/1981')

console.log(person1)
console.log(person1.getBirthYear())