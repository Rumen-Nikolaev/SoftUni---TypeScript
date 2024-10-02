# Introduction to TypeScript

## Table of Contents
1. [Introduction to TypeScript](#introduction-to-typescript)
2. [TypeScript vs JavaScript](#typescript-vs-javascript)
3. [Environment and Setup](#environment-and-setup)
4. [Basic Data Types](#basic-data-types)
5. [Debugging](#debugging)
6. [Summary](#summary)

## Introduction to TypeScript
TypeScript is an open-source programming language developed by Microsoft. It is a statically typed superset of JavaScript that compiles to plain JavaScript. The addition of optional static typing makes it a robust and maintainable tool for developers working on large-scale applications.

### Key Benefits:
- **Static Typing**: Helps catch errors during development, improving code quality.
- **Better Tooling**: Offers enhanced support with intelligent auto-completion and refactoring.
- **Readability and Maintainability**: Type annotations serve as self-documentation.
- **Scalability**: TypeScript is suitable for larger projects.

## TypeScript vs JavaScript
- **JavaScript**: A dynamic, loosely typed language used for web development.
- **TypeScript**: A statically typed superset of JavaScript that provides additional features such as static typing, interfaces, classes, enums, generics, and modules.

Example of TypeScript vs JavaScript:
```typescript
// TypeScript
class Person {
  private firstName: string;
  constructor(fName: string) {
    this.firstName = fName;
  }
  greeting() {
    return `${this.firstName}`;
  }
}

// JavaScript
class Person {
  constructor(fName) {
    this.firstName = fName;
  }
  greeting() {
    return `${this.firstName}`;
  }
}
```

## Basic Data Types
```typescript

// String: Represents textual data.
let str: string = 'hello';

// Number: Represents numeric data.
let decimal: number;

// Boolean: Holds true or false values.
le isBool: boolean = true;

// Symbol: Represents unique data.
let uniqueSymbol: symbol = Symbol('mySymbol');

// null and undefined: Special types for representing absence of value
let person: null = null;
let undefinedValue: undefined = undefined;

// Array: Holds a collection of elements of a specified type.
let arrayOfStr: string[] = ['Hello', 'World'];

// Tuple: Fixed-size array with specified types for each element.
let tuple: [string, number] = ['Hello', 11];

// Enum: Defines named constants for better readability.
enum DaysOfTheWeek { Monday, Tuesday };

// Any: Can hold any value
let a: any = 'hello';

// Void: Used for functions that do not return a value.
function greet(message: string): void {
  console.log(message);
}
```
