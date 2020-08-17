// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "From Genes to Proteins",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Which of the following best describes the flow of information in eukaryotic cells?",
            "a": [
                {"option": "DNA → RNA → proteins ", "correct":true},
                {"option": "RNA → proteins → DNA ", "correct":false},
                {"option": "proteins → DNA → RNA ", "correct":false},
                {"option": "RNA → DNA → proteins ", "correct":false},
                {"option": "DNA → proteins → RNA", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In his transformation experiments, what did Griffith observe?",
            "a": [
                {"option": "Mutant mice were resistant to bacterial infections.", "correct":false},
                {"option": "Mixing a heat-killed pathogenic strain of bacteria with a living nonpathogenic strain can convert some of the living cells into the pathogenic form.", "correct":true},
                {"option": "Mixing a heat-killed nonpathogenic strain of bacteria with a living pathogenic strain makes the pathogenic strain nonpathogenic.", "correct":false},
                {"option": "Infecting mice with nonpathogenic strains of bacteria makes them resistant to pathogenic strains.", "correct":false},
                {"option": "Mice infected with a pathogenic strain of bacteria can spread the infection to other mice.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What does transformation involve in bacteria?",
            "a": [
                {"option": "the creation of a strand of DNA from an RNA molecule", "correct":false},
                {"option": "the creation of a strand of RNA from a DNA molecule", "correct":false},
                {"option": "the infection of cells by a phage DNA molecule", "correct":false},
                {"option": "the type of semiconservative replication shown by DNA ", "correct":false},
                {"option": "assimilation of external DNA into a cell", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The following scientists made significant contributions to our understanding of the structure and function of DNA. Place the scientistsʹ names in the correct chronological order, starting with the first scientist(s) to make a contribution.<br>I. Avery <br>II. Griffith <br>III. Hershey and Chase<br>IV. Meselson and Stahl<br>V. Watson and Crick",
            "a": [
                {"option": "V, IV, II, I, III ", "correct":false},
                {"option": "II, I, III, V, IV ", "correct":true},
                {"option": "I, II, III, V, IV ", "correct":false},
                {"option": "I, II, V, IV, III ", "correct":false},
                {"option": "II, III, IV, V, I", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In trying to determine whether DNA or protein is the genetic material, Hershey and Chase made use of which of the following facts?",
            "a": [
                {"option": "DNA contains sulfur, whereas protein does not. ", "correct":false},
                {"option": "DNA contains phosphorus, but protein does not. ", "correct":true},
                {"option": "DNA contains nitrogen, whereas protein does not.", "correct":false},
                {"option": "DNA contains purines, whereas protein includes pyrimidines.", "correct":false},
                {"option": "RNA includes ribose, while DNA includes deoxyribose sugars.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following investigators was/were responsible for the following discovery? Chemicals from heat-killed S cells were purified. The chemicals were tested for the ability to transform live R cells. The transforming agent was found to be DNA.",
            "a": [
                {"option": "Frederick Griffith", "correct":false},
                {"option": "Hershey and Chase", "correct":false},
                {"option": "Avery, et al.", "correct":true},
                {"option": "Erwin Chargaff", "correct":false},
                {"option": "Meselson and Stahl", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following investigators was/were responsible for the following discovery? Phage with labeled proteins or DNA was allowed to infect bacteria. It was shown that the DNA, but not the protein, entered the bacterial cells, and was therefore concluded to be the genetic material.",
            "a": [
                {"option": "Frederick Griffith", "correct":false},
                {"option": "Hershey and Chase", "correct":true},
                {"option": "Avery, et al.", "correct":false},
                {"option": "Erwin Chargaff", "correct":false},
                {"option": "Meselson and Stahl", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following investigators was/were responsible for the following discovery? In DNA from any species, the amount of adenine equals the amount of thymine, and the amount of guanine equals the amount of cytosine.",
            "a": [
                {"option": "Frederick Griffith", "correct":false},
                {"option": "Hershey and Chase", "correct":false},
                {"option": "Avery, et al.", "correct":false},
                {"option": "Erwin Chargaff", "correct":true},
                {"option": "Meselson and Stahl", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "When T2 phages infect bacteria and make more viruses in the presence of radioactive sulfur, what is the result?",
            "a": [
                {"option": "The viral DNA will be radioactive.", "correct":false},
                {"option": "The viral proteins will be radioactive. ", "correct":true},
                {"option": "The bacterial DNA will be radioactive. ", "correct":false},
                {"option": "both A and B", "correct":false},
                {"option": "both A and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Cytosine makes up 38% of the nucleotides in a sample of DNA from an organism. Approximately what percentage of the nucleotides in this sample will be thymine?",
            "a": [
                {"option": "12", "correct":true},
                {"option": "24", "correct":false},
                {"option": "31", "correct":false},
                {"option": "38", "correct":false},
                {"option": "It cannot be determined from the information provided.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Chargaffʹs analysis of the relative base composition of DNA was significant because he was able to show that",
            "a": [
                {"option": "the relative proportion of each of the four bases differs within individuals of a species. ", "correct":false},
                {"option": "the human genome is more complex than that of other species.", "correct":false},
                {"option": "the amount of A is always equivalent to T, and C to G.", "correct":true},
                {"option": "the amount of ribose is always equivalent to deoxyribose. ", "correct":false},
                {"option": "transformation causes protein to be brought into the cell.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What kind of chemical bond is found between paired bases of the DNA double helix?",
            "a": [
                {"option": "hydrogen bond", "correct":true},
                {"option": "ionic bond", "correct":false},
                {"option": "covalent bond", "correct":false},
                {"option": "sulfhydryl bond", "correct":false},
                {"option": "phosphate bond", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Replication in prokaryotes differs from replication in eukaryotes for which of these reasons?",
            "a": [
                {"option": "The prokaryotic chromosome has histones, whereas eukaryotic chromosomes do not. ", "correct":false},
                {"option": "Prokaryotic chromosomes have a single origin of replication, whereas eukaryotic chromosomes have many.", "correct":true},
                {"option": "The rate of elongation during DNA replication is slower in prokaryotes than in eukaryotes.", "correct":false},
                {"option": "Prokaryotes produce Okazaki fragments during DNA replication, but eukaryotes do not.", "correct":false},
                {"option": "Prokaryotes have telomeres, and eukaryotes do not.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is meant by the description ʺantiparallelʺ regarding the strands that make up DNA?",
            "a": [
                {"option": "The twisting nature of DNA creates nonparallel strands.", "correct":false},
                {"option": "The 5ʹ to 3ʹ direction of one strand runs counter to the 5ʹ to 3ʹ direction of the other strand.", "correct":true},
                {"option": "Base pairings create unequal spacing between the two DNA strands.", "correct":false},
                {"option": "One strand is positively charged and the other is negatively charged.", "correct":false},
                {"option": "One strand contains only purines and the other contains only pyrimidines.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Suppose you are provided with an actively dividing culture of E. coli bacteria to which radioactive thymine has been added. What would happen if a cell replicates once in the presence of this radioactive base?",
            "a": [
                {"option": "One of the daughter cells, but not the other, would have radioactive DNA. ", "correct":false},
                {"option": "Neither of the two daughter cells would be radioactive.", "correct":false},
                {"option": "All four bases of the DNA would be radioactive.", "correct":false},
                {"option": "Radioactive thymine would pair with nonradioactive guanine.", "correct":false},
                {"option": "DNA in both daughter cells would be radioactive.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "An Okazaki fragment has which of the following arrangements?",
            "a": [
                {"option": "primase, polymerase, ligase", "correct":false},
                {"option": "3ʹ RNA nucleotides, DNA nucleotides 5ʹ", "correct":false},
                {"option": "5ʹ RNA nucleotides, DNA nucleotides 3ʹ ", "correct":true},
                {"option": "DNA polymerase I, DNA polymerase III ", "correct":false},
                {"option": "5ʹ DNA to 3ʹ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In E. coli, there is a mutation in a gene called dnaB that alters the helicase that normally acts at the origin. Which of the following would you expect as a result of this mutation?",
            "a": [
                {"option": "No proofreading will occur.", "correct":false},
                {"option": "No replication fork will be formed.", "correct":true},
                {"option": "The DNA will supercoil.", "correct":false},
                {"option": "Replication will occur via RNA polymerase alone.", "correct":false},
                {"option": "Replication will require a DNA template from another source.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which enzyme catalyzes the elongation of a DNA strand in the 5ʹ → 3ʹ direction?",
            "a": [
                {"option": "primase", "correct":false},
                {"option": "DNA ligase", "correct":false},
                {"option": "DNA polymerase", "correct":true},
                {"option": "topoisomerase", "correct":false},
                {"option": "helicase", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What determines the nucleotide sequence of the newly synthesized strand during DNA replication?",
            "a": [
                {"option": "the particular DNA polymerase catalyzing the reaction", "correct":false},
                {"option": "the relative amounts of the four nucleoside triphosphates in the cell", "correct":false},
                {"option": "the nucleotide sequence of the template strand", "correct":true},
                {"option": "the primase used in the reaction", "correct":false},
                {"option": "the arrangement of histones in the sugar phosphate backbone", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "You briefly expose bacteria undergoing DNA replication to radioactively labeled nucleotides. When you centrifuge the DNA isolated from the bacteria, the DNA separates into two classes. One class of labeled DNA includes very large molecules (thousands or even millions of nucleotides long), and the other includes short stretches of DNA (several hundred to a few thousand nucleotides in length). These two classes of DNA probably represent",
            "a": [
                {"option": "leading strands and Okazaki fragments. ", "correct":true},
                {"option": "lagging strands and Okazaki fragments. ", "correct":false},
                {"option": "Okazaki fragments and RNA primers. ", "correct":false},
                {"option": "leading strands and RNA primers.", "correct":false},
                {"option": "RNA primers and mitochondrial DNA.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following removes the RNA nucleotides from the primer and adds equivalent DNA nucleotides to the 3ʹ end of Okazaki fragments?",
            "a": [
                {"option": "helicase", "correct":false},
                {"option": "exonuclease", "correct":false},
                {"option": "ligase", "correct":false},
                {"option": "DNA polymerase", "correct":true},
                {"option": "primase", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following separates the DNA strands during replication?",
            "a": [
                {"option": "helicase", "correct":true},
                {"option": "exonuclease", "correct":false},
                {"option": "ligase", "correct":false},
                {"option": "DNA polymerase", "correct":false},
                {"option": "primase", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following covalently connects segments of DNA?",
            "a": [
                {"option": "helicase", "correct":false},
                {"option": "exonuclease", "correct":false},
                {"option": "ligase", "correct":true},
                {"option": "DNA polymerase", "correct":false},
                {"option": "primase", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following synthesizes short segments of RNA?",
            "a": [
                {"option": "helicase", "correct":false},
                {"option": "exonuclease", "correct":false},
                {"option": "ligase", "correct":false},
                {"option": "DNA polymerase", "correct":false},
                {"option": "primase", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The leading and the lagging strands differ in that",
            "a": [
                {"option": "the leading strand is synthesized in the same direction as the movement of the replication fork, and the lagging strand is synthesized in the opposite direction.", "correct":true},
                {"option": "the leading strand is synthesized by adding nucleotides to the 3ʹ end of the growing strand, and the lagging strand is synthesized by adding nucleotides to the 5ʹ end.", "correct":false},
                {"option": "the lagging strand is synthesized continuously, whereas the leading strand is synthesized in short fragments that are ultimately stitched together.", "correct":false},
                {"option": "the leading strand is synthesized at twice the rate of the lagging strand.", "correct":false}
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A new DNA strand elongates only in the 5ʹ to 3ʹ direction because",
            "a": [
                {"option": "DNA polymerase begins adding nucleotides at the 5ʹ end of the template.", "correct":false},
                {"option": "Okazaki fragments prevent elongation in the 3ʹ to 5ʹ direction.", "correct":false},
                {"option": "the polarity of the DNA molecule prevents addition of nucleotides at the 3ʹ end.", "correct":false},
                {"option": "replication must progress toward the replication fork.", "correct":false},
                {"option": "DNA polymerase can only add nucleotides to the free 3ʹ end.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is the function of topoisomerase?",
            "a": [
                {"option": "relieving strain in the DNA ahead of the replication fork", "correct":true},
                {"option": "elongation of new DNA at a replication fork by addition of nucleotides to the existing chain", "correct":false},
                {"option": "the addition of methyl groups to bases of DNA", "correct":false},
                {"option": "unwinding of the double helix", "correct":false},
                {"option": "stabilizing single-stranded DNA at the replication fork", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is the role of DNA ligase in the elongation of the lagging strand during DNA replication?",
            "a": [
                {"option": "synthesize RNA nucleotides to make a primer", "correct":false},
                {"option": "catalyze the lengthening of telomeres", "correct":false},
                {"option": "join Okazaki fragments together", "correct":true},
                {"option": "unwind the parental double helix", "correct":false},
                {"option": "stabilize the unwound parental DNA", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Why do histones bind tightly to DNA?",
            "a": [
                {"option": "Histones are positively charged, and DNA is negatively charged.", "correct":true},
                {"option": "Histones are negatively charged, and DNA is positively charged. ", "correct":false},
                {"option": "Both histones and DNA are strongly hydrophobic.", "correct":false},
                {"option": "Histones are covalently linked to the DNA.", "correct":false},
                {"option": "Histones are highly hydrophobic, and DNA is hydrophilic.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following statements is true of chromatin?",
            "a": [
                {"option": "Heterochromatin is composed of DNA, whereas euchromatin is made of DNA and RNA.", "correct":false},
                {"option": "Both heterochromatin and euchromatin are found in the cytoplasm.", "correct":false},
                {"option": "Heterochromatin is highly condensed, whereas euchromatin is less compact.", "correct":true},
                {"option": "Euchromatin is not transcribed, whereas heterochromatin is transcribed. ", "correct":false},
                {"option": "Only euchromatin is visible under the light microscope.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In his work with pneumonia-causing bacteria and mice, Griffith found that",
            "a": [
                {"option": "the protein coat from pathogenic cells was able to transform nonpathogenic cells.", "correct":false},
                {"option": "heat-killed pathogenic cells caused pneumonia.", "correct":false},
                {"option": "some substance from pathogenic cells was transferred to nonpathogenic cells, making them pathogenic.", "correct":true},
                {"option": "the polysaccharide coat of bacteria caused pneumonia. ", "correct":false},
                {"option": "bacteriophages injected DNA into bacteria.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "E. coli cells grown on 15N medium are transferred to 14N medium and allowed to grow for two more generations (two rounds of DNA replication). DNA extracted from these cells is centrifuged. What density distribution of DNA would you expect in this experiment?",
            "a": [
                {"option": "one high-density and one low-density band", "correct":false},
                {"option": "one intermediate-density band", "correct":false},
                {"option": "one high-density and one intermediate-density band ", "correct":false},
                {"option": "one low-density and one intermediate-density band ", "correct":true},
                {"option": "one low-density band", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A biochemist isolates and purifies various molecules needed for DNA replication. When she adds some DNA, replication occurs, but each DNA molecule consists of a normal strand paired with numerous segments of DNA a few hundred nucleotides long. What has she probably left out of the mixture?",
            "a": [
                {"option": "DNA polymerase", "correct":false},
                {"option": "DNA ligase", "correct":true},
                {"option": "nucleotides", "correct":false},
                {"option": "Okazaki fragments", "correct":false},
                {"option": "primase", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is the basis for the difference in how the leading and lagging strands of DNA molecules are synthesized?",
            "a": [
                {"option": "The origins of replication occur only at the 5ʹ end.", "correct":false},
                {"option": "Helicases and single-strand binding proteins work at the 5ʹ end.", "correct":false},
                {"option": "DNA polymerase can join new nucleotides only to the 3ʹ end of a growing strand.", "correct":true},
                {"option": "DNA ligase works only in the 3ʹ → 5ʹ direction.", "correct":false},
                {"option": "Polymerase can work on only one strand at a time.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In analyzing the number of different bases in a DNA sample, which result would be consistent with the base-pairing rules?",
            "a": [
                {"option": "A = G", "correct":false},
                {"option": "A + G = C + T ", "correct":true},
                {"option": "A + T = G + T ", "correct":false},
                {"option": "A = C", "correct":false},
                {"option": "G = T", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The elongation of the leading strand during DNA synthesis",
            "a": [
                {"option": "progresses away from the replication fork.", "correct":false},
                {"option": "occurs in the 3ʹ → 5ʹ direction. ", "correct":false},
                {"option": "produces Okazaki fragments.", "correct":false},
                {"option": "depends on the action of DNA polymerase. ", "correct":true},
                {"option": "does not require a template strand.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In a nucleosome, the DNA is wrapped around",
            "a": [
                {"option": "polymerase molecules.", "correct":false},
                {"option": "ribosomes. ", "correct":false},
                {"option": "histones.", "correct":true},
                {"option": "a thymine dimer. ", "correct":false},
                {"option": "satellite DNA.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "If proteins were composed of only 12 different kinds of amino acids, what would be the smallest possible codon size in a genetic system with four different nucleotides?",
            "a": [
                {"option": "1", "correct":false},
                {"option": "2", "correct":true},
                {"option": "3", "correct":false},
                {"option": "4", "correct":false},
                {"option": "12", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The enzyme polynucleotide phosphorylase randomly assembles nucleotides into a polynucleotide polymer. You add polynucleotide phosphorylase to a solution of adenosine triphosphate and guanosine triphosphate. How many artificial mRNA 3 nucleotide codons would be possible?",
            "a": [
                {"option": "3", "correct":false},
                {"option": "4", "correct":false},
                {"option": "8", "correct":true},
                {"option": "16", "correct":false},
                {"option": "64", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A particular triplet of bases in the template strand of DNA is 5ʹ AGT 3ʹ. The corresponding codon for the mRNA transcribed is",
            "a": [
                {"option": "3ʹ UCA 5ʹ. ", "correct":true},
                {"option": "3ʹ UGA 5ʹ. ", "correct":false},
                {"option": "5ʹ TCA 3ʹ. ", "correct":false},
                {"option": "3ʹACU 5ʹ.", "correct":false},
                {"option": "either UCA or TCA, depending on wobble in the first base.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is true for both prokaryotic and eukaryotic gene expression?",
            "a": [
                {"option": "After transcription, a 3ʹ poly -A tail and a 5ʹ cap are added to mRNA. ", "correct":false},
                {"option": "Translation of mRNA can begin before transcription is complete.", "correct":false},
                {"option": "RNA polymerase binds to the promoter region to begin transcription. ", "correct":true},
                {"option": "mRNA is synthesized in the 3ʹ → 5ʹ direction.", "correct":false},
                {"option": "The mRNA transcript is the exact complement of the gene from which it was copied.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In which of the following actions does RNA polymerase differ from DNA polymerase?",
            "a": [
                {"option": "RNA polymerase uses RNA as a template, and DNA polymerase uses a DNA template.", "correct":false},
                {"option": "RNA polymerase binds to single-stranded DNA, and DNA polymerase binds to double-stranded DNA.", "correct":false},
                {"option": "RNA polymerase is much more accurate than DNA polymerase.", "correct":false},
                {"option": "RNA polymerase can initiate RNA synthesis, but DNA polymerase requires a primer to initiate DNA synthesis.", "correct":true},
                {"option": "RNA polymerase does not need to separate the two strands of DNA in order to synthesize an RNA copy, whereas DNA polymerase must unwind the double helix before it can replicate the DNA.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following statements best describes the termination of transcription in prokaryotes?",
            "a": [
                {"option": "RNA polymerase transcribes through the polyadenylation signal, causing proteins to associate with the transcript and cut it free from the polymerase.", "correct":false},
                {"option": "RNA polymerase transcribes through the terminator sequence, causing the polymerase to fall off the DNA and release the transcript.", "correct":true},
                {"option": "RNA polymerase transcribes through an intron, and the snRNPs cause the polymerase to let go of the transcript.", "correct":false},
                {"option": "Once transcription has initiated, RNA polymerase transcribes until it reaches the end of the chromosome.", "correct":false},
                {"option": "RNA polymerase transcribes through a stop codon, causing the polymerase to stop advancing through the gene and release the mRNA.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "RNA polymerase moves in which direction along the DNA?",
            "a": [
                {"option": "3ʹ → 5ʹ along the template strand", "correct":true},
                {"option": "3ʹ → 5ʹ along the coding (sense) strand", "correct":false},
                {"option": "5ʹ → 3ʹ along the template strand", "correct":false},
                {"option": "3ʹ → 5ʹ along the coding strand", "correct":false},
                {"option": "5ʹ → 3ʹ along the double-stranded DNA", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In eukaryotes there are several different types of RNA polymerase. Which type is involved in transcription of mRNA for a globin protein?",
            "a": [
                {"option": "ligase", "correct":false},
                {"option": "RNA polymerase I", "correct":false},
                {"option": "RNA polymerase II ", "correct":true},
                {"option": "RNA polymerase III ", "correct":false},
                {"option": "primase", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Transcription in eukaryotes requires which of the following in addition to RNA polymerase?",
            "a": [
                {"option": "the protein product of the promoter", "correct":false},
                {"option": "start and stop codons", "correct":false},
                {"option": "ribosomes and tRNA", "correct":false},
                {"option": "several transcription factors (TFs)", "correct":true},
                {"option": "aminoacyl synthetase", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following help(s) to stabilize mRNA by inhibiting its degradation?",
            "a": [
                {"option": "TATA box", "correct":false},
                {"option": "spliceosomes", "correct":false},
                {"option": "5ʹ cap and poly (A) tail", "correct":true},
                {"option": "introns", "correct":false},
                {"option": "RNA polymerase", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is a ribozyme?",
            "a": [
                {"option": "an enzyme that uses RNA as a substrate", "correct":false},
                {"option": "an RNA with enzymatic activity", "correct":true},
                {"option": "an enzyme that catalyzes the association between the large and small ribosomal subunits", "correct":false},
                {"option": "an enzyme that synthesizes RNA as part of the transcription process", "correct":false},
                {"option": "an enzyme that synthesizes RNA primers during DNA replication", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What are the coding segments of a stretch of eukaryotic DNA called?",
            "a": [
                {"option": "introns ", "correct":false},
                {"option": "exons ", "correct":true},
                {"option": "codons", "correct":false},
                {"option": "replicons", "correct":false},
                {"option": "transposons", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Once transcribed, eukaryotic mRNA typically undergoes substantial alteration that includes",
            "a": [
                {"option": "union with ribosomes.", "correct":false},
                {"option": "fusion into circular forms known as plasmids.", "correct":false},
                {"option": "linkage to histone molecules. ", "correct":false},
                {"option": "excision of introns.", "correct":true},
                {"option": "fusion with other newly transcribed mRNA.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A mutation in which of the following parts of a gene is likely to be most damaging to a cell?",
            "a": [
                {"option": "intron", "correct":false},
                {"option": "exon", "correct":true},
                {"option": "5ʹ UTR ", "correct":false},
                {"option": "3ʹ UTR", "correct":false},
                {"option": "All would be equally damaging.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is (are) true of snRNPs?",
            "a": [
                {"option": "They are made up of both DNA and RNA.", "correct":false},
                {"option": "They bind to splice sites at each end of the exon.", "correct":false},
                {"option": "They join together to form a large structure called the spliceosome.", "correct":true},
                {"option": "They act only in the cytosol.", "correct":false},
                {"option": "They attach introns to exons in the correct order.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Alternative RNA splicing",
            "a": [
                {"option": "is a mechanism for increasing the rate of transcription.", "correct":false},
                {"option": "can allow the production of proteins of different sizes from a single mRNA. ", "correct":true},
                {"option": "can allow the production of similar proteins from different RNAs.", "correct":false},
                {"option": "increases the rate of transcription.", "correct":false},
                {"option": "is due to the presence or absence of particular snRNPs.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A particular triplet of bases in the coding sequence of DNA is AAA. The anticodon on the tRNA that binds the mRNA codon is",
            "a": [
                {"option": "TTT. ", "correct":false},
                {"option": "UUA. ", "correct":false},
                {"option": "UUU. ", "correct":true},
                {"option": "AAA.", "correct":false},
                {"option": "either UAA or TAA, depending on first base wobble.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Accuracy in the translation of mRNA into the primary structure of a polypeptide depends on specificity in the",
            "a": [
                {"option": "binding of ribosomes to mRNA.", "correct":false},
                {"option": "shape of the A and P sites of ribosomes.", "correct":false},
                {"option": "bonding of the anticodon to the codon. ", "correct":false},
                {"option": "attachment of amino acids to tRNAs.", "correct":false},
                {"option": "both C and D", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What type of bonding is responsible for maintaining the shape of the tRNA molecule?",
            "a": [
                {"option": "covalent bonding between sulfur atoms", "correct":false},
                {"option": "ionic bonding between phosphates", "correct":false},
                {"option": "hydrogen bonding between base pairs", "correct":true},
                {"option": "van der Waals interactions between hydrogen atoms", "correct":false},
                {"option": "peptide bonding between amino acids", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "There are 61 mRNA codons that specify an amino acid, but only 45 tRNAs. This is best explained by the fact that",
            "a": [
                {"option": "some tRNAs have anticodons that recognize four or more different codons.", "correct":false},
                {"option": "the rules for base pairing between the third base of a codon and tRNA are flexible. ", "correct":true},
                {"option": "many codons are never used, so the tRNAs that recognize them are dispensable. ", "correct":false},
                {"option": "the DNA codes for all 61 tRNAs but some are then destroyed.", "correct":false},
                {"option": "competitive exclusion forces some tRNAs to be destroyed by nucleases.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "From the following list, which is the first event in translation in eukaryotes?",
            "a": [
                {"option": "elongation of the polypeptide", "correct":false},
                {"option": "base pairing of activated methionine-tRNA to AUG of the messenger RNA ", "correct":false},
                {"option": "the larger ribosomal subunit binds to smaller ribosomal subunits", "correct":false},
                {"option": "covalent bonding between the first two amino acids", "correct":false},
                {"option": "the small subunit of the ribosome recognizes and attaches to the 5ʹ cap of mRNA", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Choose the answer that has these events of protein synthesis in the proper sequence.<br>1. An aminoacyl-tRNA binds to the A site.<br>2. A peptide bond forms between the new amino acid and a polypeptide chain.<br>3. tRNA leaves the P site, and the P site remains vacant.<br>4. A small ribosomal subunit binds with mRNA.<br>5. tRNA translocates to the P site.",
            "a": [
                {"option": "1, 3, 2, 4, 5", "correct":false},
                {"option": "4, 1, 2, 5, 3", "correct":true},
                {"option": "5, 4, 3, 2, 1", "correct":false},
                {"option": "4, 1, 3, 2, 5", "correct":false},
                {"option": "2, 4, 5, 1, 3", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "As a ribosome translocates along an mRNA molecule by one codon, which of the following occurs?",
            "a": [
                {"option": "The tRNA that was in the A site moves into the P site.", "correct":true},
                {"option": "The tRNA that was in the P site moves into the A site.", "correct":false},
                {"option": "The tRNA that was in the A site moves to the E site and is released.", "correct":false},
                {"option": "The tRNA that was in the A site departs from the ribosome via a tunnel. ", "correct":false},
                {"option": "The polypeptide enters the E site.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What are polyribosomes?",
            "a": [
                {"option": "groups of ribosomes reading a single mRNA simultaneously", "correct":true},
                {"option": "ribosomes containing more than two subunits", "correct":false},
                {"option": "multiple copies of ribosomes associated with giant chromosomes", "correct":false},
                {"option": "aggregations of vesicles containing ribosomal RNA", "correct":false},
                {"option": "ribosomes associated with more than one tRNA", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "When translating secretory or membrane proteins, ribosomes are directed to the ER membrane by",
            "a": [
                {"option": "a specific characteristic of the ribosome itself, which distinguishes free ribosomes from bound ribosomes.", "correct":false},
                {"option": "a signal-recognition particle that brings ribosomes to a receptor protein in the ER membrane.", "correct":true},
                {"option": "moving through a specialized channel of the nucleus.", "correct":false},
                {"option": "a chemical signal given off by the ER.", "correct":false},
                {"option": "a signal sequence of RNA that precedes the start codon of the message.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A transfer RNA (#1) attached to the amino acid lysine enters the ribosome. The lysine binds to the growing polypeptide on the other tRNA (#2) in the ribosome already. Which enzyme causes a covalent bond to attach lysine to the polypeptide?",
            "a": [
                {"option": "ATPase", "correct":false},
                {"option": "lysine synthetase ", "correct":false},
                {"option": "RNA polymerase ", "correct":false},
                {"option": "ligase", "correct":false},
                {"option": "peptidyl transferase", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following types of mutation, resulting in an error in the mRNA just after the AUG start of translation, is likely to have the most serious effect on the polypeptide product?",
            "a": [
                {"option": "a deletion of a codon", "correct":false},
                {"option": "a deletion of 2 nucleotides", "correct":true},
                {"option": "a substitution of the third nucleotide in an ACC codon", "correct":false},
                {"option": "a substitution of the first nucleotide of a GGG codon", "correct":false},
                {"option": "an insertion of a codon", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What is the effect of a nonsense mutation in a gene?",
            "a": [
                {"option": "It changes an amino acid in the encoded protein.", "correct":false},
                {"option": "It has no effect on the amino acid sequence of the encoded protein.", "correct":false},
                {"option": "It introduces a premature stop codon into the mRNA. ", "correct":true},
                {"option": "It alters the reading frame of the mRNA.", "correct":false},
                {"option": "It prevents introns from being excised.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Each of the following options is a modification of the sentence THECATATETHERAT. Which of the following is analogous to a frameshift mutation?",
            "a": [
                {"option": "THERATATETHECAT ", "correct":false},
                {"option": "THETACATETHERAT ", "correct":false},
                {"option": "THECATARETHERAT ", "correct":false},
                {"option": "THECATATTHERAT ", "correct":true},
                {"option": "CATATETHERAT", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Each of the following options is a modification of the sentence THECATATETHERAT. Which of the following is analogous to a single substitution mutation?",
            "a": [
                {"option": "THERATATETHECAT ", "correct":false},
                {"option": "THETACATETHERAT ", "correct":false},
                {"option": "THECATARETHERAT ", "correct":true},
                {"option": "THECATATTHERAT ", "correct":false},
                {"option": "CATATETHERAT", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A frameshift mutation could result from",
            "a": [
                {"option": "a base insertion only. ", "correct":false},
                {"option": "a base deletion only.", "correct":false},
                {"option": "a base substitution only.", "correct":false},
                {"option": "deletion of three consecutive bases.", "correct":false},
                {"option": "either an insertion or a deletion of a base.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following DNA mutations is the most likely to be damaging to the protein it specifies?",
            "a": [
                {"option": "a base-pair deletion", "correct":true},
                {"option": "a codon substitution", "correct":false},
                {"option": "a substitution in the last base of a codon", "correct":false},
                {"option": "a codon deletion", "correct":false},
                {"option": "a point mutation", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which point mutation would be most likely to have a catastrophic effect on the functioning of a protein?",
            "a": [
                {"option": "a base substitution", "correct":false},
                {"option": "a base deletion near the start of a gene", "correct":true},
                {"option": "a base deletion near the end of the coding sequence, but not in the terminator codon", "correct":false},
                {"option": "deletion of three bases near the start of the coding sequence, but not in the initiator codon", "correct":false},
                {"option": "a base insertion near the end of the coding sequence, but not in the terminator codon", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following statements are true about protein synthesis in prokaryotes?",
            "a": [
                {"option": "Extensive RNA processing is required before prokaryotic transcripts can be translated.", "correct":false},
                {"option": "Translation can begin while transcription is still in progress.", "correct":true},
                {"option": "Prokaryotic cells have complicated mechanisms for targeting proteins to the appropriate cellular organelles.", "correct":false},
                {"option": "Translation requires antibiotic activity.", "correct":false},
                {"option": "Unlike eukaryotes, prokaryotes require no initiation or elongation factors.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In eukaryotic cells, transcription cannot begin until",
            "a": [
                {"option": "the two DNA strands have completely separated and exposed the promoter. ", "correct":false},
                {"option": "several transcription factors have bound to the promoter.", "correct":true},
                {"option": "the 5ʹ caps are removed from the mRNA.", "correct":false},
                {"option": "the DNA introns are removed from the template.", "correct":false},
                {"option": "DNA nucleases have isolated the transcription unit.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is not true of a codon?",
            "a": [
                {"option": "It consists of three nucleotides.", "correct":false},
                {"option": "It may code for the same amino acid as another codon. ", "correct":false},
                {"option": "It never codes for more than one amino acid.", "correct":false},
                {"option": "It extends from one end of a tRNA molecule. ", "correct":true},
                {"option": "It is the basic unit of the genetic code.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The anticodon of a particular tRNA molecule is",
            "a": [
                {"option": "complementary to the corresponding mRNA codon. ", "correct":true},
                {"option": "complementary to the corresponding triplet in rRNA. ", "correct":false},
                {"option": "the part of tRNA that bonds to a specific amino acid.", "correct":false},
                {"option": "changeable, depending on the amino acid that attaches to the tRNA.", "correct":false},
                {"option": "catalytic, making the tRNA a ribozyme.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is not true of RNA processing?",
            "a": [
                {"option": "Exons are cut out before mRNA leaves the nucleus.", "correct":true},
                {"option": "Nucleotides may be added at both ends of the RNA. ", "correct":false},
                {"option": "Ribozymes may function in RNA splicing.", "correct":false},
                {"option": "RNA splicing can be catalyzed by spliceosomes.", "correct":false},
                {"option": "A primary transcript is often much longer than the final RNA molecule that leaves the nucleus.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which component is not directly involved in translation?",
            "a": [
                {"option": "mRNA", "correct":false},
                {"option": "DNA ", "correct":true},
                {"option": "tRNA", "correct":false},
                {"option": "ribosomes", "correct":false},
                {"option": "GTP", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        }
    ]
};
