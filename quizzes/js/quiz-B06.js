// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Unikonta: Amoebozoa & Fungi",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Which of the following do all fungi have in common?",
            "a": [
                {"option": "meiosis in basidia", "correct":false},
                {"option": "coenocytic hyphae", "correct":false},
                {"option": "sexual life cycle", "correct":false},
                {"option": "absorption of nutrients", "correct":true},
                {"option": "symbioses with algae", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The hydrolytic digestion of which of the following should produce monomers of N-acetylglucosamine?",
            "a": [
                {"option": "insect exoskeleton", "correct":false},
                {"option": "plant cell walls ", "correct":false},
                {"option": "fungal cell walls ", "correct":false},
                {"option": "A and C only", "correct":true},
                {"option": "A, B and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The vegetative (nutritionally active) bodies of most fungi are",
            "a": [
                {"option": "composed of hyphae.", "correct":false},
                {"option": "referred to as a mycelium. ", "correct":false},
                {"option": "usually underground.", "correct":false},
                {"option": "A and B only", "correct":false},
                {"option": "A, B, and C", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In most fungi, karyogamy does not immediately follow plasmogamy, which consequently",
            "a": [
                {"option": "means that sexual reproduction can occur in specialized structures.", "correct":false},
                {"option": "results in multiple diploid nuclei per cell.", "correct":false},
                {"option": "allows fungi to reproduce asexually most of the time.", "correct":false},
                {"option": "results in heterokaryotic or dikaryotic cells.", "correct":true},
                {"option": "is strong support for the claim that fungi are not truly eukaryotic.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which process occurs in fungi and has the opposite effect on a cellʹs chromosome number than does meiosis I?",
            "a": [
                {"option": "mitosis", "correct":false},
                {"option": "plasmogamy", "correct":false},
                {"option": "crossing-over ", "correct":false},
                {"option": "binary fission ", "correct":false},
                {"option": "karyogamy", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Diploid nuclei of the ascomycete Neurospora crassa contain 14 chromosomes. A single diploid cell in an ascus will undergo one round of meiosis, followed in each of the daughter cells by one round of mitosis, producing a total of eight ascospores. If a single, diploid G2 nucleus in an ascus contains 400 nanograms (ng) of DNA, then a single ascospore nucleus of this species should contain how much DNA (ng), carried on how many chromosomes?",
            "a": [
                {"option": "100, 7", "correct":true},
                {"option": "100, 14", "correct":false},
                {"option": "200, 7", "correct":false},
                {"option": "200, 14", "correct":false},
                {"option": "400, 14", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Diploid nuclei of the ascomycete Neurospora crassa contain 14 chromosomes. A single diploid cell in an ascus will undergo one round of meiosis, followed in each of the daughter cells by one round of mitosis, producing a total of eight ascospores. Each of the eight ascospores present at the end of mitosis has the same chromosome number and DNA content (ng) as each of the four cells at the end of meiosis. What must have occurred in each spore between the round of meiosis and the round of mitosis?",
            "a": [
                {"option": "double fertilization", "correct":false},
                {"option": "crossing-over ", "correct":false},
                {"option": "nondisjunction ", "correct":false},
                {"option": "autopolyploidy ", "correct":false},
                {"option": "S phase", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Fungal cells can reproduce asexually by undergoing mitosis followed by cytokinesis. Many fungi can also prepare to reproduce sexually by undergoing",
            "a": [
                {"option": "cytokinesis followed by karyokinesis. ", "correct":false},
                {"option": "binary fission followed by cytokinesis. ", "correct":false},
                {"option": "plasmolysis followed by karyotyping. ", "correct":false},
                {"option": "plasmogamy followed by karyogamy.", "correct":true},
                {"option": "sporogenesis followed by gametogenesis.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of these structures are most likely to be a component of both chytrid zoospores and motile animal cells?",
            "a": [
                {"option": "cilia", "correct":false},
                {"option": "flagella", "correct":true},
                {"option": "pseudopods", "correct":false},
                {"option": "heterokaryons", "correct":false},
                {"option": "haustoria", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The multicellular condition of animals and fungi seems to have arisen",
            "a": [
                {"option": "due to common ancestry.", "correct":false},
                {"option": "by convergent evolution.", "correct":true},
                {"option": "by inheritance of acquired traits.", "correct":false},
                {"option": "by natural means, and is a homology. ", "correct":false},
                {"option": "by serial endosymbioses.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "This phylum contains the mushrooms, shelf fungi, and puffballs:",
            "a": [
                {"option": "Zygomycota", "correct":false},
                {"option": "Ascomycota", "correct":false},
                {"option": "Basidiomycota ", "correct":true},
                {"option": "Chytridiomycota", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What are the sporangia of the bread mold Rhizopus?",
            "a": [
                {"option": "asexual structures that produce haploid spores ", "correct":true},
                {"option": "asexual structures that produce diploid spores ", "correct":false},
                {"option": "sexual structures that produce haploid spores ", "correct":false},
                {"option": "sexual structures that produce diploid spores", "correct":false},
                {"option": "vegetative structures with no role in reproduction", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of these is a fungal structure that is usually associated with asexual reproduction?",
            "a": [
                {"option": "zygosporangium", "correct":false},
                {"option": "basidium", "correct":false},
                {"option": "conidiophore", "correct":true},
                {"option": "ascus", "correct":false},
                {"option": "antheridium", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Arrange the following from largest to smallest:<br>1. ascospore<br>2. ascocarp<br>3. ascomycete<br>4. ascus",
            "a": [
                {"option": "3 → 4 → 2 → 1", "correct":false},
                {"option": "3 → 2 → 4 → 1", "correct":true},
                {"option": "3 → 4 → 1 → 2", "correct":false},
                {"option": "2 → 3 → 4 → 1", "correct":false},
                {"option": "2 → 4 → 1 → 3", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Arrange the following from largest to smallest, assuming that they all come from the same fungus.<br>1. basidiocarp<br>2. basidium<br>3. basidiospore<br>4. mycelium<br>5. gill",
            "a": [
                {"option": "4, 5, 1, 2, 3", "correct":false},
                {"option": "5, 1, 4, 2, 3", "correct":false},
                {"option": "5, 1, 4, 3, 2", "correct":false},
                {"option": "5, 1, 3, 2, 4", "correct":false},
                {"option": "4, 1, 5, 2, 3", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Mushrooms with gills have meiotically produced spores located in or on",
            "a": [
                {"option": "asci.", "correct":false},
                {"option": "conidiophores.", "correct":false},
                {"option": "basidia. ", "correct":true},
                {"option": "soredia.", "correct":false},
                {"option": "zygosporangia.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Among sac fungi, which of these correctly distinguishes ascospores from conidia?",
            "a": [
                {"option": "ascospores are diploid, conidia are haploid", "correct":false},
                {"option": "ascospores are produced only by meiosis, conidia are produced only by mitosis", "correct":false},
                {"option": "ascospores have undergone genetic recombination during their production, conidia have not", "correct":true},
                {"option": "ascospores are larger, conidia are smaller", "correct":false},
                {"option": "ascospores will germinate into haploid hyphae, conidia will germinate into diploid hyphae", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In what structures do both Penicillium and Aspergillus produce asexual spores?",
            "a": [
                {"option": "asci", "correct":false},
                {"option": "zygosporangia", "correct":false},
                {"option": "rhizoids", "correct":false},
                {"option": "gametangia", "correct":false},
                {"option": "conidiophores", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Lichens are symbiotic associations of fungi and",
            "a": [
                {"option": "mosses.", "correct":false},
                {"option": "cyanobacteria.", "correct":false},
                {"option": "green algae. ", "correct":false},
                {"option": "either A or B ", "correct":false},
                {"option": "either B or C", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which feature seen in chytrids supports the hypothesis that they diverged earliest in fungal evolution?",
            "a": [
                {"option": "the absence of chitin within the cell wall", "correct":false},
                {"option": "coenocytic hyphae", "correct":false},
                {"option": "flagellated spores", "correct":true},
                {"option": "formation of resistant zygosporangia", "correct":false},
                {"option": "parasitic lifestyle", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The adaptive advantage associated with the filamentous nature of fungal mycelia is primarily related to",
            "a": [
                {"option": "the ability to form haustoria and parasitize other organisms. ", "correct":false},
                {"option": "avoiding sexual reproduction until the environment changes. ", "correct":false},
                {"option": "the potential to inhabit almost all terrestrial habitats.", "correct":false},
                {"option": "the increased probability of contact between different mating types.", "correct":false},
                {"option": "an extensive surface area well suited for invasive growth and absorptive nutrition.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Among the organisms listed here, which are thought to be the closest relatives of fungi?",
            "a": [
                {"option": "animals", "correct":true},
                {"option": "vascular plants", "correct":false},
                {"option": "mosses", "correct":false},
                {"option": "brown algae", "correct":false},
                {"option": "oomycetes", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
    ]
};
