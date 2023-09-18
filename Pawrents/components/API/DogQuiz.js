const dogQuiz = [
  {
    questionText: "Who are good recourses for learning about dog behavior?",
    options: [
      "Upstate Canine Academy",
      "Pat Miller",
      "Jean Donaldson",
      "Update Canine Academy, Pat Miller, and Jean Donaldson",
    ],
    correctAnswer: "Upstate Canine Academy, Pat Miller, and Jean Donaldson",
  },
  {
    questionText: "Why should you create train your dog?",
    options: [
      "It gives your dog a safe and quiet place to escape to when they feel overwhelmed or tired. Helps you know your dog is safe when you are not home. Help your travels safely with the dog. Helps with bowel control.",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ],
    correctAnswer:
      "It gives your dog a safe and quiet place to escape to when they feel overwhelmed or tired. Helps you know your dog is safe when you are not home. Help your travels safely with the dog. Helps with bowel control.",
  },
  {
    questionText: "What is the best way to introduce them to a resident pet?",
    options: [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ],
    correctAnswer: "aaaaaaaaaaaaaa",
  },
  {
    questionText: "How long does doggy potty training take?",
    options: [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "Between 4 to 6 months",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ],
    correctAnswer: "Between 4 to 6 months",
  },
  {
    questionText:
      "What should you do when your dog is having behavioral issues you cannot solve?",
    options: [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "Contact a behaviorist",
    ],
    correctAnswer: "Contact a behaviorist",
  },
  {
    questionText: "How long can a puppy/dog hold their pee?",
    options: [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "One hour for every month they are old",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ],
    correctAnswer: "One hour for every month they are old",
  },
  {
    questionText: "How long can a puppy/dog be left alone?",
    options: [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "Puppies: 2-3 hours. Dogs: 4-6 hours (or 8-9 with enough space to safely move around)",
    ],
    correctAnswer:
      "Puppies: 2-3 hours. Dogs: 4-6 hours (or 8-9 with enough space to safely move around)",
  },
  {
    questionText: "What can a puppy do before the are fully vaccinated?",
    options: [
      "You can **carry** your pup outside. Invite friends and family over to meet the pup. Take them to a dog free friends house. Take a puppy class. Take them for car rides.",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ],
    correctAnswer:
      "You can **carry** your pup outside. Invite friends and family over to meet the pup. Take them to a dog free friends house. Take a puppy class. Take them for car rides.",
  },
  {
    questionText: "What should you do if your dog is barking excessively?",
    options: [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "Find out why they are barking. Some unknown (to humans) dog bark are because they are bored, stressed, confused, or want attention. You can play with them, give them a stimulating toy, or examine what they may feel stressed or confused",
    ],
    correctAnswer:
      "Find out why they are barking. Some unknown (to humans) dog bark are because they are bored, stressed, confused, or want attention. You can play with them, give them a stimulating toy, or examine what they may feel stressed or confused",
  },
  {
    questionText:
      "What should you do if your dog is chew things up that they should not be?",
    options: [
      "Make sure they have toys that they can chew on. It may take some time to find the right chew toy for them. Make sure they house is properly dog proofed. Make sure they are properly exercised",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ],
    correctAnswer:
      "Make sure they have toys that they can chew on. It may take some time to find the right chew toy for them. Make sure they house is properly dog proofed. Make sure they are properly exercised",
  },
  {
    questionText: "How much exercise do dogs need per day?",
    options: [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "Dogs, 30 minutes per day.",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ],
    correctAnswer: "Dogs, 30 minutes per day.",
  },
  {
    questionText:
      "What should you do if your dog is jumping when you do not want it to?    ",
    options: [
      "Understand why your dog is jumping, they could be anxious or stressed. If they are excited: Train your dog to sit and stay when people enter through the door. Do not give the pup attention when they are jumping.",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ],
    correctAnswer:
      "Understand why your dog is jumping, they could be anxious or stressed. If they are excited: Train your dog to sit and stay when people enter through the door. Do not give the pup attention when they are jumping.",
  },
  {
    questionText: "What are the steps for dog proofing your home?",
    options: [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "Put medications and cleaners in cabinet that is secured, install baby gates to prevent access to restricted rooms, remove breakable items from dogs line of sight, dog bed, toys for chewing and stimulation",
    ],
    correctAnswer:
      "Put medications and cleaners in cabinet that is secured, install baby gates to prevent access to restricted rooms, remove breakable items from dogs line of sight, dog bed, toys for chewing and stimulation",
  },
  {
    questionText: "How often should your dog go to the vet?",
    options: [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "On average once per year to update vaccinations and for preventative care.",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ],
    correctAnswer:
      "On average once per year to update vaccinations and for preventative care.",
  },
  {
    questionText: "Why should you train your dog?",
    options: [
      "It will improve relationship with your dog: it will trust you more. It keeps your dog safe. It improves your dogs confidence.",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ],
    correctAnswer:
      "It will improve relationship with your dog: it will trust you more. It keeps your dog safe. It improves your dogs confidence.",
  },
  {
    questionText: "How often to clip your dogs nails?",
    options: [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "Every 3-4 weeks",
    ],
    correctAnswer: "Every 3-4 weeks ",
  },
  {
    questionText: "What foods can dogs not have?",
    options: [
      "Grapes, Raisins, Avocados, garlic, onion, chicken bones",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ],
    correctAnswer: "Grapes, Raisins, Avocados, garlic, onion, chicken bones",
  },
  {
    questionText: "What training should your dog have?",
    options: [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "Sit, walk nicely on a leash, come, stay, no jumping on people",
    ],
    correctAnswer:
      "Sit, walk nicely on a leash, come, stay, no jumping on people",
  },
  {
    questionText: "Why should you research dog breeds before adopting?",
    options: [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "To make sure the type of dog you are adopting matches your lifestyle. Different dog breads have different temperaments. Some are higher energy than other. Some are harder to train than others. Certain breeds have more health issues than others. ",
      "There is no need to research dog breeds before adopting",
    ],
    correctAnswer:
      "To make sure the type of dog you are adopting matches your lifestyle. Different dog breads have different temperaments. Some are higher energy than other. Some are harder to train than others. Certain breeds have more health issues than others. ",
  },
];

export default dogQuiz;
