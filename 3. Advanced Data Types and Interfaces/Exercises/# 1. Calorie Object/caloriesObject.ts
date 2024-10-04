function composeCalorieObject(input: string[]): void {
    const foodCalories: { [key: string]: number } = {};

    for (let i = 0; i < input.length; i += 2) {
        const food = input[i];
        const calories = parseInt(input[i + 1], 10);
        foodCalories[food] = calories;
    }

    console.log(foodCalories);
}

composeCalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
