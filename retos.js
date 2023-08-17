// Reto 1
    // document.addEventListener('DOMContentLoaded', function() {
    //     const submitBtn = document.getElementById('submitBtn');

    //     submitBtn.addEventListener('click', function() {
    //         const cadena1 = document.getElementById('cadena1').value;
    //         const cadena2 = document.getElementById('cadena2').value;
    //         const resultadoTexto = document.getElementById('resultadoTexto');

    //         if (cadena1 && cadena2) {
    //             console.log('Cadenas ingresadas:', cadena1, cadena2);

    //             function interleaveStrings(cadena1, cadena2) {
    //                 let result = '';
    //                 const maxLength = Math.max(cadena1.length, cadena2.length);

    //                 for (let i = 0; i < maxLength; i++) {
    //                     if (i < cadena1.length) {
    //                         result += cadena1[i];
    //                     }
    //                     if (i < cadena2.length) {
    //                         result += cadena2[i];
    //                     }
    //                 }

    //                 return result;
    //             }

    //             function contieneSoloLetras(cadena) {
    //                 return /^[a-z]+$/.test(cadena);
    //             }

    //             const cadena1Minuscula = cadena1.toLowerCase();
    //             const cadena2Minuscula = cadena2.toLowerCase();

    //             if (contieneSoloLetras(cadena1Minuscula) && contieneSoloLetras(cadena2Minuscula)) {
    //                 const interleavedResult = interleaveStrings(cadena1Minuscula, cadena2Minuscula);
    //                 resultadoTexto.textContent = interleavedResult;
    //             } else {
    //                 alert('Por favor, ingrese solo letras en ambas cadenas.');
    //             }
    //         } else {
    //             alert('Por favor, ingrese las dos cadenas.');
    //         }
    //     });
    // });

// Reto 2
let arreglo = new Array(0);
for (let i = 0; i<= 9; i++){
    var aleatorio = Math.floor(Math.random(arreglo)*10);
    arreglo.push(aleatorio);
    console.log('El indice es '+ i);
    console.log(arreglo.random());
}