//1. Create a class Person with attributes name and age. Write a method to display this information.
class Person {
  constructor(public name: string, public age: number) {}
  display() : string {return `Name: ${this.name}, Age: ${this.age}`; }
    
  }
const person1 = new Person("Nguyen Van Huy", 20);
console.log(person1.display());
//2. Write a class Student extending Person with an additional attribute grade. Add a method todisplay all info.
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
//3. Create a class Car with properties brand, model, year. Write a method to show car info.
class Car {
  constructor(public brand: string, public model : string , public year : number ) {}
  display() : string {return `brand: ${this.brand},model:${this.model},year: ${this.year}`}
}
const car1 = new Car("porches","macans",2022);
console.log(car1.display());
//4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
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
//5. Create a class BankAccount with balance. Add methods deposit() and withdraw().
class BankAccount {
  private balance : number;
  constructor(balance:number = 0) {
    this.balance = balance;
  }
  desposit(amount: number): void {
    if (amount < 0 ) {
       console.log("số tiền gửi phải lớn hơn 0");
      return;
    } 
    this.balance += amount;
    console.log(`đã gửi ${amount}, số dư hiện tại : ${this.balance}`);
  }
  withdraw(amount:number): void {
    if (amount < 0) {
      console.log("tiền rút phải lớn hơn 0");
      return;
    }
    if (amount > this.balance) {
      console.log("không đủ số dư");
      return;
    } 
    this.balance -= amount;
console.log(`Bạn đã rút ${amount}, số dư hiện tại ${this.balance}`);

  }

  getBalance():number{
    return this.balance;
  }

}
const acc1 = new BankAccount();
const acc2 = new BankAccount(1000);
console.log("số dư acc1 ban đầu",acc1.getBalance());
console.log("số dư acc2 ban đầu",acc2.getBalance());
acc2.withdraw(500);
acc1.desposit(500);
console.log("số dư acc1 sau khi nạp 500",acc2.getBalance());
console.log("số dư acc2 sau khi rút 500",acc2.getBalance());

//7. Write a class User with private property name and getter/setter.
class User {

constructor(private name:string) {}

public getName() : string {
  return this.name;
}

public setName(name : string) {
  this.name = name;
}
  
}

const user1 = new User("Nguyễn Văn Huy")
console.log("Tên ban đầu: ",user1.getName());
user1.setName("Nguyễn Huy");
console.log("tên sau khi đổi: ",user1.getName());

//8. Create a Product class with name, price. Create an array of products and filter products with price > 100.

class Product {

  constructor(private name : string,private price: number) {}
  
  public getName() : string {
    return this.name
  }
  
  public getPrice() : number {
    return this.price;
  }
}

const products: Product[] =[new Product("Bút",20),new Product("tẩy",5),new Product("thước",10),new Product("sách",50),new Product("cặp",500)];

const expensiveProduct = products.filter( (p) => p.getPrice() > 100)              
console.log("sản phẩm có giá hơn 100 là",expensiveProduct);

//9. Define an interface Animal with name and method sound().
interface Animal{
  name: string;
  sound(): string;
}
class Dog implements Animal{
  public name : string;
  constructor (name:string){
    this.name = name;
  }
  sound(): string {
      return "Gâu Gâu"
      
  }
}
const dog1 = new Dog("miumiu")
console.log(`${dog1.name} sủa ${dog1.sound()}`);

//10. Create a class Account with public, private and readonly fields. 
class Account {
  public accountNumber: string;
  private balance:number;
  readonly bankName : string;
constructor(accountNumber:string,balance:number,bankName:string) {
  this.accountNumber = accountNumber;
      this.balance = balance;
    this.bankName = bankName;
}
  desposit(amount: number): void {
    if (amount < 0 ) {
       console.log("số tiền gửi phải lớn hơn 0");
      return;
    } 
    this.balance += amount;
    console.log(`đã gửi ${amount}, số dư hiện tại : ${this.balance}`);
  }
  withdraw(amount:number): void {
    if (amount < 0) {
      console.log("tiền rút phải lớn hơn 0");
      return;
    }
    if (amount > this.balance) {
      console.log("không đủ số dư");
      return;
    } 
    this.balance -= amount;
console.log(`Bạn đã rút ${amount}, số dư hiện tại ${this.balance}`);

  }

  getBalance():number{
    return this.balance;
  }
}

const acc = new Account("123456",1000,"Agribank");
console.log("số tài khoản",acc.accountNumber);
console.log("Ngân hàng",acc.bankName);

acc.desposit(500);
acc.withdraw(200);
console.log("số dư cuối",acc.getBalance());

//11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
class Animal1 {
  constructor(public name : string) {}
  move(): void {
    console.log(`${this.name} đang di chuyển` );
    
  }
}
class Dog2 extends Animal1 {
  bark():void {
    console.log(`${this.name} sủa gâu gâu`);    
  }
}
class Cat extends Animal1 {
  meow():void {
    console.log(`${this.name} kêu meo meo`);    
  }
}
const dog3 = new Dog2("mini");
dog3.move();
dog3.bark();
const cat1 = new Cat("cá");
cat1.move();
cat1.meow();

//12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.

interface Flyable{
 fly(): void 
}
interface Swimable{
  swim(): void
}
class Bird implements Flyable {
  constructor(public name:string){}
fly(): void {
    console.log(`${this.name} đang bay trên trời`);
}
}

class Fish implements Swimable {
  constructor(public name : string){}
  swim(): void {
      console.log(`${this.name} đang bơi dưới nước`);
      
  }
}
const bird1 = new Bird("angry");
bird1.fly();

const fly1 = new Fish("fish");
fly1.swim();

//13. Create an abstract class Shape with method area(). Implement Square and Circle.
abstract class Shape{
  abstract area(): number;
}

class Square extends Shape {
  constructor(public side:number){
    super();
  }
  area(): number {
      return this.side * this.side;
  }
}
class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
const square = new Square(5);
console.log("Diện tích hình vuông:", square.area());

const circle = new Circle(3);
console.log("Diện tích hình tròn:", circle.area());

//14. Create a base class Employee. Extend Manager and Developer with specific methods.
class Employee {
  constructor(public name: string, public salary: number) {}

  work(): void {
    console.log(`${this.name} đang làm việc`);
  }
}

class Manager extends Employee {
  constructor(name: string, salary: number, public teamSize: number) {
    super(name, salary);
  }

  manageTeam(): void {
    console.log(`${this.name} đang quản lý nhóm ${this.teamSize} người`);
  }
}

class Developer extends Employee {
  constructor(name: string, salary: number, public language: string) {
    super(name, salary);
  }

  writeCode(): void {
    console.log(`${this.name} đang viết code bằng ${this.language}`);
  }
}

const manager = new Manager("Huy", 3000, 5);
manager.work();
manager.manageTeam();

const dev = new Developer("Minh", 2000, "TypeScript");
dev.work();
dev.writeCode();
//15. Create a Library class that can store Book and User objects. Add method to add books.
class Book {
  constructor(public title: string, public author: string) {}
}

class User1 {
  constructor(public name: string, public id: number) {}
}

class Library {
  private books: Book[] = [];
  private users: User1[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Đã thêm sách: ${book.title} của ${book.author}`);
  }

  addUser(user: User1): void {
    this.users.push(user);
    console.log(`Đã thêm người dùng: ${user.name} (ID: ${user.id})`);
  }

  listBooks(): void {
    console.log("Danh sách sách trong thư viện:");
    this.books.forEach((b, i) => {
      console.log(`${i + 1}. ${b.title} - ${b.author}`);
    });
  }

  listUsers(): void {
    console.log("Danh sách người dùng của thư viện:");
    this.users.forEach((u, i) => {
      console.log(`${i + 1}. ${u.name} (ID: ${u.id})`);
    });
  }
}
const lib = new Library();

const book1 = new Book("Lập trình TypeScript", "Huy");
const book2 = new Book("Học OOP", "Thư");

const user3 = new User1("Huy", 101);
const user4 = new User1("Minh", 102);

lib.addBook(book1);
lib.addBook(book2);

lib.addUser(user3);
lib.addUser(user4);

lib.listBooks();
lib.listUsers();
//16. Create a generic class Box that can store any type of value.
class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
  setValue(newValue: T): void {
    this.value = newValue;
  }
}

const numberBox = new Box<number>(123);
console.log("Giá trị numberBox:", numberBox.getValue());

const stringBox = new Box<string>("Hello TypeScript");
console.log("Giá trị stringBox:", stringBox.getValue());

const booleanBox = new Box<boolean>(true);
console.log("Giá trị booleanBox:", booleanBox.getValue());
//17. Write a singleton Logger class that logs messages to console.
class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }

  public error(message: string): void {
    console.error(`[ERROR]: ${message}`);
  }

  public warn(message: string): void {
    console.warn(`[WARN]: ${message}`);
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Ứng dụng khởi động");
logger2.warn("Cảnh báo dung lượng bộ nhớ thấp");
logger2.error("Lỗi kết nối cơ sở dữ liệu");
console.log("logger1 === logger2 ?", logger1 === logger2); 

//18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide().
class MathUtil {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static divide(a: number, b: number): number {
    if (b === 0) throw new Error("Không thể chia cho 0");
    return a / b;
  }
}
console.log(MathUtil.add(5, 3));      
console.log(MathUtil.subtract(10, 4));
console.log(MathUtil.multiply(6, 7)); 
console.log(MathUtil.divide(20, 5));  
//19. Demonstrate method overriding using polymorphism with Animal and subclasses.
// 19. Method overriding polymorphism
class AnimalBase {
  speak(): void {
    console.log("Động vật phát ra âm thanh");
  }
}
class Dog3 extends AnimalBase {
  speak(): void {
    console.log("Chó sủa: Gâu gâu");
  }
}
class Cat2 extends AnimalBase {
  speak(): void {
    console.log("Mèo kêu: Meo meo");
  }
}
const animals: AnimalBase[] = [new AnimalBase(), new Dog3(), new Cat2()];
animals.forEach(a => a.speak());

//20. Write a Vehicle interface and implement it in Car and Bike classes.
interface Vehicle {
  brand: string;
  speed: number;
  drive(): void;
}

class CarVehicle implements Vehicle {
  constructor(public brand: string, public speed: number) {}

  drive(): void {
    console.log(`${this.brand}  đang đi với tốc độ ${this.speed} km/h`);
  }
}

class BikeVehicle implements Vehicle {
  constructor(public brand: string, public speed: number) {}

  drive(): void {
    console.log(`${this.brand}  đang đi với tốc độ ${this.speed} km/h`);
  }
}

const car20 = new CarVehicle("Toyota", 120);
const bike20 = new BikeVehicle("Honda", 60);

car20.drive();
bike20.drive();

//21. Create a generic Repository class with methods add(), getAll().
class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const numberRepo = new Repository<number>();
numberRepo.add(10);
numberRepo.add(20);
console.log("NumberRepo:", numberRepo.getAll());

const stringRepo = new Repository<string>();
stringRepo.add("TypeScript");
stringRepo.add("OOP");
console.log("StringRepo:", stringRepo.getAll());

// 22. Stack class
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const stack = new Stack<number>();
console.log("Ngăn xếp có rỗng không?", stack.isEmpty()); 

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Phần tử trên cùng:", stack.peek()); 
console.log("Lấy ra (pop):", stack.pop());      
console.log("Phần tử trên cùng sau khi pop:", stack.peek()); 
console.log("Ngăn xếp có rỗng không?", stack.isEmpty()); 

//23. Create an interface Payment with method pay(amount). Implement CashPayment and CardPayment.
interface Payment {
  pay(amount: number): void;
}

class CashPayment implements Payment {
  pay(amount: number): void {
    console.log(`Thanh toán ${amount} VNĐ bằng tiền mặt`);
  }
}

class CardPayment implements Payment {
constructor(private cardNumber: string) {}

  pay(amount: number): void {
    console.log(`Thanh toán ${amount} VNĐ bằng thẻ: ${this.cardNumber}`);
  }
}

const cash = new CashPayment();
cash.pay(500000);

const card = new CardPayment("1234567812345678");
card.pay(1200000);

//24. Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.
abstract class Appliance {
  constructor(public brand: string) {}

  abstract turnOn(): void;
}

class Fan24 extends Appliance {
  turnOn(): void {
    console.log(`${this.brand} quạt đang quay`);
  }
}

class AirConditioner extends Appliance {
  turnOn(): void {
    console.log(`${this.brand} máy lạnh đang chạy`);
  }
}

const fan = new Fan24("Panasonic");
fan.turnOn();

const ac = new AirConditioner("Daikin");
ac.turnOn();

//25. Create a class Shape with a static method describe().
class Shape25 {
  static describe(): void {
    console.log("Shape là lớp cơ sở cho các hình học như vuông, tròn, tam giác");
  }
}
Shape25.describe();

//26. Create a class Order with list of products. Add method to calculate total price.
class Product26 {
  constructor(public name: string, public price: number) {}
}

class Order26 {
  private products: Product26[] = [];

  addProduct(product: Product26): void {
    this.products.push(product);
  }

  calculateTotal(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }

  listProducts(): void {
    console.log("Danh sách sản phẩm trong đơn hàng:");
    this.products.forEach((p, i) =>
      console.log(`${i + 1}. ${p.name} - ${p.price} VNĐ`)
    );
  }
}

const order = new Order26();
order.addProduct(new Product26("Laptop", 15000000));
order.addProduct(new Product26("Chuột", 500000));
order.addProduct(new Product26("Bàn phím", 800000));

order.listProducts();
console.log("Tổng tiền:", order.calculateTotal(), "VNĐ");

//27. Create a class Teacher that extends Person. Add subject attribute and introduce method.
class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }
  introduce(): string {
    return `tôi là ${this.name}, ${this.age} tuổi, dạy môn ${this.subject}.`;
  }
}

const teacher = new Teacher("Minh Thư", 35, "Toán");
console.log(teacher.introduce());

//28. Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.
class Animal28 {
  constructor(public name: string) {}

  protected makeSound(): string {
    return "Động vật phát ra âm thanh";
  }

  speak(): void {
    console.log(`${this.name}: ${this.makeSound()}`);
  }
}
class Dog28 extends Animal28 {
  protected makeSound(): string {
    return "Gâu gâu";
  }
}

class Cat28 extends Animal28 {
  protected makeSound(): string {
    return "Meo meo";
  }
}
const dog28 = new Dog28("Cún");
dog28.speak();

const cat28 = new Cat28("Mèo");
cat28.speak();

const animal28 = new Animal28("Thú");
animal28.speak();

//29. Create an interface Movable with method move(). Implement it in Car and Robot.
interface Movable {
  move(): void;
}

class Car29 implements Movable {
  constructor(public brand: string) {}
  move(): void {
    console.log(`${this.brand} car đang di chuyển trên đường`);
  }
}

class Robot29 implements Movable {
  constructor(public model: string) {}
  move(): void {
    console.log(`Robot ${this.model} đang đi bộ`);
  }
}

const car29 = new Car29("Toyota");
car29.move();

const robot29 = new Robot29("RoboX");
robot29.move();
//30. Create a class School with list of Students and Teachers. Add method to display info.
class Student30 {
  constructor(public name: string, public age: number, public grade: string) {}

  getInfo(): string {
    return `Học sinh: ${this.name}, ${this.age} tuổi, Lớp: ${this.grade}`;
  }
}

class Teacher30 {
  constructor(public name: string, public subject: string) {}

  getInfo(): string {
    return `Giáo viên: ${this.name}, Môn: ${this.subject}`;
  }
}

class School30 {
  private students: Student30[] = [];
  private teachers: Teacher30[] = [];

  addStudent(student: Student30): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher30): void {
    this.teachers.push(teacher);
  }

  displayInfo(): void {
    console.log("Ds giáo viên");
    this.teachers.forEach((t) => console.log(t.getInfo()));

    console.log("Ds học sinh");
    this.students.forEach((s) => console.log(s.getInfo()));
  }
}
const school = new School30();
school.addTeacher(new Teacher30("Nguyễn Văn Huy", "Toán"));
school.addTeacher(new Teacher30("Thư Nguyen", "Văn"));

school.addStudent(new Student30("An", 16, "10A1"));
school.addStudent(new Student30("Minh", 17, "11B2"));

school.displayInfo();
