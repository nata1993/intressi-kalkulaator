function Calculate(id) {
    // Laenusummalt intressi arvutamine
    let init = Number(document.getElementById(id.algsumma).value);                      // algne summa
    let interest = Number(document.getElementById(id.intressimaar).value / 100);        // intressimäär
    let timespan = Number(document.getElementById(id.periood).value);                   // ajavahemik kuudes
    let additions = Number(document.getElementById(id.lisatasu).value);                 // igakuine lisatasu/hooldustasu
    let total_interest = 0;

    let total = (init * interest ) / timespan;
    total_interest = total * timespan;

    let total_additions = additions * timespan;

    let full_total = init + total_interest + total_additions;

    document.getElementById(id.algsumma2).value = init;
    document.getElementById(id.loppsumma).value = full_total
    document.getElementById(id.intressisumma).value = total_interest;
    document.getElementById(id.kogulisatasu).value = total_additions;

    document.getElementById(id.vahe).value = (full_total - init).toFixed(2);

    // Laenujäägilt intressi arvutamine
}