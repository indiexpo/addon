list = [
"https://www.indiexpo.net/embed/binary-boy",
"https://www.indiexpo.net/embed/tower-capture",
"https://www.indiexpo.net/embed/pumpkin-party",
"https://www.indiexpo.net/embed/vis-astart",
"https://www.indiexpo.net/embed/no-more-power-ups",
"https://www.indiexpo.net/embed/call-me-young-kaleido",
"https://www.indiexpo.net/embed/the-shadow",
"https://www.indiexpo.net/embed/tlotjgwhfgwohoc",
"https://www.indiexpo.net/embed/big-platform",
"https://www.indiexpo.net/embed/puppertrator",
"https://www.indiexpo.net/embed/match-3-quiz-maps",
"https://www.indiexpo.net/embed/in-to-the-wild",
"https://www.indiexpo.net/embed/ku-blast-brawl-alpha",
"https://www.indiexpo.net/embed/ranine-move",
"https://www.indiexpo.net/embed/solar-lunar-eclipse",
"https://www.indiexpo.net/embed/life-strife",
"https://www.indiexpo.net/embed/genaro",
"https://www.indiexpo.net/embed/faraon-fbd9d064-7d0c-424a-a632-e4e3e23d6338",
"https://www.indiexpo.net/embed/bubble-pop",
"https://www.indiexpo.net/embed/frogstrot",
"https://www.indiexpo.net/embed/trivial-anime",
"https://www.indiexpo.net/embed/trivial-movies",
"https://www.indiexpo.net/embed/rain-in-the-underground",
"https://www.indiexpo.net/embed/nort-cyber-billird",
"https://www.indiexpo.net/embed/browser-quest",
"https://www.indiexpo.net/embed/space-jump",
"https://www.indiexpo.net/embed/can-he-save-everyone",
"https://www.indiexpo.net/embed/koobyky",
"https://www.indiexpo.net/embed/abstract",
"https://www.indiexpo.net/embed/match-3-tour-loire-valley",
"https://www.indiexpo.net/embed/the-hunting-game"
];

const idx = Math.round(Math.random() * (list.length-1));
const game = list[idx];
const iframe = document.getElementById("iframe");
iframe.src = game;