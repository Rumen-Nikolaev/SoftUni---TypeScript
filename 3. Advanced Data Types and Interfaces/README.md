# Advanced Data Types

This document covers advanced data types in TypeScript, focusing on concepts like union types, intersection types, literal types, type aliases, interfaces, and more.

## Table of Contents
1. Union Types
2. Intersection Types
3. Literal Types
4. Type Aliases
5. Mapped Types
6. Recursive Types
7. Interfaces
8. Interfaces vs Types

## 1. Union Types
Union types allow combining multiple types into one. The value can be of any of the specified types.

Example:
```typescript
function greet(message: string | string[]) {
  if (typeof message === "string") {
    return message;
  }
  return message.join(' ');
}

let greetingArray = ['Dear', 'Sir/Madam'];
console.log(greet(greetingArray)); // Output: Dear Sir/Madam

