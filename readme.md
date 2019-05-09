# Provenance des données

Les données que j'ai utilisées proviennent de plusieurs site web :

* Pour le premier graphique (avec le nombre d'entrées) : https://www.bfs.admin.ch/bfs/fr/home/statistiques/culture-medias-societe-information-sport/culture/film-cinema/offre-cinematographique.assetdetail.7686828.html (j'ai extrait uniquement les données qui m'intéressaient grâce au lien "STAT-LAB" proposé sur la page)

# Transformation des données

En ce qui concerne la transformation des données, j'ai converti les fichiers Excel vers des fichiers JSON grâce au lien suivant : https://codebeautify.org/excel-to-json

Ensuite, pour chacun des fichier JSON, j'ai créé un fichier .js permettant de créer, au lancement de la commande "node nom_du_fichier", deux nouveaux fichiers JSON : un comportant les données nécessaires à l'axe des x, et un second avec les données à afficher (sans celles qui concernent l'axe des x).

# Choix


# Visualisation des données

Pour la visualisation des données, j'ai utilisé la librairie billboard.js, basée sur D3.

# Choix du type de représentation

# Objectif

Je souhaite démontrer quelle place le cinéma occupe en Suisse romande. J'aimerais prouver que les fictions sont les films qui sont les plus demandés par les spectateurs et que pourtant les entreprises de cinéma en Suisse se focalisent sur la production d'émissions et de documentaires.

# Publique cible
Les entreprises de cinéma en Suisse, et les personnes intéressées par l'industrie du cinéma en général.
