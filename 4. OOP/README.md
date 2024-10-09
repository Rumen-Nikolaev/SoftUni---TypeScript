# Object-Oriented Programming (OOP) in TypeScript

## Overview

This project provides an introduction to Object-Oriented Programming (OOP) using **TypeScript**. It explains key OOP principles like **abstraction**, **encapsulation**, **inheritance**, and **polymorphism**, and demonstrates them with TypeScript code examples.

## Table of Contents
1. [What is Object-Oriented Programming?](#what-is-object-oriented-programming)
2. [Core Principles of OOP](#core-principles-of-oop)
3. [Classes and Objects](#classes-and-objects)
4. [Class Members](#class-members)
5. [Access Modifiers](#access-modifiers)
6. [Abstract Classes](#abstract-classes)
7. [Examples](#examples)

## What is Object-Oriented Programming?

**Object-Oriented Programming (OOP)** is a programming paradigm that uses objects to organize code. The core ideas of OOP are based on:

- **Classes**: Blueprints for creating objects.
- **Objects**: Instances of classes.
- **Inheritance**: Create new classes based on existing ones.
- **Polymorphism**: Allow different types to be used interchangeably.
- **Encapsulation**: Restrict access to certain details of objects.
- **Abstraction**: Hide complex details and expose only what's necessary.

## Core Principles of OOP

1. **Abstraction**: Focus on essential features and hide unnecessary details.
2. **Encapsulation**: Bundle data and behavior within a class, controlling access with access modifiers.
3. **Inheritance**: Create new classes based on existing ones to promote code reuse.
4. **Polymorphism**: Provide a common interface for different types, allowing flexibility.

## Classes and Objects

A **class** is a blueprint for creating objects. It defines properties and methods that the objects will have. 

An **object** is an instance of a class with specific property values.

### Example:
```typescript
class Dog {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    bark() {
        return `${this.name} is barking.`;
    }
}

let dog = new Dog('Tommy', 3);
console.log(dog.bark()); // Output: Tommy is barking.
```
## Class Members

### Properties
Properties store data in an object. They are defined within a class and initialized by the constructor.

### Methods
Methods are functions that define the behavior of a class. Each method should have a clear and focused purpose.

### Constructor
A constructor initializes the object's properties. Each class can only have one constructor.

### Access Modifiers
Access modifiers control the visibility of class members:

- **Public**: Accessible from anywhere.
- **Private**: Only accessible within the class.
- **Protected**: Accessible within the class and its subclasses.
- **Readonly**: Allows access, but prohibits modification.

### Example:
```typescript
class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): string {
        return `Hello, my name is ${this.name}.`;
    }
}
```

### Abstract Classes
Access modifiers control the visibility of class members:
Abstract classes cannot be instantiated directly. They can define methods without implementations, which must be implemented by subclasses.

### Example:
```typescript
abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Bark");
    }
}

const dog = new Dog();
dog.makeSound(); // Output: Bark

```
