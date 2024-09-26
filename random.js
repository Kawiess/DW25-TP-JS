// Pour s'amuser :D
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Tirage Compagnie
function getRandomCompany() {
    const listeCompagnie = ["Sony", "Microsoft", "Nintendo", "Atari", "Sega", "Capcom", "Blizzard"];
    const tirage = Math.floor(Math.random() * listeCompagnie.length);
    return listeCompagnie[tirage];
}

// Tirage Personne
function getRandomPerson() {
    const listePrenom = ["Alexis", "Benoit", "Océane", "Patrcik", "Philippe", "Marie", "Christophe"];
    const listeNom = ["Boutin", "Hautot", "Vone", "Camille", "Viotti", "Creugnet", "Basset"];
    const tirageP = Math.floor(Math.random() * listePrenom.length);
    const tirageN = Math.floor(Math.random() * listeNom.length);
    return listePrenom[tirageP] + " " + listeNom[tirageN];
}

// Tirage Pays
function getRandomCountry() {
    const listePays = ["France", "USA", "Chine", "Allemagne", "Italie", "Russie", "Australie"];
    const tirage = Math.floor(Math.random() * listePays.length);
    return listePays[tirage];
}
