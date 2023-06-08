// let premiers = [1,2,3,5];

// let i = 6;

// while (i < premiers) {   

// if (i / i) {

// }

//     }

// console.log(premiers);

// let prems= [1,2,3,5];
// let testedNumber = 1;
// let counter = prems.length;
// let trueorfalse = false;

// while (counter < 100) {
//     for (let i = 0; i < prems.length; i++) {
//         if (index < prems[i] !=0) {

//         } else {

//         }

//     }
// }
// console.log(counter);


// function prime(n) {
//     for (let i = 2; i < n - 1; i++) {
//         if (n % i === 0) {
//             return false
//         }

//     }
//     return true
// }
// console.log(prime(337))




// function positif(p) {
//     if (p > 0) {
//         return true;

//     } else {
//         return false;
//     }

// }
// console.log(positif(0))


// for (let i = 0; i < 70; i + 7) {
//     i = i + 7
//     console.log(i);
// }



// let result = "/n"

// for (let i = 1; i < 11; i++) {
//     console.log(i)

//     for (let j = 1; j < 11; j++) {
//         result += (i * j + " ");
//     }

// }

// console.log(result);



// let tmp = [2, 7, 3, 6, 1, 5];

// let somme = 0;

// for (let i = 0; i < tmp.length; i++) {
//     somme += tmp[i];
// }
// console.log(somme);



// let tmp = [15,10,18,7,20,12,9,11];

// let moyenneClasse = 0;

// function moyenne(tmp){
//     for (let i = 0; i < tmp.length; i++){
//         moyenneClasse += tmp[i];
//     }
   
    
// }
// console.log(moyenneClasse);





// function onlyPositiveNumbers(tmp){
//     let positiveTable = [];
//     for (let i = 0; i < tmp.length; i++){
//         if (tableau[i] > 0) {
//             positiveTable.push(tableau[i]);
//         }
//         return positiveTable;
//     }
    
// }
// console.log(onlyPositiveNumbers([2,-4,21,-8,12,6]));



// let plusGrand = 0;

// function trouverLePlusGrand(tableauDeGrands){
//     for (let i = 0; i < tableauDeGrands.length; i++){

//         if (plusGrand < tableauDeGrands){
//             plusGrand = tableauDeGrands[i];
//         }
//         return plusGrand;
//     }
    
// }
// console.log(plusGrand([1,3,4,1,9,5,18,2,7]));


function positif(tableau) {
 let tablo = []
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] > 0) {
            tablo.push(tableau[i])
        }

    }
    return tablo
}

console.log(positif([15, -5, -48, 69, 85, -7]));
