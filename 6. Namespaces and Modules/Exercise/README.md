# Lab: Namespaces and Modules

This lab consists of two tasks focusing on the use of namespaces and modules in TypeScript.

## Task 1: Greeter

### Requirements
Create a namespace `Greeter` that exports a generic interface `Greeting` with the following declarations:
- `introduction()`
- `sayGoodbye(name)` – the `name` is of the generic type.

In a new file, create a class `Person` that implements the `Greeter` interface. The class should have two private properties initialized through the constructor: 
- `name` (a string)
- `age` (a number)

### Method Implementations
- **introduction()**: Returns a string in the format: "My name is {name} and I am {age} years old."
- **sayGoodbye(name)**: Returns a string in the format: "Dear {name}, it was a pleasure meeting you!"

---

## Task 2: Deliveries

### Requirements
Create a namespace `FoodAndBeverages` that exports an interface `Delivery` with the following declarations:
- `newCustomer(customerName: string, visited: boolean)`
- `visitCustomer(customerName: string)` - this method returns a string.
- `showCustomers()` - this method returns a string.

In a new file, create a class `Courier` that implements the `Delivery` interface and has one additional property:
- **protected property** `placesToVisit` - an array of objects, set through the constructor.

### Method Implementations
- **newCustomer(customerName: string, visited: boolean)**: The `visited` parameter defaults to `false`. Check if the `customerName` is already a customer. If so, throw an error. Otherwise, add the customer to the `placesToVisit` array and return a message indicating the customer became your client.

- **visitCustomer(customerName: string)**: Check if the `customerName` is your client. If not, throw an error. Otherwise, mark the customer as visited.

- **showCustomers()**: Print all the customers in the format: "{customerName} -> visited".

