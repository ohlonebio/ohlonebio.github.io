// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Mendelian Genetics",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Pea plants were particularly well suited for use in Mendelʹs breeding experiments for all of the following reasons except that",
            "a": [
                {"option": "peas show easily observed variations in a number of characters, such as pea shape and flower color.", "correct":false},
                {"option": "it is possible to control matings between different pea plants.", "correct":false},
                {"option": "it is possible to obtain large numbers of progeny from any given cross.", "correct":false},
                {"option": "peas have an unusually long generation time.", "correct":true},
                {"option": "many of the observable characters that vary in pea plants are controlled by single genes.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is the difference between a monohybrid cross and a dihybrid cross?",
            "a": [
                {"option": "A monohybrid cross involves a single parent, whereas a dihybrid cross involves two parents.", "correct":false},
                {"option": "A monohybrid cross produces a single progeny, whereas a dihybrid cross produces two progeny.", "correct":false},
                {"option": "A dihybrid cross involves organisms that are heterozygous for two characters and a monohybrid only one.", "correct":true},
                {"option": "A monohybrid cross is performed for one generation, whereas a dihybrid cross is performed for two generations.", "correct":false},
                {"option": "A monohybrid cross results in a 9:3:3:1 ratio whereas a dihybrid cross gives a 3:1 ratio.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "How many unique gametes could be produced through independent assortment by an individual with the genotype AaBbCCDdEE?",
            "a": [
                {"option": "4", "correct":false},
                {"option": "8", "correct":true},
                {"option": "16", "correct":false},
                {"option": "32", "correct":false},
                {"option": "64", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Two plants are crossed, resulting in offspring with a 3:1 ratio for a particular trait. This suggests",
            "a": [
                {"option": "that the parents were true-breeding for contrasting traits. ", "correct":false},
                {"option": "incomplete dominance.", "correct":false},
                {"option": "that a blending of traits has occurred.", "correct":false},
                {"option": "that the parents were both heterozygous.", "correct":true},
                {"option": "that each offspring has the same alleles.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "It was important that Mendel examined not just the F1 generation in his breeding experiments, but the F2 generation as well, because",
            "a": [
                {"option": "he obtained very few F1 progeny, making statistical analysis difficult. ", "correct":false},
                {"option": "parental traits that were not observed in the F1 reappeared in the F2.", "correct":true},
                {"option": "analysis of the F1 progeny would have allowed him to discover the law of segregation, but not the law of independent assortment.", "correct":false},
                {"option": "the dominant phenotypes were visible in the F2 generation, but not in the F1.", "correct":false},
                {"option": "many of the F1 progeny died.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "When crossing an organism that is homozygous recessive for a single trait with a heterozygote, what is the chance of producing an offspring with the homozygous recessive phenotype?",
            "a": [
                {"option": "0%", "correct":false},
                {"option": "25% ", "correct":false},
                {"option": "50% ", "correct":true},
                {"option": "75% ", "correct":false},
                {"option": "100%", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The fact that all seven of the pea plant traits studied by Mendel obeyed the principle of independent assortment most probably indicates which of the following?",
            "a": [
                {"option": "None of the traits obeyed the law of segregation.", "correct":false},
                {"option": "The diploid number of chromosomes in the pea plants was 7.", "correct":false},
                {"option": "All of the genes controlling the traits were located on the same chromosome. ", "correct":false},
                {"option": "All of the genes controlling the traits behaved as if they were on different chromosomes.", "correct":true},
                {"option": "The formation of gametes in plants occurs by mitosis only.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Black fur in mice (B) is dominant to brown fur (b). Short tails (T) are dominant to long tails (t). What fraction of the progeny of the cross BbTt × BBtt will have black fur and long tails?",
            "a": [
                {"option": "1/16", "correct":false},
                {"option": "3/16", "correct":false},
                {"option": "3/8", "correct":false},
                {"option": "1/2", "correct":true},
                {"option": "9/16", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In certain plants, tall is dominant to short. If a heterozygous plant is crossed with a homozygous tall plant, what is the probability that the offspring will be short?",
            "a": [
                {"option": "1", "correct":false},
                {"option": "1/2", "correct":true},
                {"option": "1/4", "correct":false},
                {"option": "1/6", "correct":false},
                {"option": "0", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Two true-breeding stocks of pea plants are crossed. One parent has red, axial flowers and the other has white, terminal flowers; all F1 individuals have red, axial flowers. The genes for flower color and location assort independently. If 1,000 F2 offspring resulted from the cross, approximately how many of them would you expect to have red, terminal flowers?",
            "a": [
                {"option": "65", "correct":false},
                {"option": "190", "correct":true},
                {"option": "250", "correct":false},
                {"option": "565", "correct":false},
                {"option": "750", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In a cross AaBbCc × AaBbCc, what is the probability of producing the genotype AABBCC?",
            "a": [
                {"option": "1/4", "correct":false},
                {"option": "1/8", "correct":false},
                {"option": "1/16", "correct":false},
                {"option": "1/32", "correct":false},
                {"option": "1/64", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Given the parents AABBCc × AabbCc, assume simple dominance and independent assortment. What proportion of the progeny will be expected to phenotypically resemble the first parent?",
            "a": [
                {"option": "1/4", "correct":false},
                {"option": "1/8", "correct":false},
                {"option": "3/4", "correct":true},
                {"option": "3/8", "correct":false},
                {"option": "1", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A 1:2:1 phenotypic ratio in the F2 generation of a monohybrid cross is a sign of",
            "a": [
                {"option": "complete dominance. ", "correct":false},
                {"option": "multiple alleles.", "correct":false},
                {"option": "incomplete dominance. ", "correct":true},
                {"option": "polygenic inheritance. ", "correct":false},
                {"option": "epistasis.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In snapdragons, heterozygotes for one of the genes have pink flowers, whereas homozygotes have red or white flowers. When plants with red flowers are crossed with plants with white flowers, what proportion of the offspring will have pink flowers?",
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
            "q": "Tallness (T) in snapdragons is dominant to dwarfness (t), while red (R) flower color is dominant to white (r). The heterozygous condition results in pink (Rr) flower color. A dwarf, red snapdragon is crossed with a plant homozygous for tallness and white flowers. What are the genotype and phenotype of the F1 individuals?",
            "a": [
                {"option": "ttRr–dwarf and pink", "correct":false},
                {"option": "ttrr–dwarf and white", "correct":false},
                {"option": "TtRr–tall and red", "correct":false},
                {"option": "TtRr–tall and pink", "correct":true},
                {"option": "TTRR–tall and red", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Gene S controls the sharpness of spines in a type of cactus. Cactuses with the dominant allele, S, have sharp spines, whereas homozygous recessive ss cactuses have dull spines. At the same time, a second gene, N, determines whether cactuses have spines. Homozygous recessive nn cactuses have no spines at all. The relationship between genes S and N is an example of",
            "a": [
                {"option": "incomplete dominance. ", "correct":false},
                {"option": "epistasis.", "correct":true},
                {"option": "complete dominance. ", "correct":false},
                {"option": "pleiotropy.", "correct":false},
                {"option": "codominance.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Gene S controls the sharpness of spines in a type of cactus. Cactuses with the dominant allele, S, have sharp spines, whereas homozygous recessive ss cactuses have dull spines. At the same time, a second gene, N, determines whether cactuses have spines. Homozygous recessive nn cactuses have no spines at all. A cross between a true-breeding sharp-spined cactus and a spineless cactus would produce",
            "a": [
                {"option": "all sharp-spined progeny.", "correct":true},
                {"option": "50% sharp-spined, 50% dull-spined progeny.", "correct":false},
                {"option": "25% sharp-spined, 50% dull-spined, 25% spineless progeny", "correct":false},
                {"option": "all spineless progeny.", "correct":false},
                {"option": "It is impossible to determine the phenotypes of the progeny.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Gene S controls the sharpness of spines in a type of cactus. Cactuses with the dominant allele, S, have sharp spines, whereas homozygous recessive ss cactuses have dull spines. At the same time, a second gene, N, determines whether cactuses have spines. Homozygous recessive nn cactuses have no spines at all. If doubly heterozygous SsNn cactuses were allowed to self-pollinate, which of the following ratios would be observed in the F2 progeny?",
            "a": [
                {"option": "3 sharp-spined : 1 spineless", "correct":false},
                {"option": "1 sharp-spined : 2 dull-spined : 1 spineless", "correct":false},
                {"option": "1 sharp spined : 1 dull-spined : 1 spineless", "correct":false},
                {"option": "1 sharp-spined : 1 dull-spined", "correct":false},
                {"option": "9 sharp-spined : 3 dull-spined : 4 spineless", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Feather color in budgies is determined by two different genes Y and B, one for pigment on the outside and one for the inside of the feather. YYBB, YyBB, or YYBb is green; yyBB or yyBb is blue; YYbb or Yybb is yellow; and yybb is white. A blue budgie is crossed with a white budgie. Which of the following results is not possible?",
            "a": [
                {"option": "Green offspring only", "correct":false},
                {"option": "Yellow offspring only", "correct":false},
                {"option": "Blue offspring only", "correct":false},
                {"option": "Green and yellow offspring", "correct":true},
                {"option": "a 9:3:3:1 ratio", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Feather color in budgies is determined by two different genes Y and B, one for pigment on the outside and one for the inside of the feather. YYBB, YyBB, or YYBb is green; yyBB or yyBb is blue; YYbb or Yybb is yellow; and yybb is white. Two blue budgies were crossed. Over the years, they produced 22 offspring, 5 of which were white. What are the most likely genotypes for the two blue budgies?",
            "a": [
                {"option": "yyBB and yyBB ", "correct":false},
                {"option": "yyBB and yyBb ", "correct":false},
                {"option": "yyBb and yyBb ", "correct":true},
                {"option": "yyBB and yybb ", "correct":false},
                {"option": "yyBb and yybb", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A woman who has blood type A positive has a daughter who is type O positive and a son who is type B negative. Rh positive is a trait that shows simple dominance over Rh negative and is designated by the alleles R and r, respectively. A third gene for the MN blood group has codominant alleles M and N. Which of the following is a possible partial genotype for the son?",
            "a": [
                {"option": "I<sup>B</sup>I<sup>B</sup> ", "correct":false},
                {"option": "I<sup>B</sup>I<sup>A</sup> ", "correct":false},
                {"option": "i<sup>O</sup>i<sup>O</sup>", "correct":false},
                {"option": "I<sup>B</sup>i<sup>O</sup>", "correct":true},
                {"option": "I<sup>A</sup>I<sup>A</sup>", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A woman who has blood type A positive has a daughter who is type O positive and a son who is type B negative. Rh positive is a trait that shows simple dominance over Rh negative and is designated by the alleles R and r, respectively. A third gene for the MN blood group has codominant alleles M and N. Which of the following is a possible genotype for the mother?",
            "a": [
                {"option": "I<sup>A</sup>I<sup>A</sup>", "correct":false},
                {"option": "I<sup>B</sup>I<sup>B</sup>", "correct":false},
                {"option": "i<sup>O</sup>i<sup>O</sup>", "correct":false},
                {"option": "I<sup>A</sup>i<sup>O</sup>", "correct":true},
                {"option": "I<sup>A</sup>I<sup>B</sup>", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A woman who has blood type A positive has a daughter who is type O positive and a son who is type B negative. Rh positive is a trait that shows simple dominance over Rh negative and is designated by the alleles R and r, respectively. A third gene for the MN blood group has codominant alleles M and N. Which of the following is a possible phenotype for the father?",
            "a": [
                {"option": "A negative ", "correct":false},
                {"option": "O negative ", "correct":false},
                {"option": "B positive", "correct":true},
                {"option": "AB negative", "correct":false},
                {"option": "Impossible to determine", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A woman who has blood type A positive has a daughter who is type O positive and a son who is type B negative. Rh positive is a trait that shows simple dominance over Rh negative and is designated by the alleles R and r, respectively. A third gene for the MN blood group has codominant alleles M and N. Which of the following is the probable genotype for the mother?",
            "a": [
                {"option": "I<sup>A</sup>I<sup>A</sup> ; RR ", "correct":false},
                {"option": "I<sup>A</sup>I<sup>A</sup> ; Rr ", "correct":false},
                {"option": "I<sup>A</sup>i<sup>O</sup> ; rr", "correct":false},
                {"option": "I<sup>A</sup>i<sup>O</sup> ; Rr", "correct":true},
                {"option": "I<sup>A</sup>i<sup>O</sup> ; RR", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A woman who has blood type A positive has a daughter who is type O positive and a son who is type B negative. Rh positive is a trait that shows simple dominance over Rh negative and is designated by the alleles R and r, respectively. A third gene for the MN blood group has codominant alleles M and N. If both children are of blood group MM, which of the following is possible?",
            "a": [
                {"option": "Each parent is either M or MN.", "correct":true},
                {"option": "Each parent must be type M.", "correct":false},
                {"option": "Both children are heterozygous for this gene.", "correct":false},
                {"option": "Neither parent can have the N allele.", "correct":false},
                {"option": "The MN blood group is recessive to the ABO blood group.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which describes the ability of a single gene to have multiple phenotypic effects?",
            "a": [
                {"option": "Incomplete dominance", "correct":false},
                {"option": "Multiple alleles", "correct":false},
                {"option": "Pleiotropy", "correct":true},
                {"option": "Epistasis", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which describes the ABO blood group system?",
            "a": [
                {"option": "Incomplete dominance", "correct":false},
                {"option": "Multiple alleles", "correct":true},
                {"option": "Pleiotropy", "correct":false},
                {"option": "Epistasis", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following terms best describes when the phenotype of the heterozygote differs from the phenotypes of both homozygotes?",
            "a": [
                {"option": "Incomplete dominance", "correct":true},
                {"option": "Multiple alleles", "correct":false},
                {"option": "Pleiotropy", "correct":false},
                {"option": "Epistasis", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following provides an example of epistasis?",
            "a": [
                {"option": "Recessive genotypes for each of two genes (aabb) results in an albino corn snake.", "correct":false},
                {"option": "The allele b17 produces a dominant phenotype, although b1 through b16 do not.", "correct":false},
                {"option": "In rabbits and many other mammals, one genotype (cc) prevents any fur color from developing.", "correct":true},
                {"option": "In Drosophila (fruit flies), white eyes can be due to an X-linked gene or to a combination of other genes.", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A woman has six sons. The chance that her next child will be a daughter is",
            "a": [
                {"option": "1 ", "correct":false},
                {"option": "0", "correct":false},
                {"option": "1/2 ", "correct":true},
                {"option": "1/6 ", "correct":false},
                {"option": "5/6", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "When a disease is said to have a multifactorial basis, it means that",
            "a": [
                {"option": "both genetic and environmental factors contribute to the disease. ", "correct":true},
                {"option": "it is caused by a gene with a large number of alleles.", "correct":false},
                {"option": "it affects a large number of people. ", "correct":false},
                {"option": "it has many different symptoms.", "correct":false},
                {"option": "it tends to skip a generation.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Cystic fibrosis (CF) is a Mendelian disorder in the human population that is inherited as a recessive. Two normal parents have two children with CF. The probability of their next child being normal for this characteristic is which of the following?",
            "a": [
                {"option": "0", "correct":false},
                {"option": "1/2", "correct":false},
                {"option": "1/4", "correct":true},
                {"option": "3/4", "correct":false},
                {"option": "1/8", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
  ]
};
