"use strict";
var mensagem = "Seja bem vindo!!!";
var temporaradsFriends = 10;
var estuandoAngular = true;
var listaDeFrutas = ['Uva', 'Banana', 'Abacaxi'];
var lista2 = [2, 4, 5, 6, 78, 9, 12];
var notasDasProvas = [7.5, 8, 9];
for (var i = 0; i < lista2.length; i++) {
    for (var j = 0; j < lista2.length; j++) {
        if (lista2[i] < lista2[j]) {
            var temp = lista2[i];
            lista2[i] = lista2[j];
            lista2[j] = temp;
        }
    }
}
var search;
(function (val, pos) {
    return bsearch(val, pos, 0, val.length);
});
var bsearch;
(function (val, pos, ini, end) {
    var mid = ini + (end - ini) / 2;
    if (ini > end) {
        return -1;
    }
    else if (val[mid] > pos) {
        return bsearch(val);
    }
    return 0;
});
console.log(lista2);
