/**
 * Trabalhando conceitos de JavaScript - Promises
 */

it("sem testes, ainda", () => {
  setTimeout(() => {
    return 11;
  }, 1000);
});

const getSomething = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback(12);
    }, 1000);
  });
};

const system = () => {
  console.log("init");
  const prom = getSomething();
  prom.then((some) => {
    console.log(`Something is ${some}`);
  });
  console.log("end");
};
