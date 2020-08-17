// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Speciation & Macroevolution",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Which of the following statements about species, as defined by the biological species concept, is (are) correct?<br>I. Biological species are defined by reproductive isolation.<br>II. Biological species are the model used for grouping extinct forms of life.<br>III. The biological species is the largest unit of population in which successful reproduction is possible.",
            "a": [
                {"option": "I only ", "correct":false},
                {"option": "II only ", "correct":false},
                {"option": "I and III", "correct":true},
                {"option": "II and III", "correct":false},
                {"option": "I, II, and III", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A biologist discovers two populations of wolf spiders whose members appear identical. Members of one population are found in the leaf litter deep within the woods. Members of the other population are found in the grass at the edge of the woods. The biologist decides to designate the members of the two populations as two separate species. Which species concept is this biologist most closely utilizing?",
            "a": [
                {"option": "ecological", "correct":true},
                {"option": "biological", "correct":false},
                {"option": "morphological", "correct":false},
                {"option": "phylogenetic", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What was the species concept most used by Linnaeus?",
            "a": [
                {"option": "biological", "correct":false},
                {"option": "morphological", "correct":true},
                {"option": "ecological", "correct":false},
                {"option": "phylogenetic", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Several closely related frog species of the genus Rana are found in the forests of the southeastern United States. The species boundaries are maintained by reproductive barriers. In each case, match the various descriptions of frogs below with the appropriate reproductive barrier listed. Males of one species sing only when its predators are absent; males of another species sing only when its predators are present.",
            "a": [
                {"option": "behavioral", "correct":true},
                {"option": "gametic", "correct":false},
                {"option": "habitat", "correct":false},
                {"option": "temporal", "correct":false},
                {"option": "mechanical", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Several closely related frog species of the genus Rana are found in the forests of the southeastern United States. The species boundaries are maintained by reproductive barriers. In each case, match the various descriptions of frogs below with the appropriate reproductive barrier listed. One species lives only in tree holes; another species lives only in streams.",
            "a": [
                {"option": "behavioral", "correct":false},
                {"option": "gametic", "correct":false},
                {"option": "habitat", "correct":true},
                {"option": "temporal", "correct":false},
                {"option": "mechanical", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Several closely related frog species of the genus Rana are found in the forests of the southeastern United States. The species boundaries are maintained by reproductive barriers. In each case, match the various descriptions of frogs below with the appropriate reproductive barrier listed. Females of one species choose mates based on song quality; females of another species choose mates on the basis of size.",
            "a": [
                {"option": "behavioral", "correct":true},
                {"option": "gametic", "correct":false},
                {"option": "habitat", "correct":false},
                {"option": "temporal", "correct":false},
                {"option": "mechanical", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Several closely related frog species of the genus Rana are found in the forests of the southeastern United States. The species boundaries are maintained by reproductive barriers. In each case, match the various descriptions of frogs below with the appropriate reproductive barrier listed. One species mates at the season when daylight is increasing from 13 hours to 13 hours, 15 minutes; another species mates at the season when daylight is increasing from 14 hours to 14 hours, 15 minutes.",
            "a": [
                {"option": "behavioral", "correct":false},
                {"option": "gametic", "correct":false},
                {"option": "habitat", "correct":false},
                {"option": "temporal", "correct":true},
                {"option": "mechanical", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Several closely related frog species of the genus Rana are found in the forests of the southeastern United States. The species boundaries are maintained by reproductive barriers. In each case, match the various descriptions of frogs below with the appropriate reproductive barrier listed. Males of one species are too small to perform amplexus (an action that stimulates ovulation) with females of all other species.",
            "a": [
                {"option": "behavioral", "correct":false},
                {"option": "gametic", "correct":false},
                {"option": "habitat", "correct":false},
                {"option": "temporal", "correct":false},
                {"option": "mechanical", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Dog breeders maintain the purity of breeds by keeping dogs of different breeds apart when they are fertile. This kind of isolation is most similar to which of the following reproductive isolating mechanisms?",
            "a": [
                {"option": "reduced hybrid fertility", "correct":false},
                {"option": "hybrid breakdown", "correct":false},
                {"option": "mechanical isolation", "correct":false},
                {"option": "habitat isolation", "correct":true},
                {"option": "gametic isolation", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Two species of frogs belonging to the same genus occasionally mate, but the offspring fail to develop and hatch. What is the mechanism for keeping the two frog species separate?",
            "a": [
                {"option": "reduced hybrid viability ", "correct":true},
                {"option": "reduced hybrid fertility", "correct":false},
                {"option": "hybrid breakdown ", "correct":false},
                {"option": "gametic isolation", "correct":false},
                {"option": "adaptation", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In a hypothetical situation, a certain species of flea feeds only on pronghorn antelopes. In rangelands of the western United States, pronghorns and cattle often associate with one another. If some of these fleas develop a strong preference, instead, for cattle blood and mate only with fleas that, likewise, prefer cattle blood, then over time which of these should occur, if the host mammal can be considered as the fleasʹ habitat?<br>1. reproductive isolation<br>2. sympatric speciation<br>3. habitat isolation<br>4. prezygotic barriers",
            "a": [
                {"option": "1 only", "correct":false},
                {"option": "2 and 3", "correct":false},
                {"option": "1, 2, and 3", "correct":false},
                {"option": "2, 3, and 4", "correct":false},
                {"option": "1 through 4", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A defining characteristic of allopatric speciation is",
            "a": [
                {"option": "the appearance of new species in the midst of old ones.", "correct":false},
                {"option": "asexually reproducing populations. ", "correct":false},
                {"option": "geographic isolation.", "correct":true},
                {"option": "artificial selection. ", "correct":false},
                {"option": "large populations.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "According to the concept of punctuated equilibrium, the ʺsuddenʺ appearance of a new species in the fossil record means that",
            "a": [
                {"option": "the species is now extinct.", "correct":false},
                {"option": "speciation occurred instantaneously. ", "correct":false},
                {"option": "speciation occurred in one generation.", "correct":false},
                {"option": "speciation occurred rapidly in geologic time.", "correct":true},
                {"option": "the species will consequently have a relatively short existence, compared with other species.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Bird guides once listed the myrtle warbler and Audubonʹs warbler as distinct species. Recently, these birds have been classified as eastern and western forms of a single species, the yellow-rumped warbler. Which of the following pieces of evidence, if true, would be cause for this reclassification?",
            "a": [
                {"option": "The two forms interbreed often in nature, and their offspring have good survival and reproduction.", "correct":true},
                {"option": "The two forms live in similar habitats.", "correct":false},
                {"option": "The two forms have many genes in common.", "correct":false},
                {"option": "The two forms have similar food requirements.", "correct":false},
                {"option": "The two forms are very similar in coloration.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Males of different species of the fruit fly Drosophila that live in the same parts of the Hawaiian islands have different elaborate courtship rituals that involve fighting other males and stylized movements that attract females. What type of reproductive isolation does this represent?",
            "a": [
                {"option": "habitat isolation", "correct":false},
                {"option": "temporal isolation ", "correct":false},
                {"option": "behavioral isolation ", "correct":true},
                {"option": "gametic isolation", "correct":false},
                {"option": "postzygotic barriers", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following factors would not contribute to allopatric speciation?",
            "a": [
                {"option": "A population becomes geographically isolated from the parent population. ", "correct":false},
                {"option": "The separated population is small, and genetic drift occurs.", "correct":false},
                {"option": "The isolated population is exposed to different selection pressures than the ancestral population.", "correct":false},
                {"option": "Different mutations begin to distinguish the gene pools of the separated populations. ", "correct":false},
                {"option": "Gene flow between the two populations is extensive.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Plant species A has a diploid number of 12. Plant species B has a diploid number of 16. A new species, C, arises as an allopolyploid from A and B. The diploid number for species C would probably be",
            "a": [
                {"option": "12.", "correct":false},
                {"option": "14. ", "correct":false},
                {"option": "16. ", "correct":false},
                {"option": "28. ", "correct":true},
                {"option": "56.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Some molecular data place the giant panda in the bear family (Ursidae) but place the lesser panda in the raccoon family (Procyonidae). Consequently, the morphological similarities of these two species are probably due to",
            "a": [
                {"option": "inheritance of acquired characteristics. ", "correct":false},
                {"option": "sexual selection.", "correct":false},
                {"option": "inheritance of shared derived characters. ", "correct":false},
                {"option": "possession of analogous structures.", "correct":true},
                {"option": "possession of shared primitive characters.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
    ]
};
