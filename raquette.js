// raquette.js

var raquette = function() {
    function verifierCaracteres(texte) {
        // Expression régulière pour vérifier si le texte contient uniquement des lettres et des chiffres
        var regex = /^[a-zA-Z0-9]+$/;

        // Vérifier chaque caractère du texte
        for (var i = 0; i < texte.length; i++) {
            var caractere = texte.charAt(i);

            // Vérifier si le caractère ne correspond pas à l'expression régulière
            if (!regex.test(caractere)) {
                return false;
            }
        }

        return true;
    }

    return {
        verifierCaracteres: verifierCaracteres
    };
}();
