// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Chromosomal Basis of Inheritance",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Males are more often affected by sex-linked traits than females because",
            "a": [
                {"option": "males are hemizygous for the X chromosome.", "correct":true},
                {"option": "male hormones such as testosterone often alter the effects of mutations on the X chromosome.", "correct":false},
                {"option": "female hormones such as estrogen often compensate for the effects of mutations on the X.", "correct":false},
                {"option": "X chromosomes in males generally have more mutations than X chromosomes in females.", "correct":false},
                {"option": "mutations on the Y chromosome often worsen the effects of X -linked mutations. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is the chromosomal system for determining sex in mammals?",
            "a": [
                {"option": "Haploid-diploid", "correct":false},
                {"option": "X-0", "correct":false},
                {"option": "X-X ", "correct":false},
                {"option": "X-Y ", "correct":true},
                {"option": "Z-W", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is the chromosomal system for sex determination in birds?",
            "a": [
                {"option": "Haploid-diploid", "correct":false},
                {"option": "X-0", "correct":false},
                {"option": "X-X", "correct":false},
                {"option": "X-Y ", "correct":false},
                {"option": "Z-W", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is the chromosomal system of sex determination in most species of ants and bees?",
            "a": [
                {"option": "Haploid-diploid", "correct":true},
                {"option": "X-0", "correct":false},
                {"option": "X-X ", "correct":false},
                {"option": "X-Y ", "correct":false},
                {"option": "Z-W", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "SRY is best described in which of the following ways?",
            "a": [
                {"option": "A gene region present on the Y chromosome that triggers male development", "correct":true},
                {"option": "A gene present on the X chromosome that triggers female development", "correct":false},
                {"option": "An autosomal gene that is required for the expression of genes on the Y chromosome ", "correct":false},
                {"option": "An autosomal gene that is required for the expression of genes on the X chromosome ", "correct":false},
                {"option": "Required for development, and males or females lacking the gene do not survive past early childhood", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In cats, black fur color is caused by an X-linked allele; the other allele at this locus causes orange color. The heterozygote is tortoiseshell. What kinds of offspring would you expect from the cross of a black female and an orange male?",
            "a": [
                {"option": "Tortoiseshell females; tortoiseshell males", "correct":false},
                {"option": "Black females; orange males", "correct":false},
                {"option": "Orange females; orange males", "correct":false},
                {"option": "Tortoiseshell females; black males", "correct":true},
                {"option": "Orange females; black males", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Red-green color blindness is a sex-linked recessive trait in humans. Two people with normal color vision have a color-blind son. What are the genotypes of the parents?",
            "a": [
                {"option": "XcXc and XcY ", "correct":false},
                {"option": "XcXc and XCY ", "correct":false},
                {"option": "XCXC and XcY ", "correct":false},
                {"option": "XCXC and XCY ", "correct":false},
                {"option": "XCXc and XCY", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Cinnabar eyes is a sex-linked recessive characteristic in fruit flies. If a female having cinnabar eyes is crossed with a wild-type male, what percentage of the F1 males will have cinnabar eyes?",
            "a": [
                {"option": "0%", "correct":false},
                {"option": "25% ", "correct":false},
                {"option": "50% ", "correct":false},
                {"option": "75% ", "correct":false},
                {"option": "100%", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In birds, sex is determined by a ZW chromosome scheme. Males are ZZ and females are ZW. A recessive lethal allele that causes death of the embryo is sometimes present on the Z chromosome in pigeons. What would be the sex ratio in the offspring of a cross between a male that is heterozygous for the lethal allele and a normal female?",
            "a": [
                {"option": "2:1 male to female ", "correct":true},
                {"option": "1:2 male to female ", "correct":false},
                {"option": "1:1 male to female ", "correct":false},
                {"option": "4:3 male to female ", "correct":false},
                {"option": "3:1 male to female", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A man who is an achondroplastic dwarf with normal vision marries a color-blind woman of normal height. The manʹs father was six feet tall, and both the womanʹs parents were of average height. Achondroplastic dwarfism is autosomal dominant, and red-green color blindness is X-linked recessive. How many of their daughters might be expected to be color-blind dwarfs?",
            "a": [
                {"option": "All", "correct":false},
                {"option": "None", "correct":true},
                {"option": "Half", "correct":false},
                {"option": "One out of four", "correct":false},
                {"option": "Three out of four", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A man who is an achondroplastic dwarf with normal vision marries a color-blind woman of normal height. The manʹs father was six feet tall, and both the womanʹs parents were of average height. Achondroplastic dwarfism is autosomal dominant, and red-green color blindness is X-linked recessive. What proportion of their sons would be color-blind and of normal height?",
            "a": [
                {"option": "All", "correct":false},
                {"option": "None", "correct":false},
                {"option": "Half", "correct":true},
                {"option": "One out of four", "correct":false},
                {"option": "Three out of four", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A man who is an achondroplastic dwarf with normal vision marries a color-blind woman of normal height. The manʹs father was six feet tall, and both the womanʹs parents were of average height. Achondroplastic dwarfism is autosomal dominant, and red-green color blindness is X-linked recessive. They have a daughter who is a dwarf with normal color vision. What is the probability that she is heterozygous for both genes?",
            "a": [
                {"option": "0", "correct":false},
                {"option": "0.25", "correct":false},
                {"option": "0.50", "correct":false},
                {"option": "0.75", "correct":false},
                {"option": "1.00", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A Barr body is normally found in the nucleus of which kind of human cell?",
            "a": [
                {"option": "Unfertilized egg cells only", "correct":false},
                {"option": "Sperm cells only", "correct":false},
                {"option": "Somatic cells of a female only", "correct":true},
                {"option": "Somatic cells of a male only", "correct":false},
                {"option": "Both male and female somatic cells", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following statements is true?",
            "a": [
                {"option": "The closer two genes are on a chromosome, the lower the probability that a crossover will occur between them.", "correct":true},
                {"option": "The observed frequency of recombination of two genes that are far apart from each other has a maximum value of 100%.", "correct":false},
                {"option": "All of the traits that Mendel studied (seed color, pod shape, flower color, and others) are due to genes linked on the same chromosome.", "correct":false},
                {"option": "Linked genes are found on different chromosomes.", "correct":false},
                {"option": "Crossing over occurs during prophase II of meiosis.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "New combinations of linked genes are due to which of the following?",
            "a": [
                {"option": "Nondisjunction", "correct":false},
                {"option": "Crossing over", "correct":true},
                {"option": "Independent assortment", "correct":false},
                {"option": "Mixing of sperm and egg", "correct":false},
                {"option": "Deletions", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What does a frequency of recombination of 50% indicate?",
            "a": [
                {"option": "The two genes are likely to be located on different chromosomes.", "correct":true},
                {"option": "All of the offspring have combinations of traits that match one of the two parents.", "correct":false},
                {"option": "The genes are located on sex chromosomes. ", "correct":false},
                {"option": "Abnormal meiosis has occurred.", "correct":false},
                {"option": "Independent assortment is hindered.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is the mechanism for the production of genetic recombinants?",
            "a": [
                {"option": "X inactivation", "correct":false},
                {"option": "Methylation of cytosine", "correct":false},
                {"option": "Crossing over and independent assortment", "correct":true},
                {"option": "Nondisjunction", "correct":false},
                {"option": "Deletions and duplications during meiosis", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The frequency of crossing over between any two linked genes will be which of the following?",
            "a": [
                {"option": "Higher if they are recessive", "correct":false},
                {"option": "Dependent on how many alleles there are ", "correct":false},
                {"option": "Determined by their relative dominance ", "correct":false},
                {"option": "The same as if they were not linked", "correct":false},
                {"option": "Proportional to the distance between them", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "If a human interphase nucleus contains three Barr bodies, it can be assumed that the person",
            "a": [
                {"option": "has hemophilia. ", "correct":false},
                {"option": "is a male.", "correct":false},
                {"option": "has four X chromosomes. ", "correct":true},
                {"option": "has Turner syndrome.", "correct":false},
                {"option": "has Down syndrome.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A cell that has 2n + 1 chromosomes is",
            "a": [
                {"option": "trisomic.", "correct":true},
                {"option": "monosomic.", "correct":false},
                {"option": "euploid.", "correct":false},
                {"option": "polyploid.", "correct":false},
                {"option": "triploid.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A nonreciprocal crossover causes which of the following products?",
            "a": [
                {"option": "Deletion only", "correct":false},
                {"option": "Duplication only", "correct":false},
                {"option": "Nondisjunction", "correct":false},
                {"option": "Deletion and duplication", "correct":true},
                {"option": "Duplication and nondisjunction", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Women with Turner syndrome have a genotype characterized as which of the following?",
            "a": [
                {"option": "aabb", "correct":false},
                {"option": "Mental retardation and short arms", "correct":false},
                {"option": "A karyotype of 45, X", "correct":true},
                {"option": "A karyotype of 47, XXX", "correct":false},
                {"option": "A deletion of the Y chromosome", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following statements describes genomic imprinting ?",
            "a": [
                {"option": "It explains cases in which the gender of the parent from whom an allele is inherited affects the expression of that allele.", "correct":true},
                {"option": "It is greatest in females because of the larger maternal contribution of cytoplasm.", "correct":false},
                {"option": "It may explain the transmission of Duchenne muscular dystrophy.", "correct":false},
                {"option": "It involves an irreversible alteration in the DNA sequence of imprinted genes.", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Genomic imprinting is generally due to the addition of methyl (-CH3) groups to C nucleotides in order to silence a given gene. If this depends on the sex of the parent who transmits the gene, which of the following must be true?",
            "a": [
                {"option": "Methylation of C is permanent in a gene.", "correct":false},
                {"option": "Genes required for early development stages must not be imprinted. ", "correct":false},
                {"option": "Methylation of this kind must occur more in males than in females. ", "correct":false},
                {"option": "Methylation must be reversible in ovarian and testicular cells.", "correct":true},
                {"option": "The imprints are transmitted only to gamete-producing cells. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
    ]
};
