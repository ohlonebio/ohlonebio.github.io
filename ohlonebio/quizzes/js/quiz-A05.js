// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Intro to Metabolism",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Which term most precisely describes the cellular process of breaking down large molecules into smaller ones?",
            "a": [
                {"option": "catalysis", "correct":false},
                {"option": "metabolism", "correct":false},
                {"option": "anabolism ", "correct":false},
                {"option": "dehydration ", "correct":false},
                {"option": "catabolism", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following is a statement of the first law of thermodynamics?",
            "a": [
                {"option": "Energy cannot be created or destroyed.", "correct":true},
                {"option": "The entropy of the universe is decreasing. ", "correct":false},
                {"option": "The entropy of the universe is constant.", "correct":false},
                {"option": "Kinetic energy is stored energy that results from the specific arrangement of matter. ", "correct":false},
                {"option": "Energy cannot be transferred or transformed.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Living organisms increase in complexity as they grow, resulting in a decrease in the entropy of an organism. How does this relate to the second law of thermodynamics?",
            "a": [
                {"option": "Living organisms do not obey the second law of thermodynamics, which states that entropy must increase with time.", "correct":false},
                {"option": "Life obeys the second law of thermodynamics because the decrease in entropy as the organism grows is balanced by an increase in the entropy of the universe.", "correct":false},
                {"option": "Living organisms do not follow the laws of thermodynamics.", "correct":false},
                {"option": "As a consequence of growing, organisms create more disorder in their environment than the decrease in entropy associated with their growth.", "correct":true},
                {"option": "Living organisms are able to transform energy into entropy.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Whenever energy is transformed, there is always an increase in the",
            "a": [
                {"option": "free energy of the system. ", "correct":false},
                {"option": "free energy of the universe. ", "correct":false},
                {"option": "entropy of the system.", "correct":false},
                {"option": "entropy of the universe.", "correct":true},
                {"option": "enthalpy of the universe.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following statements is representative of the second law of thermodynamics?",
            "a": [
                {"option": "Conversion of energy from one form to another is always accompanied by some gain of free energy.", "correct":false},
                {"option": "Heat represents a form of energy that can be used by most organisms to do work.", "correct":false},
                {"option": "Without an input of energy, organisms would tend toward decreasing entropy.", "correct":false},
                {"option": "Cells require a constant input of energy to maintain their high level of organization.", "correct":true},
                {"option": "Every energy transformation by a cell decreases the entropy of the universe.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following types of reactions would decrease the entropy within a cell?",
            "a": [
                {"option": "dehydration reactions", "correct":true},
                {"option": "hydrolysis ", "correct":false},
                {"option": "respiration ", "correct":false},
                {"option": "digestion ", "correct":false},
                {"option": "catabolism", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "The mathematical expression for the change in free energy of a system is △G =△H-T△S. Which of the following is (are) correct?",
            "a": [
                {"option": "△S is the change in enthalpy, a measure of randomness.", "correct":false},
                {"option": "△H is the change in entropy, the energy available to do work.", "correct":false},
                {"option": "△G is the change in free energy.", "correct":true},
                {"option": "T is the temperature in degrees Celsius.", "correct":false},

            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "A chemical reaction that has a positive △G is correctly described as",
            "a": [
                {"option": "endergonic.", "correct":true},
                {"option": "endothermic. ", "correct":false},
                {"option": "enthalpic.", "correct":false},
                {"option": "spontaneous. ", "correct":false},
                {"option": "exothermic.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following is most similar in structure to ATP?",
            "a": [
                {"option": "an anabolic steroid", "correct":false},
                {"option": "a DNA helix", "correct":false},
                {"option": "an RNA nucleotide", "correct":true},
                {"option": "an amino acid with three phosphate groups attached", "correct":false},
                {"option": "a phospholipid", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "What term is used to describe the transfer of free energy from catabolic pathways to anabolic pathways?",
            "a": [
                {"option": "feedback regulation", "correct":false},
                {"option": "bioenergetics", "correct":false},
                {"option": "energy coupling", "correct":true},
                {"option": "entropy", "correct":false},
                {"option": "cooperativity", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following statements is (are) true about enzyme-catalyzed reactions?",
            "a": [
                {"option": "The reaction is faster than the same reaction in the absence of the enzyme.", "correct":true},
                {"option": "The free energy change of the reaction is opposite from the reaction in the absence of the enzyme.", "correct":false},
                {"option": "The reaction always goes in the direction toward chemical equilibrium. ", "correct":false},
                {"option": "A and B only", "correct":false},
                {"option": "A, B, and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Reactants capable of interacting to form products in a chemical reaction must first overcome a thermodynamic barrier known as the reactionʹs",
            "a": [
                {"option": "entropy.", "correct":false},
                {"option": "activation energy.", "correct":true},
                {"option": "endothermic level. ", "correct":false},
                {"option": "heat content.", "correct":false},
                {"option": "free-energy content. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "A solution of starch at room temperature does not readily decompose to form a solution of simple sugars because",
            "a": [
                {"option": "the starch solution has less free energy than the sugar solution. ", "correct":false},
                {"option": "the hydrolysis of starch to sugar is endergonic.", "correct":false},
                {"option": "the activation energy barrier for this reaction cannot be surmounted. ", "correct":true},
                {"option": "starch cannot be hydrolyzed in the presence of so much water.", "correct":false},
                {"option": "starch hydrolysis is nonspontaneous. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "During a laboratory experiment, you discover that an enzyme-catalyzed reaction has a △G of -20 kcal/mol. If you double the amount of enzyme in the reaction, what will be the △G for the new reaction?",
            "a": [
                {"option": "-40 kcal/mol ", "correct":false},
                {"option": "-20 kcal/mol ", "correct":true},
                {"option": "0 kcal/mol", "correct":false},
                {"option": "+20 kcal/mol", "correct":false},
                {"option": "+40 kcal/mol", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "According to the induced fit hypothesis of enzyme catalysis, which of the following is correct?",
            "a": [
                {"option": "The binding of the substrate depends on the shape of the active site.", "correct":false},
                {"option": "Some enzymes change their structure when activators bind to the enzyme.", "correct":false},
                {"option": "A competitive inhibitor can outcompete the substrate for the active site.", "correct":false},
                {"option": "The binding of the substrate changes the shape of the enzymeʹs active site.", "correct":true},
                {"option": "The active site creates a microenvironment ideal for the reaction.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Increasing the substrate concentration in an enzymatic reaction could overcome which of the following?",
            "a": [
                {"option": "denaturization of the enzyme", "correct":false},
                {"option": "allosteric inhibition", "correct":false},
                {"option": "competitive inhibition", "correct":true},
                {"option": "saturation of the enzyme activity", "correct":false},
                {"option": "insufficient cofactors", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Zinc, an essential trace element for most organisms, is present in the active site of the enzyme carboxypeptidase. The zinc most likely functions as a(n)",
            "a": [
                {"option": "competitive inhibitor of the enzyme.", "correct":false},
                {"option": "noncompetitive inhibitor of the enzyme.", "correct":false},
                {"option": "allosteric activator of the enzyme.", "correct":false},
                {"option": "cofactor necessary for enzyme activity.", "correct":true},
                {"option": "coenzyme derived from a vitamin.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "The mechanism in which the end product of a metabolic pathway inhibits an earlier step in the pathway is known as",
            "a": [
                {"option": "metabolic inhibition. ", "correct":false},
                {"option": "feedback inhibition. ", "correct":true},
                {"option": "allosteric inhibition.", "correct":false},
                {"option": "noncooperative inhibition. ", "correct":false},
                {"option": "reversible inhibition.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following statements describes enzyme cooperativity?",
            "a": [
                {"option": "A multi-enzyme complex contains all the enzymes of a metabolic pathway.", "correct":false},
                {"option": "A product of a pathway serves as a competitive inhibitor of an early enzyme in the pathway.", "correct":false},
                {"option": "A substrate molecule bound to an active site affects the active site of several subunits.", "correct":true},
                {"option": "Several substrate molecules can be catalyzed by the same enzyme.", "correct":false},
                {"option": "A substrate binds to an active site and inhibits cooperation between enzymes in a pathway.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following metabolic processes can occur without a net influx of energy from some other process?",
            "a": [
                {"option": "ADP + Pi → ATP + H2O", "correct":false},
                {"option": "C6H12O6 + 6 O2 → 6 CO2 + 6H2O ", "correct":true},
                {"option": "6 CO2 + 6 H2O → C6H12O6 + 6 O2", "correct":false},
                {"option": "amino acids → protein", "correct":false},
                {"option": "glucose + fructose → sucrose", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Some bacteria are metabolically active in hot springs because",
            "a": [
                {"option": "they are able to maintain a cooler internal temperature. ", "correct":false},
                {"option": "high temperatures make catalysis unnecessary.", "correct":false},
                {"option": "their enzymes have high optimal temperatures.", "correct":true},
                {"option": "their enzymes are completely insensitive to temperature.", "correct":false},
                {"option": "they use molecules other than proteins or RNAs as their main catalysts.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        }
  ]
};
