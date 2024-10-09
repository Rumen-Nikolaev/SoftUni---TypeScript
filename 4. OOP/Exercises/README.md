# Task Descriptions

## 1. Car Info
Create a class named `Car`.  
The class should have public fields for:
- **Brand**: text
- **Model**: text
- **Horsepower**: integer number

Create getters and setters for each class field.

### Program Requirements
- The input consists of a single line representing a car object.
- The car info will be in the following format: `{brand} {model} {horsePower}`, separated by a single space.
- Print the car in the following format:  
  `"The car is: {brand} {model} - {horsePower} HP."`

---

## 2. Opinion Poll
Create a `Person` class with two fields: `name` and `age`.  

### Program Requirements
- The program will receive personal information in the following format: `{name} {age}`.
- Print the data in the following format:  
  `{name} is {age} years old.`

---

## 3. Bank Account
Create a class named `BankAccount`.  
The class should have private fields for:
- **Id**: int (Starts from 1 and increments for every new account)
- **Balance**: double
- **Interest rate**: double (Shared for all accounts. Default value: 0.02)

The class should have the following public methods:
- **setInterestRate**
- **getInterest**
- **deposit**

### Program Requirements
Create a test client supporting the following commands:
- **Create**
- **Deposit {Id} {Amount}**
- **SetInterest {Interest}**
- **GetInterest {ID} {Years}**
- **End**

---

## 4. Hierarchical Inheritance
Create three classes: `Animal`, `Dog`, and `Cat`.  
- `Animal`: Has a public method `eat()` that prints "eating…".
- `Dog`: Inherits from `Animal`, and has a public method `bark()` that prints "barking…".
- `Cat`: Inherits from `Animal`, and has a public method `meow()` that prints "meowing…".

---

## 5. Company Roster
Define a class named `Employee` that holds the following information:
- **name**, **salary**, **position**, **department** (mandatory)
- **email**, **age** (optional)

### Program Requirements
- Write a program that takes multiple lines of information about employees and calculates the department with the highest average salary.
- Print the employees in that department

## 6. Pokémon Trainer

## Task Overview
The objective of this task is to define a class structure for Pokémon trainers and their Pokémon. Each trainer can capture Pokémon, earn badges through tournaments, and manage the health of their Pokémon based on specific tournament commands.

## Class Definitions

### Trainer Class
- **Attributes:**
  - `name`: (string) The name of the trainer (unique).
  - `badges`: (integer) The number of badges the trainer has. Default value is 0.
  - `pokemon`: (array) A collection of Pokémon caught by the trainer.

### Pokémon Class
- **Attributes:**
  - `name`: (string) The name of the Pokémon.
  - `element`: (string) The element type of the Pokémon (e.g., Fire, Water, Electricity).
  - `health`: (integer) The health points of the Pokémon.




