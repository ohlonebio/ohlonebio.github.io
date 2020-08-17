// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Animalia",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Which of the following is (are) unique to animals?",
            "a": [
                {"option": "cells that have mitochondria", "correct":false},
                {"option": "the structural carbohydrate, chitin", "correct":false},
                {"option": "nervous conduction and muscular movement", "correct":true},
                {"option": "heterotrophy", "correct":false},
                {"option": "both A and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is the probable sequence in which the following clades of animals originated, from earliest to most recent?<br>1. tetrapods<br>2. vertebrates<br>3. deuterostomes<br>4. amniotes<br>5. bilaterians",
            "a": [
                {"option": "5 → 3 → 2 → 4 → 1", "correct":false},
                {"option": "5 → 3 → 2 → 1 → 4", "correct":true},
                {"option": "5 → 3 → 4 → 2 → 1", "correct":false},
                {"option": "3 → 5 → 4 → 2 → 1", "correct":false},
                {"option": "3 → 5 → 2 → 1 → 4", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "An adult animal that possesses bilateral symmetry is most certainly also",
            "a": [
                {"option": "triploblastic.", "correct":true},
                {"option": "a deuterostome.", "correct":false},
                {"option": "coelomate.", "correct":false},
                {"option": "the product of metamorphosis.", "correct":false},
                {"option": "highly cephalized.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Soon after the coelom begins to form, a researcher injects a dye into the coelom of a deuterostome embryo. Initially, the dye should be able to flow directly into the",
            "a": [
                {"option": "blastopore. ", "correct":false},
                {"option": "blastocoel.", "correct":false},
                {"option": "archenteron.", "correct":true},
                {"option": "pseudocoelom.", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "At which developmental stage should one be able to first distinguish a diploblastic embryo from a triploblastic embryo?",
            "a": [
                {"option": "fertilization", "correct":false},
                {"option": "cleavage", "correct":false},
                {"option": "gastrulation", "correct":true},
                {"option": "coelom formation", "correct":false},
                {"option": "morphogenesis", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "At which developmental stage should one be able to first distinguish a protostome embryo from a deuterostome embryo?",
            "a": [
                {"option": "fertilization", "correct":false},
                {"option": "cleavage", "correct":true},
                {"option": "gastrulation", "correct":false},
                {"option": "coelom formation", "correct":false},
                {"option": "morphogenesis", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "During development, echinoderms undergo a transformation from motile larvae to a sedentary (or sometimes sessile) existence as adults. What differentiates echinoderm adults, but not their larvae? Adults should",
            "a": [
                {"option": "be diploblastic.", "correct":false},
                {"option": "have radial symmetry, or something close to it. ", "correct":true},
                {"option": "lack mesodermally derived tissues.", "correct":false},
                {"option": "A and B only", "correct":false},
                {"option": "A, B, and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Cephalization is most closely associated with which of the following?",
            "a": [
                {"option": "sedentary lifestyle", "correct":false},
                {"option": "concentration of sensory structures at the anterior end", "correct":true},
                {"option": "predators, but not prey", "correct":false},
                {"option": "a backbone", "correct":false},
                {"option": "a sessile existence", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is a correct association of an animal germ layer with the tissues or organs to which it gives rise?",
            "a": [
                {"option": "ectoderm: outer covering of digestive system", "correct":false},
                {"option": "endoderm: internal lining of blood vessels", "correct":false},
                {"option": "mesoderm: central nervous system", "correct":true},
                {"option": "mesoderm: skin", "correct":false},
                {"option": "endoderm: linings of liver passageways and lung passageways", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "You are trying to identify an organism. It is an animal, but it does not have nerve or muscle tissue. It is neither diploblastic nor triploblastic. It is probably a",
            "a": [
                {"option": "flatworm. ", "correct":false},
                {"option": "jelly.", "correct":false},
                {"option": "comb jelly. ", "correct":false},
                {"option": "sponge.", "correct":true},
                {"option": "nematode. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What distinguishes a coelomate animal from a pseudocoelomate animal is that coelomates",
            "a": [
                {"option": "have a body cavity, whereas pseudocoelomates have a solid body.", "correct":false},
                {"option": "contain tissues derived from mesoderm, whereas pseudocoelomates have no such tissue.", "correct":false},
                {"option": "have a body cavity completely lined by mesodermal tissue, whereas pseudocoelomates do not.", "correct":true},
                {"option": "have a complete digestive system with mouth and anus, whereas pseudocoelomates have a digestive tract with only one opening.", "correct":false},
                {"option": "have a gut that lacks suspension within the body cavity, whereas pseudocoelomates have mesenteries that hold the digestive system in place.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following functions is an advantage of a fluid-filled body cavity?",
            "a": [
                {"option": "Internal organs are cushioned and protected from injury.", "correct":false},
                {"option": "Organs can grow and move independently of the outer body wall.", "correct":false},
                {"option": "The fluid within the cavity acts as a hydrostatic skeleton. ", "correct":false},
                {"option": "A and C only", "correct":false},
                {"option": "A, B, and C", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The blastopore is a structure that first becomes evident during",
            "a": [
                {"option": "fertilization.", "correct":false},
                {"option": "gastrulation.", "correct":true},
                {"option": "the eight-cell stage of the embryo. ", "correct":false},
                {"option": "coelom formation.", "correct":false},
                {"option": "cleavage.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The blastopore denotes the presence of an endoderm-lined cavity in the developing embryo, a cavity that is known as the",
            "a": [
                {"option": "archenteron. ", "correct":true},
                {"option": "blastula.", "correct":false},
                {"option": "coelom.", "correct":false},
                {"option": "germ layer. ", "correct":false},
                {"option": "blastocoel.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is descriptive of protostomes?",
            "a": [
                {"option": "spiral and indeterminate cleavage, blastopore becomes mouth", "correct":false},
                {"option": "spiral and determinate cleavage, blastopore becomes mouth", "correct":true},
                {"option": "spiral and determinate cleavage, blastopore becomes anus", "correct":false},
                {"option": "radial and determinate cleavage, blastopore becomes anus", "correct":false},
                {"option": "radial and determinate cleavage, blastopore becomes mouth", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A student encounters an animal embryo at the eight-cell stage. The four smaller cells that comprise one hemisphere of the embryo seem to be rotated 45 degrees and lie in the grooves between larger, underlying cells (spiral cleavage). This embryo may potentially develop into a(n)",
            "a": [
                {"option": "turtle.", "correct":false},
                {"option": "earthworm. ", "correct":true},
                {"option": "sea star.", "correct":false},
                {"option": "fish.", "correct":false},
                {"option": "sea urchin.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A student encounters an animal embryo at the eight-cell stage. The four smaller cells that comprise one hemisphere of the embryo seem to be rotated 45 degrees and lie in the grooves between larger, underlying cells (spiral cleavage). If we were to separate these eight cells and attempt to culture them individually, then what is most likely to happen?",
            "a": [
                {"option": "All eight cells will die immediately.", "correct":false},
                {"option": "Each cell may continue development, but only into an inviable embryo that lacks many parts.", "correct":true},
                {"option": "Each cell may develop into a full-sized, normal embryo.", "correct":false},
                {"option": "Each cell may develop into a smaller-than-average, but otherwise normal, embryo.", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The most ancient branch point in animal phylogeny is that between having",
            "a": [
                {"option": "radial or bilateral symmetry.", "correct":false},
                {"option": "a well-defined head or no head.", "correct":false},
                {"option": "diploblastic or triploblastic embryos.", "correct":false},
                {"option": "true tissues or no tissues.", "correct":true},
                {"option": "a body cavity or no body cavity.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "With the current molecular-based phylogeny in mind, rank the following from most inclusive to least inclusive.<br>1. ecdysozoan<br>2. protostome<br>3. eumetazoan<br>4. triploblastic",
            "a": [
                {"option": "4, 2, 3, 1", "correct":false},
                {"option": "4, 3, 1, 2", "correct":false},
                {"option": "3, 4, 1, 2", "correct":false},
                {"option": "3, 4, 2, 1", "correct":true},
                {"option": "4, 3, 2, 1", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is characteristic of all ecdysozoans?",
            "a": [
                {"option": "the deuterostome condition", "correct":false},
                {"option": "some kind of exoskeleton, cuticle, or hard outer covering", "correct":true},
                {"option": "a pseudocoelom", "correct":false},
                {"option": "agile, speedy, and powerful locomotion", "correct":false},
                {"option": "the diploblastic condition", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following organisms are deuterostomes?",
            "a": [
                {"option": "molluscs", "correct":false},
                {"option": "annelids", "correct":false},
                {"option": "echinoderms", "correct":false},
                {"option": "chordates", "correct":false},
                {"option": "both C and D", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Acoelomates are characterized by",
            "a": [
                {"option": "the absence of a brain.", "correct":false},
                {"option": "the absence of mesoderm.", "correct":false},
                {"option": "deuterostome development.", "correct":false},
                {"option": "a coelom that is not completely lined with mesoderm.", "correct":false},
                {"option": "a solid body without a cavity surrounding internal organs.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The distinction between sponges and other animal phyla is based mainly on the absence versus the presence of",
            "a": [
                {"option": "a body cavity.", "correct":false},
                {"option": "a complete digestive tract.", "correct":false},
                {"option": "a circulatory system. ", "correct":false},
                {"option": "true tissues.", "correct":true},
                {"option": "mesoderm.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which cells in a sponge are primarily responsible for trapping and removing food particles from circulating water?",
            "a": [
                {"option": "choanocytes", "correct":true},
                {"option": "mesoglea cells", "correct":false},
                {"option": "pore cells (porocytes)", "correct":false},
                {"option": "epidermal cells", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A radially symmetrical animal that has two embryonic tissue layers probably belongs to which phylum?",
            "a": [
                {"option": "Porifera", "correct":false},
                {"option": "Cnidaria", "correct":true},
                {"option": "Platyhelminthes", "correct":false},
                {"option": "Nematoda", "correct":false},
                {"option": "Echinodermata", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The members of which class of the phylum Cnidaria occur only as polyps?",
            "a": [
                {"option": "Hydrozoa ", "correct":false},
                {"option": "Scyphozoa ", "correct":false},
                {"option": "Anthozoa ", "correct":true},
                {"option": "Cubozoa", "correct":false},
                {"option": "both B and D", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Generally, members of which flatworm class(es) are nonparasitic?",
            "a": [
                {"option": "Turbellaria", "correct":true},
                {"option": "Trematoda", "correct":false},
                {"option": "Cestoda", "correct":false},
                {"option": "A and B", "correct":false},
                {"option": "A and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What would be the most effective method of reducing the incidence of blood flukes in a human population?",
            "a": [
                {"option": "Reduce the mosquito population.", "correct":false},
                {"option": "Reduce the freshwater snail population. ", "correct":true},
                {"option": "Purify all drinking water.", "correct":false},
                {"option": "Avoid contact with rodent droppings.", "correct":false},
                {"option": "Carefully wash all raw fruits and vegetables.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The larvae of many common tapeworm species that infect humans are usually found",
            "a": [
                {"option": "encysted in freshwater snails.", "correct":false},
                {"option": "encysted in the muscles of an animal, such as a cow or pig. ", "correct":true},
                {"option": "crawling in the abdominal blood vessels of cows and pigs.", "correct":false},
                {"option": "encysted in the human brain.", "correct":false},
                {"option": "crawling in the intestines of cows and pigs.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Of the annelid classes below, which have parapodia?",
            "a": [
                {"option": "Oligochaeta", "correct":false},
                {"option": "Polychaeta", "correct":true},
                {"option": "Hirudinea", "correct":false},
                {"option": "B and C", "correct":false},
                {"option": "A, B and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Of the annelid classes below, which have segmented bodies?",
            "a": [
                {"option": "Oligochaeta", "correct":false},
                {"option": "Polychaeta", "correct":false},
                {"option": "Hirudinea", "correct":false},
                {"option": "B and C", "correct":false},
                {"option": "A, B and C", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following annelid classes release an anticoagulant that is of medical significance?",
            "a": [
                {"option": "Oligochaeta", "correct":false},
                {"option": "Polychaeta", "correct":false},
                {"option": "Hirudinea ", "correct":true},
                {"option": "B and C", "correct":false},
                {"option": "A, B and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The heartworms that can accumulate within the hearts of dogs and other mammals have a pseudocoelom, an alimentary canal, and an outer covering that is occasionally shed. To which phylum does the heartworm belong?",
            "a": [
                {"option": "Platyhelminthes", "correct":false},
                {"option": "Arthropoda ", "correct":false},
                {"option": "Nematoda ", "correct":true},
                {"option": "Mollusca", "correct":false},
                {"option": "Annelida", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following are characteristics of arthropods?<br>1. protostome development<br>2. bilateral symmetry<br>3. a pseudocoelom<br>4. three embryonic germ layers<br>5. a closed circulatory system",
            "a": [
                {"option": "1 and 2", "correct":false},
                {"option": "2 and 3", "correct":false},
                {"option": "1, 2, and 4", "correct":true},
                {"option": "2, 3, and 5", "correct":false},
                {"option": "3, 4, and 5", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "You find a small animal with eight legs crawling up your bedroom wall. Closer examination will probably reveal that this animal has",
            "a": [
                {"option": "antennae.", "correct":false},
                {"option": "no antennae.", "correct":false},
                {"option": "chelicerae. ", "correct":false},
                {"option": "A and C", "correct":false},
                {"option": "B and C", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Protostomes that have an open circulatory system and an exoskeleton of chitin are part of which phylum?",
            "a": [
                {"option": "Cnidaria ", "correct":false},
                {"option": "Annelida ", "correct":false},
                {"option": "Mollusca", "correct":false},
                {"option": "Arthropoda", "correct":true},
                {"option": "Echinodermata", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Protostomes that have a closed circulatory system and segmentation are part of which phylum?",
            "a": [
                {"option": "Cnidaria ", "correct":false},
                {"option": "Annelida ", "correct":true},
                {"option": "Mollusca", "correct":false},
                {"option": "Arthropoda", "correct":false},
                {"option": "Echinodermata", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The water vascular system of echinoderms",
            "a": [
                {"option": "functions as a circulatory system that distributes nutrients to body cells.", "correct":false},
                {"option": "functions in locomotion, feeding, and gas exchange.", "correct":true},
                {"option": "is bilateral in organization, even though the adult animal is not bilaterally symmetrical.", "correct":false},
                {"option": "moves water through the animalʹs body during suspension feeding.", "correct":false},
                {"option": "is analogous to the gastrovascular cavity of flatworms.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is a shared characteristic of all chordates?",
            "a": [
                {"option": "scales", "correct":false},
                {"option": "jaws", "correct":false},
                {"option": "vertebrae", "correct":false},
                {"option": "dorsal, hollow nerve cord", "correct":true},
                {"option": "four-chambered heart", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is one characteristic that separates chordates from all other animals?",
            "a": [
                {"option": "true coelom", "correct":false},
                {"option": "post-anal tail", "correct":true},
                {"option": "blastopore, which becomes the anus", "correct":false},
                {"option": "bilateral symmetry", "correct":false},
                {"option": "segmentation", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In which of these classes did jaws occur earliest?",
            "a": [
                {"option": "lampreys", "correct":false},
                {"option": "chondrichthyans", "correct":true},
                {"option": "ray-finned fishes", "correct":false},
                {"option": "lungfishes", "correct":false},
                {"option": "placoderms", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is a distinctive feature of the chondrichthyans?",
            "a": [
                {"option": "an amniotic egg", "correct":false},
                {"option": "unpaired fins", "correct":false},
                {"option": "an acute sense of vision that includes the ability to distinguish colors", "correct":false},
                {"option": "a mostly cartilaginous endoskeleton", "correct":true},
                {"option": "lack of jaws", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Arrange these taxonomic terms from most inclusive (i.e., most general) to least inclusive (i.e., most specific).<br>1. sarcopterygians<br>2. amphibians<br>3. gnathostomes<br>4. teleostomes<br>5. tetrapods",
            "a": [
                {"option": "4, 3, 1, 5, 2", "correct":false},
                {"option": "4, 3, 2, 5, 1", "correct":false},
                {"option": "4, 2, 3, 5, 1", "correct":false},
                {"option": "3, 4, 1, 5, 2", "correct":true},
                {"option": "3, 4, 5, 1, 2", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What should be true of fossils of the earliest tetrapods?",
            "a": [
                {"option": "They should show evidence of internal fertilization.", "correct":false},
                {"option": "They should show evidence of having produced shelled eggs. ", "correct":false},
                {"option": "They should indicate limited adaptation to life on land.", "correct":true},
                {"option": "They should be transitional forms with the fossils of chondrichthyans that lived at the same time.", "correct":false},
                {"option": "They should feature the earliest indications of the appearance of jaws.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of these is not considered an amniote?",
            "a": [
                {"option": "amphibians", "correct":true},
                {"option": "nonbird reptiles", "correct":false},
                {"option": "birds", "correct":false},
                {"option": "egg-laying mammals", "correct":false},
                {"option": "placental mammals", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of these characteristics added most to vertebrate success in relatively dry environments?",
            "a": [
                {"option": "the amniotic egg", "correct":true},
                {"option": "the ability to maintain a constant body temperature", "correct":false},
                {"option": "two pairs of appendages", "correct":false},
                {"option": "claws", "correct":false},
                {"option": "a four-chambered heart", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following are the only surviving animals that descended directly from dinosaurs?",
            "a": [
                {"option": "lizards", "correct":false},
                {"option": "crocodiles", "correct":false},
                {"option": "snakes", "correct":false},
                {"option": "birds", "correct":true},
                {"option": "mammals", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "During chordate evolution, what is the sequence (from earliest to most recent) in which the following structures arose?<br>1. amniotic egg<br>2. paired fins<br>3. jaws<br>4. swim bladder<br>5. four-chambered heart",
            "a": [
                {"option": "2, 3, 4, 1, 5", "correct":true},
                {"option": "3, 2, 4, 1, 5", "correct":false},
                {"option": "3, 2, 1, 4, 5", "correct":false},
                {"option": "2, 1, 4, 3, 5", "correct":false},
                {"option": "2, 4, 3, 1, 5", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Among vertebrates, a sheet of muscle called the diaphragm is found in",
            "a": [
                {"option": "birds.", "correct":false},
                {"option": "mammals.", "correct":true},
                {"option": "nonbird reptiles.", "correct":false},
                {"option": "both A and B ", "correct":false},
                {"option": "A, B, and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is one unique characteristic that distinguishes birds from other vertebrates?",
            "a": [
                {"option": "a hinged jaw", "correct":false},
                {"option": "feathers", "correct":true},
                {"option": "an amniotic egg", "correct":false},
                {"option": "flight", "correct":false},
                {"option": "a four-chambered heart", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Vertebrates and tunicates share",
            "a": [
                {"option": "jaws adapted for feeding.", "correct":false},
                {"option": "a high degree of cephalization.", "correct":false},
                {"option": "the formation of structures from the neural crest. ", "correct":false},
                {"option": "an endoskeleton that includes a skull.", "correct":false},
                {"option": "a notochord and a dorsal, hollow nerve cord.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
    ]
};
