let promoCode = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function calcoloPrezzo() 
{
    let ore = document.getElementById("ore").value; 
    ore = parseInt(ore);
    let lavoro = document.getElementById("lavoro").value;
    let promoValue = sales(listaSconti);

    if (promoValue == null) {
        alert("Codice sconto inserito non valido.");
    }

    let prezzo, totale;
    switch (lavoro) {
        case "1": // BackEnd
            prezzo = (ore * 20.5);
            totale = prezzo - (prezzo * promoValue);
            break;
        case "2": // FrontEnd
            prezzo = ore * 15.3;
            totale = prezzo - (prezzo * promoValue);

            break;
        case "3":
            prezzo = ore * 33.6;
            totale = prezzo - (prezzo * promoValue);

            break;
    }

    totale = totale.toFixed(2);
    console.log("totale " + totale);

    document.getElementById("risultato").innerHTML = "Il totale è di : " + totale + "\u20AC";
}
function sales(lista) { 

    let sconto = document.getElementById("sconto").value; //codice sconto
    sconto = sconto.toUpperCase();
    

    let promoValue = 0;

    let bool = false; 
    for (let i = 0; i < lista.length; i++)
    {//verifica promo code

        if (sconto == lista[i])// se lo sconto esiste
        { 
            bool = true;
            promoValue = 0.25;
            break;

        } else if (sconto == "") 
        { 
            bool = true;
            break;
        }

    } 

    if (bool == false) {
        promoValue = null;
    }
    return promoValue;
}
document.getElementById("button").addEventListener("click", funzioneCalcoloPrezzo);
