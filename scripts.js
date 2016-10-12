var options = [
  "*Talks about politics*",
  "Give 'em a good seeing to",
  "Raw skill and gamesense",
  "RNG manipulation",
  "Coming in big",
  "I'm fine/dead, wait I'm not fine/dead",
  "Keeps you young, keeps you fresh",
  "*Demon voice*",
  "Bull-fucking-shit",
  "That's gonna be a tough one",
  "Fuck this game",
  "*Forgets to pick up something important*",
  "*VapeNation*",
  "*\"Go fuck yourself\" picture*",
  "Fuck you chat",
  "*Dad story*",
  "*Robbie story*",
  "Don't mind if I do",
  "*Mentions that insurance policies are scams*",
  "I'll give you a *blank*",
  "*makes effeminate voice/yell/noise*",
  "Don't fuck with the shit",
  "gee fucking gee",
  "OH COME ON GAME",
  "*Mentions GonadBot*"
];

for (var i = 1; i < 26; i++) {
  var entrance = Math.floor(Math.random() * options.length);
  var nameEntrance = options[entrance];
  var index = options.indexOf(nameEntrance);
  $(`.number${i}`).html(nameEntrance);
  options.splice(index, 1);
}

$(".cell").click(function () {
  $(this).toggleClass("active");
});
