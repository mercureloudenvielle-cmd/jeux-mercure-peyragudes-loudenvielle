"use client";

import { useState } from "react";

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
    conseil: "Entraînez votre œil, les symboles aiment se cacher !",
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
      "Les autres joueurs doivent vous montrer une carte si ils peuvent réfuter",
      "Faites votre accusation finale quand vous pensez avoir trouvé !",
    ],
    conseil: "Notez bien toutes les cartes montrées pour éliminer les possibilités !",
  },
  {
    nom: "Risk",
    emoji: "⚔️",
    joueurs: "2 à 6 joueurs",
    duree: "120-180 min",
    age: "Dès 10 ans",
    objectif: "Conquérez le monde en éliminant les armées adverses !",
    regles: [
      "Chaque joueur reçoit des territoires et des armées au début",
      "Renforcez vos territoires avec de nouvelles armées chaque tour",
      "Attaquez les territoires voisins en lançant les dés",
      "Contrôler un continent entier donne des armées bonus",
      "Éliminez tous les adversaires ou accomplissez votre mission secrète",
    ],
    conseil: "L'Australie est facile à défendre avec un seul point d'entrée !",
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
    nom: "Échecs",
    emoji: "♟️",
    joueurs: "2 joueurs",
    duree: "30-60 min",
    age: "Dès 6 ans",
    objectif: "Mettez le roi adverse en échec et mat !",
    regles: [
      "Chaque pièce a un mouvement spécifique (tour en ligne, fou en diagonale...)",
      "Le roi ne peut se déplacer que d'une case mais dans toutes les directions",
      "La dame combine les mouvements de la tour et du fou",
      "Capturez les pièces adverses en vous plaçant sur leur case",
      "Échec et mat : le roi est attaqué et ne peut plus fuir",
    ],
    conseil: "Contrôlez le centre du plateau dès l'ouverture !",
  },
  {
    nom: "Dames",
    emoji: "⚫",
    joueurs: "2 joueurs",
    duree: "20-30 min",
    age: "Dès 6 ans",
    objectif: "Capturez tous les pions adverses ou bloquez-les !",
    regles: [
      "Les pions se déplacent en diagonale d'une case vers l'avant",
      "Capturez en sautant par-dessus un pion adverse",
      "Les prises sont obligatoires si elles sont possibles",
      "Un pion arrivé au bout devient une dame et peut reculer",
      "Gagnez en capturant tous les pions ou en bloquant l'adversaire",
    ],
    conseil: "Gardez vos pions groupés pour vous protéger mutuellement !",
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
    nom: "Jenga",
    emoji: "🧱",
    joueurs: "2 à 10 joueurs",
    duree: "15-20 min",
    age: "Dès 6 ans",
    objectif: "Retirez des blocs sans faire tomber la tour !",
    regles: [
      "La tour est construite avec 54 blocs empilés par 3",
      "À votre tour, retirez un bloc avec une seule main",
      "Placez le bloc retiré au sommet de la tour",
      "Ne touchez pas les autres blocs pendant votre tour",
      "Celui qui fait tomber la tour a perdu !",
    ],
    conseil: "Testez légèrement les blocs avant de les retirer !",
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
    nom: "Bataille navale",
    emoji: "🚢",
    joueurs: "2 joueurs",
    duree: "20-30 min",
    age: "Dès 7 ans",
    objectif: "Coulez tous les navires de votre adversaire !",
    regles: [
      "Placez vos navires secrètement sur votre grille",
      "À tour de rôle, annoncez une coordonnée (ex: B4)",
      "L'adversaire répond 'touché' ou 'à l'eau'",
      "Un navire est coulé quand toutes ses cases sont touchées",
      "Le premier à couler tous les navires adverses gagne",
    ],
    conseil: "Ne tirez pas au hasard, quadrillez méthodiquement !",
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
    nom: "Pictionary",
    emoji: "🎨",
    joueurs: "4 à 10 joueurs",
    duree: "30-60 min",
    age: "Dès 8 ans",
    objectif: "Faites deviner des mots à votre équipe en dessinant !",
    regles: [
      "Formez deux équipes minimum",
      "Un joueur tire une carte et dessine le mot sans parler",
      "Son équipe doit deviner le mot dans le temps imparti",
      "Pas de lettres, chiffres ou gestes autorisés",
      "L'équipe qui avance le plus sur le plateau gagne",
    ],
    conseil: "Dessinez les éléments les plus reconnaissables en premier !",
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
    nom: "Catan",
    emoji: "🏝️",
    joueurs: "3 à 4 joueurs",
    duree: "60-90 min",
    age: "Dès 10 ans",
    objectif: "Développez votre colonie et atteignez 10 points de victoire !",
    regles: [
      "Placez vos colonies et routes sur l'île de Catan",
      "Les dés déterminent quelles ressources sont produites",
      "Échangez des ressources avec les autres joueurs",
      "Construisez routes, colonies et villes avec vos ressources",
      "Premier joueur à 10 points de victoire gagne",
    ],
    conseil: "Diversifiez vos ressources dès le placement initial !",
  },
  {
    nom: "Ticket to Ride",
    emoji: "🚂",
    joueurs: "2 à 5 joueurs",
    duree: "45-60 min",
    age: "Dès 8 ans",
    objectif: "Construisez des lignes de train pour relier vos destinations !",
    regles: [
      "Piochez des cartes wagon de différentes couleurs",
      "Utilisez ces cartes pour réclamer des routes sur le plateau",
      "Complétez vos tickets de destination pour marquer des points",
      "Les routes plus longues rapportent plus de points",
      "Attention : les destinations non complétées font perdre des points !",
    ],
    conseil: "Gardez vos destinations secrètes pour surprendre vos adversaires !",
  },
  {
    nom: "7 Wonders",
    emoji: "🏛️",
    joueurs: "2 à 7 joueurs",
    duree: "30-45 min",
    age: "Dès 10 ans",
    objectif: "Développez votre civilisation et construisez votre merveille !",
    regles: [
      "Chaque joueur dirige une des 7 merveilles du monde antique",
      "On joue en 3 âges, choisissant une carte par tour",
      "Passez les cartes restantes à votre voisin",
      "Construisez des bâtiments, développez la science et l'armée",
      "Additionnez vos points de toutes les catégories à la fin",
    ],
    conseil: "Surveillez ce que construisent vos voisins directs !",
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
            🏔️ Passez de bons moments en famille !
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-6">
            Tous ces jeux sont à votre disposition gratuitement pendant votre
            séjour. Demandez-les à la réception et profitez de belles soirées
            ensemble !
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 backdrop-blur px-5 py-2 rounded-full">
              ✓ Gratuit pour les clients
            </span>
            <span className="bg-white/20 backdrop-blur px-5 py-2 rounded-full">
              ✓ Disponible à la réception
            </span>
            <span className="bg-[#c9a227] text-[#1a2b4a] px-5 py-2 rounded-full font-bold">
              ✓ Pour toute la famille
            </span>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-slate-500 text-sm">
          <p>Mercure Peyragudes Loudenvielle • Espace Jeux de Société</p>
          <p className="mt-1">
            Besoin d&apos;un jeu ? Passez nous voir à la réception ! 🙂
          </p>
        </footer>
      </main>
    </div>
  );
}
