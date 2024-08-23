const carData = '[["Toyota", "Camry", "ABC123", 2014, "diesel"], ["Ford", "Focus", "XYZ456", 1999, "petrol"], ["Peugeot", "206", "XYZ789", 1995, "diesel"], ["BMW", "X5", "ABC456", 2010, "diesel"]]';

function calculateFines(carData) {
  const parsedCarData = JSON.parse(carData);

  if (parsedCarData === undefined || parsedCarData.length === 0) {
    return { totalFines: 0, cars: [] };
  }

  let totalFine = 0;
  const cars = [];

  for (let i = 0; i < parsedCarData.length; i++) {
    const car = parsedCarData[i];
    const year = car[3];
    const fuelType = car[4];
    const reg = car[2];

    let fine = 0;

    if (year < 2000) {
      fine = 20;
    } 
    else if (fuelType === 'diesel' && year < 2015) {
      fine = 10;
    }

    if (fine > 0) {
      totalFine += fine;
      cars.push({ reg, year, fuel: fuelType, fine });
    }
  }

  return { totalFines: totalFine, cars };
}

console.log(calculateFines(carData));
