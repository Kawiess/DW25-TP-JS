// Suppression d'une ligne
function supprimeLigne(ligne) {
    if (ligne > 0) {
        let table = document.getElementById("table");
        table.deleteRow(ligne);
    } else {
        console.error("Ligne inexistante (" + ligne + ") !");
    }
}
function boutonSupprimer(bouton) {
    let numLigne = bouton.parentNode.parentNode.rowIndex;
    supprimeLigne(numLigne);
}

// Chargement document
$(document).ready(function(){
    let numLigne = 0;

    // Gestion du bouton
    $('#button').click(function(){
        if ($('#saisie').val() === "") {
            $('#saisie').val("Bouton cliqué");
        } else {
            $('#saisie').val("");
        }
        $('#saisie').css('background-color', getRandomColor());
    });

    // Entrée dans le champ
    $("#saisie").mouseenter(function(){
        alert("Alerte à Malibu !!");
    });

    // Ajout d'une ligne au tableau
    $('#ajoutLigne').click(function() {
        numLigne++;
        let newLine = `
            <tr>
                <td>${getRandomCompany()}</td>
                <td>${getRandomPerson()}</td>
                <td>${getRandomCountry()}</td>
                <td>
                    <button class="supp" onClick="boutonSupprimer(this)">-</button>
                </td>
            </tr>
        `;
        $('#table').append(newLine);
    });

    // Suppression d'une ligne
    $('.supp').click( function(){
        let ligne = this.parentNode.parentNode.rowIndex;
        supprimeLigne(ligne);
    });
});
