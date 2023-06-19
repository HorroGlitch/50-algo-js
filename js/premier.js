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


// function positif(tableau) {
//  let tablo = []
//     for (let i = 0; i < tableau.length; i++) {
//         if (tableau[i] > 0) {
//             tablo.push(tableau[i])
//         }

//     }
//     return tablo
// }

// console.log(positif([15, -5, -48, 69, 85, -7]));


// function prime(s) {
//     for (let i = 2; i < s - 1; i++) {
//         if (s % i === 0) {

//             return false
//         }
//     }
//     return true

// }
// for (let j = 2; j < 500; j++) {
//     if (prime(j)) {
//         console.log(j)
//     }
// }


// let tableauDoublon1 = [1,2,3,5,9];
// let tableauDoublon2 = [1,2,6,7,8,9];
// let tableauZeroDoublon = tableauDoublon1;

// function aucunDoublon(tableauZeroDoublon) {
//     for (let i = 0; i <  tableauDoublon2.length; i++){
//         if (!tableauDoublon1.includes(tableauDoublon2[i])) {
//             tableauZeroDoublon.push(tableauDoublon2[i])
//         } 
//     }
//     return tableauZeroDoublon;

// }

// console.log(tableauZeroDoublon);


// 14.
// let tmp = 0;
// let active = 1;
// let precedant = 1;

// active = active + precedant;
// tmp = active
// active = active + precedant;
// precedant = tmp

// console.log(active);

// for (let i = 3; i < 10; i++) {
//     tmp = active;
//     active = active + precedant;
//     precedant = tmp
//     console.log(active);
// }


// 16.
// function prime(s) {
//         for (let i = 2; i < s - 1; i++) {
//             if (s % i === 0) {

//                 return false
//             }
//         }
//         return true

//     }
//     for (let j = 2; j < 541; j++) {
//         if (prime(j)) {
//             console.log(j)
//         }
//     }

//     console.log(prime(541))


// 17.
// let tmp = 15;
// tmp.toString();


// 18.
// function prime(s) {
//     for (let i = 2; i < s - 1; i++) {
//         if (s % i === 0) {

//             return false
//         }
//     }
//     return true

// }
// for (let j = 2; j < 541; j++) {
//     if (prime(j)) {
//         console.log(j)
//     }
// }

// console.log(prime(541))


// 19.



// 20.

// let tmp = [1, 2, 3];
// rotateLeft(tmp);

// function rotateLeft(tmp) {
//     let first = tmp.shift();
//     tmp.push(first);
//     console.log(tmp);
// }



// 21.

// let tmp = [3,2,1];
// rotateRight(tmp);

// function rotateRight(tmp) {
//     let last = tmp.shift()
//     tmp.push(last);
//     console.log(tmp);
// }



// 22.

// let tmp = [1,2,3,4];

// tmp.reverse();
// console.log(tmp);



// 23.




// 24.

// let t1 = [2, 1, 5, 561556]
// let t2 = [4, 3, 5, 574, 5]
// let t3 = []


// for (let i = t1.length - 1; i >= 0; i--) {
//     t3.push(t1[i])
// }

// for (let j = t2.length - 1; j >= 0; j--) {
//     t3.push(t2[j])
// }
// console.log(t3)


// 25.

// let tmp1 = [1,2,3,4,5];
// let tmp2 = [1,2,3,4,5,6];
// let tmp3 = [];

// function onlyElementFirstTab(tmp1, tmp2, tmp3) {
//     if (tmp1.length > tmp2.length) {

//         for (let i = 0; i < tmp1.length; i++) {
//             if (!tmp2.includes(tmp1[i])) {
//                 tmp3.push(tmp1[i])

//             }


//         }

//     } else {
//         for (let i = 0; i < tmp2.length; i++) {
//             if (!tmp1.includes(tmp2[i])) {
//                 tmp3.push(tmp2[i])

//             }


//         }

//     }
//     console.log(tmp3);
// }
// onlyElementFirstTab(tmp1, tmp2, tmp3);
// console.log(tmp3);



// 26.

// let tmp1 = [1,2,3,4,5,6,7];
// let tmp2 = [1,2,3,4,5,6,8,9];
// let tmp3 = [];

// function onlyElementFirstTab(tmp1, tmp2, tmp3) {
//     if (tmp1.length > tmp2.length) {

//         for (let i = 0; i < tmp1.length; i++) {
//             if (!tmp2.includes(tmp1[i])) {
//                 tmp3.push(tmp1[i])

//             }


//         }

//     } else {
//         for (let i = 0; i < tmp1.length; i++) {
//             if (!tmp2.includes(tmp1[i])) {
//                 tmp3.push(tmp1[i])

//             }


//         }

//     }
//     console.log(tmp3);
// }
// onlyElementFirstTab(tmp1, tmp2, tmp3);
// console.log(tmp3);


// 27.

// let tmp2 = [];

// function distinctElements(array) {
//     for (let i = 0; i < array.length; i++) {

//         if (!tmp2.includes(array[i])) {
//             tmp2.push(array[i]);
//         }
//     }
// }
// distinctElements([1, 2, 3, 1, 2, 4, 5, 7]);
// console.log(tmp2);     


// 31.

// let tmp = "bonjourçava?"
// let tmpCopy = tmp.split('')
// console.log(tmpCopy)



// 32.




// 34.

// for (let i = tmp.length - 1; i >= 0; i--) {
//     tmp.split();
// }


// let nombres = [2,4,1,3,8,5,7,6];
// let premier = 0;
// let second = 0;
// let actuel = 0;
// let tmp = 0;

// function deuxièmePlusPetit(nombres) {
//     for (let i = 0; i < nombres.length; i++) {
//         premier = nombres[i];
//         second = nombres[i];
        
//     }
//     console.log(premier);
//     console.log(second); 
// }



// let tmp = [2,8,4,6,3,1,5,7];

// function tri_a_bulles(tmp){
// for (let i = 0; i < tmp.length-1; i++){
//     for (let j = 0; j < tmp.length; j++) {
//         if (tmp[j+1] < tmp[j]){
//             tmp[j+1] = tmp[j];
//             tmp[j] = tmp[j+1];
//         }
        
//     }
    
// }
// }
// tri_a_bulles(tmp);
// console.log(tmp);

