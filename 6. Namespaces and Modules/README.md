# TypeScript Namespaces and Modules

This document provides an overview of namespaces and modules in TypeScript, highlighting their definitions, functionalities, and differences.

## Table of Contents

1. [Introduction to Namespaces](#introduction-to-namespaces)
2. [Introduction to Modules](#introduction-to-modules)
3. [Exporting and Importing](#exporting-and-importing)
4. [Namespaces vs Modules](#namespaces-vs-modules)

---

## Introduction to Namespaces

### Definition
- Namespaces are used to logically group functionalities.
- Previously referred to as internal modules in TypeScript.
- Defined with the `namespace` keyword.
- Namespaces may include functions, classes, interfaces, and variables.

### Access
- The elements of the namespace that must be accessed from the outside must be marked with the `export` keyword.
- In order to access namespaces from different files, we must use the reference syntax:
  ```typescript
  /// <reference path="file.ts" />

