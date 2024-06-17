// # Домашнє завдання - Урок 13
// ## Управління автопарком через масив об'єктів
// 1. Створіть масив vehicles, який буде містити об'єкти,
//кожен з яких представляє транспортний засіб у вашому автопарку.

// 2. Створення об'єктів для автопарку:
// Кожен об'єкт повинен мати наступні властивості:
// - model: модель транспортного засобу (наприклад, "Toyota Camry").
// - type: тип транспортного засобу (наприклад, "легковий автомобіль").
// - year: рік випуску.
// - isOperational: булеве значення, що вказує, чи є транспортний
//засіб у робочому стані.

// 3. Додайте не менше 5 різних транспортних засобів до масиву vehicles,
//які представляють різні моделі і типи транспортних засобів у вашому автопарку.

// 4. Виведення інформації:
// - Виведіть в консоль інформацію про всі транспортні засоби в масиві.
// - Виведіть окремо інформацію про транспортні засоби, які є у робочому стані
//(isOperational дорівнює true).

let vehicles = [
  {
    model: "Toyota Camry",
    type: "Легковий автомобіль",
    year: 2019,
    isOperational: true,
  },
  {
    model: "Ford Transit",
    type: "Вантажівка",
    year: 2015,
    isOperational: false,
  },
  {
    model: "Honda CR-V",
    type: "Кросовер",
    year: 2021,
    isOperational: true,
  },
  {
    model: "Volkswagen Golf",
    type: "Хетчбек",
    year: 2018,
    isOperational: true,
  },
  {
    model: "Mercedes-Benz Sprinter",
    type: "Мікроавтобус",
    year: 2020,
    isOperational: true,
  },
];

console.log("All vechicles:");
for (let i = 0; i < vehicles.length; i++) {
  console.log(
    `Model: ${vehicles[i].model}, Type: ${vehicles[i].type}, Year: ${vehicles[i].year}, Work: ${vehicles[i].isOperationa}`
  );
}
console.log("\n\tWorking vechicles:");
for (let i = 0; i < vehicles.length; i++) {
  let vechicles = vehicles[i];
  if (vechicles.isOperational) {
    console.log(
      `Model: ${vehicles[i].model}, Type: ${vehicles[i].type}, Year: ${vehicles[i].year}`
    );
  }
}
