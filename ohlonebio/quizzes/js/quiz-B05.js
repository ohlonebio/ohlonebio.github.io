// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Archaeplastida",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
         {
            "q": "Plant spores are produced directly by",
            "a": [
                {"option": "sporophytes. ", "correct":true},
                {"option": "gametes.", "correct":false},
                {"option": "gametophytes. ", "correct":false},
                {"option": "gametangia.", "correct":false},
                {"option": "seeds.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following statements is true of archegonia?",
            "a": [
                {"option": "They are the sites where male gametes are produced.", "correct":false},
                {"option": "They may temporarily contain sporophyte embryos. ", "correct":true},
                {"option": "They are the same as sporangia.", "correct":false},
                {"option": "They are the ancestral versions of animal gonads. ", "correct":false},
                {"option": "They are asexual reproductive structures.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Assuming that they all belong to the same plant, arrange the following structures from smallest to largest.<br>1. antheridia<br>2. gametes<br>3. gametophytes<br>4 .gametangia",
            "a": [
                {"option": "1, 4, 3, 2", "correct":false},
                {"option": "3, 1, 2, 4", "correct":false},
                {"option": "3, 4, 2, 1", "correct":false},
                {"option": "3, 4, 1, 2", "correct":true},
                {"option": "4, 3, 1, 2", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Each of the following is a general characteristic of bryophytes except",
            "a": [
                {"option": "a cellulose cell wall.", "correct":false},
                {"option": "vascular tissue.", "correct":true},
                {"option": "chlorophylls a and b.", "correct":false},
                {"option": "being photosynthetic autotrophs. ", "correct":false},
                {"option": "being eukaryotic.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The following are all true about the life cycle of mosses except",
            "a": [
                {"option": "external water is required for fertilization. ", "correct":false},
                {"option": "flagellated sperm are produced.", "correct":false},
                {"option": "antheridia and archegonia are produced by gametophytes. ", "correct":false},
                {"option": "the gametophyte generation is dominant.", "correct":false},
                {"option": "the growing embryo gives rise to the gametophyte.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Beginning with the germination of a moss spore, what is the sequence of structures that develop after germination?<br>1. embryo<br>2. gametes<br>3. sporophyte<br>4. protonema<br>5. gametophore",
            "a": [
                {"option": "4 → 1 → 3 → 5 → 2", "correct":false},
                {"option": "4 → 3 → 5 → 2 → 1", "correct":false},
                {"option": "4 → 5 → 2 → 1 → 3", "correct":true},
                {"option": "3 → 4 → 5 → 2 → 1", "correct":false},
                {"option": "3 → 1 → 4 → 5 → 2", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The following characteristics all helped seedless plants become better adapted to land except",
            "a": [
                {"option": "a dominant gametophyte. ", "correct":true},
                {"option": "vascular tissue.", "correct":false},
                {"option": "a waxy cuticle.", "correct":false},
                {"option": "stomata on leaves.", "correct":false},
                {"option": "a branched sporophyte.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A botanist discovers a new species of plant in a tropical rain forest. After observing its anatomy and life cycle, the following characteristics are noted: flagellated sperm, xylem with tracheids, separate gametophyte and sporophyte generations with the sporophyte dominant, and no seeds. This plant is probably most closely related to",
            "a": [
                {"option": "mosses.", "correct":false},
                {"option": "charophytes.", "correct":false},
                {"option": "ferns.", "correct":true},
                {"option": "gymnosperms.", "correct":false},
                {"option": "flowering plants.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Sporophylls can be found in which of the following?",
            "a": [
                {"option": "mosses", "correct":false},
                {"option": "liverworts ", "correct":false},
                {"option": "hornworts ", "correct":false},
                {"option": "pterophytes ", "correct":true},
                {"option": "charophytes", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Assuming that they all belong to the same plant, arrange the following structures from largest to smallest (or from most inclusive to least inclusive).<br>1. spores<br>2. sporophylls<br>3. sporophytes<br>4. sporangia",
            "a": [
                {"option": "2, 4, 3, 1", "correct":false},
                {"option": "2, 3, 4, 1", "correct":false},
                {"option": "3, 1, 4, 2", "correct":false},
                {"option": "3, 4, 2, 1", "correct":false},
                {"option": "3, 2, 4, 1", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In plants, which of the following are produced by meiosis?",
            "a": [
                {"option": "haploid sporophyte", "correct":false},
                {"option": "haploid gametes ", "correct":false},
                {"option": "diploid gametes ", "correct":false},
                {"option": "haploid spores", "correct":true},
                {"option": "diploid spores", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is a land plant that produces flagellated sperm and has a sporophyte-dominated life cycle?",
            "a": [
                {"option": "moss", "correct":false},
                {"option": "fern", "correct":true},
                {"option": "liverwort ", "correct":false},
                {"option": "charophyte ", "correct":false},
                {"option": "hornwort", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The result of heterospory is",
            "a": [
                {"option": "the existence of male and female sporophytes.", "correct":false},
                {"option": "the existence of male and female gametophytes.", "correct":true},
                {"option": "the absence of sexuality from both plant generations. ", "correct":false},
                {"option": "both A and B above.", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In addition to seeds, which of the following characteristics are unique to the seed-producing plants?",
            "a": [
                {"option": "sporopollenin", "correct":false},
                {"option": "lignin present in cell walls", "correct":false},
                {"option": "pollen", "correct":true},
                {"option": "use of air currents as a dispersal agent", "correct":false},
                {"option": "megaphylls", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following most closely represents the male gametophyte of seed-bearing plants?",
            "a": [
                {"option": "ovule", "correct":false},
                {"option": "microspore mother cell", "correct":false},
                {"option": "pollen grain interior", "correct":true},
                {"option": "embryo sac", "correct":false},
                {"option": "fertilized egg", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The main way that pine trees disperse their offspring is by using",
            "a": [
                {"option": "fruits that are eaten by animals. ", "correct":false},
                {"option": "spores.", "correct":false},
                {"option": "squirrels to bury cones. ", "correct":false},
                {"option": "windblown seeds.", "correct":true},
                {"option": "flagellated sperm swimming through water.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of these statements correctly describes a portion of the pine life cycle?",
            "a": [
                {"option": "Female gametophytes use mitosis to produce eggs.", "correct":true},
                {"option": "Seeds are produced in pollen-producing cones. ", "correct":false},
                {"option": "Pollen grains contain female gametophytes.", "correct":false},
                {"option": "A pollen tube slowly digests its way through the triploid endosperm.", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Within a gymnosperm megasporangium, what is the correct sequence in which the following should appear during development, assuming that fertilization occurs?<br>1. sporophyte embryo<br>2. female gametophyte<br>3. egg cell<br>4. megaspore",
            "a": [
                {"option": "4 → 3 → 2 → 1", "correct":false},
                {"option": "4 → 2 → 3 → 1", "correct":true},
                {"option": "4 → 1 → 2 → 3", "correct":false},
                {"option": "1 → 4 → 3 → 2", "correct":false},
                {"option": "1 → 4 → 2 → 3", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following can be found in gymnosperms?",
            "a": [
                {"option": "non-fertile flower parts. ", "correct":false},
                {"option": "triploid endosperm.", "correct":false},
                {"option": "fruits. ", "correct":false},
                {"option": "pollen. ", "correct":true},
                {"option": "carpels.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Arrange the following structures, which can be found on male pine trees, from the largest structure to the smallest structure (or from most inclusive to least inclusive).<br>1. sporophyte<br>2. microspores<br>3. microsporangia<br>4. pollen cone<br>5. pollen nuclei",
            "a": [
                {"option": "1, 4, 3, 2, 5", "correct":true},
                {"option": "1, 4, 2, 3, 5", "correct":false},
                {"option": "1, 2, 3, 5, 4", "correct":false},
                {"option": "4, 1, 2, 3, 5", "correct":false},
                {"option": "4, 3, 2, 5, 1", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which structure is common to both gymnosperms and angiosperms?",
            "a": [
                {"option": "stigma", "correct":false},
                {"option": "carpel ", "correct":false},
                {"option": "ovule ", "correct":true},
                {"option": "ovary ", "correct":false},
                {"option": "anthers", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is true of stamens, sepals, petals, carpels, and pinecone scales?",
            "a": [
                {"option": "They are female reproductive parts.", "correct":false},
                {"option": "None are capable of photosynthesis. ", "correct":false},
                {"option": "They are modified leaves.", "correct":true},
                {"option": "They are found on flowers.", "correct":false},
                {"option": "They are found on angiosperms.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following most directly produces the scale of ovulate (ovule-bearing) pinecone?",
            "a": [
                {"option": "male gametophyte", "correct":false},
                {"option": "female gametophyte", "correct":false},
                {"option": "male sporophyte", "correct":false},
                {"option": "female sporophyte", "correct":true}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following most directly produces the integument of pine seed?",
            "a": [
                {"option": "male gametophyte", "correct":false},
                {"option": "female gametophyte", "correct":false},
                {"option": "male sporophyte", "correct":false},
                {"option": "female sporophyte", "correct":true}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following most directly produces the egg cell in the embryo sac?",
            "a": [
                {"option": "male gametophyte", "correct":false},
                {"option": "female gametophyte", "correct":true},
                {"option": "male sporophyte", "correct":false},
                {"option": "female sporophyte", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following most directly produces the fruit of an angiosperm?",
            "a": [
                {"option": "male gametophyte", "correct":false},
                {"option": "female gametophyte", "correct":false},
                {"option": "male sporophyte", "correct":false},
                {"option": "female sporophyte", "correct":true}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following most directly produces the pollen tube?",
            "a": [
                {"option": "male gametophyte", "correct":true},
                {"option": "female gametophyte", "correct":false},
                {"option": "male sporophyte", "correct":false},
                {"option": "female sporophyte", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following most directly produces the microspores of pollen cones?",
            "a": [
                {"option": "male gametophyte", "correct":false},
                {"option": "female gametophyte", "correct":false},
                {"option": "male sporophyte", "correct":true},
                {"option": "female sporophyte", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following most directly produces the megasporangium of pine ovules?",
            "a": [
                {"option": "male gametophyte", "correct":false},
                {"option": "female gametophyte", "correct":false},
                {"option": "male sporophyte", "correct":false},
                {"option": "female sporophyte", "correct":true}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is a characteristic of all angiosperms?",
            "a": [
                {"option": "complete reliance on wind as the pollinating agent", "correct":false},
                {"option": "double internal fertilization", "correct":true},
                {"option": "free-living gametophytes", "correct":false},
                {"option": "carpels that contain microsporangia", "correct":false},
                {"option": "ovules that are not contained within ovaries", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Angiosperm double fertilization is so-called because it features the formation of",
            "a": [
                {"option": "two embryos from one egg and two sperm cells.", "correct":false},
                {"option": "one embryo from one egg fertilized by two sperm cells. ", "correct":false},
                {"option": "two embryos from two sperm cells and two eggs.", "correct":false},
                {"option": "one embryo involving one sperm cell and of endosperm involving a second sperm cell.", "correct":true},
                {"option": "one embryo from two eggs fertilized by a single sperm cell.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Arrange the following structures from largest to smallest, assuming that they belong to two generations of the same angiosperm.<br>1. ovary<br>2. ovule<br>3. egg<br>4. carpel<br>5. embryo sac",
            "a": [
                {"option": "4, 2, 1, 5, 3", "correct":false},
                {"option": "4, 5, 2, 1, 3", "correct":false},
                {"option": "5, 4, 3, 1, 2", "correct":false},
                {"option": "5, 1, 4, 2, 3", "correct":false},
                {"option": "4, 1, 2, 5, 3", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In onions (Allium), cells of the sporophyte have 16 chromosomes within each nucleus. How many chromosomes should be in a tube cell nucleus?",
            "a": [
                {"option": "4", "correct":false},
                {"option": "8", "correct":true},
                {"option": "16", "correct":false},
                {"option": "24", "correct":false},
                {"option": "32", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In onions (Allium), cells of the sporophyte have 16 chromosomes within each nucleus. How many chromosomes should be in an endosperm nucleus?",
            "a": [
                {"option": "4", "correct":false},
                {"option": "8", "correct":false},
                {"option": "16", "correct":false},
                {"option": "24", "correct":true},
                {"option": "32", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In onions (Allium), cells of the sporophyte have 16 chromosomes within each nucleus. How many chromosomes should be in a generative cell nucleus?",
            "a": [
                {"option": "4", "correct":false},
                {"option": "8", "correct":true},
                {"option": "16", "correct":false},
                {"option": "24", "correct":false},
                {"option": "32", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In onions (Allium), cells of the sporophyte have 16 chromosomes within each nucleus. How many chromosomes should be in an embryo sac nucleus?",
            "a": [
                {"option": "4", "correct":false},
                {"option": "8", "correct":true},
                {"option": "16", "correct":false},
                {"option": "24", "correct":false},
                {"option": "32", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In onions (Allium), cells of the sporophyte have 16 chromosomes within each nucleus. How many chromosomes should be in an embryo nucleus?",
            "a": [
                {"option": "4", "correct":false},
                {"option": "8", "correct":false},
                {"option": "16", "correct":true},
                {"option": "24", "correct":false},
                {"option": "32", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In onions (Allium), cells of the sporophyte have 16 chromosomes within each nucleus. How many chromosomes should be in a megasporangium nucleus?",
            "a": [
                {"option": "4", "correct":false},
                {"option": "8", "correct":false},
                {"option": "16", "correct":true},
                {"option": "24", "correct":false},
                {"option": "32", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In a typical angiosperm, what is the sequence of structures encountered by the tip of a growing pollen tube on its way to the egg?<br>1. micropyle<br>2. style<br>3. ovary<br>4. stigma",
            "a": [
                {"option": "4 → 2 → 3 → 1", "correct":true},
                {"option": "4 → 3 → 2 → 1", "correct":false},
                {"option": "1 → 4 → 2 → 3", "correct":false},
                {"option": "1 → 3 → 4 → 2", "correct":false},
                {"option": "3 → 2 → 4 → 1", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Where in an angiosperm would you find a megasporangium?",
            "a": [
                {"option": "in the style of a flower", "correct":false},
                {"option": "inside the tip of a pollen tube", "correct":false},
                {"option": "enclosed in the stigma of a flower", "correct":false},
                {"option": "within an ovule contained within an ovary of a flower", "correct":true},
                {"option": "packed into pollen sacs within the anthers found on a stamen", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A fruit is most commonly",
            "a": [
                {"option": "a mature ovary.", "correct":true},
                {"option": "a thickened style. ", "correct":false},
                {"option": "an enlarged ovule. ", "correct":false},
                {"option": "a modified root.", "correct":false},
                {"option": "a mature female gametophyte.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "With respect to angiosperms, which of the following is incorrectly paired with its chromosome count?",
            "a": [
                {"option": "egg–n", "correct":false},
                {"option": "megaspore–2n ", "correct":true},
                {"option": "microspore–n ", "correct":false},
                {"option": "zygote–2n", "correct":false},
                {"option": "sperm–n", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is not a characteristic that distinguishes gymnosperms and angiosperms from other plants?",
            "a": [
                {"option": "alternation of generations", "correct":true},
                {"option": "ovules", "correct":false},
                {"option": "integuments", "correct":false},
                {"option": "pollen", "correct":false},
                {"option": "dependent gametophytes", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Gymnosperms and angiosperms have the following in common except",
            "a": [
                {"option": "seeds. ", "correct":false},
                {"option": "pollen.", "correct":false},
                {"option": "vascular tissue. ", "correct":false},
                {"option": "ovaries.", "correct":true},
                {"option": "ovules.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
    ]
};
