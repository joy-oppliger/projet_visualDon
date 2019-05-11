# Provenance des données

Les données que j'ai utilisées proviennent de plusieurs site web :

* Pour le graphique représentant le nombres d'entrées ou films par genre et par région : https://www.bfs.admin.ch/bfs/fr/home/statistiques/culture-medias-societe-information-sport/culture/film-cinema/offre-cinematographique.assetdetail.7686828.html (j'ai extrait uniquement les données qui m'intéressaient grâce au lien "STAT-LAB" proposé sur la page). J'ai ensuite enregistré le résultat dans un fichier excel que j'ai formaté. Finalement j'ai converti le fichier excel vers un fichier JSON grâce à l'outil suivant : http://beautifytools.com/excel-to-json-converter.php. Ensuite, 


* Pour le graphique avec le nombre de longs-métrages et courts-métrages : https://www.bfs.admin.ch/bfs/fr/home/statistiques/culture-medias-societe-information-sport/culture/film-cinema/suisse.html#820874894. J'ai saisi manuellement les données dans un fichier excel, après quoi j'ai converti le fichier excel vers un fichier JSON grâce à l'outil suivant : http://beautifytools.com/excel-to-json-converter.php. Finalement, ...




* Pour le graphique représentant les grands succès du cinéma suisse : https://www.bfs.admin.ch/bfs/fr/home/statistiques/culture-medias-societe-information-sport/culture/film-cinema/offre-cinematographique.assetdetail.7686814.html. J'ai téléchargé le fichier excel, je l'ai formaté et j'ai supprimé les données qui ne concernent pas la prédiode 1990 à 2018. Ensuite, j'ai utilisé l'outil https://codebeautify.org/excel-to-json (l'autre outil utilisé mettait la totalité dans un objet dont la clé était le nom du feuillet, ce qui ne m'intéressait pas ici contrairement aux autres liens) pour convertir en fichier JSON. Puis,


* Pour le graphique représentant les parts de marché : https://www.bfs.admin.ch/bfs/fr/home/statistiques/culture-medias-societe-information-sport/culture/film-cinema/suisse.html. J'ai saisi manuellement les données dans un fichier excel, après quoi j'ai converti le fichier excel vers un fichier JSON grâce à l'outil suivant : https://codebeautify.org/excel-to-json. Finalement, ...




# Transformation des données

En ce qui concerne la transformation des données, j'ai converti les fichiers Excel vers des fichiers JSON grâce au lien suivant : https://codebeautify.org/excel-to-json

Ensuite, pour chacun des fichier JSON, j'ai créé un fichier .js permettant de créer, au lancement de la commande "node nom_du_fichier", deux nouveaux fichiers JSON : un comportant les données nécessaires à l'axe des x, et un second avec les données à afficher (sans celles qui concernent l'axe des x).

# Choix
// à faire 

# Visualisation des données

Pour la visualisation des données, j'ai utilisé la librairie billboard.js, basée sur D3.
// à compléter

# Choix du type de représentation
// à faire 

# Objectif

Je souhaite démontrer quelle place le cinéma occupe en Suisse romande. J'aimerais prouver que les fictions sont les films qui sont les plus demandés par les spectateurs et que pourtant les entreprises de cinéma en Suisse se focalisent sur la production d'émissions et de documentaires.
// à compléter / modifier

# Publique cible
Les entreprises de cinéma en Suisse, et les personnes intéressées par l'industrie du cinéma en général.
// à compléter