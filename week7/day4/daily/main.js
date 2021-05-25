// part I

let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

let getCarHonda =(inventory)=>{ 
  let firstHond  = inventory[inventory.map(function(e) { return e.car_make; }).indexOf('Honda')]
  return `This is a ${firstHond.car_make} ${firstHond.car_model} from ${firstHond.car_year}.`
}

console.log(getCarHonda(inventory))


// part II

let sortCarInventoryByYear =(array)=>{
  return array.sort((a,b)=>{
  if(a.car_year > b.car_year) return 1;
  if(a.car_year < b.car_year) return -1;
  return 0;})
}

console.log(sortCarInventoryByYear(inventory))