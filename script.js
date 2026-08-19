function crazyshufflearray(arr, count = arr.length) {

  let result = [...arr];

  // Shuffle
  result.sort(() => Math.random() - 0.5);

  // Reverse
  result.reverse();

  // Split into chunks
  let mid = Math.floor(result.length / 2);

  let first = result.slice(0, mid);
  let second = result.slice(mid);

  // Reverse both halves
  first.reverse();
  second.reverse();

  // Swap the halves
  result = [...second, ...first];

  // Shuffle again
  result.sort(() => Math.random() - 0.5);

  // Make sure count is never greater than array length
  count = Math.min(
    Math.max(Number(count) || 0, 0),
    result.length
  );

  // Return requested number
  return result.slice(0, count);
}

function shuffleArray(arr) {
  const array = [...arr];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const questionBank = 
[
  {
    "type": "multiple",
    "text": "The causative agent of Poliomyelitis is:",
    "options": [
      "Varicella-Zoster Virus",
      "Poliovirus",
      "Hepatitis B Virus",
      "Variola virus"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Poliovirus is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which is NOT a type of viral vaccine currently available?",
    "options": [
      "Attenuated live viruses",
      "Killed viruses",
      "Recombinant produced antigens",
      "Bacterial toxoids"
    ],
    "correct": 3,
    "points": 5,
    "feedback": "Bacterial toxoids is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "In 1898, Martinus Beijerinck described the infectious agent as a:",
    "options": [
      "Bacterium",
      "filterable virus",
      "Fungus",
      "Toxin"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "filterable virus is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "A symptom of Chickenpox is:",
    "options": [
      "Paralysis",
      "Small vesicles on the face or upper trunk filled with pus",
      "Jaundice",
      "Acute onset of fever"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Small vesicles on the face or upper trunk filled with pus is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "The Chamberland filter was originally intended for:",
    "options": [
      "Virus culture",
      "Purification of water by filtering out bacteria",
      "Vaccine production",
      "Staining microbes"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Purification of water by filtering out bacteria is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Cucumber Mosaic Virus (CMV) is transmitted by:",
    "options": [
      "Thrips",
      "Aphids",
      "Insects and physical damage",
      "Whitefly"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Aphids is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Active immunity is achieved by:",
    "options": [
      "Administering antibodies from another host",
      "Stimulating the body's immune system to produce its own antibodies",
      "Using gamma globulin",
      "Vector control"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Stimulating the body's immune system to produce its own antibodies is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "In 1915, Frederick Twort discovered:",
    "options": [
      "Tobacco Mosaic Virus",
      "Bacteriophages - viruses that attack bacteria",
      "Rabies virus",
      "Poliovirus"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Bacteriophages - viruses that attack bacteria is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Potato Spindle Tuber Viroid (PSTV) causes:",
    "options": [
      "Mosaic pattern on leaves",
      "Stunted growth, spindle-shaped tubers, smaller tubers",
      "Yellow spots",
      "Bud blight"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Stunted growth, spindle-shaped tubers, smaller tubers is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Pasteur's first human patient treated with the rabies vaccine was:",
    "options": [
      "A scientist",
      "A dog",
      "A nine-year-old boy named Joseph Meister",
      "A rabbit"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "A nine-year-old boy named Joseph Meister is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Smallpox is caused by:",
    "options": [
      "Poliovirus",
      "Rabies virus",
      "Variola virus",
      "HIV"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Variola virus is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Immunoprophylaxis against viral illnesses includes the use of:",
    "options": [
      "Antibiotics only",
      "Vaccines or antibody-containing preparations",
      "Antivirals only",
      "Disinfectants only"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Vaccines or antibody-containing preparations is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Barley Yellow Dwarf Virus (BYDV) affects:",
    "options": [
      "Tobacco and tomato",
      "Barley, oats, rye and wheat",
      "Cotton and soybean",
      "Maize only"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Barley, oats, rye and wheat is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "There is no single 'magic-bullet' approach to control viral infections because of:",
    "options": [
      "Lack of vaccines",
      "Enormous variations in viruses and in their epidemiology and pathogenesis",
      "High cost of drugs",
      "All viruses are DNA viruses"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Enormous variations in viruses and in their epidemiology and pathogenesis is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "AIDS is caused by which virus?",
    "options": [
      "HBV",
      "VZV",
      "Human Immunodeficiency Virus (HIV)",
      "Variola virus"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Human Immunodeficiency Virus (HIV) is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Tomato Spotted Wilt Virus (TSWV) is transmitted by:",
    "options": [
      "Aphids",
      "Thrips",
      "Nematodes",
      "Grasshoppers"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Thrips is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Loeffler and Frosch identified the infectious agent of Foot-and-mouth disease as:",
    "options": [
      "A bacterium",
      "An ultrafilterable, replication-competent particle smaller than a bacterium",
      "A fungus",
      "A toxin"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "An ultrafilterable, replication-competent particle smaller than a bacterium is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Rabies is commonly transmitted to humans through:",
    "options": [
      "Food and water",
      "Droplet inhalation",
      "Bite of infected animals like dogs and cats",
      "Sexual contact"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Bite of infected animals like dogs and cats is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "The mode of transmission of Poliomyelitis is:",
    "options": [
      "Droplet inhalation",
      "Through food and water",
      "Bite of infected animal",
      "Sexual contact"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Through food and water is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Attenuation of a virus means:",
    "options": [
      "Making the virus more virulent",
      "Making the virus less dangerous to the host while still inducing immunity",
      "Killing the virus completely",
      "Changing the virus host range"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Making the virus less dangerous to the host while still inducing immunity is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Tobacco Mosaic Virus causes:",
    "options": [
      "Mottled appearance of leaves and dwarfing",
      "Yellowing and dwarfing",
      "Spindle tubers",
      "Leaf curling"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Mottled appearance of leaves and dwarfing is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Passive prophylaxis is used to protect individuals who:",
    "options": [
      "Have been vaccinated",
      "Have been exposed to a disease and cannot be protected by vaccination",
      "Are healthy",
      "Have chronic bacterial infections"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Have been exposed to a disease and cannot be protected by vaccination is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "In 1890, Dmitri Ivanovsky was invited to study a disease in tobacco plantations of:",
    "options": [
      "France",
      "Crimea, Eastern Europe",
      "Netherlands",
      "USA"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Crimea, Eastern Europe is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which virus can be transmitted from mother to baby through blood or after birth?",
    "options": [
      "Poliovirus",
      "VZV",
      "Hepatitis B Virus (HBV)",
      "Rabies virus"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Hepatitis B Virus (HBV) is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Beijerinck's term 'contagium vivum fluidum' means:",
    "options": [
      "Dead particle",
      "Contagious living fluid",
      "Bacterial spore",
      "Poisonous substance"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Contagious living fluid is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Fever, headache, sore throat, vomiting and loss of appetite are symptoms of:",
    "options": [
      "Rabies",
      "Poliomyelitis",
      "Hepatitis B",
      "Smallpox"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Poliomyelitis is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "The Porcelain filter consists of:",
    "options": [
      "A glass tube with cotton",
      "A permeable unglazed porcelain tube with a metal pipe inside",
      "A paper membrane",
      "A plastic syringe"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "A permeable unglazed porcelain tube with a metal pipe inside is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Leaf Curl Virus (LCV) affects crops like:",
    "options": [
      "Wheat and barley",
      "Cotton, papaya, tomato, tobacco, potato and sweet potato",
      "Tomato and pepper",
      "Cucumber and bean"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Cotton, papaya, tomato, tobacco, potato and sweet potato is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Chickenpox is caused by:",
    "options": [
      "HIV",
      "Rabies virus",
      "Varicella-Zoster Virus (VZV)",
      "HBV"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Varicella-Zoster Virus (VZV) is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Maize mosaic virus (MMV) is transmitted by:",
    "options": [
      "Aphids",
      "Thrips",
      "Infected leaves by an insect vector",
      "Nematodes"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Infected leaves by an insect vector is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Until the 19th century, infectious diseases were generally believed to be caused by:",
    "options": [
      "Bacteria",
      "Viruses",
      "Mysterious forces like poisonous substances in the environment",
      "Fungi"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Mysterious forces like poisonous substances in the environment is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "The host for Rabies virus includes:",
    "options": [
      "Humans only",
      "Foxes, wolves, skunks, bats, dogs, humans",
      "Birds only",
      "Chicken eggs only"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Foxes, wolves, skunks, bats, dogs, humans is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Bud blight is caused by:",
    "options": [
      "Maize Mosaic Virus",
      "Tobacco Ringspot Virus (TRSV)",
      "Barley Yellow Dwarf Virus",
      "Cucumber Mosaic Virus"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Tobacco Ringspot Virus (TRSV) is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Ivanovsky discovered that after passing infected tobacco leaf solution through a Chamberland filter, the solution was still:",
    "options": [
      "Non-infectious",
      "Capable of infecting more tobacco plants",
      "Killed by heat",
      "Colored"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Capable of infecting more tobacco plants is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Charles Chamberland showed that porous porcelain could:",
    "options": [
      "Kill bacteria",
      "Prevent the passage of fine particles in suspension",
      "Multiply viruses",
      "Stain cells"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Prevent the passage of fine particles in suspension is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "A symptom of Bud Blight includes:",
    "options": [
      "Mottled leaves",
      "Yellowing and stunting",
      "Stunted plants, bending of terminal buds, buds falling off",
      "Spindle tubers"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Stunted plants, bending of terminal buds, buds falling off is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "The era of virus discovery began with the work of Louis Pasteur on:",
    "options": [
      "Smallpox",
      "Rabies",
      "Polio",
      "Chickenpox"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Rabies is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "In 1885, Louis Pasteur attenuated the rabies virus by:",
    "options": [
      "Using killed virus",
      "Serial passage in rabbits and harvesting from spinal cords",
      "Using recombinant DNA",
      "Using antibodies"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Serial passage in rabbits and harvesting from spinal cords is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Stanley obtained TMV in the form of:",
    "options": [
      "Liquid culture",
      "Pure crystals",
      "Bacterial colonies",
      "Spores"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Pure crystals is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Twort samples remained infectious after passing through:",
    "options": [
      "Paper filter",
      "A fine porcelain filter that would trap bacteria",
      "Cotton wool",
      "Heat"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "A fine porcelain filter that would trap bacteria is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which type of vaccine uses a live virus that has been weakened?",
    "options": [
      "Killed vaccine",
      "Attenuated live vaccine",
      "Subunit vaccine",
      "Toxoid vaccine"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Attenuated live vaccine is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Hepatitis B is primarily transmitted by:",
    "options": [
      "Food and water",
      "Respiratory droplets",
      "Blood and body fluids",
      "Mosquito bite"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Blood and body fluids is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "The first virus to be crystallized was:",
    "options": [
      "Tobacco Mosaic Virus",
      "Poliovirus",
      "Rabies virus",
      "Influenza virus"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Tobacco Mosaic Virus is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which of the following is a DNA virus?",
    "options": [
      "Poliovirus",
      "HIV",
      "Rabies virus",
      "Smallpox virus"
    ],
    "correct": 3,
    "points": 5,
    "feedback": "Smallpox virus is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Killed viral vaccines require:",
    "options": [
      "Only one dose for life",
      "Multiple doses and boosters",
      "No adjuvant",
      "Oral administration only"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Multiple doses and boosters is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Varicella-Zoster Virus can cause:",
    "options": [
      "Polio",
      "Rabies",
      "Chickenpox and Shingles",
      "AIDS"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Chickenpox and Shingles is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Recombinant vaccines are produced using:",
    "options": [
      "Whole killed virus",
      "Antigen produced by genetic engineering",
      "Attenuated virus",
      "Animal serum"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Antigen produced by genetic engineering is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "The main reservoir for Rabies virus in nature is:",
    "options": [
      "Wild animals",
      "Humans",
      "Birds",
      "Water"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Wild animals is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which virus has an RNA genome and causes AIDS?",
    "options": [
      "HBV",
      "VZV",
      "Variola",
      "HIV"
    ],
    "correct": 3,
    "points": 5,
    "feedback": "HIV is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "The goal of vaccination is to induce:",
    "options": [
      "Passive immunity only",
      "Active immunity and memory cells",
      "Antibiotic resistance",
      "Sterilization"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Active immunity and memory cells is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which disease is prevented by MMR vaccine?",
    "options": [
      "Polio",
      "Measles, Mumps, Rubella",
      "Rabies",
      "Hepatitis"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Measles, Mumps, Rubella is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which of the following is NOT a viral disease?",
    "options": [
      "Influenza",
      "Dengue",
      "Tuberculosis",
      "Chickenpox"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Tuberculosis is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "The oral polio vaccine contains:",
    "options": [
      "Killed virus",
      "Live attenuated virus",
      "Protein subunit",
      "DNA plasmid"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Live attenuated virus is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Shingles occurs due to:",
    "options": [
      "New VZV infection",
      "Bacterial infection",
      "Reactivation of latent VZV",
      "Fungal infection"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Reactivation of latent VZV is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which virus causes liver inflammation?",
    "options": [
      "Polio",
      "Hepatitis B Virus",
      "Rabies",
      "TMV"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Hepatitis B Virus is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Pasteurization is named after:",
    "options": [
      "Louis Pasteur",
      "Dmitri Ivanovsky",
      "Martinus Beijerinck",
      "Wendell Stanley"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Louis Pasteur is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which is a plant viroid disease?",
    "options": [
      "TMV",
      "PSTV",
      "CMV",
      "LCV"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "PSTV is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "The main difference between bacteria and viruses is:",
    "options": [
      "Size",
      "Viruses lack cellular structure and independent metabolism",
      "Shape",
      "Color"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Viruses lack cellular structure and independent metabolism is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which vaccine requires cold chain?",
    "options": [
      "Toxoid",
      "Most live and killed viral vaccines",
      "Antibiotics",
      "Antisera"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Most live and killed viral vaccines is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which is NOT a route of HBV transmission?",
    "options": [
      "Blood transfusion",
      "Mother to child",
      "Sexual contact",
      "Mosquito bite"
    ],
    "correct": 3,
    "points": 5,
    "feedback": "Mosquito bite is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "TMV was the first virus to be:",
    "options": [
      "Seen under light microscope",
      "Crystallized",
      "Cultured in bacteria",
      "Sequenced"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Crystallized is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which virus causes 'spotted wilt' in tomato?",
    "options": [
      "TMV",
      "CMV",
      "TSWV",
      "BYDV"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "TSWV is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Immunity lasting for years is usually:",
    "options": [
      "Passive",
      "Active",
      "Innate",
      "Temporary"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Active is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "The first human rabies vaccine was developed in:",
    "options": [
      "1885",
      "1892",
      "1898",
      "1915"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "1885 is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which is used for immediate protection after exposure?",
    "options": [
      "Vaccine only",
      "Passive immunization with antibodies",
      "Antibiotics",
      "Antivirals"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Passive immunization with antibodies is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which plant disease causes leaf curling?",
    "options": [
      "TMV",
      "PSTV",
      "LCV",
      "CMV"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "LCV is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which is true about viruses?",
    "options": [
      "They are killed by all antibiotics",
      "They require host cells to replicate",
      "They have mitochondria",
      "They grow on agar"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "They require host cells to replicate is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which is an RNA virus?",
    "options": [
      "Smallpox",
      "Herpes",
      "Poliovirus",
      "HBV"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Poliovirus is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "The purpose of attenuation is to:",
    "options": [
      "Kill the virus",
      "Reduce virulence but retain immunogenicity",
      "Increase replication",
      "Change host"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Reduce virulence but retain immunogenicity is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which is transmitted by food and water?",
    "options": [
      "Rabies",
      "VZV",
      "Poliovirus",
      "HIV"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Poliovirus is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which scientist worked on tobacco mosaic disease?",
    "options": [
      "Pasteur",
      "Ivanovsky",
      "Koch",
      "Fleming"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Ivanovsky is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "BCG vaccine is for:",
    "options": [
      "Tuberculosis",
      "Polio",
      "Smallpox",
      "Rabies"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Tuberculosis is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which virus has a segmented RNA genome?",
    "options": [
      "Polio",
      "Influenza",
      "Rabies",
      "HBV"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Influenza is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which is a symptom of Hepatitis B?",
    "options": [
      "Paralysis",
      "Rash",
      "Jaundice",
      "Vesicles"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Jaundice is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Viruses were discovered after bacteria because:",
    "options": [
      "They are larger",
      "They pass through bacterial filters",
      "They grow faster",
      "They are easier to culture"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "They pass through bacterial filters is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which scientist showed TMV could be crystallized?",
    "options": [
      "Beijerinck",
      "Wendell Stanley",
      "Ivanovsky",
      "Pasteur"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Wendell Stanley is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which plant virus is transmitted by thrips?",
    "options": [
      "TMV",
      "CMV",
      "TSWV",
      "BYDV"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "TSWV is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which is a property of all viruses?",
    "options": [
      "Cellular",
      "Obligate intracellular parasites",
      "Have mitochondria",
      "Grow on nutrient agar"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Obligate intracellular parasites is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "The first attenuated bacterial vaccine was for:",
    "options": [
      "Anthrax",
      "Polio",
      "Rabies",
      "Smallpox"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Anthrax is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which virus causes 'bud blight'?",
    "options": [
      "CMV",
      "TRSV",
      "BYDV",
      "LCV"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "TRSV is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which disease causes vesicles filled with pus?",
    "options": [
      "Polio",
      "Rabies",
      "Chickenpox",
      "Hepatitis"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Chickenpox is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which is a method of preventing viral plant diseases?",
    "options": [
      "Antibiotics",
      "Using virus-free planting material",
      "Antifungals",
      "Irrigation"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Using virus-free planting material is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which virus is NOT transmitted by respiratory route?",
    "options": [
      "Influenza",
      "Measles",
      "Chickenpox",
      "Hepatitis B"
    ],
    "correct": 3,
    "points": 5,
    "feedback": "Hepatitis B is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Who proposed the term 'contagium vivum fluidum'?",
    "options": [
      "Ivanovsky",
      "Beijerinck",
      "Stanley",
      "Twort"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Beijerinck is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which virus causes liver cancer in chronic cases?",
    "options": [
      "HIV",
      "VZV",
      "HBV",
      "Polio"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "HBV is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "The oral polio vaccine was developed by:",
    "options": [
      "Jonas Salk",
      "Albert Sabin",
      "Louis Pasteur",
      "Edward Jenner"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Albert Sabin is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which is NOT a vaccine type?",
    "options": [
      "Live attenuated",
      "Killed",
      "Antibiotic",
      "Subunit"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Antibiotic is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which virus has icosahedral symmetry and no envelope?",
    "options": [
      "HIV",
      "Poliovirus",
      "Herpes",
      "HBV"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Poliovirus is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which disease causes neurological symptoms and death if untreated?",
    "options": [
      "Polio",
      "Chickenpox",
      "Rabies",
      "Smallpox"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Rabies is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which plant virus causes spindle-shaped tubers?",
    "options": [
      "TMV",
      "PSTV",
      "CMV",
      "LCV"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "PSTV is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which is NOT a feature of viruses?",
    "options": [
      "Very small size",
      "Replicate only in host cells",
      "Sensitive to antibiotics",
      "Contain DNA or RNA"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Sensitive to antibiotics is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Who discovered bacteriophages?",
    "options": [
      "Pasteur",
      "Frederick Twort",
      "Stanley",
      "Beijerinck"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Frederick Twort is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which virus causes 'yellow dwarf' in barley?",
    "options": [
      "TMV",
      "CMV",
      "BYDV",
      "TSWV"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "BYDV is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which vaccine provides herd immunity?",
    "options": [
      "Passive antibodies",
      "Mass vaccination with live/killed vaccines",
      "Antivirals",
      "Disinfection"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Mass vaccination with live/killed vaccines is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "The Chamberland filter was made of:",
    "options": [
      "Plastic",
      "Unglazed porcelain",
      "Glass",
      "Paper"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Unglazed porcelain is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which virus is transmitted by sexual contact?",
    "options": [
      "Polio",
      "HIV",
      "TMV",
      "Rabies"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "HIV is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which disease shows 'rash progressing to pustules'?",
    "options": [
      "Polio",
      "Chickenpox",
      "Smallpox",
      "Rabies"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Smallpox is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which is the nucleic acid in TMV?",
    "options": [
      "DNA",
      "RNA",
      "Both",
      "None"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "RNA is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "Which is NOT controlled by vaccination?",
    "options": [
      "Smallpox",
      "Polio",
      "Measles",
      "Common cold"
    ],
    "correct": 3,
    "points": 5,
    "feedback": "Common cold is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "In 1935, Wendell Stanley proved that TMV is composed of:",
    "options": [
      "DNA and lipid",
      "Protein and ribonucleic acid (RNA)",
      "Carbohydrate only",
      "Protein only"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Protein and ribonucleic acid (RNA) is correct for this question based on the virology material."
  },
  {
    "type": "multiple",
    "text": "What is the basic structural unit of a complete virus particle called?",
    "options": [
      "Virion",
      "Capsule",
      "Plasmid",
      "Spore"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "A complete infectious virus particle is called a virion."
  },
  {
    "type": "multiple",
    "text": "Viruses generally reproduce by:",
    "options": [
      "Binary fission",
      "Using host-cell machinery",
      "Budding from bacteria only",
      "Photosynthesis"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "Viruses depend on host-cell machinery for replication."
  },
  {
    "type": "multiple",
    "text": "A virus that infects bacteria is called a:",
    "options": [
      "Viroid",
      "Bacteriophage",
      "Prion",
      "Protozoan"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "A bacteriophage is a virus that infects bacterial cells."
  },
  {
    "type": "multiple",
    "text": "Which molecule carries genetic information in a DNA virus?",
    "options": [
      "DNA",
      "Protein only",
      "Lipid only",
      "Carbohydrate"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "DNA viruses use DNA as their genetic material."
  },
  {
    "type": "multiple",
    "text": "Which molecule carries genetic information in an RNA virus?",
    "options": [
      "DNA only",
      "RNA",
      "Cellulose",
      "Peptidoglycan"
    ],
    "correct": 1,
    "points": 5,
    "feedback": "RNA viruses use RNA as their genetic material."
  },
  {
    "type": "multiple",
    "text": "Which viral structure surrounds the viral genome in many viruses?",
    "options": [
      "Capsid",
      "Ribosome",
      "Mitochondrion",
      "Cell wall"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "The capsid is the protein coat surrounding the viral genome."
  },
  {
    "type": "multiple",
    "text": "An enveloped virus obtains its envelope mainly from:",
    "options": [
      "Host-cell membrane",
      "Bacterial cell wall",
      "Viral DNA",
      "Nutrient agar"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Viral envelopes are commonly derived from host-cell membranes during viral release."
  },
  {
    "type": "multiple",
    "text": "A non-enveloped virus lacks a:",
    "options": [
      "Genome",
      "Capsid",
      "Lipid envelope",
      "Protein"
    ],
    "correct": 2,
    "points": 5,
    "feedback": "Non-enveloped viruses do not possess a lipid envelope."
  },
  {
    "type": "multiple",
    "text": "Which term describes the ability of a virus to cause disease?",
    "options": [
      "Virulence",
      "Osmosis",
      "Fermentation",
      "Photosynthesis"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Virulence describes the degree of pathogenicity or disease-causing ability."
  },
  {
    "type": "multiple",
    "text": "Which term describes the ability of a virus to stimulate an immune response?",
    "options": [
      "Immunogenicity",
      "Filtration",
      "Mutation only",
      "Sterilization"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Immunogenicity is the capacity to induce an immune response."
  },
  {
    "type": "multiple",
    "text": "What is the main purpose of a vaccine?",
    "options": [
      "To induce protective immunity",
      "To provide nutrition",
      "To destroy all bacteria",
      "To replace red blood cells"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Vaccines stimulate protective immune responses before or around exposure."
  },
  {
    "type": "multiple",
    "text": "Passive immunity is obtained by receiving:",
    "options": [
      "Preformed antibodies",
      "Only memory cells",
      "Antibiotics",
      "Viral genomes"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Passive immunity results from receiving antibodies made elsewhere."
  },
  {
    "type": "multiple",
    "text": "Active immunity differs from passive immunity because active immunity:",
    "options": [
      "Produces an immune response in the recipient",
      "Never produces antibodies",
      "Always lasts only hours",
      "Requires antibiotics"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Active immunity involves the recipient's own immune response and can generate memory."
  },
  {
    "type": "multiple",
    "text": "A live attenuated vaccine contains a virus that is:",
    "options": [
      "Weakened but still immunogenic",
      "Always completely destroyed",
      "Only a bacterial toxin",
      "Only an antibody"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Attenuated viruses are weakened to reduce disease-causing ability while retaining immunogenicity."
  },
  {
    "type": "multiple",
    "text": "A killed or inactivated vaccine contains virus that is:",
    "options": [
      "Unable to replicate normally",
      "Always more virulent",
      "A bacterial spore",
      "A living bacterium"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Inactivated vaccines use virus that has been rendered non-replicating."
  },
  {
    "type": "multiple",
    "text": "A subunit vaccine contains:",
    "options": [
      "Selected viral components or antigens",
      "The entire live virus",
      "Only antibiotics",
      "Only host cells"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Subunit vaccines use selected antigenic components rather than the whole infectious virus."
  },
    {
    type: 'multiple',
    text: 'A researcher observes that an infectious agent remains capable of causing disease after passing through a filter designed to retain bacteria. Which conclusion is most consistent with the observation?',
    options: [
      'The agent is definitely a bacterium',
      'The agent may be smaller than bacteria',
      'The agent must be a fungus',
      'The agent is a bacterial toxin'
    ],
    correct: 1,
    points: 5,
    feedback: 'Infectivity after passage through a bacteria-retaining filter provided early evidence that viruses were much smaller than bacteria.'
  },
  {
    type: 'multiple',
    text: 'Which pairing correctly matches a scientist with a major contribution to early virology?',
    options: [
      'Wendell Stanley — crystallization of TMV',
      'Frederick Twort — discovery of HBV',
      'Dmitri Ivanovsky — development of MMR vaccine',
      'Louis Pasteur — discovery of TMV crystals'
    ],
    correct: 0,
    points: 5,
    feedback: 'Wendell Stanley famously obtained Tobacco Mosaic Virus in crystalline form.'
  },
  {
    type: 'multiple',
    text: 'If a person receives antibodies produced by another individual rather than producing the antibodies themselves, what type of protection has been obtained?',
    options: [
      'Active immunity',
      'Passive immunity',
      'Innate immunity',
      'Herd immunity'
    ],
    correct: 1,
    points: 5,
    feedback: 'Passive immunity occurs when preformed antibodies are transferred to an individual.'
  },
  {
    type: 'multiple',
    text: 'Which situation best illustrates active immunization?',
    options: [
      'Receiving antibody-containing serum after exposure',
      'Receiving a vaccine that stimulates an immune response',
      'Receiving antibiotics for a bacterial infection',
      'Receiving antibodies from a mother'
    ],
    correct: 1,
    points: 5,
    feedback: 'Vaccination stimulates the recipient’s immune system to develop its own protective response.'
  },
  {
    type: 'multiple',
    text: 'A weakened virus is used in a vaccine primarily so that it can:',
    options: [
      'Cause severe disease',
      'Stimulate immunity while having reduced virulence',
      'Destroy antibodies',
      'Become a bacterium'
    ],
    correct: 1,
    points: 5,
    feedback: 'Attenuation reduces virulence while attempting to retain the ability to stimulate protective immunity.'
  },
  {
    type: 'multiple',
    text: 'Which vaccine category contains selected viral antigens rather than the complete virus?',
    options: [
      'Subunit vaccine',
      'Live attenuated vaccine',
      'Killed whole-virus vaccine',
      'Toxoid vaccine'
    ],
    correct: 0,
    points: 5,
    feedback: 'Subunit vaccines contain selected antigenic components of the pathogen.'
  },
  {
    type: 'multiple',
    text: 'Why may an inactivated viral vaccine require repeated doses or boosters?',
    options: [
      'It contains living bacteria',
      'Additional doses can strengthen or maintain protective immunity',
      'The vaccine changes into a live virus',
      'It cannot stimulate any immune response'
    ],
    correct: 1,
    points: 5,
    feedback: 'Inactivated vaccines may require multiple doses or boosters to establish and maintain adequate immunity.'
  },
  {
    type: 'multiple',
    text: 'Which statement correctly distinguishes a virus from a typical cellular microorganism?',
    options: [
      'Viruses possess mitochondria',
      'Viruses have independent cellular metabolism',
      'Viruses depend on host cells for replication',
      'Viruses reproduce by ordinary binary fission'
    ],
    correct: 2,
    points: 5,
    feedback: 'Viruses are obligate intracellular parasites and require host cells to replicate.'
  },
  {
    type: 'multiple',
    text: 'A substance is described as “contagium vivum fluidum” in the historical development of virology. Who is associated with this description?',
    options: [
      'Frederick Twort',
      'Martinus Beijerinck',
      'Wendell Stanley',
      'Louis Pasteur'
    ],
    correct: 1,
    points: 5,
    feedback: 'Beijerinck used the term “contagium vivum fluidum” to describe the infectious agent.'
  },
  {
    type: 'multiple',
    text: 'Which historical observation most strongly challenged the idea that tobacco mosaic disease was caused by ordinary bacteria?',
    options: [
      'The disease affected plants',
      'The infectious agent passed through a bacteria-retaining filter',
      'The plants developed symptoms',
      'The disease could spread between plants'
    ],
    correct: 1,
    points: 5,
    feedback: 'The ability of infectious tobacco sap to pass through a filter that retained bacteria was an important clue that the agent was smaller than bacteria.'
  },
  {
    type: 'multiple',
    text: 'Which combination contains only human viral diseases discussed in the source material?',
    options: [
      'Poliomyelitis, rabies and hepatitis B',
      'Tuberculosis, rabies and polio',
      'Anthrax, chickenpox and hepatitis B',
      'Malaria, AIDS and rabies'
    ],
    correct: 0,
    points: 5,
    feedback: 'Poliomyelitis, rabies and hepatitis B are all viral diseases covered in the material.'
  },
  {
    type: 'multiple',
    text: 'A patient develops a disease following reactivation of a virus that remained latent after an earlier infection. Which virus from the material best fits this pattern?',
    options: [
      'Varicella-Zoster Virus',
      'Poliovirus',
      'Tobacco Mosaic Virus',
      'Hepatitis B Virus'
    ],
    correct: 0,
    points: 5,
    feedback: 'Reactivation of latent VZV produces shingles.'
  },
  {
    type: 'multiple',
    text: 'Which disease represents a later manifestation of latent Varicella-Zoster Virus infection?',
    options: [
      'Poliomyelitis',
      'Shingles',
      'Smallpox',
      'AIDS'
    ],
    correct: 1,
    points: 5,
    feedback: 'Shingles results from reactivation of latent Varicella-Zoster Virus.'
  },
  {
    type: 'multiple',
    text: 'A viral infection is acquired through contaminated food or water. Which disease in the source material is most characteristic of this route?',
    options: [
      'Rabies',
      'Poliomyelitis',
      'HIV/AIDS',
      'Chickenpox'
    ],
    correct: 1,
    points: 5,
    feedback: 'Poliovirus is transmitted primarily through the fecal-oral route, including contaminated food and water.'
  },
  {
    type: 'multiple',
    text: 'Which transmission route would be least consistent with Hepatitis B based on the material?',
    options: [
      'Blood exposure',
      'Mother-to-child transmission',
      'Sexual contact',
      'Mosquito bite'
    ],
    correct: 3,
    points: 5,
    feedback: 'The material identifies blood, body fluids, mother-to-child transmission and sexual contact as important HBV routes, not mosquito bites.'
  },
  {
    type: 'multiple',
    text: 'A person is bitten by an infected animal and later develops a severe viral neurological disease. Which infection is most likely?',
    options: [
      'Hepatitis B',
      'Rabies',
      'Poliomyelitis',
      'Chickenpox'
    ],
    correct: 1,
    points: 5,
    feedback: 'Rabies is commonly transmitted through bites from infected animals and can cause severe neurological disease.'
  },
  {
    type: 'multiple',
    text: 'Which virus is correctly associated with an animal reservoir rather than humans being the primary natural reservoir?',
    options: [
      'Rabies virus',
      'HIV',
      'Poliovirus',
      'Hepatitis B virus'
    ],
    correct: 0,
    points: 5,
    feedback: 'The source material identifies wild animals as the main natural reservoir for rabies virus.'
  },
  {
    type: 'multiple',
    text: 'Which pair consists of viruses with different genome types as presented in the material?',
    options: [
      'Poliovirus and HIV',
      'Variola virus and HBV',
      'Poliovirus and Variola virus',
      'HIV and rabies virus'
    ],
    correct: 2,
    points: 5,
    feedback: 'Poliovirus is an RNA virus, whereas Variola virus is a DNA virus.'
  },
  {
    type: 'multiple',
    text: 'Which virus is associated with an RNA genome and the development of AIDS?',
    options: [
      'HBV',
      'HIV',
      'Variola virus',
      'VZV'
    ],
    correct: 1,
    points: 5,
    feedback: 'HIV is an RNA virus and is the causative agent of AIDS.'
  },
  {
    type: 'multiple',
    text: 'Which viral infection discussed in the material is most strongly associated with chronic liver disease?',
    options: [
      'Rabies',
      'Hepatitis B',
      'Poliomyelitis',
      'Chickenpox'
    ],
    correct: 1,
    points: 5,
    feedback: 'Chronic hepatitis B infection can lead to serious liver disease and is associated with liver cancer.'
  },
  {
    type: 'multiple',
    text: 'Which disease-virus relationship is INCORRECT?',
    options: [
      'Smallpox — Variola virus',
      'Chickenpox — VZV',
      'AIDS — HIV',
      'Poliomyelitis — HBV'
    ],
    correct: 3,
    points: 5,
    feedback: 'Poliomyelitis is caused by poliovirus, not Hepatitis B Virus.'
  },
  {
    type: 'multiple',
    text: 'Which statement about Tobacco Mosaic Virus is supported by the source material?',
    options: [
      'It contains DNA as its nucleic acid',
      'It was obtained in crystalline form',
      'It causes human AIDS',
      'It is transmitted by animal bites'
    ],
    correct: 1,
    points: 5,
    feedback: 'Wendell Stanley obtained TMV in crystalline form, and the material identifies its nucleic acid as RNA.'
  },
  {
    type: 'multiple',
    text: 'A crop develops spindle-shaped, abnormally small potato tubers. Which agent should be suspected?',
    options: [
      'Tobacco Mosaic Virus',
      'Potato Spindle Tuber Viroid',
      'Tomato Spotted Wilt Virus',
      'Barley Yellow Dwarf Virus'
    ],
    correct: 1,
    points: 5,
    feedback: 'PSTV is associated with stunted growth and spindle-shaped, smaller potato tubers.'
  },
  {
    type: 'multiple',
    text: 'Which vector-agent pairing is correctly matched according to the source material?',
    options: [
      'TSWV — thrips',
      'CMV — thrips',
      'TSWV — aphids',
      'BYDV — animal bites'
    ],
    correct: 0,
    points: 5,
    feedback: 'The material identifies thrips as the vector for Tomato Spotted Wilt Virus.'
  },
  {
    type: 'multiple',
    text: 'A farmer notices a mosaic pattern and dwarfing in tobacco plants. Which virus is the most likely cause?',
    options: [
      'PSTV',
      'TMV',
      'HBV',
      'VZV'
    ],
    correct: 1,
    points: 5,
    feedback: 'Tobacco Mosaic Virus is associated with mottled or mosaic leaves and dwarfing.'
  },
  {
    type: 'multiple',
    text: 'Which crop group is particularly associated with Barley Yellow Dwarf Virus in the source material?',
    options: [
      'Barley, oats, rye and wheat',
      'Cotton, papaya and tomato only',
      'Potato and sweet potato only',
      'Tobacco and cucumber only'
    ],
    correct: 0,
    points: 5,
    feedback: 'BYDV affects cereal crops including barley, oats, rye and wheat.'
  },
  {
    type: 'multiple',
    text: 'Which observation would provide evidence that an infectious agent is able to pass through a fine porcelain filter?',
    options: [
      'The filtered material loses all infectivity',
      'The filtered material remains capable of causing infection',
      'The filter becomes infected',
      'The bacteria become larger'
    ],
    correct: 1,
    points: 5,
    feedback: 'Continued infectivity after filtration was a key observation in the early discovery of viruses.'
  },
  {
    type: 'multiple',
    text: 'Which historical scientist is correctly paired with rabies vaccine development?',
    options: [
      'Louis Pasteur',
      'Dmitri Ivanovsky',
      'Wendell Stanley',
      'Frederick Twort'
    ],
    correct: 0,
    points: 5,
    feedback: 'Louis Pasteur developed the early rabies vaccine and treated Joseph Meister in 1885.'
  },
  {
    type: 'multiple',
    text: 'What was significant about Pasteur’s work with the rabies virus?',
    options: [
      'He demonstrated that attenuation could be used to develop a vaccine',
      'He discovered that rabies was caused by bacteria',
      'He crystallized rabies virus',
      'He developed the oral polio vaccine'
    ],
    correct: 0,
    points: 5,
    feedback: 'Pasteur used attenuation of rabies virus as part of the development of a protective vaccine.'
  },
  {
    type: 'multiple',
    text: 'Which statement best explains why vaccination can protect a person before exposure to a virus?',
    options: [
      'It trains the immune system to recognize the relevant antigen',
      'It permanently removes all microorganisms from the environment',
      'It changes viruses into bacteria',
      'It prevents the body from producing antibodies'
    ],
    correct: 0,
    points: 5,
    feedback: 'Vaccination prepares the immune system to recognize and respond to specific viral antigens.'
  },
  {
    type: 'multiple',
    text: 'Which approach would be most appropriate for immediate antibody-based protection following exposure to a viral disease?',
    options: [
      'Passive immunization',
      'Attenuation',
      'Plant sanitation',
      'Viral crystallization'
    ],
    correct: 0,
    points: 5,
    feedback: 'Passive immunization supplies preformed antibodies and can provide relatively rapid protection after exposure.'
  },
  {
    "type": "multiple",
    "text": "Recombinant vaccine technology commonly uses:",
    "options": [
      "Genetic engineering",
      "Bacterial filtration alone",
      "Heat alone",
      "Microscopy alone"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Recombinant vaccines can be produced by genetic engineering to make selected antigens."
  },
  {
    "type": "multiple",
    "text": "Why are booster doses used with some vaccines?",
    "options": [
      "To strengthen or maintain protective immunity",
      "To make viruses more virulent",
      "To cause infection deliberately",
      "To replace the vaccine with antibiotics"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Boosters can reinforce immune memory and maintain protection."
  },
  {
    "type": "multiple",
    "text": "What is herd immunity?",
    "options": [
      "Population-level protection resulting from sufficient immunity in a community",
      "Immunity found only in animals",
      "Protection from antibiotics",
      "A form of viral replication"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Herd immunity occurs when enough people are immune to reduce transmission within a population."
  },
  {
    "type": "multiple",
    "text": "The cold chain is important because many vaccines:",
    "options": [
      "Require controlled temperatures to remain effective",
      "Must be frozen indefinitely",
      "Contain bacteria that need food",
      "Are made of glass only"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Temperature control helps preserve vaccine stability and effectiveness."
  },
  {
    "type": "multiple",
    "text": "Poliovirus belongs to which broad genome category?",
    "options": [
      "RNA virus",
      "DNA virus",
      "Viroid only",
      "Bacterium"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Poliovirus is an RNA virus."
  },
  {
    "type": "multiple",
    "text": "Hepatitis B virus belongs to which broad genome category?",
    "options": [
      "DNA virus",
      "RNA virus",
      "Viroid",
      "Bacteriophage only"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "HBV is a DNA virus."
  },
  {
    "type": "multiple",
    "text": "HIV is classified as a:",
    "options": [
      "Retrovirus",
      "Poxvirus",
      "Viroid",
      "Bacterium"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "HIV is a retrovirus with an RNA genome and a reverse-transcription stage."
  },
  {
    "type": "multiple",
    "text": "Which disease is associated with Variola virus?",
    "options": [
      "Smallpox",
      "Rabies",
      "Polio",
      "Hepatitis B"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Variola virus is the causative agent of smallpox."
  },
  {
    "type": "multiple",
    "text": "Which virus is associated with both chickenpox and shingles?",
    "options": [
      "Varicella-Zoster Virus",
      "Poliovirus",
      "HBV",
      "TMV"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "VZV causes chickenpox during primary infection and shingles after reactivation."
  },
  {
    "type": "multiple",
    "text": "Reactivation of latent VZV results in:",
    "options": [
      "Shingles",
      "Polio",
      "Hepatitis B",
      "Smallpox"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Shingles results from reactivation of latent VZV."
  },
  {
    "type": "multiple",
    "text": "Which infection is classically associated with animal bites?",
    "options": [
      "Rabies",
      "Polio",
      "TMV infection",
      "Hepatitis B"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Rabies is commonly transmitted through the bite of an infected animal."
  },
  {
    "type": "multiple",
    "text": "Which route is especially important for poliovirus transmission?",
    "options": [
      "Fecal-oral route through contaminated food or water",
      "Mosquito bites",
      "Animal bites",
      "Sexual contact only"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Poliovirus is classically transmitted by the fecal-oral route."
  },
  {
    "type": "multiple",
    "text": "Which route is important in HBV transmission?",
    "options": [
      "Blood and body fluids",
      "Contaminated soil only",
      "Mosquito bites",
      "Plant sap"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "HBV can spread through infected blood and body fluids, including perinatal and sexual transmission."
  },
  {
    "type": "multiple",
    "text": "Which infection is associated with jaundice in the source material?",
    "options": [
      "Hepatitis B",
      "Polio",
      "Rabies",
      "TMV"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Jaundice is a recognized symptom associated with hepatitis B infection."
  },
  {
    "type": "multiple",
    "text": "Which plant virus is associated with mottled leaves and dwarfing?",
    "options": [
      "Tobacco Mosaic Virus",
      "PSTV",
      "BYDV",
      "TRSV"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "TMV can produce a characteristic mosaic or mottled appearance and dwarfing."
  },
  {
    "type": "multiple",
    "text": "Which plant pathogen produces spindle-shaped potato tubers?",
    "options": [
      "Potato Spindle Tuber Viroid",
      "TMV",
      "TSWV",
      "BYDV"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "PSTV is a viroid associated with spindle-shaped and smaller potato tubers."
  },
  {
    "type": "multiple",
    "text": "Which plant virus affects barley, oats, rye and wheat?",
    "options": [
      "Barley Yellow Dwarf Virus",
      "TMV",
      "LCV",
      "TSWV"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "BYDV affects several cereal crops, including barley, oats, rye and wheat."
  },
  {
    "type": "multiple",
    "text": "Which plant virus is associated with leaf curl in the source material?",
    "options": [
      "Leaf Curl Virus",
      "PSTV",
      "BYDV",
      "TRSV"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Leaf Curl Virus is associated with leaf-curl disease in the listed crops."
  },
  {
    "type": "multiple",
    "text": "Which plant virus is transmitted by aphids in the source material?",
    "options": [
      "Cucumber Mosaic Virus",
      "TSWV",
      "PSTV",
      "LCV"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "The source material identifies aphids as vectors of Cucumber Mosaic Virus."
  },
  {
    "type": "multiple",
    "text": "Which plant virus is transmitted by thrips in the source material?",
    "options": [
      "Tomato Spotted Wilt Virus",
      "PSTV",
      "BYDV",
      "TMV"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "The source material identifies thrips as vectors of TSWV."
  },
  {
    "type": "multiple",
    "text": "What did Ivanovsky's filtration experiment demonstrate?",
    "options": [
      "An infectious agent could pass through a filter that retained bacteria",
      "Viruses were bacteria",
      "All viruses were killed by filters",
      "Plants could not transmit disease"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Ivanovsky found that filtered infectious tobacco sap could still transmit disease."
  },
  {
    "type": "multiple",
    "text": "What did Beijerinck's work contribute to virology?",
    "options": [
      "The concept of a filterable infectious agent and 'contagium vivum fluidum'",
      "The discovery of antibiotics",
      "The invention of the electron microscope",
      "The discovery of DNA"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Beijerinck described the infectious agent as a 'contagium vivum fluidum.'"
  },
  {
    "type": "multiple",
    "text": "What did Wendell Stanley accomplish with TMV?",
    "options": [
      "He crystallized TMV",
      "He discovered HIV",
      "He developed the oral polio vaccine",
      "He discovered rabies"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Stanley obtained TMV in crystalline form, supporting its chemical nature."
  },
  {
    "type": "multiple",
    "text": "What did Frederick Twort discover?",
    "options": [
      "Bacteriophages",
      "HIV",
      "HBV",
      "PSTV"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Frederick Twort is credited in the source material with discovering bacteriophages."
  },
  {
    "type": "multiple",
    "text": "Why did filtration experiments help distinguish viruses from bacteria?",
    "options": [
      "Some infectious agents passed through bacteria-retaining filters",
      "Viruses were visible to the naked eye",
      "Bacteria caused all viral diseases",
      "Viruses grew on nutrient agar"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Filterability provided early evidence that viruses differed from bacteria in size and biology."
  },
  {
    "type": "multiple",
    "text": "Which statement best describes an obligate intracellular parasite?",
    "options": [
      "It requires living host cells for replication",
      "It grows independently on ordinary agar",
      "It produces its own cells by binary fission",
      "It never enters cells"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Viruses are obligate intracellular parasites because they depend on host cells for replication."
  },
  {
    "type": "multiple",
    "text": "Why are antibiotics generally ineffective against viruses?",
    "options": [
      "Viruses lack the bacterial cellular targets that many antibiotics attack",
      "Viruses are too large",
      "Antibiotics are vaccines",
      "Viruses are fungi"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Antibiotics target bacterial processes and therefore do not directly treat viral replication."
  },
  {
    "type": "multiple",
    "text": "Which viral disease was associated with Pasteur's early vaccine work?",
    "options": [
      "Rabies",
      "Hepatitis B",
      "HIV/AIDS",
      "Polio"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Pasteur's early vaccine work included attenuation and vaccination against rabies."
  },
  {
    "type": "multiple",
    "text": "Who received Pasteur's first human rabies vaccination?",
    "options": [
      "Joseph Meister",
      "Wendell Stanley",
      "Dmitri Ivanovsky",
      "Frederick Twort"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Joseph Meister was the first human patient treated with Pasteur's rabies vaccine."
  },
  {
    "type": "multiple",
    "text": "Which vaccine is given orally for polio in the source material?",
    "options": [
      "Oral polio vaccine containing live attenuated virus",
      "Killed rabies vaccine",
      "MMR vaccine",
      "BCG vaccine"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "The source material identifies the oral polio vaccine as a live attenuated vaccine."
  },
  {
    "type": "multiple",
    "text": "Who developed the oral polio vaccine?",
    "options": [
      "Albert Sabin",
      "Jonas Salk",
      "Louis Pasteur",
      "Edward Jenner"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Albert Sabin developed the oral polio vaccine."
  },
  {
    "type": "multiple",
    "text": "Which vaccine is associated with measles, mumps and rubella?",
    "options": [
      "MMR",
      "BCG",
      "OPV",
      "Rabies vaccine"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "MMR protects against measles, mumps and rubella."
  },
  {
    "type": "multiple",
    "text": "What disease is BCG vaccine intended to prevent?",
    "options": [
      "Tuberculosis",
      "Polio",
      "Rabies",
      "Smallpox"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "BCG is a vaccine used against tuberculosis."
  },
  {
    "type": "multiple",
    "text": "Which viral disease is characterized by pustular rash in the source material?",
    "options": [
      "Smallpox",
      "Polio",
      "Rabies",
      "Hepatitis B"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "The source material describes smallpox as having a rash progressing to pustules."
  },
  {
    "type": "multiple",
    "text": "Which viral infection can cause AIDS?",
    "options": [
      "HIV infection",
      "HBV infection",
      "VZV infection",
      "TMV infection"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "HIV infection can progress to AIDS."
  },
  {
    "type": "multiple",
    "text": "Which viral infection can lead to chronic liver disease and liver cancer?",
    "options": [
      "Hepatitis B",
      "Polio",
      "Rabies",
      "Chickenpox"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Chronic HBV infection can lead to serious liver complications, including liver cancer."
  },
  {
    "type": "multiple",
    "text": "Which viral infection is commonly prevented by MMR vaccination?",
    "options": [
      "Measles",
      "Rabies",
      "Hepatitis B",
      "Polio"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "MMR vaccination includes protection against measles."
  },
  {
    "type": "multiple",
    "text": "What is attenuation primarily intended to change?",
    "options": [
      "Virulence",
      "The existence of the genome",
      "The host's species permanently",
      "The virus into a bacterium"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Attenuation reduces virulence while aiming to preserve immunogenicity."
  },
  {
    "type": "multiple",
    "text": "A vaccine that contains antibodies rather than stimulating antibody production provides:",
    "options": [
      "Passive immunity",
      "Active immunity",
      "Innate immunity only",
      "No immunity"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Antibody-containing preparations provide passive immunity."
  },
  {
    "type": "multiple",
    "text": "What is immunoprophylaxis?",
    "options": [
      "Prevention of disease using vaccination or antibody preparations",
      "Treatment using antibiotics only",
      "Plant disease diagnosis",
      "Viral crystallization"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Immunoprophylaxis uses immune-based measures such as vaccines or antibodies to prevent disease."
  },
  {
    "type": "multiple",
    "text": "Which statement about viral genomes is correct?",
    "options": [
      "A virus contains DNA or RNA as its genome",
      "Every virus contains both DNA and RNA as its genome",
      "Viruses contain only protein",
      "Viruses contain only lipids"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Viral genomes are made of either DNA or RNA."
  },
  {
    "type": "multiple",
    "text": "Which of the following is a plant viroid rather than a conventional virus?",
    "options": [
      "PSTV",
      "HIV",
      "Poliovirus",
      "VZV"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "PSTV is a viroid associated with potato spindle tuber disease."
  },
  {
    "type": "multiple",
    "text": "What is a major distinction between a viroid and a typical virus?",
    "options": [
      "A viroid is a small infectious RNA molecule without the typical viral protein coat",
      "A viroid is always a bacterium",
      "A viroid is an enveloped DNA virus",
      "A viroid is a vaccine"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Viroids are infectious RNA molecules that lack the typical protein capsid of viruses."
  },
  {
    "type": "multiple",
    "text": "Which organism was filtered out by the original Chamberland porcelain filter?",
    "options": [
      "Bacteria",
      "Viruses",
      "Antibodies",
      "DNA molecules"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "The filter was designed to retain bacteria and larger suspended particles."
  },
  {
    "type": "multiple",
    "text": "What key observation suggested tobacco mosaic disease involved an agent smaller than bacteria?",
    "options": [
      "Filtered sap remained infectious",
      "Filtered sap became sterile",
      "The disease disappeared permanently",
      "The filter produced antibodies"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Infectivity after bacteria-retaining filtration suggested a much smaller infectious agent."
  },
  {
    "type": "multiple",
    "text": "Which term best describes a virus's dependence on host cells?",
    "options": [
      "Obligate intracellular replication",
      "Independent cellular metabolism",
      "Binary fission",
      "Photosynthesis"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Viruses must use host cells to replicate."
  },
  {
    "type": "multiple",
    "text": "Which of these is an example of a DNA virus from the source material?",
    "options": [
      "Variola virus",
      "Poliovirus",
      "HIV",
      "Rabies virus"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Variola virus, the smallpox virus, is a DNA virus."
  },
  {
    "type": "multiple",
    "text": "Which of these is an RNA virus from the source material?",
    "options": [
      "Poliovirus",
      "Variola virus",
      "HBV",
      "Smallpox virus"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Poliovirus is an RNA virus."
  },
  {
    "type": "multiple",
    "text": "Which virus in the source material has a segmented RNA genome?",
    "options": [
      "Influenza virus",
      "Poliovirus",
      "Rabies virus",
      "HBV"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Influenza virus has a segmented RNA genome."
  },
  {
    "type": "multiple",
    "text": "Why can viral control be difficult?",
    "options": [
      "Viruses differ greatly in biology, epidemiology and pathogenesis",
      "All viruses respond identically to one drug",
      "All viruses are bacteria",
      "Vaccines work against every virus"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "The source material emphasizes the enormous variation among viruses and their diseases."
  },
  {
    "type": "multiple",
    "text": "Which prevention strategy is particularly relevant to viral plant diseases?",
    "options": [
      "Use virus-free planting material",
      "Use antibiotics on all plants",
      "Use animal vaccines on crops",
      "Avoid all irrigation"
    ],
    "correct": 0,
    "points": 5,
    "feedback": "Virus-free planting material is a useful preventive strategy for plant viral diseases."
  }
]

;





// let current = 0;
// let answers = new Array(questions.length).fill(null);
// let submitted = new Array(questions.length).fill(false);
// let skipped = new Array(questions.length).fill(false);
// let timerInterval;
// let secondsLeft = questions.length * 30;
 
let allocatedQuestions = 0;

function prepareQuiz() {

  const maxQuestions = questionBank.length;

  let input;

  while (true) {

    input = prompt(
      `How many questions would you like to answer?\n\n` +
      `Minimum: 10\n` +
      `Maximum: ${maxQuestions}`
    );

    // User cancelled
    if (input === null) {
      return false;
    }

    allocatedQuestions = parseInt(input, 10);

    // Validate
    if (
      !Number.isInteger(allocatedQuestions) ||
      allocatedQuestions < 10 ||
      allocatedQuestions > maxQuestions
    ) {

      alert(
        `Please enter a number between 10 and ${maxQuestions}.`
      );

      continue;
    }

    break;
  }



  // const shuffledQuestion = shuffleArray(questionBank);
  // const shuffledQuestions = shuffledQuestion.slice(0, allocatedquestions);
  // alert(allocatedquestions)

    const shuffledQuestions =
    crazyshufflearray(questionBank);

      const selectedQuestions =
    shuffledQuestions.slice(
      0,
      allocatedQuestions
    );


  return selectedQuestions.map(q => {

    // Only shuffle options for multiple-choice questions
    if (q.type !== 'multiple') {
      return {
        ...q
      };
    }

    // Attach whether each option is the correct answer
    const optionsWithCorrect = q.options.map((option, index) => ({
      option: option,
      isCorrect: index === q.correct
    }));

    // Shuffle the options
    const shuffledOptions = shuffleArray(optionsWithCorrect);

    // Find where the correct answer moved to
    const newCorrectIndex = shuffledOptions.findIndex(
      item => item.isCorrect
    );

    return {
      ...q,

      // New shuffled options
      options: shuffledOptions.map(item => item.option),

      // Updated correct index
      correct: newCorrectIndex
    };
  });
}


// ============================================================
// CREATE FIRST QUIZ
// ============================================================

let questions = prepareQuiz();


// ============================================================
// QUIZ STATE
// ============================================================

let current = 0;

let answers = new Array(questions.length).fill(null);

let submitted = new Array(questions.length).fill(false);

let skipped = new Array(questions.length).fill(false);

let timerInterval;


// 30 seconds per question
let secondsLeft = questions.length * 30;


console.log(questions)

// ============================================================
// TIMER
// ============================================================

function pad(n) {
  return String(n).padStart(2, '0');
}


function startTimer() {

  timerInterval = setInterval(() => {

    secondsLeft--;

    const m = Math.floor(secondsLeft / 60);
    const s = secondsLeft % 60;

    document.getElementById('timerDisplay').textContent =
      `${pad(m)}:${pad(s)}`;

    const chip = document.getElementById('timerChip');

    if (secondsLeft <= 60) {
      chip.classList.add('urgent');
    }

    if (secondsLeft <= 0) {

      clearInterval(timerInterval);

      showResults();

    }

  }, 1000);
}



function pad(n) { return String(n).padStart(2, '0'); }
 
function startTimer() {
  timerInterval = setInterval(() => {
    secondsLeft--;
    const m = Math.floor(secondsLeft / 60);
    const s = secondsLeft % 60;
    document.getElementById('timerDisplay').textContent = `${pad(m)}:${pad(s)}`;
    const chip = document.getElementById('timerChip');
    if (secondsLeft <= 60) chip.classList.add('urgent');
    if (secondsLeft <= 0) { clearInterval(timerInterval); showResults(); }
  }, 1000);
}
 

function updateQuizMeta() {
  const totalQuestions = questions.length;
  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 0), 0);

  // Estimate: 30 seconds per question
  const totalSeconds = totalQuestions * 30;
  const minutes = Math.ceil(totalSeconds / 60);

  // Update UI
  document.querySelector('.quiz-category').textContent =
    'Module 4 · Virology';

  document.querySelector('.quiz-title').textContent =
    'Virology, Viral Diseases & Immunoprophylaxis';

  document.querySelector('.quiz-description').textContent =
    'Test your understanding of viruses, their structure, replication, transmission, major human and plant viral diseases, viral discovery, vaccines, immunity, immunoprophylaxis, and methods used to prevent and control viral infections.';

  const stats = document.querySelectorAll('.quiz-stats .stat-item span');

  // ⏱ Time
  stats[0].innerHTML =
    `<strong>${minutes} minutes</strong> estimated`;

  // ❓ Questions
  stats[1].innerHTML =
    `<strong>${totalQuestions} questions</strong>`;

  // ⭐ Points
  stats[2].innerHTML =
    `<strong>${totalPoints} points</strong> total`;

  // ✅ Pass threshold
  stats[3].innerHTML =
    `Pass threshold: <strong>70%</strong>`;
}

function renderQuestion() {
const q = questions[current]; const isSubmitted = submitted[current];
 
  document.getElementById('questionNumber').textContent = `Question ${pad(current + 1)}`;
  document.getElementById('currentQ').textContent = current + 1;
  document.getElementById('pointsBadge').textContent = `${q.points} pts`;
  document.getElementById('totalQ').textContent = questions.length;
  // type tag
  const tag = document.getElementById('questionTypeTag');
  if (q.type === 'multiple') { tag.textContent = 'Multiple Choice'; tag.className = 'question-type-tag tag-multiple'; }
  else if (q.type === 'truefalse') { tag.textContent = 'True / False'; tag.className = 'question-type-tag tag-truefalse'; }
  else { tag.textContent = 'Short Answer'; tag.className = 'question-type-tag tag-input'; }
 
  // progress
  document.getElementById('progressFill').style.width = `${((current + 1) / questions.length) * 100}%`;
 
  // prev button
  document.getElementById('prevBtn').classList.toggle('hidden', current === 0);
  // skip btn
  document.getElementById('skipBtn').classList.toggle('hidden', isSubmitted);
 
  // next btn
  const nextBtn = document.getElementById('nextBtn');

  
  if (isSubmitted) {
    nextBtn.textContent = current === questions.length - 1 ? 'View Results' : 'Next Question';
    const arrow = document.createElementNS('http://www.w3.org/2000/svg','svg');
    nextBtn.innerHTML = (current === questions.length - 1 ? 'View Results' : 'Next Question') +
      `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;
    nextBtn.disabled = false;
  } else {
    nextBtn.innerHTML = `Submit Answer <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;
    nextBtn.disabled = answers[current] === null;
  }
 
  // body
  const body = document.getElementById('questionBody');
  body.innerHTML = `<div class="question-text">${q.text}</div>` + buildInputHTML(q, isSubmitted);
 
  if (isSubmitted) showFeedback(q);
}
 
function buildInputHTML(q, disabled) {
  const ans = answers[current];
  if (q.type === 'multiple') {
    const letters = ['A','B','C','D'];
    return `<div class="options-list">${q.options.map((opt, i) => {
      let cls = 'option-item';
      if (disabled) {
        if (i === q.correct) cls += ' correct';
        else if (ans === i && ans !== q.correct) cls += ' incorrect';
        else cls += ' disabled';
      } else if (ans === i) cls += ' selected';
      const checkIcon = (disabled && i === q.correct) ?
        `<svg class="option-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A8A4E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>` :
        (disabled && ans === i && ans !== q.correct) ?
        `<svg class="option-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D63B3B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>` : '';
      return `<div class="${cls}" onclick="selectOption(${i})">
        <div class="option-letter">${letters[i]}</div>
        <span class="option-text">${opt}</span>
        ${checkIcon}
      </div>`;
    }).join('')}</div>`;
  }
  if (q.type === 'truefalse') {
    let tCls = 'tf-btn', fCls = 'tf-btn';
    if (disabled) {
      if (q.correct === true) tCls += ' correct'; else tCls += ' disabled';
      if (q.correct === false) fCls += ' correct'; else fCls += ' disabled';
      if (ans === true && q.correct !== true) tCls = tCls.replace('disabled','incorrect');
      if (ans === false && q.correct !== false) fCls = fCls.replace('disabled','incorrect');
    } else {
      if (ans === true) tCls += ' selected';
      if (ans === false) fCls += ' selected';
    }
    return `<div class="tf-options">
      <button class="${tCls}" onclick="selectTF(true)">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        True
      </button>
      <button class="${fCls}" onclick="selectTF(false)">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        False
      </button>
    </div>`;
  }
  if (q.type === 'input') {
    return `<div class="short-answer-wrap">
      <textarea class="answer-input" id="textInput" rows="3" placeholder="Type your answer here…" ${disabled ? 'disabled' : ''}
        oninput="onTextInput(this.value)">${ans !== null ? ans : ''}</textarea>
    </div>`;
  }
}
 
function showFeedback(q) {
  const body = document.getElementById('questionBody');
  const isCorrect = checkCorrect(q, answers[current]);
  const cls = isCorrect ? 'correct' : (skipped[current] ? 'info' : 'incorrect');
  const icon = isCorrect
    ? `<svg class="feedback-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
    : skipped[current]
    ? `<svg class="feedback-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
    : `<svg class="feedback-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
  const box = document.createElement('div');
  box.className = `feedback-box ${cls}`;
  box.innerHTML = `${icon}<span>${q.feedback}</span>`;
  body.appendChild(box);
}
 
function checkCorrect(q, ans) {
  if (ans === null) return false;
  if (q.type === 'multiple') return ans === q.correct;
  if (q.type === 'truefalse') return ans === q.correct;
  if (q.type === 'input') return q.correct.includes(ans.trim().toLowerCase());
}
 
function selectOption(i) {
  if (submitted[current]) return;
  answers[current] = i;
  document.getElementById('nextBtn').disabled = false;
  renderQuestion();
}
 
function selectTF(val) {
  if (submitted[current]) return;
  answers[current] = val;
  document.getElementById('nextBtn').disabled = false;
  renderQuestion();
}
 
function onTextInput(val) {
  answers[current] = val;
  document.getElementById('nextBtn').disabled = val.trim() === '';
}
 
function nextQuestion() {
  if (submitted[current]) {
    if (current === questions.length - 1) { showResults(); return; }
    current++;
    renderQuestion();
    return;
  }
  submitted[current] = true;
  renderQuestion();
}
 
function prevQuestion() {
  if (current > 0) { current--; renderQuestion(); }
}
 
function skipQuestion() {
  skipped[current] = true;
  answers[current] = null;
  submitted[current] = true;
  renderQuestion();
}
 
function showResults() {
  clearInterval(timerInterval);

  document.getElementById('questionCard').style.display = 'none';
  document.getElementById('progressWrapper').style.display = 'none';

  // ==========================================================
  // SELECTED QUIZ QUESTIONS
  // ==========================================================

  const totalQuestions = questions.length;


  // ==========================================================
  // SCORE VARIABLES
  // ==========================================================

  let totalPts = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let skippedCount = 0;


  // Maximum points for ONLY the selected questions
  const maxPts = questions.reduce(
    (sum, q) => sum + (q.points || 0),
    0
  );


  // ==========================================================
  // CHECK EACH SELECTED QUESTION
  // ==========================================================

  questions.forEach((q, i) => {

    // Skipped / unanswered
    if (
      skipped[i] ||
      answers[i] === null
    ) {

      skippedCount++;

      return;
    }


    // Correct
    if (
      checkCorrect(q, answers[i])
    ) {

      correctCount++;

      totalPts += q.points || 0;

    }

    // Incorrect
    else {

      incorrectCount++;

    }

  });


  // ==========================================================
  // CALCULATE PERCENTAGE
  // ==========================================================

  const pct =
    maxPts > 0
      ? Math.round(
          (totalPts / maxPts) * 100
        )
      : 0;


  // 70% pass threshold
  const passed = pct >= 70;


  // ==========================================================
  // SCORE DISPLAY
  // ==========================================================

  document.getElementById(
    'resultScoreNum'
  ).textContent = totalPts;


  document.getElementById(
    'resultScoreDenom'
  ).textContent = `/${maxPts}`;


  // ==========================================================
  // RESULT TITLE
  // ==========================================================

  document.getElementById(
    'resultTitle'
  ).textContent =
    passed
      ? 'Assessment Passed!'
      : 'Assessment Complete';


  // ==========================================================
  // RESULT SUBTITLE
  // ==========================================================

  document.getElementById(
    'resultSubtitle'
  ).textContent =
    passed
      ? `You scored ${pct}% — above the 70% threshold`
      : `You scored ${pct}% — below the 70% pass threshold`;


  // ==========================================================
  // STATISTICS
  // ==========================================================

  document.getElementById(
    'statCorrect'
  ).textContent = correctCount;


  document.getElementById(
    'statIncorrect'
  ).textContent = incorrectCount;


  document.getElementById(
    'statPercent'
  ).textContent = `${pct}%`;


  // ==========================================================
  // OPTIONAL: SHOW SELECTED QUESTION COUNT
  // ==========================================================

  const resultQuestionCount =
    document.getElementById(
      'resultQuestionCount'
    );

  if (resultQuestionCount) {

    resultQuestionCount.textContent =
      `${totalQuestions} questions`;

  }


  // ==========================================================
  // FAILED RESULT HEADER
  // ==========================================================

  const header =
    document.getElementById(
      'resultsHeader'
    );


  if (!passed) {

    header.style.background =
      pct >= 50
        ? '#C07A12'
        : '#D63B3B';


    document.getElementById(
      'resultIcon'
    ).innerHTML = `

      <svg xmlns="http://www.w3.org/2000/svg"
           width="30"
           height="30"
           viewBox="0 0 24 24"
           fill="none"
           stroke="white"
           stroke-width="2.5"
           stroke-linecap="round"
           stroke-linejoin="round">

        <circle
          cx="12"
          cy="12"
          r="10"
        />

        <line
          x1="12"
          y1="8"
          x2="12"
          y2="12"
        />

        <line
          x1="12"
          y1="16"
          x2="12.01"
          y2="16"
        />

      </svg>

    `;

  }


  // ==========================================================
  // REVIEW LIST
  // ==========================================================

  const reviewList =
    document.getElementById(
      'reviewList'
    );


  reviewList.innerHTML =
    questions.map((q, i) => {

      let status;
      let cls;


      // Skipped
      if (
        skipped[i] ||
        answers[i] === null
      ) {

        status = 'Skipped';
        cls = 'skipped';

      }


      // Correct
      else if (
        checkCorrect(
          q,
          answers[i]
        )
      ) {

        status = 'Correct';
        cls = 'correct';

      }


      // Incorrect
      else {

        status = 'Incorrect';
        cls = 'incorrect';

      }


      // Short question text
      const short =
        q.text.length > 60
          ? q.text.slice(0, 60) + '…'
          : q.text;


      return `

        <div class="review-item">

          <div class="review-dot ${cls}">
          </div>

          <span class="review-q">
            Q${i + 1} — ${short}
          </span>

          <span class="review-status ${cls}">
            ${status}
          </span>

        </div>

      `;

    }).join('');


  // ==========================================================
  // SHOW RESULTS SCREEN
  // ==========================================================

  document.getElementById(
    'resultsScreen'
  ).style.display = 'block';
}
 
function retakeQuiz() {
  current = 0;
  answers = new Array(questions.length).fill(null);
  submitted = new Array(questions.length).fill(false);
  skipped = new Array(questions.length).fill(false);
  secondsLeft = 480;
  clearInterval(timerInterval);
  document.getElementById('timerChip').classList.remove('urgent');
  document.getElementById('resultsScreen').style.display = 'none';
  document.getElementById('questionCard').style.display = 'block';
  document.getElementById('progressWrapper').style.display = 'block';
  renderQuestion();
  startTimer();
}
 
// Init
renderQuestion();
startTimer();
updateQuizMeta();