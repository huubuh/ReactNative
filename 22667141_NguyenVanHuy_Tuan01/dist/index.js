"use strict";
//Bai01 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() { return `Name: ${this.name}, Age: ${this.age}`; }
}
const person1 = new Person("Nguyen Van Huy", 20);
console.log(person1.display());
//Bai02
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAll() {
        return `${this.display()}, Grade: ${this.grade}`;
    }
}
const student1 = new Student("Nguyen Van Huy", 20, "A");
console.log(student1.displayAll());
//Bai03
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    display() { return `brand: ${this.brand},model:${this.model},year: ${this.year}`; }
}
const car1 = new Car("porches", "macans", 2022);
console.log(car1.display());
//Bai04
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    arena() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
    display() {
        return `Arena: ${this.width} * ${this.height} = ${this.arena()},Perimeter : 2 x (${this.width} + ${this.height}) = ${this.perimeter()}`;
    }
}
const Rectangle1 = new Rectangle(10, 20);
console.log(Rectangle1.display());
