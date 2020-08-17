// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Biological Molecules",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Which of the following contains nitrogen?",
            "a": [
                {"option": "an alcohol such as ethanol", "correct":false},
                {"option": "a monosaccharide such as glucose", "correct":false},
                {"option": "a steroid such as testosterone", "correct":false},
                {"option": "an amino acid such as glycine", "correct":true},
                {"option": "a hydrocarbon such as benzene", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following is not a polymer?",
            "a": [
                {"option": "glucose", "correct":true},
                {"option": "starch", "correct":false},
                {"option": "cellulose", "correct":false},
                {"option": "chitin", "correct":false},
                {"option": "DNA", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "What is the chemical mechanism by which cells make polymers from monomers?",
            "a": [
                {"option": "phosphodiester linkages", "correct":false},
                {"option": "hydrolysis", "correct":false},
                {"option": "dehydration reactions", "correct":true},
                {"option": "ionic bonding of monomers", "correct":false},
                {"option": "the formation of disulfide bridges between monomers", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "How many molecules of water are needed to completely hydrolyze a polymer that is 11 monomers long?",
            "a": [
                {"option": "12", "correct":false},
                {"option": "11", "correct":false},
                {"option": "10", "correct":true},
                {"option": "9", "correct":false},
                {"option": "8", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "The molecular formula for glucose is C6H12O6. What would be the molecular formula for a molecule made by linking three glucose molecules together by dehydration reactions?",
            "a": [
                {"option": "C18H36O18", "correct":false},
                {"option": "C18H30O15", "correct":true},
                {"option": "C6H10O5", "correct":false},
                {"option": "C18H10O15", "correct":false},
                {"option": "C3H6O3", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Lactose, a sugar in milk, is composed of one glucose molecule joined by a glycosidic linkage to one galactose molecule. How is lactose classified?",
            "a": [
                {"option": "as a pentose", "correct":false},
                {"option": "as a hexose", "correct":false},
                {"option": "as a monosaccharide", "correct":false},
                {"option": "as a disaccharide", "correct":true},
                {"option": "as a polysaccharide", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following is true of both starch and cellulose?",
            "a": [
                {"option": "They are both polymers of glucose.", "correct":true},
                {"option": "They are geometric isomers of each other. ", "correct":false},
                {"option": "They can both be digested by humans.", "correct":false},
                {"option": "They are both used for energy storage in plants.", "correct":false},
                {"option": "They are both structural components of the plant cell wall.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following is true of cellulose?",
            "a": [
                {"option": "It is a polymer composed of sucrose monomers.", "correct":false},
                {"option": "It is a storage polysaccharide for energy in plant cells.", "correct":false},
                {"option": "It is a storage polysaccharide for energy in animal cells. ", "correct":false},
                {"option": "It is a major structural component of plant cell walls.", "correct":true},
                {"option": "It is a major structural component of animal cell plasma membranes.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "A molecule with the formula C18H36O2 is probably a",
            "a": [
                {"option": "carbohydrate.", "correct":false},
                {"option": "fatty acid. ", "correct":true},
                {"option": "protein.", "correct":false},
                {"option": "nucleic acid. ", "correct":false},
                {"option": "hydrocarbon.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following statements is false for the class of biological molecules known as lipids?",
            "a": [
                {"option": "They are soluble in water.", "correct":true},
                {"option": "They are an important constituent of cell membranes.", "correct":false},
                {"option": "They contain more energy than proteins and carbohydrates.", "correct":false},
                {"option": "They are not true polymers.", "correct":false},
                {"option": "They contain waxes and steroids.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "All of the following contain amino acids except",
            "a": [
                {"option": "hemoglobin.", "correct":false},
                {"option": "cholesterol. ", "correct":true},
                {"option": "antibodies. ", "correct":false},
                {"option": "enzymes.", "correct":false},
                {"option": "insulin.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "There are 20 different amino acids. What makes one amino acid different from another?",
            "a": [
                {"option": "different carboxyl groups attached to an alpha (α) carbon", "correct":false},
                {"option": "different amino groups attached to an alpha (α) carbon", "correct":false},
                {"option": "different side chains (R groups) attached to an alpha (α) carbon", "correct":true},
                {"option": "different alpha (α) carbons", "correct":false},
                {"option": "different asymmetric carbons", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Upon chemical analysis, a particular polypeptide was found to contain 100 amino acids. How many peptide bonds are present in this protein?",
            "a": [
                {"option": "101", "correct":false},
                {"option": "100", "correct":false},
                {"option": "99", "correct":true},
                {"option": "98", "correct":false},
                {"option": "97", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which bonds are created during the formation of the primary structure of a protein?",
            "a": [
                {"option": "peptide bonds", "correct":true},
                {"option": "hydrogen bonds", "correct":false},
                {"option": "disulfide bonds", "correct":false},
                {"option": "phosphodiester bonds", "correct":false},
                {"option": "A, B, and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "What maintains the secondary structure of a protein?",
            "a": [
                {"option": "peptide bonds", "correct":false},
                {"option": "hydrogen bonds", "correct":true},
                {"option": "disulfide bonds", "correct":false},
                {"option": "ionic bonds", "correct":false},
                {"option": "phosphodiester bonds", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which type of interaction stabilizes the alpha (α) helix and the beta (β) pleated sheet structures of proteins?",
            "a": [
                {"option": "hydrophobic interactions ", "correct":false},
                {"option": "nonpolar covalent bonds ", "correct":false},
                {"option": "ionic bonds", "correct":false},
                {"option": "hydrogen bonds", "correct":true},
                {"option": "peptide bonds", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "The α helix and the β pleated sheet are both common polypeptide forms found in which level of protein structure?",
            "a": [
                {"option": "primary", "correct":false},
                {"option": "secondary", "correct":true},
                {"option": "tertiary", "correct":false},
                {"option": "quaternary", "correct":false},
                {"option": "all of the above", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "At which level of protein structure are interactions between the side chains (R groups) most important?",
            "a": [
                {"option": "primary", "correct":false},
                {"option": "secondary", "correct":false},
                {"option": "tertiary", "correct":true},
                {"option": "quaternary", "correct":false},
                {"option": "all of the above", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "The R group of the amino acid serine is —CH2OH. The R group of the amino acid alanine is —CH3. Where would you expect to find these amino acids in a globular protein in aqueous solution?",
            "a": [
                {"option": "Serine would be in the interior, and alanine would be on the exterior of the globular protein.", "correct":false},
                {"option": "Alanine would be in the interior, and serine would be on the exterior of the globular protein.", "correct":true},
                {"option": "Both serine and alanine would be in the interior of the globular protein.", "correct":false},
                {"option": "Both serine and alanine would be on the exterior of the globular protein.", "correct":false},
                {"option": "Both serine and alanine would be in the interior and on the exterior of the globular protein.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "What would be a consequence of changing one amino acid in a protein consisting of 325 amino acids?",
            "a": [
                {"option": "The primary structure of the protein would be changed. ", "correct":false},
                {"option": "The tertiary structure of the protein might be changed.", "correct":false},
                {"option": "The biological activity or function of the protein might be altered. ", "correct":false},
                {"option": "Only A and C are correct.", "correct":false},
                {"option": "A, B, and C are correct. ", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "The function of each protein is a consequence of its specific shape. What is the term used for a change in a proteinʹs three-dimensional shape or conformation due to disruption of hydrogen bonds, disulfide bridges, or ionic bonds?",
            "a": [
                {"option": "hydrolysis", "correct":false},
                {"option": "stabilization", "correct":false},
                {"option": "destabilization", "correct":false},
                {"option": "renaturation", "correct":false},
                {"option": "denaturation", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "DNAase is an enzyme that catalyzes the hydrolysis of the covalent bonds that join nucleotides together. What would first happen to DNA molecules treated with DNAase?",
            "a": [
                {"option": "The two strands of the double helix would separate.", "correct":false},
                {"option": "The phosphodiester bonds between deoxyribose sugars would be broken.", "correct":true},
                {"option": "The purines would be separated from the deoxyribose sugars.", "correct":false},
                {"option": "The pyrimidines would be separated from the deoxyribose sugars.", "correct":false},
                {"option": "All bases would be separated from the deoxyribose sugars.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following statements about the 5ʹ end of a polynucleotide strand of DNA is correct?",
            "a": [
                {"option": "The 5ʹ end has a hydroxyl group attached to the number 5 carbon of deoxyribose. ", "correct":false},
                {"option": "The 5ʹ end has a phosphate group attached to the number 5 carbon of deoxyribose. ", "correct":true},
                {"option": "The 5ʹ end has thymine attached to the number 5 carbon of deoxyribose.", "correct":false},
                {"option": "The 5ʹ end has a carboxyl group attached to the number 5 carbon of deoxyribose.", "correct":false},
                {"option": "The 5ʹ end is the fifth position on one of the nitrogenous bases.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following descriptions best fits the class of molecules known as nucleotides?",
            "a": [
                {"option": "a nitrogenous base and a phosphate group", "correct":false},
                {"option": "a nitrogenous base and a pentose sugar", "correct":false},
                {"option": "a nitrogenous base, a phosphate group, and a pentose sugar", "correct":true},
                {"option": "a phosphate group and an adenine or uracil", "correct":false},
                {"option": "a pentose sugar and a purine or pyrimidine", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following are pyrimidines?",
            "a": [
                {"option": "guanine and adenine", "correct":false},
                {"option": "cytosine and uracil", "correct":true},
                {"option": "thymine and guanine", "correct":false},
                {"option": "ribose and deoxyribose", "correct":false},
                {"option": "adenine and thymine", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following are purines?",
            "a": [
                {"option": "cytosine and guanine ", "correct":false},
                {"option": "guanine and adenine ", "correct":true},
                {"option": "adenine and thymine ", "correct":false},
                {"option": "thymine and uracil", "correct":false},
                {"option": "uracil and cytosine", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "If a DNA sample were composed of 10% thymine, what would be the percentage of guanine? (Assume the sample only contains double-stranded DNA)",
            "a": [
                {"option": "10", "correct":false},
                {"option": "20", "correct":false},
                {"option": "40", "correct":true},
                {"option": "80", "correct":false},
                {"option": "impossible to tell from the information given", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "A double-stranded DNA molecule contains a total of 120 purines and 120 pyrimidines. This DNA molecule could be composed of",
            "a": [
                {"option": "120 adenine and 120 uracil molecules.", "correct":false},
                {"option": "120 thymine and 120 adenine molecules.", "correct":true},
                {"option": "120 cytosine and 120 thymine molecules. ", "correct":false},
                {"option": "120 adenine and 120 cytosine molecules. ", "correct":false},
                {"option": "120 guanine and 120 thymine molecules.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "The difference between the sugar in DNA and the sugar in RNA is that the sugar in DNA",
            "a": [
                {"option": "is a six-carbon sugar and the sugar in RNA is a five-carbon sugar.", "correct":false},
                {"option": "can form a double-stranded molecule.", "correct":false},
                {"option": "has a six-membered ring of carbon and nitrogen atoms. ", "correct":false},
                {"option": "can attach to a phosphate.", "correct":false},
                {"option": "contains one less oxygen atom.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "In the double helix structure of nucleic acids, cytosine hydrogen bonds to",
            "a": [
                {"option": "deoxyribose.", "correct":false},
                {"option": "ribose. ", "correct":false},
                {"option": "adenine. ", "correct":false},
                {"option": "thymine. ", "correct":false},
                {"option": "guanine.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "If one strand of a DNA molecule has the sequence of bases 5ʹATTGCA3ʹ, the other complementary strand would have the sequence",
            "a": [
                {"option": "5ʹTAACGT3ʹ. ", "correct":false},
                {"option": "5'TGCAAT3'. ", "correct":true},
                {"option": "5ʹUAACGU3ʹ. ", "correct":false},
                {"option": "5ʹAUUGCA3ʹ. ", "correct":false},
                {"option": "5ʹUGCAAU3ʹ.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "What is the structural feature that allows DNA to replicate faithfully?",
            "a": [
                {"option": "sugar-phosphate backbone", "correct":false},
                {"option": "complementary pairing of the nitrogenous bases", "correct":true},
                {"option": "disulfide bonding (bridging) of the two helixes", "correct":false},
                {"option": "twisting of the molecule to form an α helix", "correct":false},
                {"option": "three-component structure of the nucleotides", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "The element nitrogen is present in all of the following except",
            "a": [
                {"option": "proteins.", "correct":false},
                {"option": "nucleic acids.", "correct":false},
                {"option": "amino acids. ", "correct":false},
                {"option": "DNA.", "correct":false},
                {"option": "monosaccharides.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "The molecular formula for glucose is C6H12O6. What would be the molecular formula for a polymer made by linking ten glucose molecules together by dehydration reactions?",
            "a": [
                {"option": "C60H120O60", "correct":false},
                {"option": "C6H12O6", "correct":false},
                {"option": "C60H102O51", "correct":true},
                {"option": "C60H100O50", "correct":false},
                {"option": "C60H111O51", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following statements concerning unsaturated fats is true?",
            "a": [
                {"option": "They are more common in animals than in plants.", "correct":false},
                {"option": "They have double bonds in the carbon chains of their fatty acids. ", "correct":true},
                {"option": "They generally solidify at room temperature.", "correct":false},
                {"option": "They contain more hydrogen than saturated fats having the same number of carbon atoms.", "correct":false},
                {"option": "They have fewer fatty acid molecules per fat molecule.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        }
  ]
};
