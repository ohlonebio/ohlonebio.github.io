// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Osmoregulation & Excretion",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "The body fluids of an osmoconformer would be ______ with its ______ environment.",
            "a": [
                {"option": "hyperosmotic; freshwater", "correct":false},
                {"option": "isotonic; freshwater", "correct":false},
                {"option": "hyperosmotic; saltwater", "correct":false},
                {"option": "isoosmotic; saltwater", "correct":true},
                {"option": "hypoosmotic; saltwater", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A freshwater fish was accidentally placed in salt water. After several minutes in this saline water, it died. What is the most logical explanation for its death?",
            "a": [
                {"option": "Loss of water by osmosis in cells in vital organs resulting in cell death and eventually organ failure.", "correct":true},
                {"option": "Salt diffused into all the fishʹs cells causing them to swell and, in some cases, lyse.", "correct":false},
                {"option": "The kidneys were not able to keep up with the water removal necessary in this hyperosmotic environment creating an irrevocable loss of homeostasis.", "correct":false},
                {"option": "The gills became encrusted with salt, resulting in inadequate gas exchange and a resulting asphyxiation.", "correct":false},
                {"option": "Brain cells lysed as a result of increased osmotic pressure in this hyperosmotic environment; death by loss of autonomic function.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is true of urea? It is",
            "a": [
                {"option": "insoluble in water.", "correct":false},
                {"option": "more toxic to human cells than ammonia.", "correct":false},
                {"option": "the primary nitrogenous waste product of humans.", "correct":true},
                {"option": "the primary nitrogenous waste product of most birds.", "correct":false},
                {"option": "the primary nitrogenous waste product of most aquatic invertebrates.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is true of ammonia?",
            "a": [
                {"option": "It is soluble in water.", "correct":true},
                {"option": "It can be stored as a precipitate.", "correct":false},
                {"option": "It has low toxicity relative to urea.", "correct":false},
                {"option": "It is metabolically more expensive to synthesize than urea. ", "correct":false},
                {"option": "It is the major nitrogenous waste excreted by insects.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The advantage of excreting wastes as urea rather than as ammonia is that",
            "a": [
                {"option": "urea can be exchanged for Na+. ", "correct":false},
                {"option": "urea is less toxic than ammonia.", "correct":true},
                {"option": "urea requires more water for excretion than ammonia. ", "correct":false},
                {"option": "urea does not affect the osmolar gradient.", "correct":false},
                {"option": "less nitrogen is removed from the body.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is the main nitrogenous waste excreted by birds?",
            "a": [
                {"option": "ammonia", "correct":false},
                {"option": "nitrate", "correct":false},
                {"option": "nitrite", "correct":false},
                {"option": "urea", "correct":false},
                {"option": "uric acid", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In animals, nitrogenous wastes are produced mostly from the catabolism of",
            "a": [
                {"option": "starch and cellulose.", "correct":false},
                {"option": "triglycerides and steroids.", "correct":false},
                {"option": "proteins and nucleic acids.", "correct":true},
                {"option": "phospholipids and glycolipids.", "correct":false},
                {"option": "fatty acids and glycerol.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which group possess excretory structures known as protonephridia?",
            "a": [
                {"option": "flatworms", "correct":true},
                {"option": "earthworms", "correct":false},
                {"option": "insects", "correct":false},
                {"option": "vertebrates", "correct":false},
                {"option": "cnidarians", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which group possess excretory organs known as Malpighian tubules?",
            "a": [
                {"option": "earthworms", "correct":false},
                {"option": "flatworms", "correct":false},
                {"option": "insects ", "correct":true},
                {"option": "jellyfish ", "correct":false},
                {"option": "sea stars", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following mechanisms for osmoregulation or nitrogen removal is correctly paired with its corresponding animal?",
            "a": [
                {"option": "metanephridium-flatworm", "correct":false},
                {"option": "Malpighian tubule-frog", "correct":false},
                {"option": "kidney-insect", "correct":false},
                {"option": "flame bulb-snake", "correct":false},
                {"option": "direct cellular exchange-marine invertebrate", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The transfer of fluid from the glomerulus to Bowmanʹs capsule",
            "a": [
                {"option": "results from active transport.", "correct":false},
                {"option": "transfers large molecules as easily as small ones.", "correct":false},
                {"option": "is very selective as to which subprotein sized molecules are transferred.", "correct":false},
                {"option": "is mainly a consequence of blood pressure in the capillaries of the glomerulus", "correct":true},
                {"option": "usually includes the transfer of red blood cells to the Bowmanʹs capsule.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following would contain blood in a normally functioning nephron?",
            "a": [
                {"option": "vasa recta", "correct":true},
                {"option": "Bowmanʹs capsule", "correct":false},
                {"option": "loop of Henle", "correct":false},
                {"option": "proximal tubule", "correct":false},
                {"option": "collecting duct", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which structure passes urine to the ureter?",
            "a": [
                {"option": "loop of Henle", "correct":false},
                {"option": "collecting duct", "correct":true},
                {"option": "Bowmanʹs capsule", "correct":false},
                {"option": "proximal tubule", "correct":false},
                {"option": "glomerulus", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which structure descends deep into the renal medulla only in juxtamedullary nephrons?",
            "a": [
                {"option": "loop of Henle", "correct":true},
                {"option": "collecting duct", "correct":false},
                {"option": "Bowmanʹs capsule", "correct":false},
                {"option": "proximal convoluted tubule", "correct":false},
                {"option": "glomerulus", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Proper functioning of the human kidney requires considerable active transport of sodium in the kidney tubules. If these active transport mechanisms were to stop completely, how would urine production be affected?",
            "a": [
                {"option": "No urine would be produced.", "correct":false},
                {"option": "A less-than-normal volume of hypoosmotic urine would be produced. ", "correct":false},
                {"option": "A greater-than-normal volume of isoosmotic urine would be produced.", "correct":true},
                {"option": "A greater-than-normal volume of hyperosmotic urine would be produced.", "correct":false},
                {"option": "A less-than-normal volume of isoosmotic urine would be produced.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is unique about transport epithelial cells in the ascending loop of Henle in humans?",
            "a": [
                {"option": "They are the largest epithelial cells in the body.", "correct":false},
                {"option": "They are not in contact with interstitial fluid. ", "correct":false},
                {"option": "Their membranes are impermeable to water.", "correct":true},
                {"option": "50% of their cell mass is comprised of smooth endoplasmic reticulum. ", "correct":false},
                {"option": "They are not affected by high levels of nitrogenous wastes.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which structure increases the reabsorption of Na+ when stimulated by aldosterone?",
            "a": [
                {"option": "loop of Henle", "correct":false},
                {"option": "collecting duct", "correct":false},
                {"option": "Bowmanʹs capsule", "correct":false},
                {"option": "proximal tubule", "correct":false},
                {"option": "distal tubules", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What would account for increased urine production as a result of drinking alcoholic beverages?",
            "a": [
                {"option": "increased aldosterone production", "correct":false},
                {"option": "increased blood pressure", "correct":false},
                {"option": "inhibition of antidiuretic hormone secretion (ADH)", "correct":true},
                {"option": "increased reabsorption of water in the proximal tubule", "correct":false},
                {"option": "the osmoregulator cells of the brain increasing their activity", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "How does ADH function at the cellular level?",
            "a": [
                {"option": "ADH stimulates the reabsorption of glucose through channel proteins.", "correct":false},
                {"option": "It triggers the synthesis of an enzyme that makes the phospholipid bilayer more permeable to water.", "correct":false},
                {"option": "It causes membranes to include more phospholipids that have unsaturated fatty acids.", "correct":false},
                {"option": "It causes an increase in the number of aquaporin molecules of collecting duct cells.", "correct":true},
                {"option": "It decreases the speed at which filtrate flow through the nephron leading to increased reabsorption of water.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Unlike an earthwormʹs metanephridia, a mammalian nephron",
            "a": [
                {"option": "is intimately associated with a capillary network.", "correct":false},
                {"option": "forms urine by changing fluid composition inside a tubule.", "correct":false},
                {"option": "functions in both osmoregulation and excretion.", "correct":false},
                {"option": "receives filtrate from blood instead of coelomic fluid.", "correct":true},
                {"option": "has a transport epithelium.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is not a normal response to increased blood osmolarity in humans?",
            "a": [
                {"option": "increased permeability of the collecting duct to water", "correct":false},
                {"option": "production of more dilute urine", "correct":true},
                {"option": "release of ADH by the pituitary gland", "correct":false},
                {"option": "increased thirst", "correct":false},
                {"option": "reduced urine production", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The high osmolarity of the renal medulla is maintained by all of the following except",
            "a": [
                {"option": "diffusion of salt from the thin segment of the ascending limb of the loop of Henle. ", "correct":false},
                {"option": "active transport of salt from the upper region of the ascending limb.", "correct":false},
                {"option": "the spatial arrangement of juxtamedullary nephrons. ", "correct":false},
                {"option": "diffusion of urea from the collecting duct.", "correct":false},
                {"option": "diffusion of salt from the descending limb of the loop of Henle.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which process in the nephron is least selective?",
            "a": [
                {"option": "filtration", "correct":true},
                {"option": "reabsorption", "correct":false},
                {"option": "active transport", "correct":false},
                {"option": "secretion", "correct":false},
                {"option": "salt pumping by the loop of Henle", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
    ]
};
