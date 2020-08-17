// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Digestion & Nutrition",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "The body is capable of catabolizing many substances as sources of energy. Which of the following would be used as an energy source only after the depletion of other sources?",
            "a": [
                {"option": "fat in adipose tissue", "correct":false},
                {"option": "glucose in the blood", "correct":false},
                {"option": "protein in muscle cells", "correct":true},
                {"option": "glycogen in muscle cells", "correct":false},
                {"option": "calcium phosphate in bone", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Some nutrients are considered ʺessentialʺ in the diets of certain animals because",
            "a": [
                {"option": "only those animals use the nutrients.", "correct":false},
                {"option": "they are subunits of important polymers.", "correct":false},
                {"option": "they cannot be manufactured by the organism. ", "correct":true},
                {"option": "they are necessary coenzymes.", "correct":false},
                {"option": "only some foods contain them.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Intracellular digestion of peptides is usually immediately preceded by which process?",
            "a": [
                {"option": "hydrolysis", "correct":false},
                {"option": "endocytosis ", "correct":true},
                {"option": "absorption ", "correct":false},
                {"option": "elimination ", "correct":false},
                {"option": "secretion", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Increasing the surface area directly facilitates which of the following digestive processes?",
            "a": [
                {"option": "hydrolysis ", "correct":false},
                {"option": "absorption ", "correct":false},
                {"option": "elimination", "correct":false},
                {"option": "A and B only", "correct":true},
                {"option": "A, B, and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is an advantage of a complete digestive system over a gastrovascular cavity?",
            "a": [
                {"option": "Extracellular digestion is not needed. ", "correct":false},
                {"option": "Specialized regions are possible.", "correct":true},
                {"option": "Digestive enzymes can be more specific. ", "correct":false},
                {"option": "Extensive branching is possible.", "correct":false},
                {"option": "Intracellular digestion is easier. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Foods eaten by animals are most often composed largely of macromolecules. This requires the animals to have methods for which of the following?",
            "a": [
                {"option": "elimination", "correct":false},
                {"option": "dehydration synthesis", "correct":false},
                {"option": "enzymatic hydrolysis", "correct":true},
                {"option": "regurgitation", "correct":false},
                {"option": "demineralization", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following describes peristalsis in the digestive system?",
            "a": [
                {"option": "a process of fat emulsification in the small intestine", "correct":false},
                {"option": "voluntary control of the rectal sphincters regulating defecation", "correct":false},
                {"option": "the transport of nutrients to the liver through the hepatic portal vessel", "correct":false},
                {"option": "a common cause of loss of appetite, fatigue, and dehydration", "correct":false},
                {"option": "smooth muscle contractions that move food through the alimentary canal", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "After ingestion, the first type of macromolecule to be worked on by enzymes in the human digestive system is",
            "a": [
                {"option": "protein.", "correct":false},
                {"option": "carbohydrate. ", "correct":true},
                {"option": "cholesterol", "correct":false},
                {"option": "nucleic acid. ", "correct":false},
                {"option": "glucose.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is the substrate of salivary amylase?",
            "a": [
                {"option": "protein ", "correct":false},
                {"option": "starch ", "correct":true},
                {"option": "sucrose ", "correct":false},
                {"option": "glucose", "correct":false},
                {"option": "maltose", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following statements describes pepsin?",
            "a": [
                {"option": "It is manufactured by the pancreas.", "correct":false},
                {"option": "It helps stabilize fat-water emulsions. ", "correct":false},
                {"option": "It splits maltose into monosaccharides.", "correct":false},
                {"option": "It begins the hydrolysis of proteins in the stomach.", "correct":true},
                {"option": "It is denatured and rendered inactive in solutions with low pH.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Without functioning parietal cells, which of the following would you expect for an individual?",
            "a": [
                {"option": "not to be able to initiate protein digestion in the stomach", "correct":true},
                {"option": "not to be able to initiate mechanical digestion in the stomach", "correct":false},
                {"option": "only to be able to digest fat in the stomach", "correct":false},
                {"option": "not to be able to produce pepsinogen", "correct":false},
                {"option": "not to be able to initiate digestion in the small intestine.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is true of bile salts?",
            "a": [
                {"option": "They are enzymes.", "correct":false},
                {"option": "They are manufactured by the pancreas. ", "correct":false},
                {"option": "They emulsify fats in the duodenum.", "correct":true},
                {"option": "They increase the efficiency of pepsin action.", "correct":false},
                {"option": "They are normally an ingredient of gastric juice.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "How does the digestion and absorption of fat differ from that of carbohydrates?",
            "a": [
                {"option": "Processing of fat does not require any digestive enzymes, whereas the processing of carbohydrates does.", "correct":false},
                {"option": "Fat absorption occurs in the stomach, whereas carbohydrates are absorbed from the small intestine.", "correct":false},
                {"option": "Carbohydrates need to be emulsified before they can be digested, whereas fats do not. ", "correct":false},
                {"option": "Most absorbed fat first enters the lymphatic system, whereas carbohydrates directly enter the blood.", "correct":true},
                {"option": "Only fat must be worked on by bacteria in the large intestine before it can be absorbed.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In which blood vessel is glucose concentration likely to vary the most?",
            "a": [
                {"option": "abdominal artery", "correct":false},
                {"option": "coronary arteries", "correct":false},
                {"option": "pulmonary veins", "correct":false},
                {"option": "hepatic portal vessel", "correct":true},
                {"option": "hepatic vein, which drains the liver", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following glandular secretions involved in digestion would be most likely released initially as inactive precursors?",
            "a": [
                {"option": "protein-digesting enzymes", "correct":true},
                {"option": "fat-solubilizing bile salts", "correct":false},
                {"option": "acid-neutralizing bicarbonate", "correct":false},
                {"option": "carbohydrate-digesting enzymes", "correct":false},
                {"option": "hormones such as gastrin", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In which group of animals would you expect to find a relatively long cecum?",
            "a": [
                {"option": "carnivores ", "correct":false},
                {"option": "herbivores ", "correct":true},
                {"option": "autotrophs", "correct":false},
                {"option": "heterotrophs", "correct":false},
                {"option": "omnivores", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following animals is incorrectly paired with its feeding mechanism?",
            "a": [
                {"option": "lion–substrate feeder", "correct":true},
                {"option": "baleen whale–suspension feeder", "correct":false},
                {"option": "aphid–fluid feeder", "correct":false},
                {"option": "clam–suspension feeder", "correct":false},
                {"option": "snake–bulk feeder", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The mammalian trachea and esophagus both connect to the",
            "a": [
                {"option": "large intestine. ", "correct":false},
                {"option": "stomach.", "correct":false},
                {"option": "pharynx. ", "correct":true},
                {"option": "rectum.", "correct":false},
                {"option": "epiglottis.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following enzymes works most effectively at a very low pH?",
            "a": [
                {"option": "salivary amylase", "correct":false},
                {"option": "trypsin", "correct":false},
                {"option": "pepsin", "correct":true},
                {"option": "pancreatic amylase", "correct":false},
                {"option": "pancreatic lipase", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following organs is incorrectly paired with its function?",
            "a": [
                {"option": "stomach–protein digestion", "correct":false},
                {"option": "oral cavity–starch digestion", "correct":false},
                {"option": "large intestine–bile production", "correct":true},
                {"option": "small intestine–nutrient absorption", "correct":false},
                {"option": "pancreas–enzyme production", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "After surgical removal of an infected gallbladder, a person must be especially careful to restrict dietary intake of",
            "a": [
                {"option": "starch. ", "correct":false},
                {"option": "protein. ", "correct":false},
                {"option": "sugar. ", "correct":false},
                {"option": "fat.", "correct":true},
                {"option": "water.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "If you were to jog a mile a few hours after lunch, which stored fuel would you probably tap?",
            "a": [
                {"option": "muscle proteins", "correct":false},
                {"option": "muscle and liver glycogen", "correct":true},
                {"option": "fat stored in the liver", "correct":false},
                {"option": "fat stored in adipose tissue", "correct":false},
                {"option": "blood proteins", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
    ]
};
