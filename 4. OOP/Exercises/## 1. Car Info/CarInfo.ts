class Car {
    public brand: string;
    public model: string;
    public horsepower: number;

    constructor(brand: string, model: string, horsepower: number) {
        this.brand = brand;
        this.model = model;
        this.horsepower = horsepower;
    }

    getBrand(): string {
        return this.brand;
    }

    setBrand(brand: string): void {
        this.brand = brand;
    }

    getModel(): string {
        return this.model;
    }

    setModel(model: string): void {
        this.model = model;
    }

    getHorsepower(): number {
        return this.horsepower;
    }

    setHorsepower(horsepower: number): void {
        this.horsepower = horsepower;
    }

    printCarInfo(): void {
        console.log(`The car is: ${this.brand} ${this.model} - ${this.horsepower} HP.`);
    }
}

const carInput = "Chevrolet Impala 390";
const [brand, model, horsepowerStr] = carInput.split(" ");
const horsepower = parseInt(horsepowerStr, 10);

const car = new Car(brand, model, horsepower);
car.printCarInfo(); 
