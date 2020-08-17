document.querySelector('form input[type="submit"]').addEventListener('click', function(event){
    event.preventDefault();
    const nom = document.querySelector('input[name="nom"]');
    const prenom = document.querySelector('input[name="prenom"]');
    if(nom !== null && prenom !== null){
        const content = document.querySelector('#content');
        const nouvelleLigne = content.insertRow();
        const size = document.querySelectorAll('#content tr').length;

        const _id = nouvelleLigne.insertCell(0);
        const nTextId = document.createTextNode(size);
        _id.appendChild(nTextId);

        const _nom = nouvelleLigne.insertCell(1);
        const nTextNom = document.createTextNode(nom.value);
        _nom.appendChild(nTextNom);

        const _prenom = nouvelleLigne.insertCell(2);
        const nTextPrenom = document.createTextNode(prenom.value);
        _prenom.appendChild(nTextPrenom);
        
    }
    
});