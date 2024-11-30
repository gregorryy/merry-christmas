// Fonction pour mettre à jour le compte à rebours
function mettreAJourCompteARebours() {
  const maintenant = new Date(); // Obtenir la date et l'heure actuelles
  const prochainNoel = new Date(maintenant.getFullYear(), 11, 25); // Définir la date du prochain Noël
  if (maintenant > prochainNoel) {
    prochainNoel.setFullYear(prochainNoel.getFullYear() + 1); // Si Noël est déjà passé cette année, prendre Noël de l'année prochaine
  }
  const diff = prochainNoel - maintenant; // Calculer la différence en millisecondes

  // Calculer le temps restant en jours, heures, minutes et secondes
  const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
  const heures = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secondes = Math.floor((diff % (1000 * 60)) / 1000);

  // Mettre à jour les éléments HTML avec le temps restant calculé
  document.getElementById("jours").innerText = `${jours} days`;
  document.getElementById("heures").innerText = `${heures} hours`;
  document.getElementById("minutes").innerText = `${minutes} minutes`;
  document.getElementById("secondes").innerText = `${secondes} seconds`;
}

// Mettre à jour le compte à rebours toutes les secondes
setInterval(mettreAJourCompteARebours, 1000);
mettreAJourCompteARebours(); // Appel initial pour afficher immédiatement le compte à rebours
