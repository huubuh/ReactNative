//Bai01 
class Person {
  constructor(public name: string, public age: number) {}
  display() : string {return `Name: ${this.name}, Age: ${this.age}`; }
    
  }
const person1 = new Person("Nguyen Van Huy", 20);
console.log(person1.display());
//Bai02
class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }
  displayAll(): string {
    return `${this.display()}, Grade: ${this.grade}`;
  }
}
const student1 = new Student("Nguyen Van Huy", 20, "A");
console.log(student1.displayAll());
//Bai03
class Car {
  constructor(public brand: string, public model : string , public year : number ) {}
  display() : string {return `brand: ${this.brand},model:${this.model},year: ${this.year}`}
}
const car1 = new Car("porches","macans",2022);
console.log(car1.display());
//Bai04
class Rectangle {
  constructor(public width:number,public height:number) {}
  arena(): number {
    return this.width * this.height
  }
  perimeter(): number {
    return 2*(this.width + this.height)
  }
  display() : string {
    return `Arena: ${this.width} * ${this.height} = ${this.arena()},Perimeter : 2 x (${this.width} + ${this.height}) = ${this.perimeter()}`
  }
}
const Rectangle1 = new Rectangle(10,20)
console.log(Rectangle1.display());


