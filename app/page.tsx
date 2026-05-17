"use client";

import { useState, useEffect, useRef } from "react";

const tousLesJeux = [
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
];

export default function GuideJeuxHotel() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer pour les animations au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToGame = (gameName: string) => {
    const element = document.getElementById(gameName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100">
      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-[#1a2b4a] text-white p-4 rounded-full shadow-lg
                 hover:bg-[#c9a227] hover:text-[#1a2b4a] transition-all duration-500
                 flex items-center justify-center hover:scale-110 active:scale-95
                 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"}`}
        aria-label="Retour en haut"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      <main className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* En-tete Mercure */}
        <header className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <span className="text-5xl animate-float">🎲</span>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#1a2b4a] tracking-tight">
                Espace Jeux
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#c9a227] to-[#e8d069] mx-auto mt-3 rounded-full" />
            </div>
            <span className="text-5xl animate-float animation-delay-500">🎲</span>
          </div>
          <p className="text-2xl text-[#c9a227] font-semibold mb-3 tracking-wide">
            Mercure Peyragudes Loudenvielle
          </p>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Retrouvez ici les regles de tous nos jeux de societe disponibles a
            la reception !
          </p>
        </header>

        {/* Navigation rapide */}
        <nav className="mb-16 animate-fade-in animation-delay-300">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/50">
            <h2 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Acces rapide aux jeux
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {tousLesJeux.map((jeu, index) => (
                <button
                  key={jeu.nom}
                  onClick={() => scrollToGame(jeu.nom)}
                  style={{ animationDelay: `${index * 20}ms` }}
                  className="px-4 py-2 bg-gradient-to-br from-[#1a2b4a] to-[#2d4a6f] text-white rounded-full text-sm font-medium
                           hover:from-[#c9a227] hover:to-[#e8d069] hover:text-[#1a2b4a] transition-all duration-300
                           shadow-md hover:shadow-lg hover:scale-105 active:scale-95
                           animate-fade-in opacity-0"
                >
                  <span className="mr-1">{jeu.emoji}</span> {jeu.nom}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Nombre de jeux */}
        <div className="text-center mb-10 animate-fade-in animation-delay-400">
          <span className="inline-flex items-center gap-2 bg-[#1a2b4a] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
            <span className="text-2xl">🎯</span>
            {tousLesJeux.length} jeux disponibles
          </span>
        </div>

        {/* Cartes des jeux */}
        <div className="space-y-10">
          {tousLesJeux.map((jeu, index) => (
            <article
              key={jeu.nom}
              id={jeu.nom}
              ref={(el) => {
                if (el) cardRefs.current.set(jeu.nom, el);
              }}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100
                       scroll-mt-6 transition-all duration-700 hover:shadow-2xl
                       ${visibleCards.has(jeu.nom) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(index % 5) * 100}ms` }}
            >
              {/* Bandeau du jeu */}
              <div className="bg-gradient-to-r from-[#1a2b4a] via-[#243d5c] to-[#2d4a6f] text-white p-8 relative overflow-hidden">
                {/* Decoration de fond */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c9a227]/10 rounded-full translate-y-24 -translate-x-24" />
                
                <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <span className="text-6xl drop-shadow-lg transition-transform duration-300 hover:scale-110 cursor-default">
                      {jeu.emoji}
                    </span>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        {jeu.nom}
                      </h2>
                      <p className="text-blue-200/90 mt-2 text-lg max-w-md leading-relaxed">
                        {jeu.objectif}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 border border-white/10">
                      <span className="text-lg">👥</span> {jeu.joueurs}
                    </span>
                    <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 border border-white/10">
                      <span className="text-lg">⏱️</span> {jeu.duree}
                    </span>
                    <span className="bg-gradient-to-r from-[#c9a227] to-[#e8d069] text-[#1a2b4a] px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                      {jeu.age}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenu du jeu */}
              <div className="p-8">
                {/* Regles */}
                <div>
                  <h3 className="text-2xl font-bold text-[#1a2b4a] mb-6 flex items-center gap-3">
                    <span className="bg-gradient-to-br from-[#1a2b4a] to-[#2d4a6f] text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-md">
                      📖
                    </span>
                    Comment jouer ?
                  </h3>
                  <ol className="space-y-4">
                    {jeu.regles.map((regle, i) => (
                      <li 
                        key={i} 
                        className="flex gap-4 group"
                      >
                        <span
                          className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#c9a227] to-[#a88520] 
                                     text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-md
                                     group-hover:scale-110 transition-transform duration-300"
                        >
                          {i + 1}
                        </span>
                        <span className="text-slate-700 leading-relaxed text-lg pt-0.5">
                          {regle}
                        </span>
                      </li>
                    ))}
                  </ol>

                  {/* Conseil */}
                  <div
                    className="mt-8 bg-gradient-to-r from-[#c9a227]/15 via-[#c9a227]/10 to-transparent
                               rounded-2xl p-5 border-l-4 border-[#c9a227] shadow-sm"
                  >
                    <p className="text-[#1a2b4a] font-medium text-lg flex items-start gap-3">
                      <span className="text-2xl">💡</span>
                      <span>
                        <strong className="text-[#c9a227]">Astuce :</strong>{" "}
                        {jeu.conseil}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Message de fin */}
        <section
          className="mt-20 bg-gradient-to-br from-[#1a2b4a] via-[#243d5c] to-[#2d4a6f]
                      text-white rounded-3xl p-12 shadow-2xl text-center relative overflow-hidden"
        >
          {/* Decorations */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#c9a227]/10 rounded-full -translate-y-36 -translate-x-36" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 translate-x-48" />
          
          <div className="relative">
            <span className="text-6xl mb-6 block animate-float">🏔️</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Passez de bons moments en famille !
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Tous ces jeux sont a votre disposition gratuitement pendant votre
              sejour. Demandez-les a la reception et profitez de belles soirees
              ensemble !
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium border border-white/10
                             hover:bg-white/25 transition-colors duration-300 cursor-default">
                Gratuit pour les clients
              </span>
              <span className="bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium border border-white/10
                             hover:bg-white/25 transition-colors duration-300 cursor-default">
                Disponible a la reception
              </span>
              <span className="bg-gradient-to-r from-[#c9a227] to-[#e8d069] text-[#1a2b4a] px-6 py-3 rounded-full text-lg font-bold shadow-lg
                             hover:scale-105 transition-transform duration-300 cursor-default">
                Pour toute la famille
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-slate-500 animate-fade-in">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto mb-6" />
          <p className="font-medium">Mercure Peyragudes Loudenvielle</p>
          <p className="mt-2 text-sm">
            Espace Jeux de Societe - Besoin d'un jeu ? Passez nous voir a la reception !
          </p>
        </footer>
      </main>
    </div>
  );
}
