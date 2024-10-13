## 3. Car Dealership

### Task

Create two generic interfaces:

- `Dealership<T>`: Takes one generic type parameter and has two properties: `dealershipName` and `soldCars` (initially set to 0).
- `Actions<T>`: Takes one generic type parameter and defines a `sellCar(dealerID: T, model: T)` method, where both parameters are of the generic type passed to the interface.

Create a class `CarDealership` that implements both `Dealership` and `Actions` and has one property of its own:

- Public property `modelsSold`, which is initially set to an empty object.

The `dealershipName` is taken through the constructor, and `soldCars` is initially set to 0.

Make the following two methods:

- `sellCar(dealerID: T, model: T)`: Adds the dealerID as a key and the model as the value in the `modelsSold` object and increases `soldCars` by 1.
- `showDetails()`: Returns a message in the following format:
