
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

---
