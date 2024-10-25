const phoneNumber = "0698142662";
const mail = "anthony.perrien@gmail.com";
document.body.className = 'theme-default'; // Par défaut, le thème est clair (default)

document.addEventListener('DOMContentLoaded', () => {
    // Affiche les informations de contact dynamiquement
    document.getElementById('phone-number').textContent = phoneNumber;
    document.getElementById('mail-address').textContent = mail;

    // Gestion du toggle switch pour le mode Jour/Nuit
    const nightDaySwitch = document.getElementById('night_day_switch').querySelector('input'); 

    // Vérifie si un thème est sauvegardé dans le localStorage
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        document.body.className = savedTheme;
        nightDaySwitch.checked = savedTheme === 'theme-dark';
    }

    // Écoute le changement d'état du toggle switch
    nightDaySwitch?.addEventListener('change', () => {
        if (nightDaySwitch.checked) {
            document.body.className = 'theme-dark'; // Applique le thème sombre
            localStorage.setItem('selectedTheme', 'theme-dark');
        } else {
            document.body.className = 'theme-default'; // Applique le thème par défaut
            localStorage.setItem('selectedTheme', 'theme-default');
        }
    });
});
