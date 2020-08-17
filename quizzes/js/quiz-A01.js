// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Intro to Living Systems",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Which of the following properties or processes do we associate with living things?",
            "a": [
                {"option": "evolutionary adaptations", "correct":false},
                {"option": "energy processing", "correct":false},
                {"option": "responding to the environment", "correct":false},
                {"option": "growth and reproduction", "correct":false},
                {"option": "all of the above", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": "Which of the following sequences represents the hierarchy of biological organization from the least to the most complex level?",
            "a": [
                {"option": "organelle, tissue, biosphere, ecosystem, population, organism", "correct":false},
                {"option": "cell, community, population, organ system, molecule, organelle", "correct":false},
                {"option": "organism, community, biosphere, molecule, tissue, organ", "correct":false},
                {"option": "ecosystem, cell, population, tissue, organism, organ system", "correct":false},
                {"option": "molecule, cell, organ system, population, ecosystem, biosphere", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": "Which of these is a correct representation of the hierarchy of biological organization from least to most complex?",
            "a": [
                {"option": "organelle of a stomach cell, digestive system, large intestine, small intestine, intestinal tissue, organism", "correct":false},
                {"option": "organelle of an intestinal cell, digestive system, small intestine, large intestine, intestinal tissue, organism", "correct":false},
                {"option": "molecule, intestinal cell organelle, intestinal cell, intestinal tissue, digestive system, organism", "correct":true},
                {"option": "molecule, small intestine, large intestine, intestinal tissue, digestive system, organism", "correct":false},
                {"option": "molecule, digestive system, digestive cell organelle, small intestine, large intestine, intestinal cell, organism", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": " The lowest level of biological organization that can perform all the activities required for life is the",
            "a": [
                {"option": "organelle–for example, a chloroplast. ", "correct":false},
                {"option": "cell–for example, a skin cell.", "correct":true},
                {"option": "tissue–for example, nervous tissue.", "correct":false},
                {"option": "organ system–for example, the reproductive system.", "correct":false},
                {"option": "organism–for example, an amoeba, dog, human, or maple tree.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": " Which of the following results from a transfer of electron(s) between atoms?",
            "a": [
                {"option": "nonpolar covalent bond", "correct":false},
                {"option": "polar covalent bond", "correct":false},
                {"option": "ionic bond", "correct":true},
                {"option": "hydrogen bond", "correct":false},
                {"option": "hydrophobic interaction", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": " What results from an unequal sharing of electrons between atoms?",
            "a": [
                {"option": "a nonpolar covalent bond", "correct":false},
                {"option": "a polar covalent bond", "correct":true},
                {"option": "an ionic bond", "correct":false},
                {"option": "a hydrogen bond", "correct":false},
                {"option": "a hydrophobic interaction", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": " A covalent bond is likely to be polar when",
            "a": [
                {"option": "one of the atoms sharing electrons is much more electronegative than the other atom. ", "correct":true},
                {"option": "the two atoms sharing electrons are equally electronegative.", "correct":false},
                {"option": "the two atoms sharing electrons are of the same element.", "correct":false},
                {"option": "it is between two atoms that are both very strong electron acceptors.", "correct":false},
                {"option": "the two atoms sharing electrons are different elements.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": "What gives rise to the cohesiveness of water molecules?",
            "a": [
                {"option": "hydrophobic interactions ", "correct":false},
                {"option": "nonpolar covalent bonds ", "correct":false},
                {"option": "ionic bonds", "correct":false},
                {"option": "hydrogen bonds", "correct":true},
                {"option": "both A and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": "Which statement is true of all atoms that are anions?",
            "a": [
                {"option": "The atom has more electrons than protons. ", "correct":true},
                {"option": "The atom has more protons than electrons.", "correct":false},
                {"option": "The atom has fewer protons than does a neutral atom of the same element. ", "correct":false},
                {"option": "The atom has more neutrons than protons.", "correct":false},
                {"option": "The net charge is 12.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": "You have a freshly-prepared 0.1M solution of glucose in water. Each liter of this solution contains how many glucose molecules?",
            "a": [
                {"option": "6.022 × 10^23", "correct":false},
                {"option": "3.011 × 10^23", "correct":false},
                {"option": "6.022 × 10^24", "correct":true},
                {"option": "12.044 × 10^23", "correct":false},
                {"option": "6.022 × 10^22", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": "What is the pH of a solution with a hydroxyl ion [OH-] concentration of 10-12 M?",
            "a": [
                {"option": "pH 2", "correct":true},
                {"option": "pH 4", "correct":false},
                {"option": "pH 10", "correct":false},
                {"option": "pH 12", "correct":false},
                {"option": "pH 14", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": "What is the pH of a solution with a hydrogen ion [H+] concentration of 10-8 M?",
            "a": [
                {"option": "pH 2", "correct":false},
                {"option": "pH 4", "correct":false},
                {"option": "pH 6", "correct":false},
                {"option": "pH 8", "correct":true},
                {"option": "pH 10", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": "1 L of a solution of pH 2 has how many more hydrogen ions (H+) than 1 L of a solution of pH 6?",
            "a": [
                {"option": "4 times more", "correct":false},
                {"option": "400 times more", "correct":false},
                {"option": "4,000 times more ", "correct":false},
                {"option": "10,000 times more ", "correct":true},
                {"option": "100,000 times more", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": "One of the buffers that contribute to pH stability in human blood is carbonic acid (H2CO3). Carbonic acid is a weak acid that dissociates into a bicarbonate ion (HCO3-) and a hydrogen ion (H+). Thus, H2CO3 ↔ HCO3- + H+ If the pH of the blood drops, one would expect",
            "a": [
                {"option": "a decrease in the concentration of H2CO3 and an increase in the concentration of HCO3-.", "correct":false},
                {"option": "the concentration of hydroxide ion (OH-) to increase.", "correct":false},
                {"option": "the concentration of bicarbonate ion (HCO3-) to increase.", "correct":false},
                {"option": "the HCO3- to act as a base and remove excess H+ with the formation of H2CO3. ", "correct":true},
                {"option": "the HCO3- to act as an acid and remove excess H+ with the formation of H2CO3.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": "One of the buffers that contribute to pH stability in human blood is carbonic acid (H2CO3). Carbonic acid is a weak acid that when placed in an aqueous solution dissociates into a bicarbonate ion (HCO3-) and a hydrogen ion (H+). Thus, H2CO3 ↔ HCO3- + H+ If the pH of the blood increases, one would expect",
            "a": [
                {"option": "a decrease in the concentration of H2CO3 and an increase in the concentration of H2O.", "correct":true},
                {"option": "an increase in the concentration of H2CO3 and a decrease in the concentration of H2O.", "correct":false},
                {"option": "a decrease in the concentration of HCO3- and an increase in the concentration of H2O.", "correct":false},
                {"option": "an increase in the concentration of HCO3- and a decrease in the concentration of H2O.", "correct":false},
                {"option": "a decrease in the concentration of HCO3- and an increase in the concentration of both H2CO3 and H2O.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": "A compound contains hydroxyl groups as its predominant functional group. Which of the following statements is true concerning this compound?",
            "a": [
                {"option": "It lacks an asymmetric carbon, and it is probably a fat or lipid. ", "correct":false},
                {"option": "It should dissolve in water.", "correct":true},
                {"option": "It should dissolve in a nonpolar solvent.", "correct":false},
                {"option": "It wonʹt form hydrogen bonds with water.", "correct":false},
                {"option": "It is hydrophobic.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": "Which is the best description of a carbonyl group?",
            "a": [
                {"option": "an oxygen joined to a carbon by a single covalent bond", "correct":false},
                {"option": "a nitrogen and two hydrogens joined to a carbon by covalent bonds", "correct":false},
                {"option": "a carbon joined to two hydrogens by single covalent bonds", "correct":false},
                {"option": "a sulfur and a hydrogen joined to a carbon by covalent bonds", "correct":false},
                {"option": "a carbon atom joined to an oxygen by a double covalent bond", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        } ,
        {
            "q": "Amino acids are acids because they always possess which functional group?",
            "a": [
                {"option": "amino", "correct":false},
                {"option": "carbonyl ", "correct":false},
                {"option": "carboxyl ", "correct":true},
                {"option": "sulfhydryl ", "correct":false},
                {"option": "aldehyde", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        }
  ]
};
