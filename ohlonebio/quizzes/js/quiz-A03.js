// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Cell Structure & Function",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Which of the following statements concerning prokaryotic and eukaryotic cells is not correct?",
            "a": [
                {"option": "Prokaryotic cells lack a membrane-bound nucleus.", "correct":false},
                {"option": "Prokaryotic cells contain small membrane-enclosed organelles. ", "correct":true},
                {"option": "Eukaryotic cells contain a membrane-bound nucleus.", "correct":false},
                {"option": "DNA, or deoxyribonucleic acid, is present in both prokaryotic cells and eukaryotic cells.", "correct":false},
                {"option": "DNA or deoxyribonucleic acid is present in the nucleus of eukaryotic cells.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Prokaryotic and eukaryotic cells generally have which of the following features in common?",
            "a": [
                {"option": "a membrane-bounded nucleus", "correct":false},
                {"option": "a cell wall made of cellulose", "correct":false},
                {"option": "ribosomes", "correct":true},
                {"option": "flagella or cilia that contain microtubules", "correct":false},
                {"option": "linear chromosomes made of DNA and protein", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "When biologists wish to study the internal ultrastructure of cells, they most likely would use",
            "a": [
                {"option": "a light microscope.", "correct":false},
                {"option": "a scanning electron microscope.", "correct":false},
                {"option": "a transmission electronic microscope.", "correct":true},
                {"option": "A and B ", "correct":false},
                {"option": "B and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "If a modern electron microscope (TEM) can resolve biological images to the nanometer level, as opposed to the best light microscope, this is due to which of the following?",
            "a": [
                {"option": "The focal length of the electron microscope is significantly longer. ", "correct":false},
                {"option": "Contrast is enhanced by staining with atoms of heavy metal.", "correct":false},
                {"option": "Electron beams have much shorter wavelengths than visible light.", "correct":true},
                {"option": "The electron microscope has much greater ratio of image size to real size. ", "correct":false},
                {"option": "The electron microscope cannot image whole cells at one time.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "All of the following are part of a prokaryotic cell except",
            "a": [
                {"option": "DNA.", "correct":false},
                {"option": "a cell wall.", "correct":false},
                {"option": "a plasma membrane.", "correct":false},
                {"option": "ribosomes.", "correct":false},
                {"option": "an endoplasmic reticulum.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "The volume enclosed by the plasma membrane of plant cells is often much larger than the corresponding volume in animal cells. The most reasonable explanation for this observation is that",
            "a": [
                {"option": "plant cells are capable of having a much higher surface-to-volume ratio than animal cells.", "correct":false},
                {"option": "plant cells have a much more highly convoluted (folded) plasma membrane than animal cells.", "correct":false},
                {"option": "plant cells contain a large vacuole that reduces the volume of the cytoplasm.", "correct":true},
                {"option": "animal cells are more spherical, while plant cells are elongated.", "correct":false},
                {"option": "the basic functions of plant cells are very different from those of animal cells.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following is a major cause of the size limits for certain types of cells?",
            "a": [
                {"option": "the evolution of larger cells after the evolution of smaller cells", "correct":false},
                {"option": "the difference in plasma membranes between prokaryotes and eukaryotes", "correct":false},
                {"option": "the evolution of eukaryotes after the evolution of prokaryotes", "correct":false},
                {"option": "the need for a surface area of sufficient area to allow the cellʹs function", "correct":true},
                {"option": "the observation that longer cells usually have greater cell volume", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Large numbers of ribosomes are present in cells that specialize in producing which of the following molecules?",
            "a": [
                {"option": "lipids", "correct":false},
                {"option": "starches", "correct":false},
                {"option": "proteins ", "correct":true},
                {"option": "steroids ", "correct":false},
                {"option": "glucose", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Under which of the following conditions would you expect to find a cell with a predominance of free ribosomes?",
            "a": [
                {"option": "a cell that is secreting proteins", "correct":false},
                {"option": "a cell that is producing cytoplasmic enzymes", "correct":true},
                {"option": "a cell that is constructing its cell wall or extracellular matrix", "correct":false},
                {"option": "a cell that is digesting food particles", "correct":false},
                {"option": "a cell that is enlarging its vacuole", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which type of organelle is primarily involved in the synthesis of oils, phospholipids, and steroids?",
            "a": [
                {"option": "ribosome", "correct":false},
                {"option": "lysosome", "correct":false},
                {"option": "smooth endoplasmic reticulum", "correct":true},
                {"option": "mitochondrion", "correct":false},
                {"option": "contractile vacuole", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which structure is the site of the synthesis of proteins that may be exported from the cell?",
            "a": [
                {"option": "rough ER", "correct":true},
                {"option": "lysosomes", "correct":false},
                {"option": "plasmodesmata", "correct":false},
                {"option": "Golgi vesicles", "correct":false},
                {"option": "tight junctions", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "The difference in lipid and protein composition between the membranes of the endomembrane system is largely determined by",
            "a": [
                {"option": "the physical separation of most membranes from each other.", "correct":false},
                {"option": "the transportation of membrane among the endomembrane system by small membrane vesicles.", "correct":false},
                {"option": "the function of the Golgi apparatus in sorting membrane components.", "correct":true},
                {"option": "the modification of the membrane components once they reach their final destination.", "correct":false},
                {"option": "the synthesis of lipids and proteins in each of the organelles of the endomembrane system.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "In animal cells, hydrolytic enzymes are packaged to prevent general destruction of cellular components. Which of the following organelles functions in this compartmentalization?",
            "a": [
                {"option": "chloroplast", "correct":false},
                {"option": "lysosome", "correct":true},
                {"option": "central vacuole", "correct":false},
                {"option": "peroxisome", "correct":false},
                {"option": "glyoxysome", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "The liver is involved in detoxification of many poisons and drugs. Which of the following structures is primarily involved in this process and therefore abundant in liver cells?",
            "a": [
                {"option": "rough ER ", "correct":false},
                {"option": "smooth ER", "correct":true},
                {"option": "Golgi apparatus ", "correct":false},
                {"option": "Nuclear envelope ", "correct":false},
                {"option": "Transport vesicles", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which is one of the main energy transformers of cells?",
            "a": [
                {"option": "lysosome", "correct":false},
                {"option": "vacuole", "correct":false},
                {"option": "mitochondrion", "correct":true},
                {"option": "Golgi apparatus", "correct":false},
                {"option": "peroxisome", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following contains its own DNA and ribosomes?",
            "a": [
                {"option": "lysosome", "correct":false},
                {"option": "vacuole", "correct":false},
                {"option": "mitochondrion ", "correct":true},
                {"option": "Golgi apparatus ", "correct":false},
                {"option": "peroxisome", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Grana, thylakoids, and stroma are all components found in",
            "a": [
                {"option": "vacuoles.", "correct":false},
                {"option": "chloroplasts. ", "correct":true},
                {"option": "mitochondria. ", "correct":false},
                {"option": "lysosomes.", "correct":false},
                {"option": "nuclei.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Organelles other than the nucleus that contain DNA include",
            "a": [
                {"option": "ribosomes.", "correct":false},
                {"option": "mitochondria.", "correct":false},
                {"option": "chloroplasts. ", "correct":false},
                {"option": "B and C only ", "correct":true},
                {"option": "A, B, and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "The chemical reactions involved in respiration are virtually identical between prokaryotic and eukaryotic cells. In eukaryotic cells, ATP is synthesized primarily on the inner membrane of the mitochondria. Where are the corresponding reactions likely to occur in prokaryotic respiration?",
            "a": [
                {"option": "in the cytoplasm", "correct":false},
                {"option": "between the plasma membrane and the lipopolysaccharide membrane", "correct":false},
                {"option": "between the lipopolysaccharide membrane and the peptidoglycan cell wall", "correct":false},
                {"option": "on the inner plasma membrane ", "correct":true},
                {"option": "on the outer lipopolysaccharide membrane", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "A biologist ground up some plant leaf cells and then centrifuged the mixture to fractionate the organelles. Organelles in one of the heavier fractions could produce ATP in the light, while organelles in the lighter fraction could produce ATP in the dark. The heavier and lighter fractions are most likely to contain, respectively,",
            "a": [
                {"option": "mitochondria and chloroplasts. ", "correct":false},
                {"option": "chloroplasts and peroxisomes. ", "correct":false},
                {"option": "peroxisomes and chloroplasts. ", "correct":false},
                {"option": "chloroplasts and mitochondria. ", "correct":true},
                {"option": "mitochondria and peroxisomes.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "A cell has the following molecules and structures: enzymes, DNA, ribosomes, plasma membrane, and mitochondria. It could be a cell from",
            "a": [
                {"option": "a bacterium.", "correct":false},
                {"option": "an animal, but not a plant. ", "correct":false},
                {"option": "a plant, but not an animal. ", "correct":false},
                {"option": "a plant or an animal.", "correct":true},
                {"option": "any kind of organism.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Why isnʹt the mitochondrion classified as part of the endomembrane system?",
            "a": [
                {"option": "It only has two membrane layers.", "correct":false},
                {"option": "Its structure is not derived from the ER. ", "correct":true},
                {"option": "It has too many vesicles.", "correct":false},
                {"option": "It is not involved in protein synthesis.", "correct":false},
                {"option": "It is not attached to the outer nuclear envelope.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following contain the 9 + 2 arrangement of microtubules?",
            "a": [
                {"option": "eukaryotic cilia", "correct":true},
                {"option": "centrioles", "correct":false},
                {"option": "prokaryotic flagella", "correct":false},
                {"option": "A and B only", "correct":false},
                {"option": "A, B, and C", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which of the following possesses a microtubular structure similar to a basal body?",
            "a": [
                {"option": "centriole", "correct":true},
                {"option": "lysosome ", "correct":false},
                {"option": "nucleolus ", "correct":false},
                {"option": "peroxisome ", "correct":false},
                {"option": "ribosome", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Plasmodesmata in plant cells are most similar in function to which of the following structures in animal cells?",
            "a": [
                {"option": "peroxisomes ", "correct":false},
                {"option": "desmosomes ", "correct":false},
                {"option": "gap junctions", "correct":true},
                {"option": "extracellular matrix", "correct":false},
                {"option": "tight junctions", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Ions can travel directly from the cytoplasm of one animal cell to the cytoplasm of an adjacent cell through",
            "a": [
                {"option": "plasmodesmata.", "correct":false},
                {"option": "intermediate filaments.", "correct":false},
                {"option": "tight junctions. ", "correct":false},
                {"option": "desmosomes. ", "correct":false},
                {"option": "gap junctions.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which statement correctly characterizes bound ribosomes?",
            "a": [
                {"option": "Bound ribosomes are enclosed in their own membrane. ", "correct":false},
                {"option": "Bound and free ribosomes are structurally different.", "correct":false},
                {"option": "Bound ribosomes generally synthesize membrane proteins and secretory proteins. ", "correct":true},
                {"option": "The most common location for bound ribosomes is the cytoplasmic surface of the plasma membrane. ", "correct":false},
                {"option": "All of the above.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which structure is not part of the endomembrane system?",
            "a": [
                {"option": "nuclear envelope", "correct":false},
                {"option": "chloroplast", "correct":true},
                {"option": "Golgi apparatus", "correct":false},
                {"option": "plasma membrane", "correct":false},
                {"option": "ER", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Cells of the pancreas will incorporate radioactively labeled amino acids into proteins. This ʺtaggingʺ of newly synthesized proteins enables a researcher to track their location. In this case, we are tracking an enzyme secreted by pancreatic cells. What is its most likely pathway?",
            "a": [
                {"option": "ER → Golgi → nucleus ", "correct":false},
                {"option": "Golgi → ER → lysosome ", "correct":false},
                {"option": "nucleus → ER → Golgi", "correct":false},
                {"option": "ER → Golgi → vesicles that fuse with plasma membrane", "correct":true},
                {"option": "ER → lysosomes → vesicles that fuse with plasma membrane", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which structure is common to plant and animal cells?",
            "a": [
                {"option": "chloroplast", "correct":false},
                {"option": "wall made of cellulose", "correct":false},
                {"option": "central vacuole", "correct":false},
                {"option": "mitochondrion", "correct":true},
                {"option": "centriole", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        },
        {
            "q": "Which structure-function pair is mismatched?",
            "a": [
                {"option": "nucleolus; production of ribosomal subunits", "correct":false},
                {"option": "lysosome; intracellular digestion", "correct":false},
                {"option": "ribosome; protein synthesis", "correct":false},
                {"option": "Golgi; protein trafficking", "correct":false},
                {"option": "microtubule; muscle contraction", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here 
        }
  ]
};
