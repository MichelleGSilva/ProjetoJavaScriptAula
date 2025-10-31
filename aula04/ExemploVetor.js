let vetorStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky Siberiano", "Corgi"];

for (let indice = 0; indice < 5; indice++)
  {
    // template literals console.log(``)
      console.log(`${indice + 1}º elemento: ${vetorStrings[indice]}`);
      // console.log((indice + 1) + "º elemento:" + vetorStrings[indice]) - outra forma de fazer o acima
  }

  // console.log(vetorStrings.length) exibe o comprimento do vetor