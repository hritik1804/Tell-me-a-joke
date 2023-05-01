const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why don't oysters give to charity? Because they're shellfish!",
  "Why do we tell actors to 'break a leg?' Because every play has a cast!",
  "Why did the math book look so sad? Because it had too many problems!",
  "Why did the chicken cross the playground? To get to the other slide!",
  "Why did the banana go to the doctor? Because it wasn't peeling well!",
  "What do you call a fake noodle? An impasta!",
  "What do you call a can opener that doesn't work? A can't opener!",
  "Why do birds fly south for the winter? Because it's too far to walk!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What did one toilet say to the other toilet? You look a bit flushed.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "Why was the math book sad? Because it had too many problems.",
  "What do you call a fake noodle? An impasta.",
  "Why did the tomato turn red? Because it saw the salad dressing.",
  "Why did the man put his money in the freezer? He wanted cold hard cash!",
  "Why did the banana go to the doctor? Because it wasn't peeling well!",
  "What do you get when you cross a snowman and a shark? Frostbite!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "What did the grape say when it got stepped on all day? Nothing, it just let out a little wine.",
  "Why did the cookie go to the doctor? Because it felt crummy.",
  "Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels.",
  "What do you call a boomerang that doesn't come back? A stick.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you call an alligator in a vest? An investigator.",
  "Why do birds fly south for the winter? Because it's too far to walk!",
  "What did one wall say to the other wall? I'll meet you at the corner!",
  "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
  "Why do we tell actors to 'break a leg?' Because every play has a cast!",
  "Why did the math book look so sad? Because it had too many problems!",
  "Why did the chicken cross the playground? To get to the other slide!",
  "Why did the oyster refuse to share his treasure? Because he was a little shellfish."
];

function tellJoke() {
  const jokeIndex = Math.floor(Math.random() * jokes.length);
  document.getElementById("joke").innerHTML = jokes[jokeIndex];
}