list = [
"https://www.indiexpo.net/embed/tower-capture",
"https://www.indiexpo.net/embed/match-3-quiz-maps",
"https://www.indiexpo.net/embed/solar-lunar-eclipse",
"https://www.indiexpo.net/embed/bubble-pop",
"https://www.indiexpo.net/embed/trivial-anime",
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
