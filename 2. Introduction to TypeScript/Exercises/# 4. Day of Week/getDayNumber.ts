function getDayNumber(day: string): void {
    switch (day.toLowerCase()) {
        case "monday":
            console.log(1);
            break;
        case "tuesday":
            console.log(2);
            break;
        case "wednesday":
            console.log(3);
            break;
        case "thursday":
            console.log(4);
            break;
        case "friday":
            console.log(5);
            break;
        case "saturday":
            console.log(6);
            break;
        case "sunday":
            console.log(7);
            break;
        default:
            console.log("Error: Invalid day of the week");
    }
}

getDayNumber("Monday"); 
getDayNumber("Sunday");
getDayNumber("Funday"); 
