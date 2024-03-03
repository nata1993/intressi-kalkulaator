function Calculate(id) {
    // Laenusummalt intressi arvutamine
    let algsumma = Number(document.getElementById(id.algsumma).value);                 // algne summa
    let intress = Number(document.getElementById(id.intressimaar).value / 100);        // intressimäär
    let ajavahemik = Number(document.getElementById(id.periood).value);                // ajavahemik kuudes
    let lepingutasu = Number(document.getElementById(id.lepingutasu).value);           // ajavahemik kuudes
    let lisatasu = Number(document.getElementById(id.lisatasu).value);                 // igakuine lisatasu/hooldustasu

    let igakuine_intress = (algsumma * intress ) / ajavahemik;
    let koguintress = igakuine_intress * ajavahemik;
    let kogulisatasud = lisatasu * ajavahemik;
    let kogusumma = algsumma + koguintress + kogulisatasud;

    document.getElementById(id.algsumma2).value = algsumma;
    document.getElementById(id.loppsumma).value = kogusumma;
    document.getElementById(id.intressisumma).value = koguintress;
    document.getElementById(id.kogulisatasu).value = kogulisatasud;

    document.getElementById(id.vahe).value = (kogusumma - algsumma).toFixed(2);

    // Laenujäägilt intressi arvutamine
}