// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Photosynthesis",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Organisms interact with their environments, exchanging matter and energy. For example, plant chloroplasts convert the energy of sunlight into",
            "a": [
                {"option": "the energy of motion.", "correct":false},
                {"option": "carbon dioxide and water.", "correct":false},
                {"option": "the potential energy of chemical bonds. ", "correct":true},
                {"option": "oxygen.", "correct":false},
                {"option": "kinetic energy.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Where does the Calvin cycle take place?",
            "a": [
                {"option": "stroma of the chloroplast", "correct":true},
                {"option": "thylakoid membrane", "correct":false},
                {"option": "cytoplasm surrounding the chloroplast", "correct":false},
                {"option": "chlorophyll molecule", "correct":false},
                {"option": "outer membrane of the chloroplast", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In autotrophic bacteria, where are the enzymes located that can carry out photosynthesis?",
            "a": [
                {"option": "chloroplast membranes", "correct":false},
                {"option": "nuclear membranes", "correct":false},
                {"option": "free in the cytosol", "correct":false},
                {"option": "along the outer edge of the nucleoid", "correct":false},
                {"option": "along the inner surface of the plasma membrane", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "When oxygen is released as a result of photosynthesis, it is a by-product of which of the following?",
            "a": [
                {"option": "reducing NADP+", "correct":false},
                {"option": "splitting the water molecules", "correct":true},
                {"option": "chemiosmosis", "correct":false},
                {"option": "the electron transfer system of photosystem I", "correct":false},
                {"option": "the electron transfer system of photosystem II", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A plant has a unique photosynthetic pigment. The leaves of this plant appear to be reddish yellow. What wavelengths of visible light are being absorbed by this pigment?",
            "a": [
                {"option": "red and yellow", "correct":false},
                {"option": "blue and violet", "correct":true},
                {"option": "green and yellow", "correct":false},
                {"option": "blue, green, and red", "correct":false},
                {"option": "green, blue, and yellow", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In the thylakoid membranes, what is the main role of the antenna pigment molecules?",
            "a": [
                {"option": "split water and release oxygen to the reaction-center chlorophyll", "correct":false},
                {"option": "harvest photons and transfer light energy to the reaction-center chlorophyll", "correct":true},
                {"option": "synthesize ATP from ADP and Pi", "correct":false},
                {"option": "transfer electrons to ferredoxin and then NADPH", "correct":false},
                {"option": "concentrate photons within the stroma", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which statement describes the functioning of photosystem II?",
            "a": [
                {"option": "Light energy excites electrons in the electron transport chain in a photosynthetic unit. ", "correct":false},
                {"option": "The excitation is passed along to a molecule of P700 chlorophyll in the photosynthetic unit.", "correct":false},
                {"option": "The P680 chlorophyll donates a pair of protons to NADPH, which is thus converted to NADP+.", "correct":false},
                {"option": "The electron 'holes' in P680 are filled by electrons derived from water.", "correct":true},
                {"option": "The splitting of water yields molecular carbon dioxide as a by-product. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following are directly associated with photosystem I?",
            "a": [
                {"option": "harvesting of light energy by ATP", "correct":false},
                {"option": "receiving electrons from plastocyanin", "correct":true},
                {"option": "P680 reaction-center chlorophyll", "correct":false},
                {"option": "extraction of hydrogen electrons from the splitting of water", "correct":false},
                {"option": "passing electrons to plastoquinone", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "As a research scientist, you measure the amount of ATP and NADPH consumed by the Calvin cycle in 1 hour. You find 30,000 molecules of ATP consumed, but only 20,000 molecules of NADPH. Where did the extra ATP molecules come from?",
            "a": [
                {"option": "photosystem II ", "correct":false},
                {"option": "photosystem I", "correct":false},
                {"option": "cyclic electron flow ", "correct":true},
                {"option": "noncyclic electron flow ", "correct":false},
                {"option": "chlorophyll", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In a plant cell, where are the ATP synthase complexes located?",
            "a": [
                {"option": "thylakoid membrane", "correct":false},
                {"option": "plasma membrane", "correct":false},
                {"option": "inner mitochondrial membrane", "correct":false},
                {"option": "A and C", "correct":true},
                {"option": "A, B, and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In mitochondria, chemiosmosis translocates protons from the matrix into the intermembrane space, whereas in chloroplasts, chemiosmosis translocates protons from",
            "a": [
                {"option": "the stroma to the photosystem II. ", "correct":false},
                {"option": "the matrix to the stroma.", "correct":false},
                {"option": "the stroma to the thylakoid space.", "correct":true},
                {"option": "the intermembrane space to the matrix.", "correct":false},
                {"option": "ATP synthase to NADP+ reductase. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Where are the molecules of the electron transport chain found in plant cells?",
            "a": [
                {"option": "thylakoid membranes of chloroplasts", "correct":true},
                {"option": "stroma of chloroplasts", "correct":false},
                {"option": "inner membrane of mitochondria", "correct":false},
                {"option": "matrix of mitochondria", "correct":false},
                {"option": "cytoplasm", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Synthesis of ATP by the chemiosmotic mechanism occurs during",
            "a": [
                {"option": "photosynthesis.", "correct":false},
                {"option": "respiration.", "correct":false},
                {"option": "both photosynthesis and respiration.", "correct":true},
                {"option": "neither photosynthesis nor respiration. ", "correct":false},
                {"option": "photorespiration.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Reduction of oxygen to form water occurs during",
            "a": [
                {"option": "photosynthesis. ", "correct":false},
                {"option": "respiration.", "correct":true},
                {"option": "both photosynthesis and respiration.", "correct":false},
                {"option": "neither photosynthesis nor respiration.", "correct":false},
                {"option": "photorespiration.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Reduction of NADP+ occurs during",
            "a": [
                {"option": "photosynthesis. ", "correct":true},
                {"option": "respiration.", "correct":false},
                {"option": "both photosynthesis and respiration.", "correct":false},
                {"option": "neither photosynthesis nor respiration.", "correct":false},
                {"option": "photorespiration.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Generation of proton gradients across membranes occurs during",
            "a": [
                {"option": "photosynthesis. ", "correct":false},
                {"option": "cellular respiration.", "correct":false},
                {"option": "both photosynthesis and cellular respiration.", "correct":true},
                {"option": "neither photosynthesis nor cellular respiration.", "correct":false},
                {"option": "photorespiration.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "P680+ (the oxidized form of P680) is said to be the strongest biological oxidizing agent. Why?",
            "a": [
                {"option": "It is the receptor for the most excited electron in either photosystem.", "correct":false},
                {"option": "It is the molecule that transfers electrons to plastoquinone (Pq) of the electron transfer system.", "correct":false},
                {"option": "NADP reductase will then catalyze the shift of the electron from Fd to NADP + to reduce it to NADPH.", "correct":false},
                {"option": "This molecule results from the transfer of an electron to the primary electron acceptor of photosystem II and strongly attracts another electron.", "correct":true},
                {"option": "This molecule is found far more frequently among bacteria as well as in plants and plantlike Protists.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Where do the enzymatic reactions of the Calvin cycle take place?",
            "a": [
                {"option": "stroma of the chloroplast", "correct":true},
                {"option": "thylakoid membranes", "correct":false},
                {"option": "outer membrane of the chloroplast", "correct":false},
                {"option": "electron transport chain", "correct":false},
                {"option": "thylakoid space", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is the primary function of the Calvin cycle?",
            "a": [
                {"option": "use ATP to release carbon dioxide", "correct":false},
                {"option": "use NADPH to release carbon dioxide", "correct":false},
                {"option": "split water and release oxygen", "correct":false},
                {"option": "transport RuBP out of the chloroplast", "correct":false},
                {"option": "synthesize simple sugars from carbon dioxide", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Compare the light reactions with the Calvin cycle of photosynthesis in plants. Which of the following produces molecular oxygen (O2)?",
            "a": [
                {"option": "light reactions alone", "correct":true},
                {"option": "the Calvin cycle alone", "correct":false},
                {"option": "both the light reactions and the Calvin cycle", "correct":false},
                {"option": "neither the light reactions nor the Calvin cycle", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Compare the light reactions with the Calvin cycle of photosynthesis in plants. Which of the following requires ATP?",
            "a": [
                {"option": "light reactions alone", "correct":false},
                {"option": "the Calvin cycle alone", "correct":true},
                {"option": "both the light reactions and the Calvin cycle", "correct":false},
                {"option": "neither the light reactions nor the Calvin cycle", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Compare the light reactions with the Calvin cycle of photosynthesis in plants. Which of the following produces NADH?",
            "a": [
                {"option": "light reactions alone", "correct":false},
                {"option": "the Calvin cycle alone", "correct":false},
                {"option": "both the light reactions and the Calvin cycle", "correct":false},
                {"option": "neither the light reactions nor the Calvin cycle", "correct":true}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Compare the light reactions with the Calvin cycle of photosynthesis in plants. Which of the following produces NADPH?",
            "a": [
                {"option": "light reactions alone", "correct":true},
                {"option": "the Calvin cycle alone", "correct":false},
                {"option": "both the light reactions and the Calvin cycle", "correct":false},
                {"option": "neither the light reactions nor the Calvin cycle", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Compare the light reactions with the Calvin cycle of photosynthesis in plants. Which of the following produces three-carbon sugars?",
            "a": [
                {"option": "light reactions alone", "correct":false},
                {"option": "the Calvin cycle alone", "correct":true},
                {"option": "both the light reactions and the Calvin cycle", "correct":false},
                {"option": "neither the light reactions nor the Calvin cycle", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Compare the light reactions with the Calvin cycle of photosynthesis in plants. Which of the following requires CO2?",
            "a": [
                {"option": "light reactions alone", "correct":false},
                {"option": "the Calvin cycle alone", "correct":true},
                {"option": "both the light reactions and the Calvin cycle", "correct":false},
                {"option": "neither the light reactions nor the Calvin cycle", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Compare the light reactions with the Calvin cycle of photosynthesis in plants. Which of the following requires glucose?",
            "a": [
                {"option": "light reactions alone", "correct":false},
                {"option": "the Calvin cycle alone", "correct":false},
                {"option": "both the light reactions and the Calvin cycle", "correct":false},
                {"option": "neither the light reactions nor the Calvin cycle", "correct":true}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The pH of the inner thylakoid space has been measured, as have the pH of the stroma and of the cytosol of a particular plant cell. Which, if any, relationship would you expect to find?",
            "a": [
                {"option": "The pH within the thylakoid is less than that of the stroma.", "correct":true},
                {"option": "The pH of the stroma is higher than that of the other two measurements.", "correct":false},
                {"option": "The pH of the stroma is higher than that of the thylakoid space but lower than that of the cytosol.", "correct":false},
                {"option": "The pH of the thylakoid space is higher than that anywhere else in the cell.", "correct":false},
                {"option": "There is no consistent relationship.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "CAM plants keep stomata closed in daytime, thus reducing loss of water. They can do this because they",
            "a": [
                {"option": "fix CO2 into organic acids during the night.", "correct":true},
                {"option": "fix CO2 into sugars in the bundle-sheath cells. ", "correct":false},
                {"option": "fix CO2 into pyruvate in the mesophyll cells.", "correct":false},
                {"option": "use the enzyme phosphofructokinase, which outcompetes rubisco for CO 2. ", "correct":false},
                {"option": "use photosystems I and II at night.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The light reactions of photosynthesis supply the Calvin cycle with",
            "a": [
                {"option": "light energy.", "correct":false},
                {"option": "CO2 and ATP.", "correct":false},
                {"option": "H2O and NADPH.", "correct":false},
                {"option": "ATP and NADPH.", "correct":true},
                {"option": "sugar and O2.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following sequences correctly represents the flow of electrons during photosynthesis?",
            "a": [
                {"option": "NADPH → O2 → CO2", "correct":false},
                {"option": "H2O → NADPH → Calvin cycle", "correct":true},
                {"option": "NADPH → chlorophyll → Calvin cycle ", "correct":false},
                {"option": "H2O → photosystem I → photosystem II ", "correct":false},
                {"option": "NADPH → electron transport chain → O2", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In mechanism, photophosphorylation is most similar to",
            "a": [
                {"option": "substrate-level phosphorylation in glycolysis.", "correct":false},
                {"option": "oxidative phosphorylation in cellular respiration.", "correct":true},
                {"option": "the Calvin cycle. ", "correct":false},
                {"option": "carbon fixation.", "correct":false},
                {"option": "reduction of NADP+. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "How is photosynthesis similar in C4 and CAM plants?",
            "a": [
                {"option": "In both cases, only photosystem I is used.", "correct":false},
                {"option": "Both types of plants make sugar without the Calvin cycle. ", "correct":false},
                {"option": "In both cases, rubisco is not used to fix carbon initially.", "correct":true},
                {"option": "Both types of plants make most of their sugar in the dark.", "correct":false},
                {"option": "In both cases, thylakoids are not involved in photosynthesis.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following does not occur during the Calvin cycle?",
            "a": [
                {"option": "carbon fixation", "correct":false},
                {"option": "oxidation of NADPH ", "correct":false},
                {"option": "release of oxygen", "correct":true},
                {"option": "regeneration of RuBP", "correct":false},
                {"option": "consumption of ATP ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
  ]
};
