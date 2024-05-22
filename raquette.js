// raquette.js

var raquette = function() {
    function verifierCaracteres(texte) {
        var regex = /^[a-zA-Z0-9]+$/;

        for (var i = 0; i < texte.length; i++) {
            var caractere = texte.charAt(i);

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
