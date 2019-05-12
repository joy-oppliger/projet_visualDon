# Provenance des données
Les données que j'ai utilisées proviennent toutes du site web de l'Office Fédéral de la Statistique.


# Transformation des données
* 1er graphique (dans l'ordre affiché)
J'ai extrait uniquement les données qui m'intéressaient grâce au lien "STAT-LAB" proposé sur la page. J'ai ensuite nettoyé et ajusté le fichier de façon à être directement utilisable une fois converti en JSON. Pour la conversion, j'ai utilisé l'outil proposé par le site web http://beautifytools.com/excel-to-json-converter.php.

* 2e graphique
J'ai téléchargé le fichier Excel, je l'ai nettoyé et je n'ai conservé que les données qui concerne la prédiode 1990 à 2018. Ensuite, j'ai recherché sur Google les titres français des films et les ai remplacés dans le fichier Excel. Je trouvais cela plus pertinent de faire ainsi car il y a plus de chance que les titres évoquent quelque chose aux visiteurs, ma page étant destinée à des francophones. Après cela, j'ai converti le fichier en JSON, avec l'outil précédemment cité.

* 3e et 4e graphiques : 
J'ai saisi manuellement les données qui m'intéressaient dans des fichiers Excel séparés, j'ai ensuite utilisé le même outil que pour les autres fichiers pour la conversion en JSON.


# Choix
Étant étudiante en ingénierie des médias, je souhaitais trouver un sujet qui touche de près ou de loin à un média. J'ai donc choisi le cinéma, et j'ai décidé de restreindre mes recherches à la Suisse, pour faire un focus sur ce que la population suisse regarde (comme type de films) et ce qui est produit par les entreprises de cinéma en Suisse.


# Visualisation des données
Pour la visualisation des données, j'ai utilisé la librairie billboard.js, basée sur D3. Cette librairie répondait bien à mes besoins et aux objectifs que je m'étais fixée, tant en ce qui concerne les interactions que dans la présentation des informations.


# Choix du type de représentation
* Graphique en diagramme circulaire
J'ai choisi d'utiliser ce type de graphique pour représenter la demande cinématographique selon la région linguistique en 2018. Étant donné qu'il n'y avait pas de grande évolution dans le temps, j'ai choisi de ne retenir que les données pour l'année 2018. Toutefois, j'ai ajouté des boutons pour visualiser le nombre d'entrées vendues et le nombre de films projetés dans les cinémas, ainsi qu'une liste déroulante pour pouvoir sélectionner la région linguistique afin de pouvoir faire des comparaisons.

* Graphique en nuage de points
J'ai choisi de représenter les grands succès du cinéma suisse grâce à un nuage de points car c'est celui qui se prêtait le mieux pour visualiser ces données. Je trouvais intéressant de conserver les données temporelles et le nombre d'entrées vendues. Pour les "points", j'ai choisi d'ajouter un svg représentant une caméra professionnelle. Des informations apparaissent lorsque le visiteur place sa souris sur un "point" en particulier, telles que le titre du film et son type, le nom du réalisateur avec l'année de réalisation ainsi que le nombre exact d'entrées vendues.

* Graphique en barres
Pour les réalisations suisses, j'ai choisi le graphique en barre car je voulais représenter des séries de données et leur évolution dans le temps. J'ai choisi de séparer les longs-métrages et les courts-métrages et d'ajouter des boutons pour que l'on puisse comparer leurs données respectives.

* Graphique en beignet
J'ai utilisé ce type de graphique pour les dernières données, ceci car je souhaitais montrer des parts d'un tout. J'aurais pu utiliser un diagramme circulaire mais la forme en beignet permettait de varier un peu la présentation.


# Objectif
Je souhaite montrer quelle place le cinéma occupe en Suisse et quel est le type de films le plus demandés, à savoir les fictions. Je souhaite aussi montrer quelle part du marché est détenue par des productions suisses et les films suisses qui ont rencontré un grand succès.


# Publique cible
Les personnes intéressées par l'industrie du cinéma en général et les personnes actives dans ce milieu.