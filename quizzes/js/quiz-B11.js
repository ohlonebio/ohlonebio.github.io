// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Circulation",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Organisms in which a circulating body fluid is distinct from the fluid that directly surrounds the bodyʹs cells are likely to have which of the following?",
            "a": [
                {"option": "an open circulatory system ", "correct":false},
                {"option": "a closed circulatory system ", "correct":true},
                {"option": "a gastrovascular cavity", "correct":false},
                {"option": "branched tracheae", "correct":false},
                {"option": "hemolymph", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In which animal does blood flow from the pulmocutaneous circulation to the heart before circulating through the rest of the body?",
            "a": [
                {"option": "annelid ", "correct":false},
                {"option": "mollusc ", "correct":false},
                {"option": "fish", "correct":false},
                {"option": "frog", "correct":true},
                {"option": "insect", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following are the only vertebrates in which blood flows directly from respiratory organs to body tissues without first returning to the heart?",
            "a": [
                {"option": "amphibians", "correct":false},
                {"option": "birds", "correct":false},
                {"option": "fishes", "correct":true},
                {"option": "mammals", "correct":false},
                {"option": "reptiles", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A human red blood cell in an artery of the left arm is on its way to deliver oxygen to a cell in the thumb. From this point in the artery, how many capillary beds must this red blood cell pass through before it returns to the left ventricle of the heart?",
            "a": [
                {"option": "one", "correct":false},
                {"option": "two ", "correct":true},
                {"option": "three ", "correct":false},
                {"option": "four ", "correct":false},
                {"option": "five", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which sequence of blood flow can be observed in a mammal?",
            "a": [
                {"option": "left ventricle → aorta → lungs → systemic circulation", "correct":false},
                {"option": "right ventricle → pulmonary vein → pulmocutaneous circulation ", "correct":false},
                {"option": "pulmonary vein → left atrium → ventricle → pulmonary circuit ", "correct":false},
                {"option": "vena cava → right atrium → ventricle → pulmonary circuit", "correct":true},
                {"option": "right atrium → pulmonary artery → left atrium → ventricle", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A patient has a blood pressure of 120/75, a pulse rate of 40 beats/min, a stroke volume of 70 mL/beat, and a respiratory rate of 25 breaths/min. This personʹs cardiac output per minute will be",
            "a": [
                {"option": "500 mL.", "correct":false},
                {"option": "1,000 mL. ", "correct":false},
                {"option": "1,750 mL. ", "correct":false},
                {"option": "2,800 mL. ", "correct":true},
                {"option": "4,800 mL.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Damage to the sinoatrial node in humans",
            "a": [
                {"option": "is a major contributor to heart attacks.", "correct":false},
                {"option": "would block conductance between the bundle branches and the Purkinje fibers.", "correct":false},
                {"option": "would have a negative effect on peripheral resistance.", "correct":false},
                {"option": "would disrupt the rate and timing of cardiac muscle contractions.", "correct":true},
                {"option": "would have a direct effect on blood pressure monitors in the aorta.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "If the atrioventricular node could be surgically removed from the heart without disrupting signal transmission to the Purkinje fibers, what would be the effect?",
            "a": [
                {"option": "No apparent effect on heart activity would be observed. ", "correct":false},
                {"option": "The heart rate would be decreased.", "correct":false},
                {"option": "Only the ventricles would contract. ", "correct":false},
                {"option": "Only the atria would contract.", "correct":false},
                {"option": "Atria and ventricles would contract at about the same time. ", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The average resting stroke volume of the heart is 70 mL and it beats ~72 times per minute. This would result in which cardiac output?",
            "a": [
                {"option": "5 L/minute", "correct":true},
                {"option": "504 mL/minute", "correct":false},
                {"option": "0.5 L/minute ", "correct":false},
                {"option": "50 L/minute ", "correct":false},
                {"option": "500 L/minute", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Where are semilunar valves to be found in the mammalian heart?",
            "a": [
                {"option": "where blood goes from atria to ventricles", "correct":false},
                {"option": "on the right side of the heart only", "correct":false},
                {"option": "where the pulmonary veins attach to the heart", "correct":false},
                {"option": "at the places where blood leaves via the aorta and pulmonary arteries", "correct":true},
                {"option": "at the places where the anterior and posterior venae cavae enter", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Why is the velocity of blood flow the lowest in capillaries?",
            "a": [
                {"option": "The capillary walls are not thin enough to allow oxygen to exchange with the cells.", "correct":false},
                {"option": "Capillaries are far from the heart, and blood flow slows as distance from the heart increases.", "correct":false},
                {"option": "The diastolic blood pressure is too low to deliver blood to the capillaries at a high flow rate.", "correct":false},
                {"option": "The systemic capillaries are supplied by the left ventricle, which has a lower cardiac output than the right ventricle.", "correct":false},
                {"option": "The total cross-sectional area of the capillaries is larger than the total cross-sectional area of the arterioles.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Average blood pressure is lowest in which structure(s)?",
            "a": [
                {"option": "the aorta", "correct":false},
                {"option": "arteries", "correct":false},
                {"option": "arterioles", "correct":false},
                {"option": "capillaries", "correct":false},
                {"option": "venae cavae", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is the reason that fluid is forced from the bloodstream to the surrounding tissues at the arteriole end of systemic capillaries?",
            "a": [
                {"option": "The osmotic pressure of the interstitial fluid is greater than that of the blood. ", "correct":false},
                {"option": "The hydrostatic pressure of the blood is less than that of the interstitial fluid.", "correct":false},
                {"option": "The hydrostatic pressure of the blood is greater than the osmotic pressure of the blood.", "correct":true},
                {"option": "The osmotic pressure of the interstitial fluid is greater than the hydrostatic pressure of the blood.", "correct":false},
                {"option": "The osmotic pressure of the blood is greater than the hydrostatic pressure of the interstitial fluid.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "If, during protein starvation, the osmotic pressure on the venous side of capillary beds drops below the hydrostatic pressure, then",
            "a": [
                {"option": "hemoglobin will not release oxygen.", "correct":false},
                {"option": "fluids will tend to accumulate in tissues.", "correct":true},
                {"option": "the pH of the interstitial fluids will increase.", "correct":false},
                {"option": "most carbon dioxide will be bound to hemoglobin and carried away from tissues.", "correct":false},
                {"option": "plasma proteins will escape through the endothelium of the capillaries.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What would be the long-term effect if the lymphatic vessels associated with a capillary bed were to become blocked?",
            "a": [
                {"option": "More fluid would enter the venous capillaries.", "correct":false},
                {"option": "Blood pressure in the capillary bed would increase.", "correct":false},
                {"option": "Fluid would accumulate in interstitial areas.", "correct":true},
                {"option": "Fewer proteins would leak into the interstitial fluid from the blood.", "correct":false},
                {"option": "Nothing would happen.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A blood vessel has the following characteristics: outer layer of connective tissue, a thick layer of smooth muscle with elastic fibers, no valves. It is which of the following?",
            "a": [
                {"option": "a vein", "correct":false},
                {"option": "a venule", "correct":false},
                {"option": "an artery", "correct":true},
                {"option": "a capillary", "correct":false},
                {"option": "a portal vessel", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is a function of plasma proteins in humans?",
            "a": [
                {"option": "maintenance of blood osmotic pressure", "correct":true},
                {"option": "transport of water-soluble lipids", "correct":false},
                {"option": "gas exchange", "correct":false},
                {"option": "aerobic metabolism", "correct":false},
                {"option": "oxygen transport", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The meshwork that forms the fabric of a blood clot consists mostly of which protein?",
            "a": [
                {"option": "fibrinogen", "correct":false},
                {"option": "fibrin", "correct":true},
                {"option": "thrombin", "correct":false},
                {"option": "prothrombin", "correct":false},
                {"option": "collagen", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is a normal event in the process of blood clotting?",
            "a": [
                {"option": "production of erythropoietin", "correct":false},
                {"option": "conversion of fibrin to fibrinogen", "correct":false},
                {"option": "activation of prothrombin to thrombin", "correct":true},
                {"option": "increase in platelets", "correct":false},
                {"option": "clotting factor formation", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Blood returning to the mammalian heart in a pulmonary vein drains first into the",
            "a": [
                {"option": "vena cava.", "correct":false},
                {"option": "left atrium. ", "correct":true},
                {"option": "right atrium. ", "correct":false},
                {"option": "left ventricle ", "correct":false},
                {"option": "right ventricle", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The conversion of fibrinogen to fibrin",
            "a": [
                {"option": "occurs when fibrinogen is released from broken platelets.", "correct":false},
                {"option": "occurs within red blood cells.", "correct":false},
                {"option": "is linked to hypertension and may damage artery walls.", "correct":false},
                {"option": "is likely to occur too often in an individual with hemophilia.", "correct":false},
                {"option": "is the final step of a clotting process that involves multiple clotting factors.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
    ]
};
