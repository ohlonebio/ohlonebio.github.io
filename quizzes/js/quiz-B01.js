// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Evolution & Natural Selection",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Which of the events described below agrees with the idea of catastrophism?",
            "a": [
                {"option": "The gradual uplift of the Himalayas by the collision of the Australian crustal plate with the Eurasian crustal plate", "correct":false},
                {"option": "The formation of the Grand Canyon by the Colorado River over millions of years", "correct":false},
                {"option": "The gradual deposition of sediments many kilometers thick on the floors of seas and oceans", "correct":false},
                {"option": "The sudden demise of the dinosaurs, and various other groups, by the impact of a large extraterrestrial body with Earth", "correct":true},
                {"option": "The development of the Galapagos Islands from underwater seamounts over millions of years", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In the mid-1900s, the Soviet geneticist Lysenko believed that his winter wheat plants, exposed to ever-colder temperatures, would eventually give rise to ever more cold-tolerant winter wheat. Lysenkoʹs attempts in this regard were most in agreement with the ideas of",
            "a": [
                {"option": "Cuvier. ", "correct":false},
                {"option": "Hutton. ", "correct":false},
                {"option": "Lamarck. ", "correct":true},
                {"option": "Darwin. ", "correct":false},
                {"option": "Plato.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "As a young biologist, Charles Darwin had expected the living plants of temperate South America would resemble those of temperate Europe, but he was surprised to find that they more closely resembled the plants of tropical South America. The biological explanation for this observation is most properly associated with the field of",
            "a": [
                {"option": "meteorology. ", "correct":false},
                {"option": "embryology.", "correct":false},
                {"option": "vertebrate anatomy. ", "correct":false},
                {"option": "bioengineering.", "correct":false},
                {"option": "biogeography.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Natural selection is based on all of the following except",
            "a": [
                {"option": "genetic variation exists within populations.", "correct":false},
                {"option": "the best-adapted individuals tend to leave the most offspring.", "correct":false},
                {"option": "individuals who survive longer tend to leave more offspring than those who die young.", "correct":false},
                {"option": "populations tend to produce more individuals than the environment can support.", "correct":false},
                {"option": "individuals adapt to their environments and, thereby, evolve.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which statement about natural selection is most correct?",
            "a": [
                {"option": "Adaptations beneficial in one habitat should generally be beneficial in all other habitats as well.", "correct":false},
                {"option": "Different species that occupy the same habitat will adapt to that habitat by undergoing the same genetic changes.", "correct":false},
                {"option": "Adaptations beneficial at one time should generally be beneficial during all other times as well.", "correct":false},
                {"option": "Well-adapted individuals leave more offspring, and thus contribute more to the next generationʹs gene pool, than do poorly adapted individuals.", "correct":true},
                {"option": "Natural selection is the sole means by which populations can evolve.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Given a population that contains genetic variation, what is the correct sequence of the following events, under the influence of natural selection?<br>1. Well-adapted individuals leave more offspring than do poorly adapted individuals.<br>2. A change occurs in the environment.<br>3. Genetic frequencies within the population change.<br>4. Poorly adapted individuals have decreased survivorship.",
            "a": [
                {"option": "2 → 4 → 1 → 3", "correct":true},
                {"option": "4 → 2 → 1 → 3", "correct":false},
                {"option": "4 → 1 → 2 → 3", "correct":false},
                {"option": "4 → 2 → 3 → 1", "correct":false},
                {"option": "2 → 4 → 3 → 1", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "During drought years on the Galapagos, small, easily eaten seeds become rare, leaving mostly large, hard-cased seeds that only birds with large beaks can eat. If a drought persists for several years, what should one expect to result from natural selection?",
            "a": [
                {"option": "Small birds gaining larger beaks by exercising their mouth parts.", "correct":false},
                {"option": "Small birds mutating their beak genes with the result that later-generation offspring have larger beaks.", "correct":false},
                {"option": "Small birds anticipating the long drought and eating more to gain weight and, consequently, growing larger beaks.", "correct":false},
                {"option": "More small-beaked birds dying than larger-beaked birds. The offspring produced in subsequent generations have a higher percentage of birds with large beaks.", "correct":true},
                {"option": "Larger birds eating less so smaller birds can survive. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following statements is an inference of natural selection?",
            "a": [
                {"option": "Subsequent generations of a population should have greater proportions of individuals that possess traits better suited for success in unchanging environments. ", "correct":true},
                {"option": "An individual organism undergoes evolution over the course of its lifetime.", "correct":false},
                {"option": "Habitats do not generally have unlimited resources.", "correct":false},
                {"option": "Natural populations tend to reproduce to their full biological potential.", "correct":false},
                {"option": "Some of the variation that exists among individuals in a population is genetic.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following must exist in a population before natural selection can act upon that population?",
            "a": [
                {"option": "Genetic variation among individuals", "correct":true},
                {"option": "Variation among individuals caused by environmental factors", "correct":false},
                {"option": "Sexual reproduction", "correct":false},
                {"option": "B and C only", "correct":false},
                {"option": "A, B, and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which statement best describes the evolution of pesticide resistance in a population of insects?",
            "a": [
                {"option": "Individual members of the population slowly adapt to the presence of the chemical by striving to meet the new challenge.", "correct":false},
                {"option": "All insects exposed to the insecticide begin to use a formerly silent gene to make a new enzyme that breaks down the insecticide molecules.", "correct":false},
                {"option": "Insects observe the behavior of other insects that survive pesticide application, and adjust their own behaviors to copy those of the survivors.", "correct":false},
                {"option": "Offspring of insects that are genetically resistant to the pesticide become more abundant as the susceptible insects die off.", "correct":true}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Structures as different as human arms, bat wings, and dolphin flippers contain many of the same bones, these bones having developed from very similar embryonic tissues. How do biologists interpret these similarities?",
            "a": [
                {"option": "By identifying the bones as being homologous", "correct":false},
                {"option": "By the principle of convergent evolution", "correct":false},
                {"option": "By proposing that humans, bats, and dolphins share a common ancestor", "correct":false},
                {"option": "A and C only", "correct":true},
                {"option": "A, B, and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Members of two different species possess a similar-looking structure that they use in a similar fashion to perform the same function. Which information would best help distinguish between an explanation based on homology versus one based on convergent evolution?",
            "a": [
                {"option": "The two species live at great distance from each other.", "correct":false},
                {"option": "The two species share many proteins in common, and the nucleotide sequences that code for these proteins are almost identical.", "correct":true},
                {"option": "The sizes of the structures in adult members of both species are similar in size. ", "correct":false},
                {"option": "Both species are well adapted to their particular environments.", "correct":false},
                {"option": "Both species reproduce sexually.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Ichthyosaurs were aquatic dinosaurs. Fossils show us that they had dorsal fins and tails, as do fish, even though their closest relatives were terrestrial reptiles that had neither dorsal fins nor aquatic tails. The dorsal fins and tails of ichthyosaurs and fish are",
            "a": [
                {"option": "homologous.", "correct":false},
                {"option": "examples of convergent evolution.", "correct":false},
                {"option": "adaptations to a common environment.", "correct":false},
                {"option": "A and C only", "correct":false},
                {"option": "B and C only", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "It has been observed that organisms on islands are different from, but closely related to, similar forms found on the nearest continent. This is taken as evidence that",
            "a": [
                {"option": "island forms and mainland forms descended from common ancestors. ", "correct":true},
                {"option": "common environments are inhabited by the same organisms.", "correct":false},
                {"option": "the islands were originally part of the continent.", "correct":false},
                {"option": "the island forms and mainland forms are converging.", "correct":false},
                {"option": "island forms and mainland forms have identical gene pools.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is not an observation or inference on which natural selection is based?",
            "a": [
                {"option": "There is heritable variation among individuals.", "correct":false},
                {"option": "Poorly adapted individuals never produce offspring.", "correct":true},
                {"option": "Species produce more offspring than the environment can support.", "correct":false},
                {"option": "Individuals whose characteristics are best suited to the environment generally leave more offspring than those whose characteristics are less suited.", "correct":false},
                {"option": "Only a fraction of the offspring produced by an individual may survive.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following observations helped Darwin shape his concept of descent with modification?",
            "a": [
                {"option": "Species diversity declines farther from the equator.", "correct":false},
                {"option": "Fewer species live on islands than on the nearest continents.", "correct":false},
                {"option": "Birds can be found on islands located farther from the mainland than the birdsʹ maximum nonstop flight distance.", "correct":false},
                {"option": "South American temperate plants are more similar to the tropical plants of South America than to the temperate plants of Europe.", "correct":true},
                {"option": "Earthquakes reshape life by causing mass extinctions.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "DNA sequences in many human genes are very similar to the sequences of corresponding genes in chimpanzees. The most likely explanation for this result is that",
            "a": [
                {"option": "humans and chimpanzees share a relatively recent common ancestor. ", "correct":true},
                {"option": "humans evolved from chimpanzees.", "correct":false},
                {"option": "chimpanzees evolved from humans.", "correct":false},
                {"option": "convergent evolution led to the DNA similarities.", "correct":false},
                {"option": "humans and chimpanzees are not closely related.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following pairs of structures is least likely to represent homology?",
            "a": [
                {"option": "The wings of a bat and the arms of a human", "correct":false},
                {"option": "The hemoglobin of a baboon and that of a gorilla", "correct":false},
                {"option": "The mitochondria of a plant and those of an animal", "correct":false},
                {"option": "The wings of a bird and those of an insect", "correct":true},
                {"option": "The brain of a cat and that of a dog", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of these is a statement that Darwin would have rejected?",
            "a": [
                {"option": "Environmental change plays a role in evolution.", "correct":false},
                {"option": "The smallest entity that can evolve is an individual organism.", "correct":true},
                {"option": "Individuals can acquire new characteristics as they respond to new environments or situations.", "correct":false},
                {"option": "Inherited variation in a population is a necessary precondition for natural selection to operate.", "correct":false},
                {"option": "Natural populations tend to produce more offspring than the environment can support.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of these is the smallest unit upon which natural selection directly acts?",
            "a": [
                {"option": "a speciesʹ gene frequency", "correct":false},
                {"option": "a populationʹs gene frequency", "correct":false},
                {"option": "an individualʹs genome", "correct":false},
                {"option": "an individualʹs genotype", "correct":false},
                {"option": "an individualʹs phenotype", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of these is the smallest unit that natural selection can change?",
            "a": [
                {"option": "a speciesʹ gene frequency", "correct":false},
                {"option": "a populationʹs gene frequency", "correct":true},
                {"option": "an individualʹs genome ", "correct":false},
                {"option": "an individualʹs genotype ", "correct":false},
                {"option": "an individualʹs phenotype", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Each of the following has a better chance of influencing gene frequencies in small populations than in large populations, but which one most consistently requires a small population as a precondition for its occurrence?",
            "a": [
                {"option": "Mutation", "correct":false},
                {"option": "Non-random mating", "correct":false},
                {"option": "Genetic drift", "correct":true},
                {"option": "Natural selection", "correct":false},
                {"option": "Gene flow", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A trend toward the decrease in the size of plants on the slopes of mountains as altitudes increase is an example of",
            "a": [
                {"option": "a cline.", "correct":true},
                {"option": "a bottleneck.", "correct":false},
                {"option": "relative fitness. ", "correct":false},
                {"option": "genetic drift.", "correct":false},
                {"option": "geographic variation.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In a hypothetical populationʹs gene pool, an autosomal gene, which had previously been fixed, undergoes a mutation that introduces a new allele, one inherited according to incomplete dominance. Natural selection then causes stabilizing selection at this locus. Consequently, what should happen over the course of many generations?",
            "a": [
                {"option": "The proportions of both types of homozygote should decrease.", "correct":false},
                {"option": "The proportion of the population that is heterozygous at this locus should remain constant.", "correct":false},
                {"option": "The populationʹs average heterozygosity should increase. ", "correct":false},
                {"option": "Both A and B", "correct":false},
                {"option": "Both A and C", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which is a true statement concerning genetic variation?",
            "a": [
                {"option": "It is created by the direct action of natural selection.", "correct":false},
                {"option": "It arises in response to changes in the environment.", "correct":false},
                {"option": "It must be present in a population before natural selection can act upon the population.", "correct":true},
                {"option": "It tends to be reduced by the processes involved when diploid organisms produce gametes.", "correct":false},
                {"option": "A population that has a higher average heterozygosity has less genetic variation than one with a larger average heterozygosity.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In a Hardy-Weinberg population with two alleles, A and a, that are in equilibrium, the frequency of the allele a is 0.4. What is the percentage of the population that is homozygous for this allele?",
            "a": [
                {"option": "4", "correct":false},
                {"option": "16", "correct":true},
                {"option": "32", "correct":false},
                {"option": "36", "correct":false},
                {"option": "40", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In a Hardy-Weinberg population with two alleles, A and a, that are in equilibrium, the frequency of allele a is 0.1. What is the percentage of the population that is heterozygous for this allele?",
            "a": [
                {"option": "90", "correct":false},
                {"option": "81", "correct":false},
                {"option": "49", "correct":false},
                {"option": "18", "correct":true},
                {"option": "10", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In a Hardy-Weinberg population with two alleles, A and a, that are in equilibrium, the frequency of allele a is 0.2. What is the frequency of individuals with Aa genotype?",
            "a": [
                {"option": "0.20", "correct":false},
                {"option": "0.32", "correct":true},
                {"option": "0.42", "correct":false},
                {"option": "0.80", "correct":false},
                {"option": "Genotype frequency cannot be determined from the information provided.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In a hypothetical population of 1,000 people, tests of blood-type genes show that 160 have the genotype AA, 480 have the genotype AB, and 360 have the genotype BB. What is the frequency of the B allele?",
            "a": [
                {"option": "0.01", "correct":false},
                {"option": "0.02", "correct":false},
                {"option": "0.10", "correct":false},
                {"option": "0.40", "correct":false},
                {"option": "0.60", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In a hypothetical population of 1,000 people, tests of blood-type genes show that 160 have the genotype AA, 480 have the genotype AB, and 360 have the genotype BB. If there are 4,000 children born to this generation, how many would be expected to have AB blood under the conditions of Hardy-Weinberg equilibrium?",
            "a": [
                {"option": "100", "correct":false},
                {"option": "960", "correct":false},
                {"option": "1,920", "correct":true},
                {"option": "2,000", "correct":false},
                {"option": "2,400", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In peas, a gene controls flower color such that R = purple and r = white. In an isolated pea patch, there are 36 purple-flowering plants and 64 white-flowering plants. Assuming Hardy-Weinberg equilibrium, what is the value of q for this population?",
            "a": [
                {"option": "0.36", "correct":false},
                {"option": "0.60", "correct":false},
                {"option": "0.64", "correct":false},
                {"option": "0.75", "correct":false},
                {"option": "0.80", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In the year 2500, five male space colonists and five female space colonists (all unrelated to each other) settle on an uninhabited Earthlike planet in the Andromeda galaxy. The colonists and their offspring randomly mate for generations. All ten of the original colonists had free earlobes, and two were heterozygous for that trait. The allele for free earlobes is dominant to the allele for attached earlobes. Which of these is closest to the allele frequency in the founding population?",
            "a": [
                {"option": "0.1 a, 0.9 A", "correct":true},
                {"option": "0.2 a, 0.8 A ", "correct":false},
                {"option": "0.5 a, 0.5 A ", "correct":false},
                {"option": "0.8 a, 0.2 A ", "correct":false},
                {"option": "0.4 a, 0.6 A", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In the year 2500, five male space colonists and five female space colonists (all unrelated to each other) settle on an uninhabited Earthlike planet in the Andromeda galaxy. The colonists and their offspring randomly mate for generations. All ten of the original colonists had free earlobes, and two were heterozygous for that trait. The allele for free earlobes is dominant to the allele for attached earlobes. If one assumes that Hardy-Weinberg equilibrium applies to the population of colonists on this planet, about how many people will have attached earlobes when the planetʹs population reaches 10,000?",
            "a": [
                {"option": "100", "correct":true},
                {"option": "400", "correct":false},
                {"option": "800", "correct":false},
                {"option": "1,000", "correct":false},
                {"option": "10,000", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "You are studying three populations of birds. Population A has ten birds, of which one is brown (a recessive trait) and nine are red. Population B has 100 birds, of which ten are brown. Population C has 30 birds, and three of them are brown. In which population is the frequency of the allele for brown feathers highest?",
            "a": [
                {"option": "Population A.", "correct":false},
                {"option": "Population B. ", "correct":false},
                {"option": "Population C.", "correct":false},
                {"option": "They are all the same.", "correct":true},
                {"option": "It is impossible to tell from the information given.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "You are studying three populations of birds. Population A has ten birds, of which one is brown (a recessive trait) and nine are red. Population B has 100 birds, of which ten are brown. Population C has 30 birds, and three of them are brown. In which population would it be least likely that an accident would significantly alter the frequency of the brown allele?",
            "a": [
                {"option": "Population A. ", "correct":false},
                {"option": "Population B. ", "correct":true},
                {"option": "Population C.", "correct":false},
                {"option": "They are all the same.", "correct":false},
                {"option": "It is impossible to tell from the information given.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "You are studying three populations of birds. Population A has ten birds, of which one is brown (a recessive trait) and nine are red. Population B has 100 birds, of which ten are brown. Population C has 30 birds, and three of them are brown. Which population is most likely to be subject to the bottleneck effect?",
            "a": [
                {"option": "Population A. ", "correct":true},
                {"option": "Population B. ", "correct":false},
                {"option": "Population C.", "correct":false},
                {"option": "They are all the same.", "correct":false},
                {"option": "It is impossible to tell from the information given.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Over time, the movement of people on Earth has steadily increased. This has altered the course of human evolution by increasing",
            "a": [
                {"option": "non-random mating. ", "correct":false},
                {"option": "geographic isolation. ", "correct":false},
                {"option": "genetic drift.", "correct":false},
                {"option": "mutations.", "correct":false},
                {"option": "gene flow.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Gene flow is a concept best used to describe an exchange between",
            "a": [
                {"option": "species.", "correct":false},
                {"option": "males and females. ", "correct":false},
                {"option": "populations.", "correct":true},
                {"option": "individuals.", "correct":false},
                {"option": "chromosomes.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The restriction enzymes of bacteria protect the bacteria from successful attack by bacteriophages, whose genomes can be degraded by the restriction enzymes. The bacterial genomes are not vulnerable to these restriction enzymes because bacterial DNA is methylated. This situation selects for bacteriophages whose genomes are also methylated. As new strains of resistant bacteriophages become more prevalent, this in turn selects for bacteria whose genomes are not methylated and whose restriction enzymes instead degrade methylated DNA. The outcome of the conflict between bacteria and bacteriophage at any point in time results from",
            "a": [
                {"option": "frequency-dependent selection. ", "correct":true},
                {"option": "evolutionary imbalance.", "correct":false},
                {"option": "heterozygote advantage. ", "correct":false},
                {"option": "neutral variation.", "correct":false},
                {"option": "genetic variation being preserved by diploidy. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The restriction enzymes of bacteria protect the bacteria from successful attack by bacteriophages, whose genomes can be degraded by the restriction enzymes. The bacterial genomes are not vulnerable to these restriction enzymes because bacterial DNA is methylated. This situation selects for bacteriophages whose genomes are also methylated. As new strains of resistant bacteriophages become more prevalent, this in turn selects for bacteria whose genomes are not methylated and whose restriction enzymes instead degrade methylated DNA. Over the course of evolutionary time, what should occur?",
            "a": [
                {"option": "Methylated DNA should become fixed in the gene pools of bacterial species.", "correct":false},
                {"option": "Nonmethylated DNA should become fixed in the gene pools of bacteriophages. ", "correct":false},
                {"option": "Methylated DNA should become fixed in the gene pools of bacteriophages.", "correct":false},
                {"option": "Methylated and nonmethylated strains should be maintained among both bacteria and bacteriophages, with ratios that vary over time.", "correct":true},
                {"option": "Both A and B are correct.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In the wild, male house finches (Carpodus mexicanus) vary considerably in the amount of red pigmentation in their head and throat feathers, with colors ranging from pale yellow to bright red. These colors come from carotenoid pigments that are found in the birdsʹ diets; no vertebrates are known to synthesize carotenoid pigments. Thus, the brighter red the maleʹs feathers are, the more successful he has been at acquiring the red carotenoid pigment by his food-gathering efforts (all other factors being equal). During breeding season, one should expect female house finches to prefer to mate with males with the brightest red feathers. Which of the following is true of this situation?",
            "a": [
                {"option": "Alleles that promote more efficient acquisition of carotenoid-containing foods by males should increase over the course of generations.", "correct":false},
                {"option": "Alleles that promote more effective deposition of carotenoid pigments in the feathers of males should increase over the course of generations.", "correct":false},
                {"option": "There should be directional selection for bright red feathers in males.", "correct":false},
                {"option": "All three of these. ", "correct":true},
                {"option": "Only B and C.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The Darwinian fitness of an individual is measured most directly by",
            "a": [
                {"option": "the number of its offspring that survive to reproduce. ", "correct":true},
                {"option": "the number of ʺgood genesʺ it possesses.", "correct":false},
                {"option": "the number of mates it attracts. ", "correct":false},
                {"option": "its physical strength.", "correct":false},
                {"option": "how long it lives.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "When we say that an individual organism has a greater fitness than another individual, we specifically mean that the organism",
            "a": [
                {"option": "lives longer than others of its species.", "correct":false},
                {"option": "competes for resources more successfully than others of its species.", "correct":false},
                {"option": "mates more frequently than others of its species.", "correct":false},
                {"option": "utilizes resources more efficiently than other species occupying similar niches.", "correct":false},
                {"option": "leaves more viable offspring than others of its species.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Most Swiss starlings produce four to five eggs in each clutch. Those producing fewer or more than this have reduced fitness. Which of the following terms best describes this?",
            "a": [
                {"option": "artificial selection", "correct":false},
                {"option": "directional selection", "correct":false},
                {"option": "stabilizing selection ", "correct":true},
                {"option": "disruptive selection ", "correct":false},
                {"option": "sexual selection", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Fossil evidence indicates that horses have gradually increased in size over geologic time. Which of the following terms best describes this?",
            "a": [
                {"option": "artificial selection", "correct":false},
                {"option": "directional selection", "correct":true},
                {"option": "stabilizing selection ", "correct":false},
                {"option": "disruptive selection ", "correct":false},
                {"option": "sexual selection", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A certain species of land snail exists as either a cream color or a solid brown color. Intermediate individuals are relatively rare. Which of the following terms best describes this?",
            "a": [
                {"option": "artificial selection", "correct":false},
                {"option": "directional selection ", "correct":false},
                {"option": "stabilizing selection ", "correct":false},
                {"option": "disruptive selection ", "correct":true},
                {"option": "sexual selection", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The recessive allele that causes phenylketonuria (PKU) is harmful, except when an infantʹs diet lacks the amino acid, phenylalanine. What maintains the presence of this harmful allele in a populationʹs gene pool?",
            "a": [
                {"option": "heterozygote advantage", "correct":false},
                {"option": "stabilizing selection", "correct":false},
                {"option": "diploidy", "correct":true},
                {"option": "balancing selection", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In seedcracker finches from Cameroon, small- and large-billed birds specialize in cracking soft and hard seeds, respectively. If long-term climatic change resulted in all seeds becoming hard, what type of selection would then operate on the finch population?",
            "a": [
                {"option": "disruptive selection", "correct":false},
                {"option": "directional selection ", "correct":true},
                {"option": "stabilizing selection ", "correct":false},
                {"option": "sexual selection", "correct":false},
                {"option": "No selection would operate because the population is in Hardy-Weinberg equilibrium.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Male satin bowerbirds adorn structures that they build, called ʺbowers,ʺ with parrot feathers, flowers, and other bizarre ornaments in order to attract females. Females inspect the bowers and, if suitably impressed, allow males to mate with them. The evolution of this male behavior is due to",
            "a": [
                {"option": "frequency-dependent selection. ", "correct":false},
                {"option": "artificial selection.", "correct":false},
                {"option": "sexual selection. ", "correct":true},
                {"option": "natural selection.", "correct":false},
                {"option": "disruptive selection.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "When imbalances occur in the sex ratio of sexual species that have two sexes (i.e., other than a 50:50 ratio), the members of the minority sex often receive a greater proportion of care and resources from parents than do the offspring of the majority sex. This is most clearly an example of",
            "a": [
                {"option": "sexual selection.", "correct":false},
                {"option": "disruptive selection.", "correct":false},
                {"option": "balancing selection. ", "correct":false},
                {"option": "stabilizing selection.", "correct":false},
                {"option": "frequency-dependent selection. ", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A fruit fly population has a gene with two alleles, A1 and A2. Tests show that 70% of the gametes produced in the population contain the A1 allele. If the population is in Hardy-Weinberg equilibrium, what proportion of the flies carry both A1 and A2?",
            "a": [
                {"option": "0.7", "correct":false},
                {"option": "0.49", "correct":false},
                {"option": "0.21", "correct":false},
                {"option": "0.42", "correct":true},
                {"option": "0.09", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Sparrows with average-sized wings survive severe storms better than those with longer or shorter wings, illustrating",
            "a": [
                {"option": "the bottleneck effect. ", "correct":false},
                {"option": "stabilizing selection.", "correct":true},
                {"option": "frequency-dependent selection. ", "correct":false},
                {"option": "neutral variation.", "correct":false},
                {"option": "disruptive selection. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
    ]
};
