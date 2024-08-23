function calculateFines(carData) {

  const parsedCarData = JSON.parse(carData);

  let totalFine = 0;
  const finedCars = [];

  for (let i = 0; i < parsedCarData.length; i++) {
    const car = parsedCarData[i];
    const make = car[0];
    const model = car[1];
    const reg = car[2];
    const year = car[3];
    const fuelType = car[4];

    let fine = 0;

    if (year < 2000) {
      fine = 20;
    }

    else if (fuelType === 'diesel' && year < 2015) {
      fine = 10;
    }

    if (fine > 0) {
      totalFine += fine;
      finedCars.push({ reg, year, fuelType, fine });
    }
  }

  return JSON.stringify({
    totalFines: totalFine,
    cars: finedCars
  });
}

const carData = '[["Toyota", "Camry", "ABC123", 2014, "diesel"], ["Ford", "Focus", "XYZ456", 1999, "petrol"]]';
console.log(calculateFines(carData));
