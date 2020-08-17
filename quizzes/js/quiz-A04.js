// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Biological Membranes",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "According to the fluid mosaic model of cell membranes, which of the following is a true statement about membrane phospholipids?",
            "a": [
                {"option": "They can move laterally along the plane of the membrane.", "correct":true},
                {"option": "They frequently flip-flop from one side of the membrane to the other.", "correct":false},
                {"option": "They occur in an uninterrupted bilayer, with membrane proteins restricted to the surface of the membrane.", "correct":false},
                {"option": "They are free to depart from the membrane and dissolve in the surrounding solution. ", "correct":false},
                {"option": "They have hydrophilic tails in the interior of the membrane.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following is one of the ways that the membranes of winter wheat (a plant) are able to remain fluid when it is extremely cold?",
            "a": [
                {"option": "by increasing the percentage of unsaturated phospholipids in the membrane", "correct":true},
                {"option": "by increasing the percentage of cholesterol molecules in the membrane", "correct":false},
                {"option": "by decreasing the number of hydrophobic proteins in the membrane", "correct":false},
                {"option": "by co-transport of glucose and hydrogen", "correct":false},
                {"option": "by using active transport", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following is a reasonable explanation for why unsaturated fatty acids help keep any membrane more fluid at lower temperatures?",
            "a": [
                {"option": "The double bonds form kinks in the fatty acid tails, forcing adjacent lipids to be further apart.", "correct":true},
                {"option": "Unsaturated fatty acids have a higher cholesterol content and therefore more cholesterol in membranes.", "correct":false},
                {"option": "Unsaturated fatty acids permit more water in the interior of the membrane.", "correct":false},
                {"option": "The double bonds block interaction among the hydrophilic head groups of the lipids.", "correct":false},
                {"option": "The double bonds result in shorter fatty acid tails and thinner membranes.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "What kinds of molecules pass through a cell membrane most easily?",
            "a": [
                {"option": "large and hydrophobic", "correct":false},
                {"option": "small and hydrophobic", "correct":true},
                {"option": "large polar", "correct":false},
                {"option": "ionic", "correct":false},
                {"option": "monosaccharides such as glucose", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following is a characteristic feature of a carrier protein in a plasma membrane?",
            "a": [
                {"option": "It is a peripheral membrane protein.", "correct":false},
                {"option": "It exhibits a specificity for a particular type of molecule.", "correct":true},
                {"option": "It requires the expenditure of cellular energy to function. ", "correct":false},
                {"option": "It works against diffusion.", "correct":false},
                {"option": "It has few, if any, hydrophobic amino acids.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following statements is correct about simple diffusion?",
            "a": [
                {"option": "It is very rapid over long distances.", "correct":false},
                {"option": "It requires an expenditure of energy by the cell.", "correct":false},
                {"option": "It is a passive process in which molecules move from a region of higher concentration to a region of lower concentration.", "correct":true},
                {"option": "It is an active process in which molecules move from a region of lower concentration to one of higher concentration.", "correct":false},
                {"option": "It requires integral proteins in the cell membrane.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "When a plant cell is submerged in a very hypotonic solution, what is likely to occur?",
            "a": [
                {"option": "the cell will burst", "correct":false},
                {"option": "the cell membrane will lyse", "correct":false},
                {"option": "plasmolysis will shrink the interior", "correct":false},
                {"option": "the cell will become flaccid", "correct":false},
                {"option": "the cell will become turgid", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "The sodium-potassium pump in animal cells requires cytoplasmic ATP to pump ions across the plasma membrane. When the proteins of the pump are first synthesized in the rough ER, what side of the ER membrane will the ATP binding site be on?",
            "a": [
                {"option": "It will be on the cytoplasmic side of the ER.", "correct":true},
                {"option": "It will be on the side facing the interior of the ER.", "correct":false},
                {"option": "It could be facing in either direction because the orientation of proteins is scrambled in the Golgi apparatus.", "correct":false},
                {"option": "It doesnʹt matter, because the pump is not active in the ER.", "correct":false} // no comma here

            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "White blood cells engulf bacteria through what process?",
            "a": [
                {"option": "exocytosis", "correct":false},
                {"option": "phagocytosis ", "correct":true},
                {"option": "pinocytosis ", "correct":false},
                {"option": "osmosis", "correct":false},
                {"option": "receptor-mediated exocytosis", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "According to the fluid mosaic model of membrane structure, proteins of the membrane are mostly",
            "a": [
                {"option": "spread in a continuous layer over the inner and outer surfaces of the membrane. ", "correct":false},
                {"option": "confined to the hydrophobic core of the membrane.", "correct":false},
                {"option": "embedded in a lipid bilayer.", "correct":true},
                {"option": "randomly oriented in the membrane, with no fixed inside-outside polarity.", "correct":false},
                {"option": "free to depart from the fluid membrane and dissolve in the surrounding solution.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following factors would tend to increase membrane fluidity?",
            "a": [
                {"option": "a greater proportion of unsaturated phospholipids", "correct":true},
                {"option": "a greater proportion of saturated phospholipids", "correct":false},
                {"option": "a lower temperature", "correct":false},
                {"option": "a relatively high protein content in the membrane", "correct":false},
                {"option": "a greater proportion of relatively large glycolipids compared with lipids having smaller molecular masses", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "A small molecule that specifically binds to another molecule, usually a larger one",
            "a": [
                {"option": "is called a signal transducer.", "correct":false},
                {"option": "is called a ligand.", "correct":true},
                {"option": "is called a polymer.", "correct":false},
                {"option": "seldom is involved in hormonal signaling. ", "correct":false},
                {"option": "usually terminates a signal reception.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "The general name for an enzyme that transfers phosphate groups from ATP to a protein is",
            "a": [
                {"option": "phosphorylase. ", "correct":false},
                {"option": "phosphatase.", "correct":false},
                {"option": "kinase. ", "correct":true},
                {"option": "ATPase.", "correct":false},
                {"option": "protease.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Adenylyl cyclase has the opposite effect of which of the following?",
            "a": [
                {"option": "protein kinase", "correct":false},
                {"option": "protein phosphatase ", "correct":false},
                {"option": "phosphodiesterase ", "correct":true},
                {"option": "phosphorylase", "correct":false},
                {"option": "GTPase", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Caffeine is an inhibitor of phosphodiesterase. Therefore, the cells of a person who has recently consumed coffee would have increased levels of",
            "a": [
                {"option": "phosphorylated proteins. ", "correct":false},
                {"option": "GTP.", "correct":false},
                {"option": "cAMP.", "correct":true},
                {"option": "adenylyl cyclase.", "correct":false},
                {"option": "activated G proteins.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following is a correct association?",
            "a": [
                {"option": "kinase activity and the addition of a tyrosine", "correct":false},
                {"option": "phosphodiesterase activity and the removal of phosphate groups", "correct":false},
                {"option": "GTPase activity and hydrolysis of GTP to GDP", "correct":true},
                {"option": "phosphorylase activity and the catabolism of glucose", "correct":false},
                {"option": "adenylyl cyclase activity and the conversion of cAMP to AMP", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Lipid-soluble signal molecules, such as testosterone, cross the membranes of all cells but affect only target cells because",
            "a": [
                {"option": "only target cells retain the appropriate DNA segments. ", "correct":false},
                {"option": "intracellular receptors are present only in target cells.", "correct":true},
                {"option": "most cells lack the Y chromosome required.", "correct":false},
                {"option": "only target cells possess the cytosolic enzymes that transduce the testosterone.", "correct":false},
                {"option": "only in target cells is testosterone able to initiate the phosphorylation cascade leading to activated transcription factor.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Consider this pathway: epinephrine → G protein-coupled receptor → G protein → adenylyl cyclase → cAMP. Identify the primary messenger.",
            "a": [
                {"option": "cAMP", "correct":false},
                {"option": "G protein", "correct":false},
                {"option": "GTP", "correct":false},
                {"option": "adenylyl cyclase", "correct":false},
                {"option": "epinephrine", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Consider this pathway: epinephrine → G protein-coupled receptor → G protein → adenylyl cyclase → cAMP. Identify the second messenger.",
            "a": [
                {"option": "cAMP", "correct":true},
                {"option": "G protein", "correct":false},
                {"option": "GTP", "correct":false},
                {"option": "adenylyl cyclase", "correct":false},

            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Consider this pathway: epinephrine → G protein-coupled receptor → G protein → adenylyl cyclase → cAMP. Identify the effector.",
            "a": [
                {"option": "cAMP", "correct":false},
                {"option": "G protein", "correct":false},
                {"option": "GTP", "correct":false},
                {"option": "adenylyl cyclase", "correct":true},
                {"option": "epinephrine", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        }
  ]
};
