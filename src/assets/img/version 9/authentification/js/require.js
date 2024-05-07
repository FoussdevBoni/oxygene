const form = document.querySelector('form');
const errorNom = document.getElementById('error-nom');
const errorMessage = document.getElementById('error-message');
const errorPrenom = document.getElementById('error-prenom');
const errorContact = document.getElementById('error-contact');
const errorConfirm = document.getElementById('error-confirm');
const errorResidence = document.getElementById('error-residence');


form.addEventListener('submit', (event) => {
    const passwordInput = document.getElementById('password');
    const nomInput = document.getElementById('nom');
    const prenomInput = document.getElementById('prenom');
    const contactInput = document.getElementById('contact');
    const confirmInput = document.getElementById('mpConfirm');
    const departInput = document.getElementById('first-list');
    const commInput = document.getElementById('second-list');
    const arrrInput = document.getElementById('third-list');


    if (!passwordInput.value) {
        event.preventDefault(); // Empêche la soumission du formulaire
        errorMessage.textContent = "Le mot de passe est obligatoire";
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
    }

    if (!departInput.value) {
        event.preventDefault(); // Empêche la soumission du formulaire
        errorResidence.textContent = "veillez renseigner votre adresse";
        errorResidence.classList.remove('hidden');
    } else {
        errorResidence.classList.add('hidden');
    }

    if (!commInput.value) {
        event.preventDefault(); // Empêche la soumission du formulaire
        errorResidence.textContent = "veillez renseigner votre adresse";
        errorResidence.classList.remove('hidden');
    } else {
        errorResidence.classList.add('hidden');
    }

    if (!arrrInput.value) {
        event.preventDefault(); // Empêche la soumission du formulaire
        errorResidence.textContent = "veillez renseigner votre adresse";
        errorResidence.classList.remove('hidden');
    } else {
        errorResidence.classList.add('hidden');
    }

    if (confirmInput.value !=passwordInput.value) {
        event.preventDefault(); // Empêche la soumission du formulaire
        errorConfirm.textContent = "Le champ de confirmation doit correspondre au champ de mot de passe.";
        errorConfirm.classList.remove('hidden');
    } else {
        errorConfirm.classList.add('hidden');
    }

    if (!contactInput.value) {
        event.preventDefault(); // Empêche la soumission du formulaire
        errorContact.textContent = "Entrez ici votre numéro de téléphone";
        errorContact.classList.remove('hidden');
    } else {
        errorContact.classList.add('hidden');
    }

    if (!prenomInput.value) {
        event.preventDefault(); // Empêche la soumission du formulaire
        errorPrenom.textContent = "veillez entrer votre prénom";
        errorPrenom.classList.remove('hidden');
    } else {
        errorPrenom.classList.add('hidden');
    }

    if (!nomInput.value) {
        event.preventDefault(); // Empêche la soumission du formulaire
        errorNom.textContent = "veillez entrez votre nom";
        errorNom.classList.remove('hidden');
    } else {
        errorNom.classList.add('hidden');
    }

});