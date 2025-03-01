export class User {
    name: string;
    age: number;
    phone: string;
    address: string;

    constructor(name: string, age: number, phone: string, address: string) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}