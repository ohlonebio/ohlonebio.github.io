// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "History of Life on Earth",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Which gas was least abundant in Earthʹs early atmosphere, prior to 2 billion years ago?",
            "a": [
                {"option": "O2", "correct":true},
                {"option": "HCN", "correct":false},
                {"option": "CH4", "correct":false},
                {"option": "H2S", "correct":false},
                {"option": "NH3", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In their laboratory simulations of the early Earth, Miller and Urey observed the abiotic synthesis of",
            "a": [
                {"option": "amino acids.", "correct":true},
                {"option": "complex organic polymers.", "correct":false},
                {"option": "DNA.", "correct":false},
                {"option": "liposomes.", "correct":false},
                {"option": "genetic systems.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "If the half-life of carbon-14 is about 5,730 years, then a fossil that has one-sixteenth the normal proportion of carbon-14 to carbon-12 should be about how many years old?",
            "a": [
                {"option": "1,400", "correct":false},
                {"option": "2,800", "correct":false},
                {"option": "11,200", "correct":false},
                {"option": "16,800", "correct":false},
                {"option": "22,400", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "How many half-lives should have elapsed if 6.25% of the parent isotope remains in a fossil at the time of analysis?",
            "a": [
                {"option": "one ", "correct":false},
                {"option": "two ", "correct":false},
                {"option": "three ", "correct":false},
                {"option": "four ", "correct":true},
                {"option": "five", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "An early consequence of the release of oxygen gas by plant and bacterial photosynthesis was to",
            "a": [
                {"option": "make life on land difficult for aerobic organisms.", "correct":false},
                {"option": "change the atmosphere from oxidizing to reducing. ", "correct":false},
                {"option": "make it easier to maintain reduced molecules.", "correct":false},
                {"option": "cause iron in ocean water and terrestrial rocks to rust (oxidize). ", "correct":true},
                {"option": "prevent the formation of an ozone layer.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which free-living cells were the earliest contributors to the formation of Earthʹs oxidizing atmosphere?",
            "a": [
                {"option": "cyanobacteria", "correct":true},
                {"option": "chloroplasts ", "correct":false},
                {"option": "mitochondria ", "correct":false},
                {"option": "seaweeds", "correct":false},
                {"option": "endosymbionts", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Recent evidence indicates that the first major diversification of multicellular eukaryotes may have coincided in time with the",
            "a": [
                {"option": "origin of prokaryotes.", "correct":false},
                {"option": "switch to an oxidizing atmosphere.", "correct":false},
                {"option": "melting that ended the ʺsnowball Earthʺ period.", "correct":true},
                {"option": "origin of multicellular organisms.", "correct":false},
                {"option": "massive eruptions of deep-sea vents. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which event is nearest in time to the end of the period known as snowball Earth?",
            "a": [
                {"option": "oxygenation of Earthʹs seas and atmosphere", "correct":false},
                {"option": "evolution of mitochondria", "correct":false},
                {"option": "Cambrian explosion", "correct":true},
                {"option": "evolution of true multicellularity", "correct":false},
                {"option": "Permian extinction", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A major evolutionary episode that corresponds in time most closely with the formation of Pangaea was the",
            "a": [
                {"option": "origin of humans.", "correct":false},
                {"option": "Cambrian explosion.", "correct":false},
                {"option": "Permian extinctions. ", "correct":true},
                {"option": "Pleistocene ice ages.", "correct":false},
                {"option": "Cretaceous extinctions.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Dicynodonts (an early synapsid taxa) survived the Permian extinction and, therefore, existed during both the",
            "a": [
                {"option": "Paleozoic and Mesozoic eras.", "correct":true},
                {"option": "Proterozoic and Archaean eons.", "correct":false},
                {"option": "Proterozoic and Phanerozoic eons. ", "correct":false},
                {"option": "Mesozoic and Cenozoic eras.", "correct":false},
                {"option": "Carboniferous and Permian periods.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
    ]
};
