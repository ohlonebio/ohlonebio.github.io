// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Intro to Eukarya",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "According to the endosymbiotic theory of the origin of eukaryotic cells, how did mitochondria originate?",
            "a": [
                {"option": "from infoldings of the plasma membrane, coupled with mutations of genes for proteins in energy-transfer reactions", "correct":false},
                {"option": "from engulfed, originally free-living prokaryotes", "correct":true},
                {"option": "by secondary endosymbiosis", "correct":false},
                {"option": "from the nuclear envelope folding outward and forming mitochondrial membranes", "correct":false},
                {"option": "when a protoeukaryote engaged in a symbiotic relationship with a protobiont", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which organisms represent the common ancestor of all chloroplasts found in eukaryotes?",
            "a": [
                {"option": "autotrophic euglenids", "correct":false},
                {"option": "diatoms", "correct":false},
                {"option": "dinoflagellates", "correct":false},
                {"option": "red algae", "correct":false},
                {"option": "cyanobacteria", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "You are given an unknown organism to identify. It is unicellular and heterotrophic. It is motile, using many short extensions of the cytoplasm, each featuring the 9+2 filament pattern. It has well-developed organelles and two nuclei, one large and one small. This organism is most likely to be a member of which group?",
            "a": [
                {"option": "forams", "correct":false},
                {"option": "diatoms", "correct":false},
                {"option": "ciliates", "correct":true},
                {"option": "kinetoplastids", "correct":false},
                {"option": "oomycetes", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The Irish potato famine was a period of mass starvation, disease and emigration in Ireland caused by widespread potato blight, an organism that belongs to which group?",
            "a": [
                {"option": "ciliates", "correct":false},
                {"option": "oomycetes", "correct":true},
                {"option": "diatoms", "correct":false},
                {"option": "apicomplexans", "correct":false},
                {"option": "dinoflagellates", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A large seaweed that floats freely on the surface of deep bodies of water would be expected to lack which of the following?",
            "a": [
                {"option": "thalli", "correct":false},
                {"option": "bladders", "correct":false},
                {"option": "blades", "correct":false},
                {"option": "holdfasts", "correct":true},
                {"option": "gel-forming polysaccharides", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A coiled, multi-chambered shell of calcium carbonate and organic material is characteristic of which group?",
            "a": [
                {"option": "diatoms", "correct":false},
                {"option": "forams", "correct":true},
                {"option": "dinoflagellates", "correct":false},
                {"option": "gymnamoebas", "correct":false},
                {"option": "ciliates", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What makes certain red algae appear red?",
            "a": [
                {"option": "They live in warm coastal waters.", "correct":false},
                {"option": "They possess pigments that reflect and transmit red light. ", "correct":true},
                {"option": "They use red light for photosynthesis.", "correct":false},
                {"option": "They lack chlorophyll.", "correct":false},
                {"option": "They contain the pigment bacteriorhodopsin.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The largest seaweeds belong to which group?",
            "a": [
                {"option": "red algae", "correct":false},
                {"option": "green algae ", "correct":false},
                {"option": "brown algae ", "correct":true},
                {"option": "golden algae", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The chloroplasts of land plants are thought to have been derived according to which evolutionary sequence?",
            "a": [
                {"option": "cyanobacteria → green algae → land plants", "correct":true},
                {"option": "cyanobacteria → green algae → fungi → land plants", "correct":false},
                {"option": "red algae → brown algae → green algae → land plants", "correct":false},
                {"option": "red algae → cyanobacteria → land plants", "correct":false},
                {"option": "cyanobacteria → red algae → green algae → land plants", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Green algae often differ from land plants in that some green algae",
            "a": [
                {"option": "are heterotrophs. ", "correct":false},
                {"option": "are unicellular.", "correct":true},
                {"option": "have chloroplasts.", "correct":false},
                {"option": "have alternation of generations.", "correct":false},
                {"option": "have cell walls containing cellulose.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A certain unicellular eukaryote has cell walls of hydrated silica and two flagella. To which group does it belong?",
            "a": [
                {"option": "dinoflagellates", "correct":false},
                {"option": "diatoms", "correct":true},
                {"option": "brown algae", "correct":false},
                {"option": "forams", "correct":false},
                {"option": "oomycetes", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which group is incorrectly paired with its description?",
            "a": [
                {"option": "forams–multichambered shells of organic material and calcium carbonate", "correct":false},
                {"option": "diatoms–cell walls of hydrated silica in organic matrix", "correct":false},
                {"option": "red algae–acquired chloroplasts by secondary endosymbiosis", "correct":true},
                {"option": "apicomplexans–parasites with apical structure", "correct":false},
                {"option": "parabasalids–reduced or lost mitochondria", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following are in the same eukaryotic ʺsupergroupʺ as land plants?",
            "a": [
                {"option": "green algae", "correct":false},
                {"option": "dinoflagellates", "correct":false},
                {"option": "red algae", "correct":false},
                {"option": "brown algae", "correct":false},
                {"option": "A and C are both correct", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
    ]
};
