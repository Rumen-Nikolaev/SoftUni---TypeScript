# Generics in TypeScript

## Overview

This repository explores the use of Generics in TypeScript, focusing on building reusable software components that work with multiple data types. Generics allow functions, classes, and interfaces to be flexible and type-safe, enabling the use of different types without code duplication.

## Table of Contents

- [Introduction to Generics](#introduction-to-generics)
- [Generic Functions](#generic-functions)
- [Generic Interfaces](#generic-interfaces)
- [Generic Classes](#generic-classes)
- [Generic Type Constraints](#generic-type-constraints)
- [Summary](#summary)

## Introduction to Generics

Generics provide a way to create components that can work with any data type while still maintaining type safety. A type variable `<T>` is used to abstract the data type. This helps follow the DRY (Don't Repeat Yourself) principle and allows for reusable, maintainable code.

Generics can be used with:
- Functions
- Classes
- Interfaces

## Generic Functions

Generic functions allow you to write functions that can accept arguments of any type and return values of the same type.

### Example: Generic vs Non-Generic

#### Generic Function:
```typescript
function echo<T>(arg: T): T {
    console.log(typeof arg);
    return arg;
}
echo(11111);   // number
echo('Hello'); // string


