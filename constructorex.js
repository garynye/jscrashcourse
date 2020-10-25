
//constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
    this.getBirthYear = function () {
        return this.dob.getFullYear()
    }
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

Person.prototype.getBirthYear2 = function () {
    return this.dob.getFullYear()
}

Person.prototype.getFullName2 = function () {
    return `${this.firstName} ${this.lastName}`
}


//instantiate object

const person1 = new Person('gary', 'nye', '07/29/1981')

console.log(person1)
console.log(person1.getBirthYear2())