// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Reproduction",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Regeneration, the regrowth of lost body parts, normally follows",
            "a": [
                {"option": "all types of asexual reproduction.", "correct":false},
                {"option": "all types of sexual reproduction. ", "correct":false},
                {"option": "fission.", "correct":false},
                {"option": "fragmentation.", "correct":true},
                {"option": "parthenogenesis.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Animals with reproduction dependent on internal fertilization need not have",
            "a": [
                {"option": "any copulatory organs.", "correct":false},
                {"option": "a receptacle that receives sperm.", "correct":false},
                {"option": "behavioral interaction between males and females. ", "correct":false},
                {"option": "internal development of embryos.", "correct":true},
                {"option": "haploid gametes.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The junction of the upper vagina and the uterus is called the",
            "a": [
                {"option": "fallopian tube.", "correct":false},
                {"option": "clitoris. ", "correct":false},
                {"option": "oviduct.", "correct":false},
                {"option": "labia majora. ", "correct":false},
                {"option": "cervix.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In humans, the follicular cells that remain behind in the ovary following ovulation become",
            "a": [
                {"option": "ovarian endometrium shed at the time of menses.", "correct":false},
                {"option": "a steroid-hormone synthesizing structure called the corpus luteum.", "correct":true},
                {"option": "the thickened portion of the uterine wall.", "correct":false},
                {"option": "swept into the fallopian tube.", "correct":false},
                {"option": "the placenta, which secretes cervical mucus.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Testosterone is synthesized primarily by the",
            "a": [
                {"option": "sperm cells.", "correct":false},
                {"option": "hypothalamus.", "correct":false},
                {"option": "Leydig cells.", "correct":true},
                {"option": "anterior pituitary gland.", "correct":false},
                {"option": "seminiferous tubules.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Sperm cells are stored within human males in the",
            "a": [
                {"option": "urethra.", "correct":false},
                {"option": "prostate.", "correct":false},
                {"option": "epididymis.", "correct":true},
                {"option": "seminal vesicles.", "correct":false},
                {"option": "bulbourethral gland.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Among human males, both semen and urine normally travel along the",
            "a": [
                {"option": "vas deferens.", "correct":false},
                {"option": "urinary bladder. ", "correct":false},
                {"option": "seminal vesicle. ", "correct":false},
                {"option": "urethra.", "correct":true},
                {"option": "ureter.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Human sperm cells first arise in the",
            "a": [
                {"option": "prostate gland. ", "correct":false},
                {"option": "vas deferens.", "correct":false},
                {"option": "seminiferous tubules. ", "correct":true},
                {"option": "epididymis.", "correct":false},
                {"option": "Sertoli cells.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In vertebrate animals, spermatogenesis and oogenesis differ, in that",
            "a": [
                {"option": "oogenesis begins at the onset of sexual maturity, whereas spermatogenesis happens in embryonic development.", "correct":false},
                {"option": "oogenesis produces four haploid cells, whereas spermatogenesis produces only one functional spermatozoon.", "correct":false},
                {"option": "cytokinesis is unequal in oogenesis, whereas it is equal in spermatogenesis.", "correct":true},
                {"option": "oogenesis ends at menopause, whereas spermatogenesis is finished before birth.", "correct":false},
                {"option": "spermatogenesis is not completed until after fertilization occurs, but oogenesis is completed by the time a girl is born.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Mature human sperm and ova are similar in that",
            "a": [
                {"option": "they both have the same number of chromosomes.", "correct":true},
                {"option": "they are approximately the same size.", "correct":false},
                {"option": "they each have a flagellum that provides motility.", "correct":false},
                {"option": "they are produced from puberty until death. ", "correct":false},
                {"option": "they are formed before birth.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The primary difference between estrous and menstrual cycles is that",
            "a": [
                {"option": "the endometrium shed by the uterus during the estrous cycle is reabsorbed but the shed endometrium is excreted from the body during the menstrual cycle.", "correct":true},
                {"option": "behavioral changes during estrous cycles are much less apparent than those of menstrual cycles.", "correct":false},
                {"option": "season and climate have less pronounced effects on estrous cycle than they do on menstrual cycles.", "correct":false},
                {"option": "copulation normally occurs across the estrous cycle, whereas in menstrual cycles copulation only occurs during the period surrounding ovulation.", "correct":false},
                {"option": "most estrous cycle are of much longer duration compared to menstrual cycles.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The breakdown and discharge of the soft uterine tissues that occurs if no egg is fertilized is called",
            "a": [
                {"option": "menstruation. ", "correct":true},
                {"option": "lactation.", "correct":false},
                {"option": "fertilization.", "correct":false},
                {"option": "menopause. ", "correct":false},
                {"option": "ovulation.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A contraceptive pill that continuously inhibits the release of GnRH from the hypothalamus will",
            "a": [
                {"option": "increase the production of estrogen and progesterone by the ovaries. ", "correct":false},
                {"option": "initiate ovulation.", "correct":false},
                {"option": "reduce the secretion of gonadotropins from the anterior pituitary gland. ", "correct":true},
                {"option": "stimulate the secretion of LH and FSH from the posterior pituitary gland. ", "correct":false},
                {"option": "increase the flow phase of the menstrual cycle.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A primary response by the Leydig cells in the testes to the presence of luteinizing hormone is an increase in the synthesis and secretion of",
            "a": [
                {"option": "inhibin.", "correct":false},
                {"option": "testosterone.", "correct":true},
                {"option": "oxytocin. ", "correct":false},
                {"option": "prolactin.", "correct":false},
                {"option": "progesterone.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "This hormone is secreted directly from a structure in the brain:",
            "a": [
                {"option": "testosterone", "correct":false},
                {"option": "estrogen", "correct":false},
                {"option": "progesterone", "correct":false},
                {"option": "follicle stimulating hormone", "correct":false},
                {"option": "gonadotropin-releasing hormone", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The primary function of the corpus luteum is to",
            "a": [
                {"option": "nourish and protect the egg cell.", "correct":false},
                {"option": "produce prolactin in the alveoli.", "correct":false},
                {"option": "maintain progesterone and estrogen synthesis after ovulation has occurred.", "correct":true},
                {"option": "stimulate the development of the mammary glands.", "correct":false},
                {"option": "support pregnancy in the second and third trimesters.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "For the 10 days following ovulation in a nonpregnant menstrual cycle, the main source of progesterone is the",
            "a": [
                {"option": "adrenal cortex.", "correct":false},
                {"option": "anterior pituitary. ", "correct":false},
                {"option": "corpus luteum.", "correct":true},
                {"option": "developing follicle. ", "correct":false},
                {"option": "placenta.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Ovulation is the follicular response to a burst of secretion of",
            "a": [
                {"option": "LH.", "correct":true},
                {"option": "progesterone.", "correct":false},
                {"option": "inhibin. ", "correct":false},
                {"option": "prolactin. ", "correct":false},
                {"option": "estrogen.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The hypothalamic hormone that stimulates hormone secretion by the anterior pituitary gland is",
            "a": [
                {"option": "LH. ", "correct":false},
                {"option": "FSH.", "correct":false},
                {"option": "Inhibin.", "correct":false},
                {"option": "GnRH.", "correct":true},
                {"option": "estrogen.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The hormone progesterone is produced",
            "a": [
                {"option": "in the pituitary and acts directly on the ovary.", "correct":false},
                {"option": "in the uterus and acts directly on the pituitary. ", "correct":false},
                {"option": "in the ovary and acts directly on the uterus.", "correct":true},
                {"option": "in the pituitary and acts directly on the uterus. ", "correct":false},
                {"option": "in the uterus and acts directly on the pituitary.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Fertilization of human eggs usually takes place in the",
            "a": [
                {"option": "ovary.", "correct":false},
                {"option": "uterus. ", "correct":false},
                {"option": "vagina. ", "correct":false},
                {"option": "oviduct. ", "correct":true},
                {"option": "cervix.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "This embryonic hormone maintains progesterone and estrogen secretion by the corpus luteum through the first trimester of pregnancy:",
            "a": [
                {"option": "luteinizing hormone (LH)", "correct":false},
                {"option": "follicle-stimulating hormone (FSH) ", "correct":false},
                {"option": "progesterone", "correct":false},
                {"option": "human chorionic gonadotropin (HCG)", "correct":true},
                {"option": "gonadotropin-releasing hormone (GnRH) ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which hypothalamic hormone triggers the secretion of FSH?",
            "a": [
                {"option": "luteinizing hormone (LH)", "correct":false},
                {"option": "follicle-stimulating hormone (FSH) ", "correct":false},
                {"option": "progesterone", "correct":false},
                {"option": "human chorionic gonadotropin (HCG)", "correct":false},
                {"option": "gonadotropin-releasing hormone (GnRH) ", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following characterizes parthenogenesis?",
            "a": [
                {"option": "An individual may change its sex during its lifetime. ", "correct":false},
                {"option": "Specialized groups of cells grow into new individuals. ", "correct":false},
                {"option": "An organism is first a male and then a female.", "correct":false},
                {"option": "An egg develops without being fertilized.", "correct":true},
                {"option": "Both mates have male and female reproductive organs.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
    ]
};
