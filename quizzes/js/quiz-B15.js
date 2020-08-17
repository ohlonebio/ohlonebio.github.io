// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Nervous System",
        "main":    "%total questions (Campbell Test Bank 8e)",
        "results": "" // no comma here
    },
    "questions": [
        {
            "q": "Most of the neurons in the human brain are",
            "a": [
                {"option": "sensory neurons. ", "correct":false},
                {"option": "motor neurons.", "correct":false},
                {"option": "interneurons.", "correct":true},
                {"option": "auditory neurons.", "correct":false},
                {"option": "olfactory neurons.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "For a neuron with an initial membrane potential at -70 mV, an increase in the movement of potassium ions out of that neuronʹs cytoplasm would result in",
            "a": [
                {"option": "depolarization of the neuron.", "correct":false},
                {"option": "hyperpolarization of the neuron.", "correct":true},
                {"option": "the replacement of potassium ions with sodium ions.", "correct":false},
                {"option": "the replacement of potassium ions with calcium ions.", "correct":false},
                {"option": "the neuron switching on its sodium-potassium pump to restore the initial conditions. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The operation of the sodium-potassium ʺpumpʺ moves",
            "a": [
                {"option": "sodium and potassium ions into the cell.", "correct":false},
                {"option": "sodium and potassium ions out of the cell.", "correct":false},
                {"option": "sodium ions into the cell and potassium ions out of the cell.", "correct":false},
                {"option": "sodium ions out of the cell and potassium ions into the cell. ", "correct":true},
                {"option": "sodium and potassium ions into the mitochondria.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The ʺthresholdʺ potential of a membrane",
            "a": [
                {"option": "is the point of separation from a living from a dead neuron.", "correct":false},
                {"option": "is the lowest frequency of action potentials a neuron can produce.", "correct":false},
                {"option": "is the minimum hyperpolarization needed to prevent the occurrence of action potentials.", "correct":false},
                {"option": "is the minimum depolarization needed to operate the voltage-gated sodium and potassium channels.", "correct":true},
                {"option": "is the peak amount of depolarization seen in an action potential. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Action potentials move along axons",
            "a": [
                {"option": "more slowly in axons of large than in small diameter.", "correct":false},
                {"option": "by the direct action of acetylcholine on the axonal membrane.", "correct":false},
                {"option": "by activating the sodium-potassium ʺpumpʺ at each point along the axonal membrane.", "correct":false},
                {"option": "more rapidly in myelinated than in non-myelinated axons.", "correct":true},
                {"option": "by reversing the concentration gradients for sodium and potassium ions.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A toxin that binds specifically to voltage-gated sodium channels in axons would be expected to",
            "a": [
                {"option": "prevent the hyperpolarization phase of the action potential. ", "correct":false},
                {"option": "prevent the depolarization phase of the action potential.", "correct":true},
                {"option": "prevent graded potentials.", "correct":false},
                {"option": "increase the release of neurotransmitter molecules.", "correct":false},
                {"option": "have most of its effects on the dendritic region of a neuron.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "After the depolarization phase of an action potential, the resting potential is restored by",
            "a": [
                {"option": "the opening of sodium activation gates.", "correct":false},
                {"option": "the opening of voltage-gated potassium channels and the closing of sodium activation gates.", "correct":true},
                {"option": "a decrease in the membraneʹs permeability to potassium and chloride ions. ", "correct":false},
                {"option": "a brief inhibition of the sodium-potassium pump.", "correct":false},
                {"option": "the opening of more voltage-gated sodium channels.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Action potentials are normally carried in only one direction: from the axon hillock toward the axon terminals. If you experimentally depolarize the middle of the axon to threshold, using an electronic probe, then",
            "a": [
                {"option": "no action potential will be initiated.", "correct":false},
                {"option": "an action potential will be initiated and proceed only in the normal direction toward the axon terminal.", "correct":false},
                {"option": "an action potential will be initiated and proceed only back toward the axon hillock. ", "correct":false},
                {"option": "two action potentials will be initiated, one going toward the axon terminal and one going back toward the hillock.", "correct":true},
                {"option": "an action potential will be initiated, but it will die out before it reaches the axon terminal.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "In the sequence of permeability changes for a complete action potential, the first of these events that occurs is",
            "a": [
                {"option": "the activation of the sodium-potassium ʺpump.ʺ ", "correct":false},
                {"option": "the inhibition of the sodium-potassium ʺpump.ʺ ", "correct":false},
                {"option": "the opening of voltage-gated sodium channels. ", "correct":true},
                {"option": "the closing of voltage-gated potassium channels.", "correct":false},
                {"option": "the opening of voltage-gated potassium channels.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Saltatory conduction is a term applied to conduction of impulses",
            "a": [
                {"option": "across electrical synapses.", "correct":false},
                {"option": "an action potential that skips the axon hillock in moving from the dendritic region to the axon terminal.", "correct":false},
                {"option": "rapid movement of an action potential reverberating back and forth along a neuron. ", "correct":false},
                {"option": "jumping from one neuron to an adjacent neuron.", "correct":false},
                {"option": "jumping from one node of Ranvier to the next in a myelinated neuron.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The surface on a neuron that discharges synaptic vesicles is the",
            "a": [
                {"option": "dendrite.", "correct":false},
                {"option": "axon hillock.", "correct":false},
                {"option": "node of Ranvier.", "correct":false},
                {"option": "postsynaptic membrane. ", "correct":false},
                {"option": "presynaptic membrane.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Neurotransmitters are released from axon terminals via",
            "a": [
                {"option": "osmosis.", "correct":false},
                {"option": "active transport. ", "correct":false},
                {"option": "diffusion.", "correct":false},
                {"option": "transcytosis. ", "correct":false},
                {"option": "exocytosis.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Neural transmission across a mammalian synaptic gap is accomplished by",
            "a": [
                {"option": "the movement of sodium and potassium ions from the presynaptic into the postsynaptic neuron.", "correct":false},
                {"option": "impulses traveling as electrical currents across the gap.", "correct":false},
                {"option": "impulses causing the release of a chemical signal and its diffusion across the gap.", "correct":true},
                {"option": "impulses ricocheting back and forth across the gap.", "correct":false},
                {"option": "the movement of calcium ions from the presynaptic into the postsynaptic neuron.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The observation that the acetylcholine released into the junction between a motor neuron and a skeletal muscle binds to a sodium channel and opens it is an example of",
            "a": [
                {"option": "a voltage-gated sodium channel.", "correct":false},
                {"option": "a voltage-gated potassium channel. ", "correct":false},
                {"option": "a ligand-gated sodium channel.", "correct":true},
                {"option": "a second-messenger-gated sodium channel. ", "correct":false},
                {"option": "a chemical that inhibits action potentials.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "An inhibitory postsynaptic potential (IPSP) occurs in a membrane made more permeable to",
            "a": [
                {"option": "potassium ions.", "correct":true},
                {"option": "sodium ions. ", "correct":false},
                {"option": "calcium ions. ", "correct":false},
                {"option": "ATP.", "correct":false},
                {"option": "all neurotransmitter molecules.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "The steps below refer to various stages in transmission at a chemical synapse:<br>1. Neurotransmitter binds with receptors associated with the postsynaptic membrane.<br>2. Calcium ions rush into neuronʹs cytoplasm.<br>3. An action potential depolarizes the membrane of the axon terminal.<br>4. The ligand-gated ion channels open.<br>5. The synaptic vesicles release neurotransmitter into the synaptic cleft.<br>Which sequence of events is correct?",
            "a": [
                {"option": "1 → 2 → 3 → 4 → 5", "correct":false},
                {"option": "2 → 3 → 5 → 4 → 1", "correct":false},
                {"option": "3 → 2 → 5 → 1 → 4", "correct":true},
                {"option": "4 → 3 → 1 → 2 → 5", "correct":false},
                {"option": "5 → 1 → 2 → 4 → 3", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Neurotransmitters categorized as inhibitory would are expected to",
            "a": [
                {"option": "act independently of their receptor proteins.", "correct":false},
                {"option": "close potassium channels. ", "correct":false},
                {"option": "open sodium channels.", "correct":false},
                {"option": "close chloride channels.", "correct":false},
                {"option": "hyperpolarize the membrane.", "correct":true} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "When several EPSPs arrive at the axon hillock from different dendritic locations, depolarizing the postsynaptic cell to threshold for an action potential, this is an example of",
            "a": [
                {"option": "temporal summation. ", "correct":false},
                {"option": "spatial summation.", "correct":true},
                {"option": "tetanus.", "correct":false},
                {"option": "the refractory state.", "correct":false},
                {"option": "an action potential with an abnormally high peak of depolarization.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "When several IPSPs arrive at the axon hillock rapidly in sequence from a single dendritic location, hyperpolarizing the postsynaptic cell more and more and thus preventing an action potential, this is an example of",
            "a": [
                {"option": "temporal summation. ", "correct":true},
                {"option": "spatial summation.", "correct":false},
                {"option": "tetanus.", "correct":false},
                {"option": "the refractory state.", "correct":false},
                {"option": "an action potential with an abnormally high peak of depolarization.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "What happens when a neuronʹs membrane depolarizes?",
            "a": [
                {"option": "There is a net diffusion of Na+ out of the cell.", "correct":false},
                {"option": "The equilibrium potential for K+ (EK) becomes more positive. ", "correct":false},
                {"option": "The neuronʹs membrane voltage becomes more positive.", "correct":true},
                {"option": "The neuron becomes less likely to generate an action potential.", "correct":false},
                {"option": "The inside of the cell becomes more negative relative to the outside.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Why are action potentials usually conducted in only one direction along an axon?",
            "a": [
                {"option": "The nodes of Ranvier can conduct potentials in only one direction.", "correct":false},
                {"option": "The brief refractory period prevents reopening of voltage-gated Na+ channels.", "correct":true},
                {"option": "The axon hillock has a higher membrane potential than the terminals of the axon.", "correct":false},
                {"option": "Ions can flow along the axon in only one direction.", "correct":false},
                {"option": "Voltage-gated channels for both Na+ and K+ open in only one direction. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "A common feature of action potentials is that they",
            "a": [
                {"option": "cause the membrane to hyperpolarize and then depolarize.", "correct":false},
                {"option": "can undergo temporal and spatial summation.", "correct":false},
                {"option": "are triggered by a depolarization that reaches the threshold.", "correct":true},
                {"option": "move at the same speed along all axons.", "correct":false},
                {"option": "result from the diffusion of Na+ and K+ through ligand-gated channels. ", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Which of the following is a direct result of depolarizing the presynaptic membrane of an axon terminal?",
            "a": [
                {"option": "Voltage-gated calcium channels in the membrane open. ", "correct":true},
                {"option": "Synaptic vesicles fuse with the membrane.", "correct":false},
                {"option": "The postsynaptic cell produces an action potential.", "correct":false},
                {"option": "Ligand-gated channels open, allowing neurotransmitters to enter the synaptic cleft. ", "correct":false},
                {"option": "An EPSP or IPSP is generated in the postsynaptic cell.", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
        {
            "q": "Where are neurotransmitter receptors located?",
            "a": [
                {"option": "on the nuclear membrane", "correct":false},
                {"option": "at nodes of Ranvier", "correct":false},
                {"option": "on the postsynaptic membrane", "correct":true},
                {"option": "on the membranes of synaptic vesicles", "correct":false},
                {"option": "in the myelin sheath", "correct":false} // no comma here
            ],
            "correct": "<p><span>Correct</span></p>",
            "incorrect": "<p><span>Incorrect</span></p>" // no comma here
        },
    ]
};
