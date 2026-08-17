// function shuffleArray(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// }

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
    type: 'multiple',
    text: 'Medical helminthology is concerned with the study of:',
    options: ['Protozoan parasites', 'Parasitic worms', 'Fungi', 'Bacteria'],
    correct: 1,
    points: 5,
    feedback: 'Medical helminthology focuses on parasitic worms and the diseases they cause in humans.'
  },
  {
    type: 'multiple',
    text: 'Helminths are generally:',
    options: ['Unicellular organisms', 'Multicellular metazoa', 'Acellular organisms', 'Prokaryotes'],
    correct: 1,
    points: 5,
    feedback: 'Helminths are multicellular metazoan organisms, commonly referred to as parasitic worms.'
  },
  {
    type: 'multiple',
    text: 'Which of the following is NOT one of the three major groups of helminths?',
    options: ['Trematodes', 'Nematodes', 'Cestodes', 'Protozoa'],
    correct: 3,
    points: 5,
    feedback: 'The three major helminth groups are trematodes, cestodes, and nematodes. Protozoa are unicellular parasites, not helminths.'
  },
  {
    type: 'multiple',
    text: 'Trematodes and cestodes are classified as:',
    options: ['Roundworms', 'Flatworms', 'Protozoans', 'Arthropods'],
    correct: 1,
    points: 5,
    feedback: 'Trematodes and cestodes are flatworms and belong to the phylum Platyhelminthes.'
  },
  {
    type: 'multiple',
    text: 'Human exposure to geo-helminths commonly occurs through:',
    options: ['Contaminated soil', 'Mosquito bites', 'Blood transfusion', 'Sexual contact'],
    correct: 0,
    points: 5,
    feedback: 'Geo-helminths are commonly transmitted through contact with or ingestion of material contaminated with infected soil.'
  },
  {
    type: 'multiple',
    text: 'Schistosomes are classified as:',
    options: ['Intestinal flukes', 'Blood flukes', 'Liver flukes', 'Lung flukes'],
    correct: 1,
    points: 5,
    feedback: 'Schistosomes are blood flukes because the adult worms live in blood vessels.'
  },
  {
    type: 'multiple',
    text: 'A unique characteristic of Schistosoma among trematodes is that:',
    options: ['It has no suckers', 'The sexes are separate', 'It lacks a digestive system', 'It has proglottids'],
    correct: 1,
    points: 5,
    feedback: 'Unlike most trematodes, adult Schistosoma have separate male and female sexes.'
  },
  {
    type: 'multiple',
    text: 'The female Schistosoma lies within the:',
    options: ['Oral sucker', 'Gynecophoral canal', 'Bile duct', 'Intestinal lumen'],
    correct: 1,
    points: 5,
    feedback: 'The female Schistosoma is carried within the gynecophoral canal of the male.'
  },
  {
    type: 'multiple',
    text: 'Schistosoma mansoni primarily causes:',
    options: ['Urinary schistosomiasis', 'Intestinal schistosomiasis', 'Pulmonary schistosomiasis', 'Cerebral schistosomiasis'],
    correct: 1,
    points: 5,
    feedback: 'Schistosoma mansoni primarily causes intestinal schistosomiasis.'
  },
  {
    type: 'multiple',
    text: 'Schistosoma haematobium primarily causes:',
    options: ['Vesical schistosomiasis', 'Intestinal schistosomiasis', 'Hepatic schistosomiasis', 'Pulmonary schistosomiasis'],
    correct: 0,
    points: 5,
    feedback: 'Schistosoma haematobium primarily causes vesical or urinary schistosomiasis, affecting the urinary bladder region.'
  },
  {
    type: 'multiple',
    text: 'The main habitat of adult S. haematobium is the:',
    options: ['Veins of the bladder', 'Small intestine', 'Bile ducts', 'Lungs'],
    correct: 0,
    points: 5,
    feedback: 'Adult S. haematobium primarily inhabits veins associated with the urinary bladder.'
  },
  {
    type: 'multiple',
    text: 'The characteristic egg spine of S. mansoni is:',
    options: ['Terminal', 'Lateral', 'Anterior', 'Bipolar'],
    correct: 1,
    points: 5,
    feedback: 'S. mansoni eggs are characterized by a prominent lateral spine.'
  },
  {
    type: 'multiple',
    text: 'The egg of S. haematobium possesses a:',
    options: ['Lateral spine', 'Terminal spine', 'Bipolar plug', 'Operculum'],
    correct: 1,
    points: 5,
    feedback: 'S. haematobium eggs characteristically have a terminal spine.'
  },
  {
    type: 'multiple',
    text: 'The intermediate host of schistosomes is a:',
    options: ['Fish', 'Snail', 'Pig', 'Cow'],
    correct: 1,
    points: 5,
    feedback: 'Freshwater snails serve as the intermediate hosts for Schistosoma species.'
  },
  {
    type: 'multiple',
    text: 'The larval stage of Schistosoma that penetrates human skin is the:',
    options: ['Miracidium', 'Sporocyst', 'Cercaria', 'Metacercaria'],
    correct: 2,
    points: 5,
    feedback: 'The cercaria is the free-swimming larval stage that penetrates human skin.'
  },
  {
    type: 'multiple',
    text: 'Human infection with schistosomes commonly occurs during:',
    options: ['Eating raw meat', 'Bathing or swimming in infected water', 'Eating raw vegetables', 'Mosquito bites'],
    correct: 1,
    points: 5,
    feedback: 'People commonly acquire schistosomiasis when cercariae in infected freshwater penetrate the skin during bathing or swimming.'
  },
  {
    type: 'multiple',
    text: 'The miracidia of schistosomes penetrate the:',
    options: ['Human skin', 'Snail host', 'Human intestine', 'Blood cells'],
    correct: 1,
    points: 5,
    feedback: 'Schistosoma miracidia penetrate suitable freshwater snails, where further larval development occurs.'
  },
  {
    type: 'multiple',
    text: 'A common symptom of S. haematobium infection is:',
    options: ['Haematuria', 'Severe diarrhoea', 'Cough', 'Perianal itching'],
    correct: 0,
    points: 5,
    feedback: 'Haematuria, or blood in the urine, is a characteristic symptom of urinary schistosomiasis caused by S. haematobium.'
  },
  {
    type: 'multiple',
    text: 'Schistosoma mansoni infection may produce:',
    options: ['Dysentery', 'Haematuria only', 'Muscle paralysis', 'Vaginal discharge'],
    correct: 0,
    points: 5,
    feedback: 'S. mansoni can cause intestinal disease and may produce dysentery-like symptoms.'
  },
  {
    type: 'multiple',
    text: 'The laboratory diagnosis of S. haematobium commonly involves examination of:',
    options: ['Stool', 'Urine', 'Sputum', 'Blood'],
    correct: 1,
    points: 5,
    feedback: 'Urine is examined for the characteristic eggs of S. haematobium.'
  },
  {
    type: 'multiple',
    text: 'The treatment stated in the lecture for schistosomiasis is:',
    options: ['Albendazole', 'Praziquantel', 'Mebendazole', 'Thiabendazole'],
    correct: 1,
    points: 5,
    feedback: 'Praziquantel is the treatment stated in the lecture for schistosomiasis.'
  },
  {
    type: 'multiple',
    text: 'Fasciolopsis buski is classified as a:',
    options: ['Blood fluke', 'Intestinal fluke', 'Lung fluke', 'Nematode'],
    correct: 1,
    points: 5,
    feedback: 'Fasciolopsis buski is an intestinal fluke that inhabits the intestinal tract.'
  },
  {
    type: 'multiple',
    text: 'Clonorchis sinensis is commonly known as the:',
    options: ['Chinese liver fluke', 'Sheep liver fluke', 'Lung fluke', 'Blood fluke'],
    correct: 0,
    points: 5,
    feedback: 'Clonorchis sinensis is commonly called the Chinese liver fluke.'
  },
  {
    type: 'multiple',
    text: 'Adult Clonorchis sinensis lives mainly in the:',
    options: ['Urinary bladder', 'Bile ducts', 'Large intestine', 'Lungs'],
    correct: 1,
    points: 5,
    feedback: 'Adult Clonorchis sinensis primarily inhabits the bile ducts.'
  },
  {
    type: 'multiple',
    text: 'Fasciola hepatica is commonly known as the:',
    options: ['Chinese liver fluke', 'Sheep liver fluke', 'Blood fluke', 'Intestinal fluke'],
    correct: 1,
    points: 5,
    feedback: 'Fasciola hepatica is commonly known as the sheep liver fluke.'
  },
  {
    type: 'multiple',
    text: 'Adult Fasciola hepatica mainly inhabits the:',
    options: ['Large biliary passages and gall bladder', 'Urinary bladder', 'Small intestine', 'Blood vessels'],
    correct: 0,
    points: 5,
    feedback: 'Adult Fasciola hepatica mainly inhabits the large biliary passages and gall bladder.'
  },
  {
    type: 'multiple',
    text: 'Paragonimus westermani is associated with:',
    options: ['Lung disease', 'Urinary disease', 'Intestinal obstruction', 'Anaemia'],
    correct: 0,
    points: 5,
    feedback: 'Paragonimus westermani is a lung fluke associated primarily with pulmonary disease.'
  },
  {
    type: 'multiple',
    text: 'Nematodes are generally:',
    options: ['Flat and segmented', 'Cylindrical and unsegmented', 'Leaf-shaped', 'Ribbon-like'],
    correct: 1,
    points: 5,
    feedback: 'Nematodes are generally cylindrical, elongated, and unsegmented worms.'
  },
  {
    type: 'multiple',
    text: 'Nematodes possess a:',
    options: ['Tough protective cuticle', 'Scolex', 'Rostellum', 'Proglottid'],
    correct: 0,
    points: 5,
    feedback: 'Nematodes have a tough protective cuticle covering their body.'
  },
  {
    type: 'multiple',
    text: 'Unlike cestodes, nematodes possess:',
    options: ['No digestive tract', 'A complete digestive tract', 'Only an oral opening', 'Only an anal opening'],
    correct: 1,
    points: 5,
    feedback: 'Nematodes have a complete digestive tract with separate oral and anal openings, unlike cestodes.'
  },
  {
    type: 'multiple',
    text: 'The usual developmental stages of parasitic nematodes include:',
    options: ['Egg, larva and adult', 'Egg, cyst and trophozoite', 'Cyst, adult and pupa', 'Larva and cyst only'],
    correct: 0,
    points: 5,
    feedback: 'The usual developmental stages of parasitic nematodes are egg, larva, and adult.'
  },
  {
    type: 'multiple',
    text: 'Ascaris lumbricoides is transmitted mainly through ingestion of:',
    options: ['Filariform larvae', 'Embryonated eggs', 'Cercariae', 'Metacercariae'],
    correct: 1,
    points: 5,
    feedback: 'Ascariasis is acquired mainly by ingesting embryonated Ascaris eggs.'
  },
  {
    type: 'multiple',
    text: 'Adult Ascaris lumbricoides primarily lives in the:',
    options: ['Small intestine', 'Large intestine', 'Blood vessels', 'Urinary bladder'],
    correct: 0,
    points: 5,
    feedback: 'Adult Ascaris lumbricoides worms primarily live in the small intestine.'
  },
  {
    type: 'multiple',
    text: 'During its life cycle, Ascaris larvae migrate through the:',
    options: ['Liver and brain', 'Lungs', 'Kidney', 'Skin'],
    correct: 1,
    points: 5,
    feedback: 'Ascaris larvae migrate through the lungs during their development before returning to the intestine.'
  },
  {
    type: 'multiple',
    text: 'Loeffler’s syndrome associated with Ascaris results from:',
    options: ['Adult worms in the intestine', 'Larvae migrating through the lungs', 'Eggs in the liver', 'Worms in the blood vessels'],
    correct: 1,
    points: 5,
    feedback: 'Loeffler’s syndrome is associated with the migration of Ascaris larvae through the lungs.'
  },
  {
    type: 'multiple',
    text: 'A common complication caused by adult Ascaris worms is:',
    options: ['Intestinal obstruction', 'Haematuria', 'Hydatid cyst', 'Myocarditis'],
    correct: 0,
    points: 5,
    feedback: 'Heavy infections with adult Ascaris worms can result in intestinal obstruction.'
  },
  {
    type: 'multiple',
    text: 'The two major species of human hookworms mentioned in the lecture are:',
    options: ['A. lumbricoides and T. trichiura', 'A. duodenale and N. americanus', 'S. stercoralis and E. vermicularis', 'T. solium and T. saginata'],
    correct: 1,
    points: 5,
    feedback: 'The two major human hookworms listed are Ancylostoma duodenale and Necator americanus.'
  },
  {
    type: 'multiple',
    text: 'The infective stage of hookworm is the:',
    options: ['Rhabditiform larva', 'Filariform larva', 'Egg', 'Adult worm'],
    correct: 1,
    points: 5,
    feedback: 'The filariform larva is the infective stage of hookworms.'
  },
  {
    type: 'multiple',
    text: 'Hookworm infection commonly occurs through:',
    options: ['Skin penetration', 'Eating raw fish', 'Mosquito bites', 'Inhalation of eggs'],
    correct: 0,
    points: 5,
    feedback: 'Hookworm filariform larvae commonly infect humans by penetrating the skin.'
  },
  {
    type: 'multiple',
    text: 'A major pathogenic effect of hookworms is:',
    options: ['Iron deficiency anaemia', 'Hydatid cyst formation', 'Haematuria', 'Cerebral malaria'],
    correct: 0,
    points: 5,
    feedback: 'Hookworms can cause iron deficiency anaemia due to blood loss associated with the feeding worms.'
  },
  {
    type: 'multiple',
    text: 'Strongyloides stercoralis may exist as:',
    options: ['Only a parasite', 'A parasite or free-living organism', 'Only a free-living organism', 'Only a blood parasite'],
    correct: 1,
    points: 5,
    feedback: 'Strongyloides stercoralis has both parasitic and free-living forms in its life cycle.'
  },
  {
    type: 'multiple',
    text: 'Infection by Strongyloides stercoralis occurs through:',
    options: ['Skin penetration by filariform larvae', 'Eating raw beef', 'Mosquito bites', 'Ingestion of cysts'],
    correct: 0,
    points: 5,
    feedback: 'Strongyloides infection occurs when infective filariform larvae penetrate the skin.'
  },
  {
    type: 'multiple',
    text: 'A characteristic feature of strongyloidiasis is:',
    options: ['Autoinfection', 'Hydatid cyst formation', 'Haematuria', 'Biliary obstruction'],
    correct: 0,
    points: 5,
    feedback: 'Autoinfection is a characteristic feature of Strongyloides stercoralis and allows infection to persist within the host.'
  },
  {
    type: 'multiple',
    text: 'The laboratory diagnosis of strongyloidiasis involves detecting:',
    options: ['Eggs in urine', 'Rhabditiform larvae in stool', 'Adult worms in blood', 'Cercariae in stool'],
    correct: 1,
    points: 5,
    feedback: 'Rhabditiform larvae are commonly detected in stool during laboratory diagnosis of strongyloidiasis.'
  },
  {
    type: 'multiple',
    text: 'Disseminated strongyloidiasis is particularly associated with:',
    options: ['Immunocompromised individuals', 'Healthy adults only', 'Newborn babies only', 'Athletes'],
    correct: 0,
    points: 5,
    feedback: 'Disseminated strongyloidiasis is particularly associated with immunocompromised individuals.'
  },
  {
    type: 'multiple',
    text: 'Tapeworms are classified under:',
    options: ['Nematodes', 'Cestodes', 'Trematodes', 'Protozoa'],
    correct: 1,
    points: 5,
    feedback: 'Tapeworms belong to the class of parasitic flatworms known as cestodes.'
  },
  {
    type: 'multiple',
    text: 'The anterior attachment organ of a tapeworm is called the:',
    options: ['Scolex', 'Strobila', 'Proglottid', 'Cercaria'],
    correct: 0,
    points: 5,
    feedback: 'The scolex is the anterior attachment organ of a tapeworm.'
  },
  {
    type: 'multiple',
    text: 'Tapeworms obtain nutrients mainly by:',
    options: ['Feeding through a mouth', 'Absorbing nutrients through their body surface', 'Photosynthesis', 'Phagocytosis'],
    correct: 1,
    points: 5,
    feedback: 'Tapeworms lack a conventional digestive tract and absorb nutrients through their body surface.'
  },
  {
    type: 'multiple',
    text: 'Hymenolepis nana is commonly known as the:',
    options: ['Beef tapeworm', 'Dwarf tapeworm', 'Rat tapeworm', 'Dog tapeworm'],
    correct: 1,
    points: 5,
    feedback: 'Hymenolepis nana is commonly known as the dwarf tapeworm.'
  },
  {
    type: 'multiple',
    text: 'Which of the following is the correct association?',
    options: ['Echinococcus granulosus — hydatid disease', 'Taenia saginata — pork tapeworm', 'Hymenolepis nana — beef tapeworm', 'Diphyllobothrium latum — urinary schistosomiasis'],
    correct: 0,
    points: 5,
    feedback: 'Echinococcus granulosus is associated with hydatid disease. The other associations are incorrect.'
  },

  {
    type: 'multiple',
    text: 'The unique feature of Schistosoma among trematodes is that the adult worms are:',
    options: ['Hermaphroditic', 'Dioecious', 'Asexual', 'Segmented'],
    correct: 1,
    points: 5,
    feedback: 'Schistosoma are dioecious, meaning the adult male and female worms are separate individuals.'
  },
  {
    type: 'multiple',
    text: 'In Schistosoma, the female worm is carried within the male’s:',
    options: ['Oral sucker', 'Gynecophoral canal', 'Bile duct', 'Intestinal lumen'],
    correct: 1,
    points: 5,
    feedback: 'The female Schistosoma is carried within the gynecophoral canal of the male.'
  },
  {
    type: 'multiple',
    text: 'The infective stage of Schistosoma that penetrates human skin is the:',
    options: ['Miracidium', 'Cercaria', 'Egg', 'Sporocyst'],
    correct: 1,
    points: 5,
    feedback: 'The cercaria is the infective Schistosoma stage that penetrates human skin.'
  },
  {
    type: 'multiple',
    text: 'The intermediate host of Schistosoma mansoni is a:',
    options: ['Fish', 'Snail', 'Pig', 'Cow'],
    correct: 1,
    points: 5,
    feedback: 'A freshwater snail serves as the intermediate host of Schistosoma mansoni.'
  },
  {
    type: 'multiple',
    text: 'The first larval stage that hatches from a Schistosoma egg is the:',
    options: ['Cercaria', 'Miracidium', 'Metacercaria', 'Redia'],
    correct: 1,
    points: 5,
    feedback: 'The miracidium is the first larval stage to hatch from a Schistosoma egg.'
  },
  {
    type: 'multiple',
    text: 'After entering freshwater, the Schistosoma miracidium primarily seeks:',
    options: ['Humans', 'Snails', 'Fish', 'Mosquitoes'],
    correct: 1,
    points: 5,
    feedback: 'The free-swimming miracidium seeks and penetrates a suitable snail intermediate host.'
  },
  {
    type: 'multiple',
    text: 'Human infection with Schistosoma occurs mainly when:',
    options: ['Cercariae penetrate intact skin', 'Eggs are swallowed', 'Adult worms are eaten', 'Metacercariae are inhaled'],
    correct: 0,
    points: 5,
    feedback: 'Human infection occurs mainly when cercariae in freshwater penetrate the skin.'
  },
  {
    type: 'multiple',
    text: 'S. mansoni adults primarily inhabit the:',
    options: ['Veins of the intestine', 'Urinary bladder', 'Bile ducts', 'Lungs'],
    correct: 0,
    points: 5,
    feedback: 'Adult S. mansoni primarily inhabit veins associated with the intestine.'
  },
  {
    type: 'multiple',
    text: 'S. haematobium adults primarily inhabit veins associated with the:',
    options: ['Liver', 'Urinary bladder', 'Small intestine', 'Lungs'],
    correct: 1,
    points: 5,
    feedback: 'S. haematobium adults primarily inhabit veins associated with the urinary bladder.'
  },
  {
    type: 'multiple',
    text: 'The characteristic egg of S. mansoni has a:',
    options: ['Terminal spine', 'Lateral spine', 'Bipolar plug', 'Operculum'],
    correct: 1,
    points: 5,
    feedback: 'S. mansoni eggs are characterized by a lateral spine.'
  },
  {
    type: 'multiple',
    text: 'The characteristic egg of S. haematobium has a:',
    options: ['Lateral spine', 'Terminal spine', 'Hook', 'Operculum'],
    correct: 1,
    points: 5,
    feedback: 'S. haematobium eggs characteristically possess a terminal spine.'
  },
  {
    type: 'multiple',
    text: 'A major pathogenic manifestation of S. haematobium infection is:',
    options: ['Haematuria', 'Intestinal obstruction', 'Severe anaemia from blood loss', 'Hydatid cyst'],
    correct: 0,
    points: 5,
    feedback: 'Haematuria is a major manifestation of urinary schistosomiasis caused by S. haematobium.'
  },
  {
    type: 'multiple',
    text: 'The pathology of schistosomiasis is largely associated with:',
    options: ['Adult worms eating tissue', 'Host reaction to deposited eggs', 'Mosquito saliva', 'Larvae destroying red blood cells'],
    correct: 1,
    points: 5,
    feedback: 'Much of the pathology of schistosomiasis results from the host inflammatory reaction to deposited eggs.'
  },
  {
    type: 'multiple',
    text: 'Diagnosis of urinary schistosomiasis commonly involves detecting eggs in:',
    options: ['Urine', 'Sputum', 'Saliva', 'Skin scrapings'],
    correct: 0,
    points: 5,
    feedback: 'Urinary schistosomiasis is commonly diagnosed by detecting characteristic eggs in urine.'
  },
  {
    type: 'multiple',
    text: 'A major preventive measure against schistosomiasis is:',
    options: ['Avoiding contact with contaminated freshwater', 'Avoiding undercooked beef', 'Wearing gloves when handling pork', 'Avoiding raw vegetables only'],
    correct: 0,
    points: 5,
    feedback: 'Avoiding contact with contaminated freshwater helps prevent exposure to infective Schistosoma cercariae.'
  },

  {
    type: 'multiple',
    text: 'Fasciola hepatica is commonly known as the:',
    options: ['Blood fluke', 'Sheep liver fluke', 'Lung fluke', 'Intestinal fluke'],
    correct: 1,
    points: 5,
    feedback: 'Fasciola hepatica is commonly known as the sheep liver fluke.'
  },
  {
    type: 'multiple',
    text: 'The adult Fasciola hepatica mainly inhabits the:',
    options: ['Bile ducts', 'Urinary bladder', 'Blood vessels', 'Large intestine'],
    correct: 0,
    points: 5,
    feedback: 'Adult Fasciola hepatica primarily inhabits the bile ducts.'
  },
  {
    type: 'multiple',
    text: 'The intermediate host of Fasciola hepatica is a:',
    options: ['Fish', 'Snail', 'Pig', 'Dog'],
    correct: 1,
    points: 5,
    feedback: 'A snail serves as the intermediate host in the life cycle of Fasciola hepatica.'
  },
  {
    type: 'multiple',
    text: 'The infective stage of Fasciola hepatica for humans is the:',
    options: ['Miracidium', 'Cercaria', 'Metacercaria', 'Egg'],
    correct: 2,
    points: 5,
    feedback: 'The metacercaria is the infective stage of Fasciola hepatica acquired by humans.'
  },
  {
    type: 'multiple',
    text: 'Humans commonly acquire fascioliasis by eating:',
    options: ['Raw aquatic vegetation', 'Undercooked pork', 'Raw beef', 'Contaminated fish'],
    correct: 0,
    points: 5,
    feedback: 'Humans commonly acquire fascioliasis by consuming raw aquatic vegetation contaminated with metacercariae.'
  },
  {
    type: 'multiple',
    text: 'After being swallowed, the metacercaria of Fasciola eventually reaches the:',
    options: ['Liver and bile ducts', 'Urinary bladder', 'Brain', 'Large intestine'],
    correct: 0,
    points: 5,
    feedback: 'After ingestion, Fasciola develops and eventually reaches the liver and bile ducts.'
  },
  {
    type: 'multiple',
    text: 'The pathogenic effects of adult Fasciola are mainly associated with damage to the:',
    options: ['Bile ducts and liver', 'Skin', 'Lungs', 'Blood vessels'],
    correct: 0,
    points: 5,
    feedback: 'Adult Fasciola mainly causes pathology involving the bile ducts and liver.'
  },

  {
    type: 'multiple',
    text: 'Ascaris lumbricoides is a:',
    options: ['Trematode', 'Cestode', 'Nematode', 'Protozoan'],
    correct: 2,
    points: 5,
    feedback: 'Ascaris lumbricoides is a parasitic nematode or roundworm.'
  },
  {
    type: 'multiple',
    text: 'The infective stage of Ascaris is the:',
    options: ['Rhabditiform larva', 'Embryonated egg', 'Filariform larva', 'Adult worm'],
    correct: 1,
    points: 5,
    feedback: 'The embryonated egg is the infective stage of Ascaris lumbricoides.'
  },
  {
    type: 'multiple',
    text: 'Humans acquire ascariasis mainly by:',
    options: ['Skin penetration', 'Ingesting embryonated eggs', 'Eating infected beef', 'Mosquito bites'],
    correct: 1,
    points: 5,
    feedback: 'Ascariasis is acquired mainly through ingestion of embryonated Ascaris eggs.'
  },
  {
    type: 'multiple',
    text: 'Adult Ascaris worms are mainly found in the:',
    options: ['Small intestine', 'Large intestine', 'Blood vessels', 'Urinary bladder'],
    correct: 0,
    points: 5,
    feedback: 'Adult Ascaris worms primarily inhabit the small intestine.'
  },
  {
    type: 'multiple',
    text: 'After hatching in the intestine, Ascaris larvae first migrate through the:',
    options: ['Lungs', 'Brain', 'Kidneys', 'Skin'],
    correct: 0,
    points: 5,
    feedback: 'After hatching, Ascaris larvae migrate through the circulation to the lungs as part of their life cycle.'
  },
  {
    type: 'multiple',
    text: 'The migration of Ascaris larvae through the lungs can cause:',
    options: ['Loeffler’s syndrome', 'Hydatid disease', 'Haematuria', 'Elephantiasis'],
    correct: 0,
    points: 5,
    feedback: 'Migration of Ascaris larvae through the lungs can produce Loeffler’s syndrome.'
  },
  {
    type: 'multiple',
    text: 'A major complication of heavy Ascaris infection is:',
    options: ['Intestinal obstruction', 'Bladder cancer', 'Cerebral malaria', 'Skin ulceration'],
    correct: 0,
    points: 5,
    feedback: 'Heavy Ascaris infections can cause intestinal obstruction due to accumulation of adult worms.'
  },
  {
    type: 'multiple',
    text: 'The diagnostic stage of Ascaris commonly detected in stool is the:',
    options: ['Adult worm only', 'Egg', 'Filariform larva', 'Cercaria'],
    correct: 1,
    points: 5,
    feedback: 'Ascaris eggs are commonly detected in stool during laboratory diagnosis.'
  },

  {
    type: 'multiple',
    text: 'The infective stage of hookworm is the:',
    options: ['Egg', 'Filariform larva', 'Rhabditiform larva', 'Adult worm'],
    correct: 1,
    points: 5,
    feedback: 'The filariform larva is the infective stage of hookworm.'
  },
  {
    type: 'multiple',
    text: 'Hookworm infection is commonly acquired through:',
    options: ['Skin penetration', 'Ingestion of cysts', 'Mosquito bites', 'Eating raw fish'],
    correct: 0,
    points: 5,
    feedback: 'Hookworm infection commonly occurs when infective larvae penetrate the skin.'
  },
  {
    type: 'multiple',
    text: 'After penetrating the skin, hookworm larvae are transported through the body and eventually reach the:',
    options: ['Lungs and then intestine', 'Brain and then kidney', 'Liver and then bladder', 'Skin and then blood only'],
    correct: 0,
    points: 5,
    feedback: 'After skin penetration, hookworm larvae migrate through the circulation to the lungs and eventually reach the intestine.'
  },
  {
    type: 'multiple',
    text: 'Adult hookworms primarily attach to the:',
    options: ['Small intestinal mucosa', 'Urinary bladder', 'Lung tissue', 'Liver capsule'],
    correct: 0,
    points: 5,
    feedback: 'Adult hookworms attach to the mucosa of the small intestine.'
  },
  {
    type: 'multiple',
    text: 'The major pathogenic effect of hookworms is:',
    options: ['Iron-deficiency anaemia', 'Haematuria', 'Liver abscess', 'Intestinal cyst formation'],
    correct: 0,
    points: 5,
    feedback: 'Hookworm infection can cause iron-deficiency anaemia due to chronic intestinal blood loss.'
  },
  {
    type: 'multiple',
    text: 'Hookworm anaemia results mainly from:',
    options: ['Blood loss caused by feeding worms', 'Destruction of red cells by larvae', 'Failure of the liver to produce bile', 'Vitamin C deficiency'],
    correct: 0,
    points: 5,
    feedback: 'Hookworm anaemia results mainly from blood loss caused by the feeding activity of adult worms.'
  },

  {
    type: 'multiple',
    text: 'Strongyloides stercoralis can exist as:',
    options: ['Only a parasitic form', 'Parasitic and free-living forms', 'Only a free-living form', 'Only an adult form'],
    correct: 1,
    points: 5,
    feedback: 'Strongyloides stercoralis has both parasitic and free-living forms.'
  },
  {
    type: 'multiple',
    text: 'The infective stage of Strongyloides is the:',
    options: ['Rhabditiform larva', 'Filariform larva', 'Egg', 'Adult female'],
    correct: 1,
    points: 5,
    feedback: 'The filariform larva is the infective stage of Strongyloides stercoralis.'
  },
  {
    type: 'multiple',
    text: 'The infective Strongyloides larva enters humans mainly through:',
    options: ['Skin penetration', 'Ingestion of meat', 'Mosquito bite', 'Inhalation'],
    correct: 0,
    points: 5,
    feedback: 'The infective Strongyloides larva enters the human body mainly by penetrating the skin.'
  },
  {
    type: 'multiple',
    text: 'Adult parasitic Strongyloides females are mainly located in the:',
    options: ['Small intestine', 'Large intestine', 'Blood vessels', 'Urinary bladder'],
    correct: 0,
    points: 5,
    feedback: 'Adult parasitic Strongyloides females are mainly located in the small intestine.'
  },
  {
    type: 'multiple',
    text: 'A special feature of the Strongyloides life cycle is:',
    options: ['Autoinfection', 'Metacercarial development', 'Proglottid formation', 'Cyst formation'],
    correct: 0,
    points: 5,
    feedback: 'Autoinfection is a special feature of the Strongyloides life cycle that allows infection to persist.'
  },
  {
    type: 'multiple',
    text: 'The diagnostic stage of Strongyloides commonly detected in stool is the:',
    options: ['Egg', 'Rhabditiform larva', 'Filariform larva', 'Adult male'],
    correct: 1,
    points: 5,
    feedback: 'Rhabditiform larvae are the diagnostic stage commonly detected in stool.'
  },
  {
    type: 'multiple',
    text: 'Disseminated strongyloidiasis occurs particularly in:',
    options: ['Immunocompromised individuals', 'Healthy children only', 'People with malaria only', 'People who eat pork'],
    correct: 0,
    points: 5,
    feedback: 'Disseminated strongyloidiasis is particularly associated with immunocompromised individuals.'
  },
  {
    type: 'multiple',
    text: 'Larvae migrating through the lungs in strongyloidiasis may cause:',
    options: ['Pneumonia', 'Haematuria', 'Liver abscess', 'Intestinal obstruction'],
    correct: 0,
    points: 5,
    feedback: 'Migration of Strongyloides larvae through the lungs may cause pulmonary symptoms including pneumonia.'
  },

  {
    type: 'multiple',
    text: 'Enterobius vermicularis is commonly known as the:',
    options: ['Whipworm', 'Pinworm/threadworm', 'Hookworm', 'Giant roundworm'],
    correct: 1,
    points: 5,
    feedback: 'Enterobius vermicularis is commonly known as the pinworm or threadworm.'
  },
  {
    type: 'multiple',
    text: 'Infection with Enterobius vermicularis commonly occurs through ingestion of:',
    options: ['Larvated eggs', 'Filariform larvae', 'Metacercariae', 'Cercariae'],
    correct: 0,
    points: 5,
    feedback: 'Enterobius infection commonly occurs when larvated eggs are ingested.'
  },
  {
    type: 'multiple',
    text: 'A characteristic symptom of enterobiasis is:',
    options: ['Perianal itching', 'Haematuria', 'Severe jaundice', 'Cough with blood'],
    correct: 0,
    points: 5,
    feedback: 'Perianal itching is a characteristic symptom of enterobiasis caused by Enterobius vermicularis.'
  },
  {
    type: 'multiple',
    text: 'Enterobius vermicularis infection is particularly common among:',
    options: ['Children', 'Elderly people only', 'Cattle', 'Fish handlers only'],
    correct: 0,
    points: 5,
    feedback: 'Enterobius vermicularis infection is particularly common among children.'
  },
  {
    type: 'multiple',
    text: 'The female Enterobius is distinguished by a:',
    options: ['Straight posterior end', 'Curved posterior end', 'Lateral spine', 'Terminal spine'],
    correct: 0,
    points: 5,
    feedback: 'The female Enterobius is distinguished in the source material by a straight posterior end.'
  },
  {
    type: 'multiple',
    text: 'A major mode of transmission of Enterobius vermicularis is:',
    options: ['Faecal-oral transmission', 'Skin penetration', 'Mosquito transmission', 'Eating undercooked beef'],
    correct: 0,
    points: 5,
    feedback: 'Enterobius vermicularis is commonly transmitted by the faecal-oral route through ingestion of infective eggs.'
  }
];





// let current = 0;
// let answers = new Array(questions.length).fill(null);
// let submitted = new Array(questions.length).fill(false);
// let skipped = new Array(questions.length).fill(false);
// let timerInterval;
// let secondsLeft = questions.length * 30;
 

function prepareQuiz() {

  const shuffledQuestions = shuffleArray(questionBank);

  return shuffledQuestions.map(q => {

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

alert(questions.length)
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
    'Module 4 · Medical Parasitology';

  document.querySelector('.quiz-title').textContent =
    'Medical Helminthology & Parasitic Worms';

  document.querySelector('.quiz-description').textContent =
    'Test your understanding of medically important helminths, including trematodes, nematodes, and cestodes, their life cycles, transmission, clinical manifestations, diagnosis, and prevention.';

  const stats = document.querySelectorAll('.quiz-stats .stat-item span');

  // ⏱ Time
  stats[0].innerHTML =
    `<strong>${minutes} minutes</strong> estimated`;


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
 
  let totalPts = 0, correctCount = 0, incorrectCount = 0, skippedCount = 0;
  const maxPts = questions.reduce((s, q) => s + q.points, 0);
 
  questions.forEach((q, i) => {
    if (skipped[i] || answers[i] === null) { skippedCount++; return; }
    if (checkCorrect(q, answers[i])) { correctCount++; totalPts += q.points; }
    else incorrectCount++;
  });
 
  const pct = Math.round((totalPts / maxPts) * 100);
  const passed = pct >= 70;
 
  document.getElementById('resultScoreNum').textContent = totalPts;
  document.getElementById('resultScoreDenom').textContent = `/${maxPts}`;
  document.getElementById('resultTitle').textContent = passed ? 'Assessment Passed!' : 'Assessment Complete';
  document.getElementById('resultSubtitle').textContent = passed ? `You scored ${pct}% — above the 70% threshold` : `You scored ${pct}% — below the 70% pass threshold`;
  document.getElementById('statCorrect').textContent = correctCount;
  document.getElementById('statIncorrect').textContent = incorrectCount;
  document.getElementById('statPercent').textContent = `${pct}%`;
 
  if (!passed) {
    const header = document.getElementById('resultsHeader');
    header.style.background = pct >= 50 ? '#C07A12' : '#D63B3B';
    document.getElementById('resultIcon').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
  }
 
  const reviewList = document.getElementById('reviewList');
  reviewList.innerHTML = questions.map((q, i) => {
    let status, cls;
    if (skipped[i] || answers[i] === null) { status = 'Skipped'; cls = 'skipped'; }
    else if (checkCorrect(q, answers[i])) { status = 'Correct'; cls = 'correct'; }
    else { status = 'Incorrect'; cls = 'incorrect'; }
    const short = q.text.length > 60 ? q.text.slice(0, 60) + '…' : q.text;
    return `<div class="review-item">
      <div class="review-dot ${cls}"></div>
      <span class="review-q">Q${i+1} — ${short}</span>
      <span class="review-status ${cls}">${status}</span>
    </div>`;
  }).join('');
 
  document.getElementById('resultsScreen').style.display = 'block';
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