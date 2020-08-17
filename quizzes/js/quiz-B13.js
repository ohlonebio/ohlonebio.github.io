// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Chemical Signals—Hormones",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Which of the following is (are) true?",
            "a": [
                {"option": "Hormones regulate cellular functions, and generally negative feedback regulates hormone levels.", "correct":true},
                {"option": "The circulating level of a hormone is held constant through a series of positive feedback loops.", "correct":false},
                {"option": "Both lipid-soluble hormones and water-soluble hormones bind to intracellular protein receptors.", "correct":false},
                {"option": "The ducts of endocrine organs release their contents into the bloodstream. ", "correct":false},
                {"option": "Only A and C are true.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Only certain cells in the body are target cells for the steroid hormone aldosterone. Which of the following is the best explanation for why these are the only cells that respond to this hormone?",
            "a": [
                {"option": "Only target cells are exposed to aldosterone.", "correct":false},
                {"option": "Only target cells contain receptors for aldosterone. ", "correct":true},
                {"option": "Aldosterone is unable to enter nontarget cells.", "correct":false},
                {"option": "Nontarget cells destroy aldosterone before it can produce its effect.", "correct":false},
                {"option": "Nontarget cells convert aldosterone to a hormone to which they do respond.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Hormone X produces its effect in its target cells via the cAMP second messenger system. Which of the following will produce the greatest effect in the cell?",
            "a": [
                {"option": "a molecule of hormone X applied to the extracellular fluid surrounding the cell", "correct":true},
                {"option": "a molecule of hormone X injected into the cytoplasm of the cell", "correct":false},
                {"option": "a molecule of cAMP applied to the extracellular fluid surrounding the cell", "correct":false},
                {"option": "a molecule of cAMP injected into the cytoplasm of the cell", "correct":false},
                {"option": "a molecule of activated, cAMP-dependent protein kinase injected into the cytoplasm of the cell", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following statements about hormones is correct?",
            "a": [
                {"option": "Steroid and peptide hormones produce different effects but use the same biochemical mechanisms.", "correct":false},
                {"option": "Steroid and peptide hormones produce the same effects but differ in the mechanisms that produce the effects.", "correct":false},
                {"option": "Steroid hormones affect the synthesis of proteins, whereas peptide hormones affect the activity of proteins already present in the cell.", "correct":true},
                {"option": "Steroid hormones affect the activity of certain proteins within the cell, whereas peptide hormones directly affect the processing of mRNA.", "correct":false},
                {"option": "Steroid hormones affect the synthesis of proteins to be exported from the cell, whereas peptide hormones affect the synthesis of proteins that remain in the cell.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "When an individual is subject to short-term starvation, most available food is used to provide energy (metabolism) rather than building blocks (growth and repair). Which hormone would be particularly active in times of food shortage?",
            "a": [
                {"option": "epinephrine", "correct":false},
                {"option": "glucagon", "correct":true},
                {"option": "oxytocin", "correct":false},
                {"option": "antidiuretic hormone", "correct":false},
                {"option": "insulin", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The endocrine system and the nervous system are structurally related. Which of the following cells best illustrates this relationship?",
            "a": [
                {"option": "a neuron in the spinal cord", "correct":false},
                {"option": "a steroid-producing cell in the adrenal cortex", "correct":false},
                {"option": "a neurosecretory cell in the hypothalamus", "correct":true},
                {"option": "a brain cell in the cerebral cortex", "correct":false},
                {"option": "a cell in the pancreas that produces digestive enzymes", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "If a person drinks a large amount of water in a short period of time, he or she may die from water toxicity. ADH can help prevent water retention through interaction with target cells in the",
            "a": [
                {"option": "anterior pituitary.", "correct":false},
                {"option": "posterior pituitary. ", "correct":false},
                {"option": "adrenal gland.", "correct":false},
                {"option": "bladder. ", "correct":false},
                {"option": "kidney.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following statements about the hypothalamus is incorrect?",
            "a": [
                {"option": "It functions as an endocrine gland.", "correct":false},
                {"option": "It is part of the central nervous system.", "correct":false},
                {"option": "It is subject to feedback inhibition by certain hormones.", "correct":false},
                {"option": "It secretes tropic hormones that act directly on the gonads.", "correct":true},
                {"option": "Its neurosecretory cells terminate in the posterior pituitary.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following statements about endocrine glands is incorrect?",
            "a": [
                {"option": "The parathyroids regulate metabolic rate.", "correct":true},
                {"option": "The thyroid participates in blood calcium regulation.", "correct":false},
                {"option": "The pituitary participates in the regulation of the gonads.", "correct":false},
                {"option": "The adrenal medulla produces ʺfight-or-flightʺ responses. ", "correct":false},
                {"option": "The pancreas helps to regulate blood sugar concentration.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which hormone exerts antagonistic action to PTH (parathyroid hormone)?",
            "a": [
                {"option": "thyroxine", "correct":false},
                {"option": "epinephrine", "correct":false},
                {"option": "growth hormone", "correct":false},
                {"option": "calcitonin", "correct":true},
                {"option": "glucagon", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following glands shows both endocrine and exocrine activity?",
            "a": [
                {"option": "pituitary", "correct":false},
                {"option": "parathyroid", "correct":false},
                {"option": "salivary ", "correct":false},
                {"option": "pancreas ", "correct":true},
                {"option": "adrenal", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "All of the following are steroid hormones except",
            "a": [
                {"option": "androgen.", "correct":false},
                {"option": "cortisol. ", "correct":false},
                {"option": "estrogen. ", "correct":false},
                {"option": "insulin.", "correct":true},
                {"option": "testosterone.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Blood samples taken from an individual who had been fasting for 24 hours would have which of the following?",
            "a": [
                {"option": "high levels of insulin", "correct":false},
                {"option": "high levels of glucagon", "correct":false},
                {"option": "low levels of insulin", "correct":false},
                {"option": "low levels of glucagon", "correct":false},
                {"option": "both B and C", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What happens when beta cells of the pancreas release insulin into the blood?",
            "a": [
                {"option": "Blood glucose levels rise to a set point and stimulate glucagon release.", "correct":false},
                {"option": "Body cells take up more glucose.", "correct":true},
                {"option": "The liver breaks down glycogen to glucose.", "correct":false},
                {"option": "Alpha cells are stimulated to release glucose into the blood. ", "correct":false},
                {"option": "Both B and D are correct.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is a steroid hormone that triggers molting in arthropods?",
            "a": [
                {"option": "ecdysone", "correct":true},
                {"option": "glucagon ", "correct":false},
                {"option": "thyroxine ", "correct":false},
                {"option": "oxytocin", "correct":false},
                {"option": "growth hormone", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following stimulates and maintains metabolic processes?",
            "a": [
                {"option": "ecdysone", "correct":false},
                {"option": "glucagon ", "correct":false},
                {"option": "thyroxine ", "correct":true},
                {"option": "oxytocin", "correct":false},
                {"option": "growth hormone", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is secreted by the anterior pituitary?",
            "a": [
                {"option": "ecdysone", "correct":false},
                {"option": "glucagon ", "correct":false},
                {"option": "thyroxine ", "correct":false},
                {"option": "oxytocin", "correct":false},
                {"option": "growth hormone", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "An example of antagonistic hormones controlling homeostasis is",
            "a": [
                {"option": "thyroxine and parathyroid hormone in calcium balance. ", "correct":false},
                {"option": "insulin and glucagon in glucose metabolism.", "correct":true},
                {"option": "progestins and estrogens in sexual differentiation.", "correct":false},
                {"option": "epinephrine and norepinephrine in fight-or-flight responses. ", "correct":false},
                {"option": "oxytocin and prolactin in milk production.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
    ]
};
