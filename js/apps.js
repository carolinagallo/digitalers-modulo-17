function gastoConIva(numero) {
  let IVA = numero * 1.21;
  return IVA;
}

let numeros = [10000, 5000, 3000, 100];

function map(numeros, callback) {
  let matriz = numeros.map((numero) => [numero, callback(numero)]);
  return matriz;
}
