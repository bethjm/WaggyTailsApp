const catQuiz = [
  {
    questionText:
      "Who is a great online resource to learn from about keeping your cat happy?",
    options: [
      "Jackson Galaxy",
      "The Kitten Lady",
      "Mieshelle Nagelschneider",
      "Jackson Galaxy, The Kitten Lady, and Mieshelle Nagelschneider",
    ],
    correctAnswer:
      "Jackson Galaxy, The Kitten Lady, and Mieshelle Nagelschneider",
  },
  {
    questionText: "How much playtime should your cat have throughout the day?",
    options: [
      "Kittens: 30-60 minutes, Adults: 15-30 minutes, Senior: 10-15 minutes",
      "Kittens: 60-120 minutes, Adults: 30-60 minutes, Senior: 20-30 minutes",
      "Kittens: 15 minutes, Adults: 10 minutes, Senior: 5 minutes",
    ],
    correctAnswer:
      "Kittens: 30-60 minutes, Adults: 15-30 minutes, Senior: 10-15 minutes",
  },
  {
    questionText: "How many litter boxes should you have in your home?",
    options: [
      "One for every cat",
      "One for every cat, plus one",
      "One for each floor",
    ],
    correctAnswer: "One for every cat, plus one",
  },
  // {
  //   questionText: `What should you do if your cat is scratching an area they should not be?`,
  //   options: [
  //     "Find an alternate toy for them to play with to distract them",
  //     "Spray them with a spray bottle",
  //     "Place a scratcher near the object they were scratching in the direction that they were scratching the object",
  //   ],
  //   correctAnswer:
  //     "Place a scratcher near the object they were scratching in the direction that they were scratching the object",
  // },
  {
    questionText: `What are the proper steps for introducing a resident cat to a new cat?`,
    options: [
      "Keep them in separate spaces, let them sniff and play under the door. Introduce them between a gate, let them eat with each other. Give them short supervised meetings and monitor body language. When they are getting along you can let them share the same spaces",
      "Spray them with a spray bottle when they are not getting along so they learn they need to get along",
      "Introduce them between a baby gate and base next steps on their reaction. If they are not getting along, keep the baby gate in place. If they are getting along, then allow them free range.",
    ],
    correctAnswer:
      "Keep them in separate spaces, let them sniff and play under the door. Introduce them between a gate, let them eat with each other. Give them short supervised meetings and monitor body language. When they are getting along you can let them share the same spaces.",
  },
  // {
  //   questionText: "What does it mean to cat-ify your home?",
  //   options: [
  //     "Hide all cords, put stoppers in all the electrical outlets, put up gates for the rooms, make sure there are screens in the windows, put latches on cabinet doors.",
  //     "Install low pile carpet and non slip flooring. Have pull out shelves and drawers. Choose a bed with appropriate height for entry and exit. Install ramps for ease of movement and keep clear pathways.",
  //     "Have many scratching posts. Provide vertical spaces for the cats to climb like cat walls or cat trees. Give them cozy places to hide like cat beds or caves. Buy them interactive toys that they can play with and without you.",
  //   ],
  //   correctAnswer:
  //     "Have many scratching posts. Provide vertical spaces for the cats to climb like cat walls or cat trees. Give them cozy places to hide like cat beds or caves. Buy them interactive toys that they can play with and without you.",
  // },
  // {
  //   questionText: "How often should you take your adult cat to the vet?",
  //   options: [
  //     "Only when they are showing signs of sickness or injury.",
  //     "On average once per year to update vaccinations and for preventative care.",
  //     "Cats do not need to go to the vet",
  //   ],
  //   correctAnswer:
  //     "On average once per year to update vaccinations and for preventative care.",
  // },
  // {
  //   questionText: "How much water should your cat drink per day?",
  //   options: [
  //     "Cats do not like water",
  //     "4 ounces per 5 pounds of body weight.",
  //     "8 ounces per day",
  //   ],
  //   correctAnswer: "4 ounces per 5 pounds of body weight.",
  // },
  // {
  //   questionText: "How often should you clip your cat's nails?",
  //   options: ["Once a month", "Once a week", "Every 2-3 weeks"],
  //   correctAnswer: "Every 2-3 weeks",
  // },
  // {
  //   questionText: "How often should you brush your cat?",
  //   options: [
  //     "Short haired, once a week. Medium haired, 2-3 times a week. Long haired, daily.",
  //     "Short haired, do not need brushing. Medium haired, once a week. Long haired, 2-3 times a week.",
  //     "Cats are able to self clean and do not need brushing",
  //   ],
  //   correctAnswer:
  //     "Short haired, once a week. Medium haired, 2-3 times a week. Long haired, daily.",
  // },
  // {
  //   questionText: "How long can a cat be left alone at home?",
  //   options: [
  //     "Kittens, 12 hours. Adults cats, 1 day",
  //     "Kittens, 4 hours. Adult cats, 8-12 hours",
  //     "Kittens, 2 hours. Adult cats, 6 hours",
  //   ],
  //   correctAnswer: "Kittens, 4 hours. Adult cats, 8-12 hours",
  // },
  // {
  //   questionText: "What are the signs that your cat is feeling stressed?",
  //   options: [
  //     "Fussiness, change in sleeping patterns, excessive startle reflex, tense rigid bodies.",
  //     "When they become overly affectionate and seek constant attention. While it might seem like they just want more love, this behavior can actually be a sign of stress, and giving them more attention may exacerbate the issue.",
  //     "Changes in vocalization, loss of appetite, litter box problems, aggressive behavior, decreased interaction, excessive grooming, pacing",
  //   ],
  //   correctAnswer:
  //     "Changes in vocalization, loss of appetite, litter box problems, aggressive behavior, decreased interaction, excessive grooming, pacing",
  // },
  // {
  //   questionText: "How much should your cat weigh?",
  //   options: [
  //     "Female, 6-12 lbs. Male, 11-15 lbs",
  //     "Female, 3-5 lbs. Male, 7-10lbs",
  //     "Female, 10lbs. Male, 15lbs",
  //   ],
  //   correctAnswer: "Female, 6-12 lbs. Male, 11-15 lbs",
  // },
  // {
  //   questionText: "What common houseplants are toxic to cats?",
  //   options: [
  //     "Sunflowers, Marigold, Spider Plant, Money Plant, ZZ Plant",
  //     "Lilies, Snake Plants, Pothos, Aloe, Rubber Plant, Dracaena, Eucalyptus",
  //     "It is okay to have any plants in the house, just make sure the cats can not get to them",
  //   ],
  //   correctAnswer:
  //     "Lilies, Snake Plants, Pothos, Aloe, Rubber Plant, Dracaena, Eucalyptus",
  // },
  // {
  //   questionText:
  //     "What are the appropriate steps for introducing a cat to a new home?",
  //   options: [
  //     "Set up a secure room for them with litter, food and water for them to stay in until they are more comfortable, spend time with them in the room, let them explore the rest of the house under supervision, then let them free. Each phase should last a few days to a week.",
  //     "When introducing a cat to a new home, it's essential to begin by giving them a full tour of the house, including all rooms and outdoor areas, so they can immediately familiarize themselves with their new territory. Then, introduce them to all the other pets in the household at once to avoid any potential territorial disputes.",
  //   ],
  //   correctAnswer:
  //     "Set up a secure room for them with litter, food and water for them to stay in until they are more comfortable, spend time with them in the room, let them explore the rest of the house under supervision, then let them free. Each phase should last a few days to a week.",
  // },
  // {
  //   questionText: "What should you do if you need to rehome your cat?",
  //   options: [
  //     "Contact WaggyTail rescue",
  //     "Rehome the cat yourself",
  //     "Bring the cat to your local shelter",
  //   ],
  //   correctAnswer: "Contact WaggyTail rescue",
  // },
  // {
  //   questionText:
  //     "What should you do if your cat is peeing outside the litter box?",
  //   options: [
  //     "Change the type of litter you're using. Cats can be quite picky, and switching to a different scent or texture of litter will likely solve the issue.",
  //     "Spray them with a water bottle each time they do it so they learn to pee in the litter box",
  //     "Make sure the litter box is kept clean, then try a new litter placement, then try a new litter/box, make sure the cat is not stressed, and consult your vet",
  //   ],
  //   correctAnswer:
  //     "Make sure the litter box is kept clean, then try a new litter placement, then try a new litter/box, make sure the cat is not stressed, and consult your vet",
  // },
];

export default catQuiz;
