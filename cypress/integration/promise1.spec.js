/// <reference types= 'cypress'/>

it("Sem testes, ainda", () => {});

const getSomething = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12);
    }, 1000);
  });
};

const system = async() => {
  console.log("init");
  const some = await
  getSomething()
    .then((some) => {
      console.log(`Some is ${some}`);      
    })
    .catch((erro) => console.log(erro));
    console.log("end");
};

system();