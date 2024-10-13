# TypeScript Generics and OOP Exercises

This repository contains TypeScript exercises that focus on the use of generics, object-oriented programming principles, and interface implementation. Below are the task descriptions.

## Table of Contents

1. [Generic Box of String](#generic-box-of-string)
2. [Generic Compare Elements](#generic-compare-elements)
3. [Car Dealership](#car-dealership)
4. [Bank Transactions](#bank-transactions)

---

## 1. Generic Box of String

### Task

Create a generic class `Box<T>` that takes one property from the constructor. This property must be initialized with a generic type. Implement a `toString()` method that returns a message in the following format:

- "{data} is of type {type}"

---

## 2. Generic Compare Elements

### Task

Create a generic class `CompareElements<T>` that has an array of a generic type as a property. Implement a `compare(comparator: T)` method that takes a parameter of any type. Iterate through the array and compare each element with the comparator, returning how many times the comparator matches.

---

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


---

## 4. Bank Transactions

### Task

Create an abstract generic class `CreateAccount<T, U>` that takes two generic type parameters: `bankName` and `bankID`.

Create a class `PersonalAccount` that extends `CreateAccount` and has three properties of its own:

- A readonly property `ownerName` (string).
- A public property `money` (number), which is initially set to 0.
- A public property `recentTransactions`, which is initially set to an empty object.

Only the `ownerName` is taken through the constructor.

Make the following three methods:

- `deposit(amount: number)`: Adds the amount to the current `money`.
- `expense(amount: number, expenseType: string)`: Checks if there is enough money (>= 0) to make the expense. If so, add the `expenseType` as a key and the amount as the value in the `recentTransactions` object. If the same expense has been made more than once, add the new amount to the existing one. If there is not enough money for the expense, throw an error: `"You can't make {expenseType} transaction"`.
- `showDetails()`: Calculates the total amount of money spent on expenses and returns a message in the following format:


