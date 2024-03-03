function Calculate(id) {
    // Laenusummalt intressi arvutamine
    let init = Number(document.getElementById(id[0]).value);                // algne summa
    let interest = Number(document.getElementById(id[1]).value / 100);      // intressimäär
    let timespan = Number(document.getElementById(id[2]).value);            // ajavahemik kuudes
    let totalinterest = 0;

    let total = (init * interest ) / timespan;
    totalinterest = total * timespan;

    document.getElementById(id[3]).value = init + totalinterest;
    document.getElementById(id[4]).value = totalinterest;

    // Laenujäägilt intressi arvutamine
}