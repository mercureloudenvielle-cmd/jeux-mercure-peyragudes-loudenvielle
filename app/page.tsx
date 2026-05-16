"use client";

const tousLesJeux = [
  {
    nom: "UNO",
    emoji: "🎴",
    joueurs: "2 à 10 joueurs",
    duree: "20-30 min",
    age: "Dès 7 ans",
    objectif: "Soyez le premier à vous débarrasser de toutes vos cartes !",
    regles: [
      "Chacun reçoit 7 cartes au départ",
      "Posez une carte de même couleur ou même chiffre que celle sur la pile",
      "Les cartes spéciales (+2, Inversion, Passe ton tour) pimentent la partie",
      "Quand il ne vous reste qu'une carte, criez « UNO ! »",
      "Oublié de le dire ? Piochez 2 cartes en punition !",
    ],
    conseil: "Gardez vos cartes +4 pour les moments critiques !",
  },
  {
    nom: "Échecs",
    emoji: "♟️",
    joueurs: "2 joueurs",
    duree: "30-60 min",
    age: "Dès 6 ans",
    objectif: "Mettez le roi adverse en échec et mat !",
    regles: [
      "Chaque pièce a un mouvement spécifique (tour en ligne, fou en diagonale, cavalier en L)",
      "Le roi ne peut se déplacer que d'une case mais dans toutes les directions",
      "La dame combine les mouvements de la tour et du fou",
      "Capturez les pièces adverses en vous plaçant sur leur case",
      "Échec et mat : le roi est attaqué et ne peut plus fuir ni être protégé",
    ],
    conseil: "Contrôlez le centre du plateau dès l'ouverture !",
  },
  {
    nom: "Domino",
    emoji: "🁡",
    joueurs: "2 à 4 joueurs",
    duree: "15-20 min",
    age: "Dès 6 ans",
    objectif: "Soyez le premier à poser tous vos dominos !",
    regles: [
      "Chaque joueur pioche 7 dominos (ou 6 à 4 joueurs)",
      "Le joueur avec le double le plus fort commence",
      "Posez un domino dont un côté correspond à une extrémité de la chaîne",
      "Si vous ne pouvez pas jouer, piochez ou passez votre tour",
      "Le premier à poser tous ses dominos gagne, ou celui avec le moins de points",
    ],
    conseil: "Comptez les chiffres déjà joués pour anticiper !",
  },
  {
    nom: "Petits Chevaux",
    emoji: "🐴",
    joueurs: "2 à 4 joueurs",
    duree: "20-30 min",
    age: "Dès 4 ans",
    objectif: "Amenez vos 4 chevaux dans votre écurie avant les autres !",
    regles: [
      "Chaque joueur a 4 chevaux dans sa case départ",
      "Faites un 6 pour sortir un cheval sur la piste",
      "Avancez du nombre de cases indiqué par le dé",
      "Si vous tombez sur un adversaire, il retourne à sa case départ",
      "Faites le tour du plateau puis remontez vers votre écurie centrale",
    ],
    conseil: "Sortez plusieurs chevaux pour avoir plus d'options !",
  },
  {
    nom: "Scrabble",
    emoji: "🔤",
    joueurs: "2 à 4 joueurs",
    duree: "60-90 min",
    age: "Dès 10 ans",
    objectif: "Formez des mots sur le plateau pour marquer un maximum de points !",
    regles: [
      "Chaque joueur pioche 7 lettres au hasard",
      "Formez un mot en posant vos lettres sur le plateau",
      "Les mots doivent se croiser comme des mots croisés",
      "Chaque lettre a une valeur, les cases bonus multiplient les points",
      "La partie se termine quand un joueur a posé toutes ses lettres",
    ],
    conseil: "Les petits mots avec J, K, W, X, Y, Z rapportent gros !",
  },
  {
    nom: "Jungo",
    emoji: "🐘",
    joueurs: "2 à 6 joueurs",
    duree: "15-20 min",
    age: "Dès 5 ans",
    objectif: "Débarrassez-vous de toutes vos cartes animaux !",
    regles: [
      "Distribuez toutes les cartes entre les joueurs",
      "Posez une carte animal sur la pile centrale",
      "Le joueur suivant doit poser un animal plus fort ou égal",
      "Si vous ne pouvez pas, ramassez toute la pile",
      "Le premier sans cartes gagne la partie",
    ],
    conseil: "Gardez vos animaux forts pour les moments difficiles !",
  },
  {
    nom: "Mikado",
    emoji: "🥢",
    joueurs: "2 à 6 joueurs",
    duree: "10-15 min",
    age: "Dès 6 ans",
    objectif: "Récupérez le plus de bâtonnets sans faire bouger les autres !",
    regles: [
      "Laissez tomber les bâtonnets en tas au centre de la table",
      "Retirez un bâtonnet à la fois sans faire bouger les autres",
      "Si un autre bâtonnet bouge, passez votre tour",
      "Chaque couleur de bâtonnet a une valeur différente",
      "Celui qui a le plus de points à la fin gagne",
    ],
    conseil: "Commencez par les bâtonnets isolés sur le dessus !",
  },
  {
    nom: "Dobble",
    emoji: "🔵",
    joueurs: "2 à 8 joueurs",
    duree: "15 min",
    age: "Dès 6 ans",
    objectif: "Repérez le symbole identique entre deux cartes avant les autres !",
    regles: [
      "Entre deux cartes, il y a toujours un et un seul symbole en commun",
      "Le premier qui le trouve et le nomme gagne la carte",
      "Attention : les symboles peuvent être de tailles différentes !",
      "Plusieurs variantes de jeu possibles selon les règles choisies",
      "La partie se termine quand la pioche est vide",
    ],
    conseil: "Entraînez votre oeil, les symboles aiment se cacher !",
  },
  {
    nom: "Tic Tac Boom Junior",
    emoji: "💣",
    joueurs: "2 à 12 joueurs",
    duree: "15 min",
    age: "Dès 5 ans",
    objectif: "Trouvez un mot correspondant à l'image avant que la bombe n'explose !",
    regles: [
      "Lancez le dé pour déterminer la catégorie (animal, nourriture, etc.)",
      "Activez la bombe et passez-la au premier joueur",
      "Dites un mot correspondant à la carte image visible",
      "Passez rapidement la bombe au joueur suivant",
      "Celui qui tient la bombe quand elle explose prend la carte !",
    ],
    conseil: "Pensez vite mais parlez clairement !",
  },
  {
    nom: "Time's Up",
    emoji: "⏰",
    joueurs: "4 à 12 joueurs",
    duree: "45-60 min",
    age: "Dès 12 ans",
    objectif: "Faites deviner le plus de personnalités à votre équipe !",
    regles: [
      "Manche 1 : Faites deviner en parlant autant que vous voulez",
      "Manche 2 : Un seul mot autorisé par carte",
      "Manche 3 : Uniquement des mimes, pas un mot !",
      "Les mêmes cartes sont utilisées dans les 3 manches",
      "L'équipe avec le plus de points sur les 3 manches gagne",
    ],
    conseil: "Créez des associations mémorables en manche 1 !",
  },
  {
    nom: "Jungle Speed",
    emoji: "🗿",
    joueurs: "2 à 10 joueurs",
    duree: "15-20 min",
    age: "Dès 7 ans",
    objectif: "Attrapez le totem quand deux cartes identiques apparaissent !",
    regles: [
      "Les joueurs retournent leurs cartes à tour de rôle",
      "Deux cartes identiques ? Les joueurs concernés se battent pour le totem",
      "Le perdant récupère les cartes de l'autre",
      "Attention aux cartes piège qui changent les règles !",
      "Le premier à se débarrasser de toutes ses cartes gagne",
    ],
    conseil: "Restez concentré, les erreurs coûtent cher !",
  },
  {
    nom: "Skyjo",
    emoji: "🃏",
    joueurs: "2 à 8 joueurs",
    duree: "30 min",
    age: "Dès 8 ans",
    objectif: "Terminez la partie avec le moins de points possible.",
    regles: [
      "Chaque joueur dispose 12 cartes face cachée (3 lignes de 4)",
      "Retournez 2 cartes au départ pour voir leurs valeurs",
      "Piochez ou prenez la défausse pour améliorer votre jeu",
      "3 cartes identiques en colonne ? Elles disparaissent !",
      "Le premier à tout révéler déclenche la fin de la manche",
    ],
    conseil: "Visez les colonnes identiques pour éliminer des cartes !",
  },
  {
    nom: "Croque Carottes Cartes",
    emoji: "🥕",
    joueurs: "2 à 4 joueurs",
    duree: "15 min",
    age: "Dès 4 ans",
    objectif: "Aidez vos lapins à atteindre la carotte géante en premier !",
    regles: [
      "Chaque joueur a des cartes lapin numérotées",
      "Jouez une carte pour avancer votre lapin du nombre indiqué",
      "Certaines cases font tomber les lapins dans des trous !",
      "Tournez la carotte quand indiqué pour révéler de nouveaux trous",
      "Le premier lapin à atteindre la carotte géante gagne",
    ],
    conseil: "Observez bien le plateau avant de jouer vos grosses cartes !",
  },
  {
    nom: "Loup Garou",
    emoji: "🐺",
    joueurs: "8 à 18 joueurs",
    duree: "30-45 min",
    age: "Dès 10 ans",
    objectif: "Villageois : éliminez tous les loups. Loups : dévorez tous les villageois !",
    regles: [
      "Chaque joueur reçoit secrètement un rôle (villageois, loup-garou, ou spécial)",
      "La nuit : les loups choisissent une victime, les yeux fermés pour les autres",
      "Le jour : les villageois débattent et votent pour éliminer un suspect",
      "Les rôles spéciaux (voyante, sorcière, chasseur) ont des pouvoirs uniques",
      "La partie continue jusqu'à ce qu'un camp soit éliminé",
    ],
    conseil: "Observez les réactions des joueurs pendant les débats !",
  },
  {
    nom: "6 qui prend",
    emoji: "🐂",
    joueurs: "2 à 10 joueurs",
    duree: "20-30 min",
    age: "Dès 8 ans",
    objectif: "Évitez de ramasser des cartes avec des têtes de boeufs !",
    regles: [
      "Chaque joueur reçoit 10 cartes numérotées",
      "Tous choisissent une carte simultanément et la révèlent",
      "Les cartes sont placées dans l'une des 4 rangées par ordre croissant",
      "Si vous posez la 6ème carte d'une rangée, vous ramassez les 5 précédentes",
      "Chaque tête de boeuf sur vos cartes compte comme point négatif",
    ],
    conseil: "Évitez les cartes proches des multiples de 5 et 10 !",
  },
  {
    nom: "Pigeon Pigeon",
    emoji: "🐦",
    joueurs: "2 à 10 joueurs",
    duree: "20-30 min",
    age: "Dès 8 ans",
    objectif: "Faites gober vos mensonges aux autres joueurs !",
    regles: [
      "Une question insolite est posée avec une vraie réponse cachée",
      "Chaque équipe invente une fausse réponse crédible",
      "Toutes les réponses (vraies et fausses) sont mélangées et lues",
      "Les équipes votent pour la réponse qu'elles pensent vraie",
      "Points si on trouve la vraie réponse ou si on piège les autres !",
    ],
    conseil: "Les meilleures fausses réponses sont précises et détaillées !",
  },
  {
    nom: "Imagine",
    emoji: "💭",
    joueurs: "3 à 8 joueurs",
    duree: "30 min",
    age: "Dès 12 ans",
    objectif: "Faites deviner des mots en combinant des cartes transparentes !",
    regles: [
      "Utilisez les cartes transparentes avec des symboles simples",
      "Superposez, déplacez et combinez les cartes pour illustrer le mot",
      "Vous pouvez animer les cartes en les bougeant",
      "Les autres joueurs tentent de deviner le mot ou l'expression",
      "Le premier à deviner et vous marquez des points",
    ],
    conseil: "Pensez aux associations d'idées plutôt qu'aux dessins littéraux !",
  },
  {
    nom: "Judukids",
    emoji: "👨‍👩‍👧",
    joueurs: "3 à 10 joueurs",
    duree: "20-30 min",
    age: "Dès 6 ans",
    objectif: "Découvrez qui pense comme vous entre enfants et parents !",
    regles: [
      "Un joueur lit une question ou un dilemme",
      "Chacun écrit secrètement sa réponse",
      "Les réponses sont révélées et comparées",
      "Marquez des points quand vos réponses correspondent à d'autres joueurs",
      "Fous rires garantis en découvrant les réponses de chacun !",
    ],
    conseil: "Soyez honnête, c'est plus drôle !",
  },
  {
    nom: "Blanc-Manger Coco",
    emoji: "🥥",
    joueurs: "3 à 10+ joueurs",
    duree: "30-45 min",
    age: "16+ (version adulte)",
    objectif: "Proposez la réponse la plus drôle pour compléter la phrase !",
    regles: [
      "Un joueur lit une carte phrase avec un trou",
      "Les autres choisissent une carte réponse de leur main",
      "Le lecteur choisit sa réponse préférée",
      "Le gagnant de la manche remporte la carte phrase",
      "Premier à 5 cartes gagnées remporte la partie",
    ],
    conseil: "Adaptez vos réponses à l'humour du lecteur !",
  },
  {
    nom: "Non Sens",
    emoji: "🤪",
    joueurs: "3 à 8 joueurs",
    duree: "20-30 min",
    age: "Dès 10 ans",
    objectif: "Devinez les expressions françaises illustrées de façon absurde !",
    regles: [
      "Une carte montre un dessin absurde illustrant une expression",
      "Les joueurs tentent de deviner l'expression française correspondante",
      "Le premier à trouver remporte la carte",
      "Certaines expressions sont évidentes, d'autres très tordues !",
      "Celui avec le plus de cartes à la fin gagne",
    ],
    conseil: "Pensez aux expressions populaires et aux jeux de mots !",
  },
  {
    nom: "Codenames",
    emoji: "🕵️",
    joueurs: "4 à 8 joueurs",
    duree: "15-30 min",
    age: "Dès 10 ans",
    objectif: "Trouvez tous les agents de votre équipe grâce aux indices de votre espion !",
    regles: [
      "25 mots sont disposés sur la table, certains appartiennent à chaque équipe",
      "Les espions donnent un indice : un mot et un nombre",
      "L'équipe doit trouver les mots correspondants sans toucher l'assassin",
      "Toucher un mot adverse donne un point à l'adversaire",
      "Première équipe à trouver tous ses mots gagne",
    ],
    conseil: "Trouvez des indices qui relient plusieurs mots !",
  },
  {
    nom: "Tu ris tu perds",
    emoji: "😂",
    joueurs: "2 à 10 joueurs",
    duree: "15-20 min",
    age: "Dès 6 ans",
    objectif: "Faites rire vos adversaires sans rire vous-même !",
    regles: [
      "Tirez une carte défi (blague, grimace, imitation...)",
      "Exécutez le défi face aux autres joueurs",
      "Les joueurs qui rient perdent un point ou une vie",
      "Vous marquez des points si vous faites rire quelqu'un",
      "Le meilleur score à la fin gagne la partie",
    ],
    conseil: "Regardez les joueurs dans les yeux pour les faire craquer !",
  },
  {
    nom: "Backgammon",
    emoji: "🎲",
    joueurs: "2 joueurs",
    duree: "20-30 min",
    age: "Dès 8 ans",
    objectif: "Sortez tous vos pions du plateau avant votre adversaire !",
    regles: [
      "Lancez deux dés et déplacez vos pions selon les valeurs",
      "Déplacez vos pions dans le sens inverse de votre adversaire",
      "Un pion seul peut être capturé et renvoyé au départ",
      "Amenez tous vos pions dans votre zone de sortie",
      "Sortez vos pions en faisant des jets correspondants",
    ],
    conseil: "Ne laissez jamais un pion isolé, il sera capturé !",
  },
  {
    nom: "Dixit",
    emoji: "🦋",
    joueurs: "3 à 8 joueurs",
    duree: "30 min",
    age: "Dès 8 ans",
    objectif: "Faites deviner votre carte avec une phrase poétique !",
    regles: [
      "Le conteur choisit une carte et donne un indice (mot, phrase, son...)",
      "Les autres joueurs choisissent une carte qui pourrait correspondre",
      "Toutes les cartes sont mélangées et révélées",
      "Chacun vote pour la carte qu'il pense être celle du conteur",
      "Points si certains (mais pas tous) trouvent votre carte",
    ],
    conseil: "Soyez ni trop évident, ni trop obscur dans vos indices !",
  },
  {
    nom: "Monopoly",
    emoji: "🏠",
    joueurs: "2 à 6 joueurs",
    duree: "60-180 min",
    age: "Dès 8 ans",
    objectif: "Devenez le joueur le plus riche en achetant et louant des propriétés !",
    regles: [
      "Lancez les dés et avancez sur le plateau",
      "Achetez les propriétés sur lesquelles vous tombez",
      "Construisez des maisons et hôtels pour augmenter les loyers",
      "Payez le loyer quand vous tombez sur la propriété d'un autre",
      "Le dernier joueur non ruiné gagne la partie !",
    ],
    conseil: "Les gares et les services publics sont souvent sous-estimés !",
  },
  {
    nom: "Trivial Pursuit",
    emoji: "🧠",
    joueurs: "2 à 6 joueurs",
    duree: "60-90 min",
    age: "Dès 12 ans",
    objectif: "Collectez les 6 camemberts en répondant correctement aux questions !",
    regles: [
      "Lancez le dé et déplacez-vous sur le plateau",
      "Répondez à une question de la catégorie correspondant à la case",
      "Une bonne réponse vous permet de rejouer",
      "Sur les cases spéciales, gagnez un camembert de la couleur",
      "Retournez au centre avec vos 6 camemberts pour la question finale",
    ],
    conseil: "Visez d'abord les catégories où vous êtes le plus fort !",
  },
  {
    nom: "Mille Bornes",
    emoji: "🚗",
    joueurs: "2 à 6 joueurs",
    duree: "20-30 min",
    age: "Dès 7 ans",
    objectif: "Parcourez 1000 bornes en premier malgré les embûches !",
    regles: [
      "Jouez des cartes étapes (25, 50, 75, 100, 200 km) pour avancer",
      "Posez des attaques sur vos adversaires (panne, crevaison, feu rouge...)",
      "Défendez-vous avec les parades correspondantes",
      "Les bottes (as du volant, citerne...) vous protègent définitivement",
      "Le premier à atteindre exactement 1000 bornes gagne",
    ],
    conseil: "Gardez vos bottes pour le coup-fourré et doubler vos points !",
  },
  {
    nom: "La Bonne Paye",
    emoji: "💰",
    joueurs: "2 à 6 joueurs",
    duree: "45-60 min",
    age: "Dès 8 ans",
    objectif: "Terminez l'année avec le plus d'argent possible !",
    regles: [
      "Avancez sur le plateau et suivez les instructions des cases",
      "Le 31 de chaque mois, recevez votre salaire",
      "Gérez vos dépenses : factures, achats, imprévus",
      "Investissez dans l'immobilier ou les actions pour gagner plus",
      "Après 12 mois, le joueur le plus riche gagne",
    ],
    conseil: "Équilibrez dépenses et investissements !",
  },
  {
    nom: "Qui est-ce ?",
    emoji: "🤔",
    joueurs: "2 joueurs",
    duree: "10-15 min",
    age: "Dès 6 ans",
    objectif: "Devinez le personnage mystère de votre adversaire !",
    regles: [
      "Chaque joueur choisit secrètement un personnage",
      "Posez des questions auxquelles on répond par oui ou non",
      "Rabattez les personnages qui ne correspondent pas",
      "Vous ne pouvez poser qu'une question par tour",
      "Devinez le personnage adverse avant qu'il ne trouve le vôtre",
    ],
    conseil: "Posez des questions qui éliminent beaucoup de personnages !",
  },
  {
    nom: "La Ronde du Pollen",
    emoji: "🐝",
    joueurs: "2 à 4 joueurs",
    duree: "15-20 min",
    age: "Dès 4 ans",
    objectif: "Aidez les abeilles à récolter le pollen et remplir la ruche !",
    regles: [
      "Déplacez votre abeille de fleur en fleur selon le dé",
      "Récoltez le pollen des fleurs où vous vous posez",
      "Rapportez le pollen à la ruche pour marquer des points",
      "Attention à l'ours qui peut voler votre pollen !",
      "Remplissez la ruche en équipe ou en compétition selon la variante",
    ],
    conseil: "Planifiez vos trajets pour optimiser la récolte !",
  },
  {
    nom: "Gagne ton Papa",
    emoji: "🧩",
    joueurs: "1 à 2 joueurs",
    duree: "10-15 min",
    age: "Dès 3 ans",
    objectif: "Remplissez votre plateau avec les pièces avant votre adversaire !",
    regles: [
      "Chaque joueur a un plateau et des pièces de formes différentes",
      "Placez vos pièces pour remplir complètement votre espace",
      "Les pièces ne peuvent pas se chevaucher ni dépasser",
      "Le premier à compléter son plateau gagne la manche",
      "Augmentez la difficulté en agrandissant l'espace à remplir",
    ],
    conseil: "Commencez par les pièces les plus difficiles à placer !",
  },
  {
    nom: "Cluedo",
    emoji: "🔍",
    joueurs: "3 à 6 joueurs",
    duree: "45-60 min",
    age: "Dès 8 ans",
    objectif: "Découvrez qui a commis le meurtre, avec quelle arme et dans quelle pièce !",
    regles: [
      "Un suspect, une arme et une pièce sont placés secrètement dans l'enveloppe",
      "Les autres cartes sont distribuées aux joueurs",
      "Déplacez-vous dans les pièces pour faire des hypothèses",
      "Les autres joueurs doivent vous montrer une carte s'ils peuvent réfuter",
      "Faites votre accusation finale quand vous pensez avoir trouvé !",
    ],
    conseil: "Notez bien toutes les cartes montrées pour éliminer les possibilités !",
  },
  {
    nom: "Puissance 4",
    emoji: "🔴",
    joueurs: "2 joueurs",
    duree: "10 min",
    age: "Dès 6 ans",
    objectif: "Alignez 4 jetons de votre couleur avant votre adversaire.",
    regles: [
      "Chaque joueur choisit une couleur (rouge ou jaune)",
      "À tour de rôle, glissez un jeton dans une colonne",
      "Les jetons tombent en bas de la grille",
      "Alignez 4 jetons en ligne, colonne ou diagonale pour gagner",
      "Si la grille est pleine sans alignement, c'est match nul !",
    ],
    conseil: "Contrôlez le centre de la grille, c'est la clé !",
  },
  {
    nom: "Memory",
    emoji: "🧠",
    joueurs: "2 à 6 joueurs",
    duree: "10-15 min",
    age: "Dès 3 ans",
    objectif: "Retrouvez le plus de paires de cartes identiques !",
    regles: [
      "Étalez toutes les cartes face cachée sur la table",
      "Retournez deux cartes par tour pour trouver des paires",
      "Si les cartes sont identiques, gardez-les et rejouez",
      "Sinon, retournez-les face cachée et c'est au joueur suivant",
      "Le joueur avec le plus de paires à la fin gagne",
    ],
    conseil: "Concentrez-vous et mémorisez l'emplacement des cartes vues !",
  },
  {
    nom: "La Guerre des Moutons",
    emoji: "🐑",
    joueurs: "2 à 4 joueurs",
    duree: "20-30 min",
    age: "Dès 7 ans",
    objectif: "Constituez les plus grands troupeaux de moutons de votre couleur !",
    regles: [
      "Placez des tuiles terrain pour créer des enclos",
      "Chaque enclos fermé rapporte des points selon sa taille",
      "Les moutons de votre couleur dans un enclos comptent pour vous",
      "Bloquez vos adversaires en fermant leurs enclos prématurément",
      "Le joueur avec le plus grand total de moutons gagne",
    ],
    conseil: "Agrandissez vos enclos tout en limitant ceux des autres !",
  },
  {
    nom: "C'est pas Sorcier",
    emoji: "🔬",
    joueurs: "2 à 6 joueurs",
    duree: "30-45 min",
    age: "Dès 7 ans",
    objectif: "Répondez aux questions scientifiques pour avancer sur le plateau !",
    regles: [
      "Les enfants et les parents jouent en équipes opposées",
      "Lancez le dé et répondez à une question de la catégorie",
      "Les questions sont adaptées : plus faciles pour les enfants",
      "Une bonne réponse vous fait avancer, une mauvaise passe le tour",
      "La première équipe à atteindre l'arrivée gagne",
    ],
    conseil: "Écoutez bien les indices dans les questions !",
  },
];

export default function GuideJeuxHotel() {
  const scrollToGame = (gameName: string) => {
    const element = document.getElementById(gameName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <main className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* En-tête Mercure */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🎲</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a2b4a]">
              Espace Jeux
            </h1>
            <span className="text-4xl">🎲</span>
          </div>
          <p className="text-xl text-[#c9a227] font-semibold mb-2">
            Mercure Peyragudes Loudenvielle
          </p>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Retrouvez ici les règles de tous nos jeux de société disponibles à
            la réception !
          </p>
        </header>

        {/* Navigation rapide */}
        <nav className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {tousLesJeux.map((jeu) => (
              <button
                key={jeu.nom}
                onClick={() => scrollToGame(jeu.nom)}
                className="px-3 py-1.5 bg-[#1a2b4a] text-white rounded-full text-sm font-medium
                         hover:bg-[#c9a227] hover:text-[#1a2b4a] transition-all duration-200
                         shadow-sm hover:shadow-md active:scale-95"
              >
                {jeu.emoji} {jeu.nom}
              </button>
            ))}
          </div>
        </nav>

        {/* Cartes des jeux */}
        <div className="space-y-8">
          {tousLesJeux.map((jeu) => (
            <article
              key={jeu.nom}
              id={jeu.nom}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100
                       scroll-mt-4 transition-shadow hover:shadow-2xl"
            >
              {/* Bandeau du jeu */}
              <div className="bg-gradient-to-r from-[#1a2b4a] to-[#2d4a6f] text-white p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{jeu.emoji}</span>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">
                        {jeu.nom}
                      </h2>
                      <p className="text-blue-200 mt-1">{jeu.objectif}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                      👥 {jeu.joueurs}
                    </span>
                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                      ⏱️ {jeu.duree}
                    </span>
                    <span className="bg-[#c9a227] text-[#1a2b4a] px-3 py-1 rounded-full font-semibold">
                      {jeu.age}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenu du jeu */}
              <div className="p-6">
                {/* Règles */}
                <div>
                  <h3 className="text-xl font-bold text-[#1a2b4a] mb-4 flex items-center gap-2">
                    <span className="bg-[#1a2b4a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                      📖
                    </span>
                    Comment jouer ?
                  </h3>
                  <ol className="space-y-3">
                    {jeu.regles.map((regle, i) => (
                      <li key={i} className="flex gap-3">
                        <span
                          className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-[#c9a227] to-[#a88520] 
                                     text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm"
                        >
                          {i + 1}
                        </span>
                        <span className="text-slate-700 leading-relaxed">
                          {regle}
                        </span>
                      </li>
                    ))}
                  </ol>

                  {/* Conseil */}
                  <div
                    className="mt-6 bg-gradient-to-r from-[#c9a227]/10 to-[#c9a227]/5
                               rounded-xl p-4 border border-[#c9a227]/30"
                  >
                    <p className="text-[#1a2b4a] font-medium">
                      💡 <strong>Astuce :</strong> {jeu.conseil}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Message de fin */}
        <section
          className="mt-16 bg-gradient-to-r from-[#1a2b4a] to-[#2d4a6f]
                      text-white rounded-2xl p-10 shadow-xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Passez de bons moments en famille !
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-6">
            Tous ces jeux sont à votre disposition gratuitement pendant votre
            séjour. Demandez-les à la réception et profitez de belles soirées
            ensemble !
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 backdrop-blur px-5 py-2 rounded-full">
              Gratuit pour les clients
            </span>
            <span className="bg-white/20 backdrop-blur px-5 py-2 rounded-full">
              Disponible à la réception
            </span>
            <span className="bg-[#c9a227] text-[#1a2b4a] px-5 py-2 rounded-full font-bold">
              Pour toute la famille
            </span>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-slate-500 text-sm">
          <p>Mercure Peyragudes Loudenvielle - Espace Jeux de Société</p>
          <p className="mt-1">
            Besoin d'un jeu ? Passez nous voir à la réception !
          </p>
        </footer>
      </main>
    </div>
  );
}
