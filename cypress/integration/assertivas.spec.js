/// <reference types="cypress" />

it("Equality", () => {
  const a = 1;
  expect(a).equal(1);
  expect(a, "Deveria ser igual a 1").equal(1);
  expect(a).to.be.equal(1);
  expect("a").not.to.be.equal("b");
});

it("Truthy", () => {
  const a = true;
  const b = null;
  let c;

  expect(a).to.be.true;
  expect(true).to.be.true;
  expect(b).to.be.null;
  expect(a).to.be.not.null;
  expect(c).to.be.undefined;
});

it("Object Equality", () => {
  const obj = {
    a: 1,
    b: 2,
  };

  expect(obj).equal(obj);
  expect(obj).equals(obj);
  expect(obj).eq(obj);
  expect(obj).to.be.equal(obj);
  expect(obj).to.be.deep.equal({ a: 1, b: 2 });
  expect(obj).eql({ a: 1, b: 2 });
  expect(obj).include({ a: 1 });
  expect(obj).to.have.property("b");
  expect(obj).to.have.property("b", 2);
  expect(obj).to.not.be.empty;
  expect({}).to.be.empty;
});

it("Arrays", () => {
  const arr = [1, 2, 3];
  expect(arr).to.have.members([1, 2, 3]); // espera que em arr exita os membros 1,2,3
  expect(arr).to.include.members([1, 3]); //espera que 1 e 3 fazem parte de arr
  expect(arr).to.not.be.empty; // espera que arr não seja vazia
  expect([]).to.be.empty; // espera que seja uma string vazia
});

it("Types", () => {
  const num = 1;
  const str = "String";

  expect(num).to.be.a("number"); //espera que num seja do tipo number
  expect(str).to.be.a("String"); //espera que num seja do tipo String
  expect({}).to.be.an("object"); //espera que {} seja um objeto
  expect([]).to.be.an("array"); // Espera que [] seja uma array
});

it("String", () => {
  const str = "String de teste";

  expect(str).to.be.equal("String de teste"); // Espeara que o conteúdo seja igual
  expect(str).to.have.length(15); // espera que a string tenha um tamanho de 15 caracteres
  expect(str).to.contains("de"); // espera que exita um 'de' na string
  expect(str).to.match(/^String/); // espera que exista 'String' e que o conteúdo de str comece com 'String'
  expect(str).to.match(/teste$/); // espera que exista 'Teste' e que o conteúdodo de str termine com 'teste'
  expect(str).to.match(/.{15}/); // tamanho da String
  expect(str).to.match(/\w+/); // espera que exista apenas letras
  expect(str).to.match(/\D+/); // espera que não exista números
});

it("Numbers", () => {
  const number = 4;
  const floatNumber = 5.2123;

  expect(number).to.be.equal(4);
  expect(number).to.be.above(3); // espera que number seja acima de 3
  expect(number).to.be.below(7); //esepque que number esteja abaixo de 7
  expect(floatNumber).to.be.closeTo(5.2, 0.1); // espera que floatNumber seja próximo do valor 5.2 com precisão de 0.1
  expect(floatNumber).to.be.above(5);
});
