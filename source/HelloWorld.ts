export class HelloWorld {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): string {
        return 'Hi, ' + this.name;
    }
}
