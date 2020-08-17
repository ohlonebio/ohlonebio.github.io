// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Cell Cycles, Mitosis & Meiosis",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "If there are 20 chromatids in a cell during G2, how many centromeres are there?",
            "a": [
                {"option": "10", "correct":true},
                {"option": "20", "correct":false},
                {"option": "30", "correct":false},
                {"option": "40", "correct":false},
                {"option": "80", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "How do the daughter cells at the end of mitosis and cytokinesis compare with their parent cell when it was in G1 of the cell cycle?",
            "a": [
                {"option": "The daughter cells have half the amount of cytoplasm and half the amount of DNA. ", "correct":false},
                {"option": "The daughter cells have half the number of chromosomes and half the amount of DNA.", "correct":false},
                {"option": "The daughter cells have the same number of chromosomes and half the amount of DNA.", "correct":false},
                {"option": "The daughter cells have the same number of chromosomes and the same amount of DNA.", "correct":true},
                {"option": "The daughter cells have the same number of chromosomes and twice the amount of DNA.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "During which phase do centrioles begin to move apart in animal cells?",
            "a": [
                {"option": "telophase", "correct":false},
                {"option": "anaphase", "correct":false},
                {"option": "prometaphase", "correct":false},
                {"option": "metaphase", "correct":false},
                {"option": "prophase", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which phase includes the following: centromeres uncoupling, sister chromatids separating, and the two new chromosomes moving to opposite poles of the cell?",
            "a": [
                {"option": "telophase", "correct":false},
                {"option": "anaphase", "correct":true},
                {"option": "prometaphase", "correct":false},
                {"option": "metaphase", "correct":false},
                {"option": "prophase", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A cell containing 92 chromatids at metaphase of mitosis would, at its completion, produce two nuclei each containing how many chromosomes?",
            "a": [
                {"option": "12", "correct":false},
                {"option": "16", "correct":false},
                {"option": "23", "correct":false},
                {"option": "46", "correct":true},
                {"option": "92", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "If there are 20 centromeres in a cell at anaphase, how many chromosomes are there in each daughter cell following cytokinesis?",
            "a": [
                {"option": "10", "correct":false},
                {"option": "20", "correct":true},
                {"option": "30", "correct":false},
                {"option": "40", "correct":false},
                {"option": "80", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "If there are 20 chromatids in a cell at metaphase, how many chromosomes are there in each daughter cell following cytokinesis?",
            "a": [
                {"option": "10", "correct":true},
                {"option": "20", "correct":false},
                {"option": "30", "correct":false},
                {"option": "40", "correct":false},
                {"option": "80", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Where do the microtubules of the spindle originate during mitosis in both plant and animal cells?",
            "a": [
                {"option": "centromere ", "correct":false},
                {"option": "centrosome ", "correct":true},
                {"option": "centriole", "correct":false},
                {"option": "chromatid", "correct":false},
                {"option": "kinetochore", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Cytokinesis usually, but not always, follows mitosis. If a cell completed mitosis but not cytokinesis, the result would be a cell with",
            "a": [
                {"option": "a single large nucleus.", "correct":false},
                {"option": "high concentrations of actin and myosin.", "correct":false},
                {"option": "two abnormally small nuclei. ", "correct":false},
                {"option": "two nuclei.", "correct":true},
                {"option": "two nuclei but with half the amount of DNA.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The formation of a cell plate is beginning across the middle of a cell and nuclei are re-forming at opposite ends of the cell. What kind of cell is this?",
            "a": [
                {"option": "an animal cell in metaphase", "correct":false},
                {"option": "an animal cell in telophase", "correct":false},
                {"option": "an animal cell undergoing cytokinesis", "correct":false},
                {"option": "a plant cell in metaphase", "correct":false},
                {"option": "a plant cell undergoing cytokinesis", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Chromosomes first become visible during which phase of mitosis?",
            "a": [
                {"option": "prometaphase", "correct":false},
                {"option": "telophase", "correct":false},
                {"option": "prophase ", "correct":true},
                {"option": "metaphase ", "correct":false},
                {"option": "anaphase", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "During which phases of mitosis are chromosomes composed of two chromatids?",
            "a": [
                {"option": "from interphase through anaphase", "correct":false},
                {"option": "from G1 of interphase through metaphase", "correct":false},
                {"option": "from metaphase through telophase", "correct":false},
                {"option": "from anaphase through telophase", "correct":false},
                {"option": "from G2 of interphase through metaphase", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A group of cells is assayed for DNA content immediately following mitosis and is found to have an average of 8 picograms of DNA per nucleus. Those cells would have ____ picograms at the end of the S phase and ____ picograms at the end of G2.",
            "a": [
                {"option": "8; 8", "correct":false},
                {"option": "8; 16", "correct":false},
                {"option": "16; 8", "correct":false},
                {"option": "16; 16", "correct":true},
                {"option": "12; 16", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Imagine looking through a microscope at a squashed onion root tip. The chromosomes of many of the cells are plainly visible. In some cells, replicated chromosomes are aligned along the center (equator) of the cell. These particular cells are in which stage of mitosis?",
            "a": [
                {"option": "telophase ", "correct":false},
                {"option": "prophase ", "correct":false},
                {"option": "anaphase ", "correct":false},
                {"option": "metaphase", "correct":true},
                {"option": "prometaphase", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "DNA is replicated at this time of the cell cycle:",
            "a": [
                {"option": "G0", "correct":false},
                {"option": "G1", "correct":false},
                {"option": "S", "correct":true},
                {"option": "G2", "correct":false},
                {"option": "M ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Proteins that are involved in the regulation of the cell cycle, and that show fluctuations in concentration during the cell cycle, are called",
            "a": [
                {"option": "ATPases.", "correct":false},
                {"option": "kinetochores.", "correct":false},
                {"option": "centrioles.", "correct":false},
                {"option": "proton pumps.", "correct":false},
                {"option": "cyclins.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following describe(s) cyclin-dependent kinase (Cdk)?",
            "a": [
                {"option": "Cdk is inactive, or ʺturned off,ʺ in the presence of cyclin.", "correct":false},
                {"option": "Cdk is present throughout the cell cycle.", "correct":false},
                {"option": "Cdk is an enzyme that attaches phosphate groups to other proteins.", "correct":false},
                {"option": "Both A and B are true. ", "correct":false},
                {"option": "Both B and C are true.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Vinblastine is a standard chemotherapeutic drug used to treat cancer. Because it interferes with the assembly of microtubules, its effectiveness must be related to",
            "a": [
                {"option": "disruption of mitotic spindle formation.", "correct":true},
                {"option": "inhibition of regulatory protein phosphorylation. ", "correct":false},
                {"option": "suppression of cyclin production.", "correct":false},
                {"option": "myosin denaturation and inhibition of cleavage furrow formation. ", "correct":false},
                {"option": "inhibition of DNA synthesis.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In the cells of some organisms, mitosis occurs without cytokinesis. This will result in",
            "a": [
                {"option": "cells with more than one nucleus.", "correct":true},
                {"option": "cells that are unusually small. ", "correct":false},
                {"option": "cells lacking nuclei.", "correct":false},
                {"option": "destruction of chromosomes. ", "correct":false},
                {"option": "cell cycles lacking an S phase.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Asexual reproduction results in identical offspring unless which of the following occurs?",
            "a": [
                {"option": "Natural selection", "correct":false},
                {"option": "Cloning", "correct":false},
                {"option": "Crossing over", "correct":false},
                {"option": "Mutation", "correct":true},
                {"option": "Environmental change", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is true of a species that has a chromosome number of 2n = 16?",
            "a": [
                {"option": "The species is diploid with 32 chromosomes per cell.", "correct":false},
                {"option": "The species has 16 sets of chromosomes per cell.", "correct":false},
                {"option": "Each cell has 8 homologous pairs.", "correct":true},
                {"option": "During the S phase of the cell cycle there will be 32 separate chromosomes.", "correct":false},
                {"option": "A gamete from this species has 4 chromosomes.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of these statements is false?",
            "a": [
                {"option": "In humans, each of the 22 maternal autosomes has a homologous paternal chromosome.", "correct":false},
                {"option": "In humans, the 23rd pair, the sex chromosomes, determines whether the person is female (XX) or male (XY).", "correct":false},
                {"option": "Single, haploid (n) sets of chromosomes in ovum and sperm unite during fertilization, forming a diploid (2n), single-celled zygote.", "correct":false},
                {"option": "At sexual maturity, ovaries and testes produce diploid gametes by meiosis.", "correct":true},
                {"option": "Sexual life cycles differ with respect to the relative timing of meiosis and fertilization.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "After telophase I of meiosis, the chromosomal makeup of each daughter cell is",
            "a": [
                {"option": "diploid, and the chromosomes are each composed of a single chromatid. ", "correct":false},
                {"option": "diploid, and the chromosomes are each composed of two chromatids.", "correct":false},
                {"option": "haploid, and the chromosomes are each composed of a single chromatid.", "correct":false},
                {"option": "haploid, and the chromosomes are each composed of two chromatids.", "correct":true},
                {"option": "tetraploid, and the chromosomes are each composed of two chromatids.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "How do cells at the completion of meiosis compare with cells that have replicated their DNA and are just about to begin meiosis?",
            "a": [
                {"option": "They have twice the amount of cytoplasm and half the amount of DNA.", "correct":false},
                {"option": "They have half the number of chromosomes and half the amount of DNA. ", "correct":false},
                {"option": "They have the same number of chromosomes and half the amount of DNA.", "correct":false},
                {"option": "They have half the number of chromosomes and one-fourth the amount of DNA. ", "correct":true},
                {"option": "They have half the amount of cytoplasm and twice the amount of DNA.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following happens at the conclusion of meiosis I?",
            "a": [
                {"option": "Homologous chromosomes are separated.", "correct":true},
                {"option": "The chromosome number per cell is conserved. ", "correct":false},
                {"option": "Sister chromatids are separated.", "correct":false},
                {"option": "Four daughter cells are formed.", "correct":false},
                {"option": "The sperm cells elongate to form a head and a tail end.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Homologous chromosomes synapse and crossing over occurs.",
            "a": [
                {"option": "The statement is true for mitosis only", "correct":false},
                {"option": "The statement is true for meiosis I only. ", "correct":true},
                {"option": "The statement is true for meiosis II only.", "correct":false},
                {"option": "The statement is true for mitosis and meiosis I. ", "correct":false},
                {"option": "The statement is true for mitosis and meiosis II.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Chromatids are separated from each other.",
            "a": [
                {"option": "The statement is true for mitosis only.", "correct":false},
                {"option": "The statement is true for meiosis I only. ", "correct":false},
                {"option": "The statement is true for meiosis II only.", "correct":false},
                {"option": "The statement is true for mitosis and meiosis I. ", "correct":false},
                {"option": "The statement is true for mitosis and meiosis II.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Independent assortment of chromosomes occurs.",
            "a": [
                {"option": "The statement is true for mitosis only. ", "correct":false},
                {"option": "The statement is true for meiosis I only. ", "correct":true},
                {"option": "The statement is true for meiosis II only.", "correct":false},
                {"option": "The statement is true for mitosis and meiosis I.", "correct":false},
                {"option": "The statement is true for mitosis and meiosis II.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following occurs in meiosis but not in mitosis?",
            "a": [
                {"option": "Chromosome replication", "correct":false},
                {"option": "Synapsis of chromosomes", "correct":true},
                {"option": "Production of daughter cells", "correct":false},
                {"option": "Alignment of chromosomes at the equator", "correct":false},
                {"option": "Condensation of chromatin", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Whether during mitosis or meiosis, sister chromatids are held together by proteins referred to as cohesions. Such molecules must have which of the following properties?",
            "a": [
                {"option": "They must persist throughout the cell cycle.", "correct":false},
                {"option": "They must be removed before meiosis can begin.", "correct":false},
                {"option": "They must be removed before anaphase can occur. ", "correct":true},
                {"option": "They must reattach to chromosomes during G1.", "correct":false},
                {"option": "They must be intact for nuclear envelope reformation.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A tetrad includes which of the following sets of DNA strands?",
            "a": [
                {"option": "Two single-stranded chromosomes that have synapsed", "correct":false},
                {"option": "Two sets of sister chromatids that have synapsed", "correct":true},
                {"option": "Four sets of sister chromatids", "correct":false},
                {"option": "Four sets of unique chromosomes", "correct":false},
                {"option": "Eight sets of sister chromatids", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Independent assortment of chromosomes is a result of",
            "a": [
                {"option": "the random way in which each pair of homologous chromosomes lines up at the metaphase plate during meiosis I.", "correct":true},
                {"option": "the random nature of the fertilization of ova by sperm.", "correct":false},
                {"option": "the random distribution of the sister chromatids to the two daughter cells during anaphase II.", "correct":false},
                {"option": "the relatively small degree of homology shared by the X and Y chromosomes.", "correct":false},
                {"option": "All of the above", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "When pairs of homologous chromosomes separate during anaphase I,",
            "a": [
                {"option": "the maternal chromosomes all move to the same daughter cell.", "correct":false},
                {"option": "the sister chromatids remain attached to one another. ", "correct":true},
                {"option": "recombination is not yet complete.", "correct":false},
                {"option": "the chiasmata are visible under the light microscope. ", "correct":false},
                {"option": "All of the above", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A human cell containing 22 autosomes and a Y chromosome is",
            "a": [
                {"option": "a sperm. ", "correct":true},
                {"option": "an egg.", "correct":false},
                {"option": "a zygote.", "correct":false},
                {"option": "a somatic cell of a male.", "correct":false},
                {"option": "a somatic cell of a female.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Homologous chromosomes move toward opposite poles of a dividing cell during",
            "a": [
                {"option": "mitosis. ", "correct":false},
                {"option": "meiosis I. ", "correct":true},
                {"option": "meiosis II.", "correct":false},
                {"option": "fertilization.", "correct":false},
                {"option": "binary fission.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Meiosis II is similar to mitosis in that",
            "a": [
                {"option": "sister chromatids separate during anaphase.", "correct":true},
                {"option": "DNA replicates before the division. ", "correct":false},
                {"option": "the daughter cells are diploid.", "correct":false},
                {"option": "homologous chromosomes synapse. ", "correct":false},
                {"option": "the chromosome number is reduced.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
  ]
};
