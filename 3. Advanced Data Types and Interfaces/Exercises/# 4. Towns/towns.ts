function createTownObjects(data: string[]): void {
    data.forEach(row => {
        // Split the input row by ' | '
        const [town, latitudeStr, longitudeStr] = row.split(' | ');

        // Parse latitude and longitude to numbers and format to 2 decimal 
        const latitude = parseFloat(latitudeStr).toFixed(2);
        const longitude = parseFloat(longitudeStr).toFixed(2);

        // Create the object with the required fields
        const townObj = {
            town: town,
            latitude: latitude,
            longitude: longitude 
        };

        console.log(townObj);
    });
}

const input = [
  'Sofia | 42.696552 | 23.32601',
  'Beijing | 39.913818 | 116.363625'
]

createTownObjects(input);
