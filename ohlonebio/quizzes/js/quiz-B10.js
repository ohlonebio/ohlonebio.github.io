// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Gas Exchange",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Which of the following features do all gas exchange systems have in common?",
            "a": [
                {"option": "The exchange surfaces are moist.", "correct":true},
                {"option": "They are enclosed within ribs.", "correct":false},
                {"option": "They are maintained at a constant temperature.", "correct":false},
                {"option": "They are exposed to air.", "correct":false},
                {"option": "They are found only in animals.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Countercurrent exchange in the fish gill helps to maximize which of the following?",
            "a": [
                {"option": "endocytosis", "correct":false},
                {"option": "blood pressure", "correct":false},
                {"option": "diffusion", "correct":true},
                {"option": "active transport", "correct":false},
                {"option": "osmosis", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Where do air-breathing insects carry out gas exchange?",
            "a": [
                {"option": "in specialized external gills", "correct":false},
                {"option": "in specialized internal gills", "correct":false},
                {"option": "in the alveoli of their lungs", "correct":false},
                {"option": "across the membranes of cells", "correct":true},
                {"option": "across the thin cuticular exoskeleton", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Air rushes into the lungs of humans during inhalation because",
            "a": [
                {"option": "the rib muscles and diaphragm contract, increasing the lung volume. ", "correct":true},
                {"option": "pressure in the alveoli increases.", "correct":false},
                {"option": "gas flows from a region of lower pressure to a region of higher pressure. ", "correct":false},
                {"option": "pulmonary muscles contract and pull on the outer surface of the lungs. ", "correct":false},
                {"option": "a positive respiratory pressure is created when the diaphragm relaxes.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following occurs with the exhalation of air from human lungs?",
            "a": [
                {"option": "The volume of the thoracic cavity decreases.", "correct":true},
                {"option": "The residual volume of the lungs decreases. ", "correct":false},
                {"option": "The diaphragm contracts.", "correct":false},
                {"option": "The epiglottis closes. ", "correct":false},
                {"option": "The rib cage expands.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following lung volumes would be different in a person at rest compared with when the person exercises?",
            "a": [
                {"option": "tidal volume", "correct":true},
                {"option": "vital capacity", "correct":false},
                {"option": "residual volume", "correct":false},
                {"option": "total lung capacity", "correct":false},
                {"option": "All of the above would be different.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A person with a tidal volume of 450 mL, a vital capacity of 4,000 mL, and a residual volume of 1,000 mL would have a potential total lung capacity of",
            "a": [
                {"option": "1,450 mL. ", "correct":false},
                {"option": "4,000 mL. ", "correct":false},
                {"option": "4,450 mL. ", "correct":false},
                {"option": "5,000 mL. ", "correct":true},
                {"option": "5,450 mL.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Why is the respiratory system of a bird more efficient than the human respiratory system?",
            "a": [
                {"option": "The bird respiratory system does not mix exhaled air with inhaled air.", "correct":true},
                {"option": "A bird lung contains multiple alveoli, which increases the amount of surface area available for gas exchange.", "correct":false},
                {"option": "The human respiratory system ends in small parabronchi, which reduce the amount of surface area available for gas exchange. ", "correct":false},
                {"option": "Only B and C are correct.", "correct":false},
                {"option": "A, B, and C are correct.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Oxygen gas is approximately 21% of the total gases in the atmosphere. At an atmospheric pressure of 870 mm Hg, what is the contribution of oxygen?",
            "a": [
                {"option": "100 mm Hg ", "correct":false},
                {"option": "127 mm Hg ", "correct":false},
                {"option": "151 mm Hg ", "correct":false},
                {"option": "182 mm Hg ", "correct":true},
                {"option": "219 mm Hg", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "At sea level, atmospheric pressure is 760 mm Hg. Oxygen gas is approximately 21% of the total gases in the atmosphere. What is the approximate partial pressure of oxygen?",
            "a": [
                {"option": "0.2 mm Hg ", "correct":false},
                {"option": "20.0 mm Hg ", "correct":false},
                {"option": "76.0 mm Hg ", "correct":false},
                {"option": "160.0 mm Hg ", "correct":true},
                {"option": "508.0 mm Hg", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "At the summit of a high mountain, the atmospheric pressure is 380 mm Hg. If the atmosphere is still composed of 21% oxygen, what is the partial pressure of oxygen at this altitude?",
            "a": [
                {"option": "0 mm Hg", "correct":false},
                {"option": "80 mm Hg ", "correct":true},
                {"option": "160 mm Hg ", "correct":false},
                {"option": "380 mm Hg ", "correct":false},
                {"option": "760 mm Hg", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The Bohr shift on the oxygen-hemoglobin dissociation curve is produced by changes in",
            "a": [
                {"option": "the partial pressure of oxygen.", "correct":false},
                {"option": "the partial pressure of carbon monoxide. ", "correct":false},
                {"option": "hemoglobin concentration.", "correct":false},
                {"option": "temperature. ", "correct":false},
                {"option": "pH.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "How is most of the carbon dioxide transported by the blood in humans?",
            "a": [
                {"option": "bicarbonate ions in the plasma", "correct":true},
                {"option": "CO2 attached to hemoglobin", "correct":false},
                {"option": "carbonic acid in the erythrocytes", "correct":false},
                {"option": "CO2 dissolved in the plasma", "correct":false},
                {"option": "bicarbonate attached to hemoglobin", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "How does the hemocyanin of arthropods and molluscs differ from the hemoglobin of mammals?",
            "a": [
                {"option": "The oxygen dissociation curve for hemocyanin is linear. ", "correct":false},
                {"option": "Hemocyanin carries more carbon dioxide.", "correct":false},
                {"option": "Hemocyanin has protein coupled to copper rather than iron. ", "correct":true},
                {"option": "The protein of hemocyanin is not bound to metal.", "correct":false},
                {"option": "Hemocyanin includes cyanic acid. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following respiratory systems is not closely associated with a blood supply?",
            "a": [
                {"option": "the lungs of a vertebrate", "correct":false},
                {"option": "the gills of a fish", "correct":false},
                {"option": "the tracheal system of an insect", "correct":true},
                {"option": "the skin of an earthworm", "correct":false},
                {"option": "the parapodia of a polychaete worm", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Compared with the interstitial fluid that bathes active muscle cells, blood reaching these cells in arteries has a",
            "a": [
                {"option": "higher PO2.", "correct":true},
                {"option": "higher PCO2.", "correct":false},
                {"option": "greater bicarbonate concentration.", "correct":false},
                {"option": "lower pH.", "correct":false},
                {"option": "lower osmotic pressure.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
    ]
};
