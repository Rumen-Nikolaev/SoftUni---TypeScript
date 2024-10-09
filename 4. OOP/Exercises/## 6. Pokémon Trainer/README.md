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
