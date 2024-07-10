/* 1. Use forEach to console log each name to the console. */
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

names.forEach(name => console.log(name));

/** 2. Use forEach to console log each name with a matching province. */
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

/** 3. Using map, turn all province names to uppercase and log the new array.*/
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

/** 4. Create a new array with map that has the amount of characters in each name. */
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

/** 5. Using toSorted to sort all provinces alphabetically. */
const sortedProvinces = provinces.toSorted();
console.log(sortedProvinces);

/** 6. Use filter to remove all provinces that have the word "Cape" and return the number of remaining provinces. */
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

/** 7. Create a boolean array with map and some to determine whether a name contains an "S" character. */
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log(containsS);

/** 8. Using only reduce, turn the names and provinces into an object. */
const namesProvincesObject = names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
  }, {});
  console.log(namesProvincesObject);
  
  /** ADDITIONAL EXERCISES
   *   1. Use forEach to console.log each product name to the console.
   * 2. Use filter to filter out products that have a name longer than 5 characters.
   * 3. Using filter and map, convert prices to numbers and remove products without prices, then use reduce to calculate the total price.
   * 4. Use reduce to concatenate all product names into a single string.
  */
  const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];
  
  
  products.forEach(product => console.log(product.product));

  //2
  const shortNamedProducts = products.filter(product => product.product.length <= 5);
console.log(shortNamedProducts);

//3
const totalValidPrices = products
  .filter(product => product.price.trim() !== '')
  .map(product => ({ ...product, price: Number(product.price) }))
  .reduce((total, product) => total + product.price, 0);

console.log(totalValidPrices);

//4
const concatenatedProductNames = products.reduce((acc, product, index, array) => {
    return acc + product.product + (index < array.length - 1 ? ', ' : '');
  }, '');
  console.log(concatenatedProductNames);

// 5. Use reduce to calculate the highest and lowest-priced items and return them in a string.
const highestLowest = products.reduce((acc, product) => {
    const price = Number(product.price) || 0;
    if (price > acc.highest.price) acc.highest = { name: product.product, price };
    if (price < acc.lowest.price) acc.lowest = { name: product.product, price };
    return acc;
  }, { highest: { name: '', price: -Infinity }, lowest: { name: '', price: Infinity } });
  
  console.log(`Highest: ${highestLowest.highest.name}. Lowest: ${highestLowest.lowest.name}.`);
  
  //6. Using Object.entries and reduce, recreate the object with changed keys.
  const renamedProducts = products.map(product => {
    return Object.entries(product).reduce((acc, [key, value]) => {
      if (key === 'product') acc.name = value;
      if (key === 'price') acc.cost = value;
      return acc;
    }, {});
  });
  
  console.log(renamedProducts);
