module.exports = {
TOKEN: "TOKEN DU BOT",
ownerID: ["OWNER ID"], // ID DU OWNER
botInvite: "INVITATION DU BOT", // INVITATION DU BOT
supportServer: "https://discord.gg/Larue", // INVITATION POUR LE SUPPORT DU BOT
mongodbURL: "MONGODB", // VOTRE BASE DE DONNEES MONGODB
status: 'Muppet | By Nekzy', // ce que vous voulez ici perso j'avais mis le blaz de mon bot musique  ( certifié maintenant et c'est l'ancien script qui marche toujours d'ailleurs )
commandsDir: './commands', // NE TOUCHEZ PAS A CA C'EST POUR CHARGER LE FICHIER DES COMMANDES
language: "en", // TRADUCTIONS en, tr, nl
embedColor: "#22b4b7", // COULEUR HEXADECIMALE (exemple : #FFFFFF )
errorLog: "ID SALON LOGS", // ID DU SALON DE LOGS
  
    voteManager: { // C PAS OBLIGE DE METTRE DES TRUCS ICI MAIS TJR UTILE
        status: false, // Si vous voulez mettre le status remplacez le false par true
        api_key: "", // Metterz votre clé api TOP.GG 
        vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], // Les commandes de votre bot qui seront affichées
        vote_url: "", // le lien de votre bot sur TOP.GG
    },

    playlistSettings:{
        maxPlaylist: 10, // Nombre de playlists maximum
        maxMusic: 75, //Nombre de musiques maximum
    },

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] // NE TOUCHEZ SURTOUT PAS !
},

voiceConfig: {
leaveOnFinish: false, // Si la variable est sur "true" le bot quittera le salon directement quand la musique sera terminé.
leaveOnStop: false, // Si la variable est sur "true" le bot quittera le salon directement quand la musique sera coupé.

leaveOnEmpty: { // La variable leaveOnEnd dois être sur "false pour utiliser ce système
status: true, // Si cette variable est sur "true" le bot quittera le salon avant de s'éteindre.
cooldown: 10000000, //1000 = 1 second
},

},

maxVol: 150, // Vous pouvez configurer le Volume maximum.

}
}
