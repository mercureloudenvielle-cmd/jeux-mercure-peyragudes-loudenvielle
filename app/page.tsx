"use client";

import { useState } from "react";

const jeuxDetailles = [
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
    emoji: "🔴🟡",
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
];

const autresJeux = [
  "Monopoly",
  "Scrabble",
  "Cluedo",
  "Risk",
  "Trivial Pursuit",
  "Échecs",
  "Dames",
  "Backgammon",
  "Jenga",
  "Mikado",
  "Bataille navale",
  "Qui est-ce ?",
  "Pictionary",
  "Time's Up",
  "Dixit",
  "Catan",
  "Ticket to Ride",
  "7 Wonders",
];

export default function GuideJeuxHotel() {
  const [expandedGame, setExpandedGame] = useState<string | null>(null);

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
            Retrouvez ici les règles de tous nos jeux de société — avec des
            vidéos pour apprendre en un clin d&apos;œil !
          </p>
        </header>

        {/* Navigation rapide */}
        <nav className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {jeuxDetailles.map((jeu) => (
              <button
                key={jeu.nom}
                onClick={() => scrollToGame(jeu.nom)}
                className="px-4 py-2 bg-[#1a2b4a] text-white rounded-full text-sm font-medium
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
          {jeuxDetailles.map((jeu, index) => (
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

        {/* Autres jeux disponibles */}
        <section className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          <h2 className="text-3xl font-bold text-center text-[#1a2b4a] mb-2">
            🧩 Tous nos jeux
          </h2>
          <p className="text-center text-slate-600 mb-8">
            D&apos;autres jeux vous attendent à la réception !
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {autresJeux.map((jeu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-4
                         text-center font-medium text-[#1a2b4a] shadow-sm
                         border border-slate-100 hover:border-[#c9a227]
                         hover:shadow-md transition-all duration-200 cursor-default"
              >
                {jeu}
              </div>
            ))}
          </div>
        </section>

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
