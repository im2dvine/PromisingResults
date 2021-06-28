/**
slowMath
  .add(6, 2)
  .then((mul) => {
    console.log(`multiply 6 and 2 is ${mul}`);
    return slowMath.multiply(mul, 2);
  })
  .then((div) => {
    console.log(`multiply that by 2 is ${div}`);
    return slowMath.divide(div, 4);
  })
  .then((sub) => {
    console.log(`Dividing that by 4 is ${sub}`);
    return slowMath.subtract(sub, 3);
  })
  .then((sub) => {
    console.log(`Subtracting that by 3 is ${sub}`);
    return slowMath.add(sub, 98);
  })
  .then((add) => {
    console.log(`Adding 98 to that is ${add}`);
    return slowMath.remainder(add, 2);
  })
  .then((div) => {
    console.log(`reminder is divided by 2 is ${div}`);
    return slowMath.multiply(div, 50);
  })
  .then((mul) => {
    console.log(`Multiplying that by 50 is ${mul}`);
    return slowMath.remainder(mul, 40);
  })
  .then((add) => {
    console.log(`Remainder of that by 40 is ${add}`);
    return slowMath.add(add, 32);
  })
  .then((sum) => {
    console.log(`Sum of that and 32 is ${sum}`);
  })
  .catch((err) => {
    console.log(err);
  });*/

  async function waitForMath() {
    try {
      let wait = await slowMath.add(6, 2);
      console.log(wait);
      wait = await slowMath.multiply(wait, 2);
      console.log(wait);
      wait = await slowMath.divide(wait, 2);
      console.log(wait);
      wait = await slowMath.subtract(wait, 3);
      console.log(wait);
      wait = await slowMath.add(wait, 98);
      console.log(wait);
      wait = await slowMath.remainder(wait, 2);
      console.log(wait);
      wait = await slowMath.multiply(wait, 50);
      console.log(wait);
      wait = await slowMath.remainder(wait, 40);
      console.log(wait);
      wait = await slowMath.add(wait, 32);
      console.log(`The final result is ${wait}`);
    } catch (error) {
      console.log(err);
    }
  }
  
  waitForMath();