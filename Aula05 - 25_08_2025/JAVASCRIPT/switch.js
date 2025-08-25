// SWITCH
let cnh
switch (cnh) {
    case "A" || "a":
        console.log("Pode dirigir motos");
        break;

    case "B" || "b":
        console.log("Pode dirigir carros");
        break;

    case "C" || "c":
        console.log("Pode dirigir caminhões e veículos de carga");
        break;

    case "D" || "d":
        console.log("Pode dirigir veículos de transporte de passageiros (ônibus e micro-ônibus)");
        break;

    case "E" || "e":
        console.log("Pode dirigir veículos articulados");
        break;

    default:
        console.log("Inválido");
        break;
}

//-----------------------------------------------------------------------------------------------------------------------------------
let frut
switch (frut) {
    case "maçã":
        console.log("R$ 4.50");
        break;

    case "banana":
        console.log("R$ 3.49");
        break;

    case "limão":
        console.log("R$ 1.20");
        break;

    case "kiwi":
        console.log("R$ 5.80");
        break;

    case "melancia":
        console.log("R$ 55.35");
        break;

    case "manga":
        console.log("R$ 5.59");
        break;

    case "abacaxi":
        console.log("R$ 10.99");
        break;

    case "abacate":
        console.log("R$ 7.49");
        break;

    case "laranja":
        console.log("R$ 2.10");
        break;

    case "pera":
        console.log("R$ 4.20");
        break;

    case "uva":
        console.log("R$ 8.99");
        break;

    case "morango":
        console.log("R$ 9.99");
        break;

    case "figo":
        console.log("R$ 12.99");
        break;

    default:
        console.log("Erro");
        break;
}

//-----------------------------------------------------------------------------------------------------------------------------------
//Multi Caso
let animal
switch (animal) {
    case "cachorro":
    case "gato":
    case "hamster":
    case "cavalo":
    case "tartaruga":
        console.log("Esses animais irão para a Arca de Noé");
        break;

    case "dinossauro":
    case "peixe":
    default:
        console.log("Esses animais NÃO irão para a Arca de Noé");
        break;
}