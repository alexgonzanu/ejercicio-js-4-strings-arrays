const palabras = ['café', 'croissant', 'tostada', 'zumo'];

const modificaPares = (array, fa) => {
  let arrayModificada = [];
  for (let contador in array) {
    if (contador % 2 !== 0) {
      arrayModificada.push(fa(array[contador]));
    } else {
      arrayModificada.push(array[contador]);
    }
  }
  return arrayModificada;
}

console.log(modificaPares(palabras, elemento => {
  let nuevaPalabra = "";
  for (let i in elemento) {
    if (i % 2 === 0) {
      nuevaPalabra += elemento.charAt(i).toUpperCase();
    } else {
      nuevaPalabra += elemento.charAt(i);
    }
  }
  return nuevaPalabra;
}))
