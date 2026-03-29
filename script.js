function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

const questions = shuffleArray(
  [
  // ===== MULTIPLE CHOICE =====
  {
    type: 'multiple',
    text: 'Which type of cell has a simpler morphology?',
    options: ['Prokaryotic', 'Eukaryotic', 'Plant', 'Animal'],
    correct: 0,
    points: 5,
    feedback: 'Prokaryotic cells lack a nucleus and membrane-bound organelles, making them structurally simpler.'
  },
  
  {
    type: 'multiple',
    text: 'Comma-shaped bacteria are known as:',
    options: ['Cocci', 'Bacilli', 'Vibrios', 'Spirilla'],
    correct: 2,
    points: 5,
    feedback: 'Vibrios are comma-shaped bacteria like Vibrio cholerae.'
  },
  {
    type: 'multiple',
    text: 'Gram-negative bacteria possess which additional structure?',
    options: ['Capsule', 'Outer membrane', 'Flagella', 'Endospore'],
    correct: 1,
    points: 5,
    feedback: 'Gram-negative bacteria have an outer membrane outside the peptidoglycan layer.'
  },
  {
    type: 'multiple',
    text: 'The main component of peptidoglycan includes:',
    options: ['Lipids', 'Sugars and amino acids', 'Proteins only', 'DNA'],
    correct: 1,
    points: 5,
    feedback: 'Peptidoglycan consists of sugar chains cross-linked by amino acids.'
  },
  {
    type: 'multiple',
    text: 'The site of protein synthesis in bacteria is:',
    options: ['Nucleus', 'Ribosome', 'Golgi body', 'Mitochondria'],
    correct: 1,
    points: 5,
    feedback: 'Ribosomes are responsible for protein synthesis in all cells.'
  },
  {
    type: 'multiple',
    text: 'Which structure is responsible for bacterial movement?',
    options: ['Pili', 'Capsule', 'Flagella', 'Cell wall'],
    correct: 2,
    points: 5,
    feedback: 'Flagella provide motility in bacteria.'
  },
  {
    type: 'multiple',
    text: 'Which solidifying agent is commonly used in culture media?',
    options: ['Gelatin', 'Agar', 'Starch', 'Glucose'],
    correct: 1,
    points: 5,
    feedback: 'Agar is widely used because it remains solid at incubation temperatures.'
  },
  {
    type: 'multiple',
    text: 'Bacteria that grow best at room temperature are:',
    options: ['Thermophiles', 'Psychrophiles', 'Mesophiles', 'Halophiles'],
    correct: 2,
    points: 5,
    feedback: 'Mesophiles grow best between 20°C and 45°C.'
  },
  {
    type: 'multiple',
    text: 'Which enzyme breaks down starch?',
    options: ['Lipase', 'Amylase', 'Protease', 'Catalase'],
    correct: 1,
    points: 5,
    feedback: 'Amylase hydrolyses starch into simpler sugars.'
  },
  {
    type: 'multiple',
    text: 'Indole production is linked to the breakdown of:',
    options: ['Glucose', 'Lactose', 'Tryptophan', 'Sucrose'],
    correct: 2,
    points: 5,
    feedback: 'Tryptophan is broken down to produce indole.'
  },

  // ===== TRUE / FALSE =====
  {
    type: 'truefalse',
    text: 'Plasmids are independent of the bacterial chromosome.',
    correct: true,
    points: 5,
    feedback: 'Plasmids are small circular DNA molecules separate from chromosomal DNA.'
  },
  {
    type: 'truefalse',
    text: 'Log phase growth follows arithmetic progression.',
    correct: false,
    points: 5,
    feedback: 'Log phase follows exponential (geometric) growth, not arithmetic.'
  },
  {
    type: 'truefalse',
    text: 'Heat-labile materials can be sterilized by autoclaving.',
    correct: false,
    points: 5,
    feedback: 'Autoclaving uses high heat which destroys heat-labile materials.'
  },
  {
    type: 'truefalse',
    text: 'Bactericidal agents kill bacteria.',
    correct: true,
    points: 5,
    feedback: 'Bactericidal agents kill bacteria, unlike bacteriostatic agents.'
  },

  // ===== INPUT =====
  {
    type: 'input',
    text: 'What is the term for naming organisms using two names?',
    correct: ['binomial nomenclature'],
    points: 5,
    feedback: 'Binomial nomenclature uses genus and species names.'
  },
  {
    type: 'input',
    text: 'What is the time taken for a bacterial population to double called?',
    correct: ['generation time'],
    points: 5,
    feedback: 'Generation time refers to how fast bacteria reproduce.'
  },
  {
    type: 'input',
    text: 'What is unintended microbial growth in a culture called?',
    correct: ['contamination'],
    points: 5,
    feedback: 'Contamination occurs when unwanted microbes enter a culture.'
  },

  // ===== ADD MORE VARIATIONS =====
  {
    type: 'multiple',
    text: 'Spherical bacteria are called:',
    options: ['Bacilli', 'Cocci', 'Vibrios', 'Spirilla'],
    correct: 1,
    points: 5,
    feedback: 'Cocci are spherical bacteria.'
  },
  {
    type: 'multiple',
    text: 'Bacteria reproduce mainly by:',
    options: ['Mitosis', 'Binary fission', 'Budding', 'Meiosis'],
    correct: 1,
    points: 5,
    feedback: 'Binary fission is the primary method of bacterial reproduction.'
  },
  {
    type: 'multiple',
    text: 'Radiation kills microbes mainly by:',
    options: ['Breaking proteins', 'Damaging DNA', 'Destroying lipids', 'Removing water'],
    correct: 1,
    points: 5,
    feedback: 'Radiation damages DNA, preventing replication.'
  },
  {
    type: 'multiple',
    text: 'Safranin in Gram staining is:',
    options: ['Primary stain', 'Counterstain', 'Decolorizer', 'Fixative'],
    correct: 1,
    points: 5,
    feedback: 'Safranin stains Gram-negative bacteria pink.'
  },
  {
    type: 'multiple',
    text: 'Basic stains carry which charge?',
    options: ['Negative', 'Positive', 'Neutral', 'Variable'],
    correct: 1,
    points: 5,
    feedback: 'Basic stains are positively charged and bind to negatively charged cells.'
  },
  {
    "type": "multiple",
    "text": "Which of the following is the primary solidifying agent used in microbiological culture media?",
    "options": ["Gelatin", "Agar", "Peptone", "Silica gel"],
    "correct": 1,
    "points": 5,
    "feedback": "Agar is the preferred solidifying agent because it is not degraded by most bacteria and remains solid at incubation temperatures."
  },
  {
    "type": "multiple",
    "text": "Bacteria that grow best at human body temperature (approximately 37°C) are classified as:",
    "options": ["Psychrophiles", "Thermophiles", "Mesophiles", "Acidophiles"],
    "correct": 2,
    "points": 5,
    "feedback": "Mesophiles are 'middle-loving' organisms that thrive between 20°C and 45°C."
  },
  {
    "type": "truefalse",
    "text": "In the stationary phase of the microbial growth curve, the rate of cell division is equal to the rate of cell death.",
    "correct": true,
    "points": 5,
    "feedback": "Stationary phase occurs when nutrient depletion and waste accumulation cause the growth rate to plateau."
  },
  {
    "type": "input",
    "text": "What is the term for comma-shaped bacteria?",
    "correct": ["vibrio", "vibrios"],
    "points": 5,
    "feedback": "Vibrio is the morphological term for curved or comma-shaped rods."
  },
  {
    "type": "multiple",
    "text": "The Gram stain is considered which type of staining technique?",
    "options": ["Simple stain", "Differential stain", "Special stain", "Negative stain"],
    "correct": 1,
    "points": 5,
    "feedback": "It is differential because it categorizes bacteria into two groups (Gram-positive and Gram-negative) based on cell wall structure."
  },
  {
    "type": "input",
    "text": "Name the two sugar derivatives that compose the backbone of peptidoglycan.",
    "correct": ["NAG and NAM", "N-acetylglucosamine and N-acetylmuramic acid"],
    "points": 5,
    "feedback": "Peptidoglycan consists of alternating units of N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM)."
  },
  {
    "type": "truefalse",
    "text": "Heat-labile materials, such as certain vitamins or enzymes, should be sterilized using an autoclave.",
    "correct": false,
    "points": 5,
    "feedback": "Heat-labile means 'heat-sensitive.' These materials would be destroyed by an autoclave and should be membrane-filtered instead."
  },
  {
    "type": "multiple",
    "text": "Which enzyme is being tested for when hydrogen peroxide ($H_2O_2$) is added to a bacterial culture and bubbles form?",
    "options": ["Amylase", "Catalase", "Lactase", "Polymerase"],
    "correct": 1,
    "points": 5,
    "feedback": "Catalase breaks down hydrogen peroxide into water and oxygen gas, creating visible bubbles."
  },
  {
    "type": "input",
    "text": "The time required for a microbial population to double in number is the:",
    "correct": ["generation time", "doubling time"],
    "points": 5,
    "feedback": "Generation time varies by species and environmental conditions."
  },
  {
    "type": "multiple",
    "text": "What is the function of Safranin in the Gram staining procedure?",
    "options": ["Primary stain", "Mordant", "Decolorizer", "Counterstain"],
    "correct": 3,
    "points": 5,
    "feedback": "Safranin is the counterstain that colors the decolorized Gram-negative cells pink/red."
  },
  {
    "type": "truefalse",
    "text": "Prokaryotic cells possess a simpler morphology than eukaryotic cells.",
    "correct": true,
    "points": 5,
    "feedback": "Prokaryotes lack a membrane-bound nucleus and complex organelles found in eukaryotes."
  },
  {
    "type": "multiple",
    "text": "Which phase of the bacterial growth curve is characterized by rapid exponential cell division?",
    "options": ["Lag phase", "Log phase", "Stationary phase", "Decline phase"],
    "correct": 1,
    "points": 5,
    "feedback": "The Log (logarithmic) or Exponential phase is where the population increases by geometric progression."
  },
  {
    "type": "input",
    "text": "Organisms that require high concentrations of salt to grow are called:",
    "correct": ["halophiles"],
    "points": 5,
    "feedback": "Halophiles are 'salt-loving' organisms often found in marine environments."
  },
  {
    "type": "multiple",
    "text": "An agent that kills bacteria is specifically described as:",
    "options": ["Bacteriostatic", "Bactericidal", "Antiseptic", "Disinfectant"],
    "correct": 1,
    "points": 5,
    "feedback": "The suffix '-cidal' means to kill, whereas '-static' means to inhibit growth."
  },
  {
    "type": "truefalse",
    "text": "Basic stains have a positive charge and are attracted to the negatively charged bacterial cell surface.",
    "correct": true,
    "points": 5,
    "feedback": "Because opposites attract, basic (cationic) dyes like Methylene Blue bind to the cell."
  },
  {
    "type": "input",
    "text": "What is the additional outer layer found specifically in Gram-negative bacterial cell walls?",
    "options": ["Outer membrane"],
    "correct": ["outer membrane"],
    "points": 5,
    "feedback": "Gram-negative bacteria have a thin peptidoglycan layer and an asymmetrical outer membrane containing LPS."
  },
  {
    "type": "multiple",
    "text": "Bacteria that thrive in cold environments, such as a refrigerator, are known as:",
    "options": ["Psychrotrophs", "Thermophiles", "Alkaliphiles", "Mesophiles"],
    "correct": 0,
    "points": 5,
    "feedback": "Psychrotrophs are often responsible for the spoilage of refrigerated foods."
  },
  {
    "type": "truefalse",
    "text": "An antibiotic is a metabolic product of one microorganism that inhibits or kills other microorganisms.",
    "correct": true,
    "points": 5,
    "feedback": "This is the classic biological definition of an antibiotic."
  },
  {
    "type": "input",
    "text": "The process of reducing organisms in a sample by the same factor in successive steps is:",
    "correct": ["serial dilution"],
    "points": 5,
    "feedback": "Serial dilutions are used to reach a countable number of colonies on an agar plate."
  },
  {
    "type": "multiple",
    "text": "Which structure is the primary site of protein synthesis in bacteria?",
    "options": ["Nucleoid", "Mesosome", "Ribosome", "Cytoplasm"],
    "correct": 2,
    "points": 5,
    "feedback": "Ribosomes (70S in bacteria) translate mRNA into protein sequences."
  },
  {
    "type": "multiple",
    "text": "Which component of the bacterial cell is referred to as the 'organ of locomotion'?",
    "options": ["Pili", "Fimbriae", "Flagella", "Capsule"],
    "correct": 2,
    "points": 5,
    "feedback": "Flagella are long, whip-like appendages that rotate to propel bacteria through liquid media."
  },
  {
    "type": "truefalse",
    "text": "Plasmids are essential for the daily survival and reproduction of a bacterial cell.",
    "correct": false,
    "points": 5,
    "feedback": "Plasmids are extrachromosomal DNA that provide 'bonus' traits like antibiotic resistance, but they are not required for basic survival."
  },
  {
    "type": "multiple",
    "text": "What is the primary function of the autoclave in a microbiology laboratory?",
    "options": ["Incubation", "Sterilization", "Pasteurization", "Dehydration"],
    "correct": 1,
    "points": 5,
    "feedback": "The autoclave uses pressurized steam to achieve sterilization by killing all forms of microbial life, including spores."
  },
  {
    "type": "truefalse",
    "text": "Gram-negative bacteria possess a thicker layer of peptidoglycan than Gram-positive bacteria.",
    "correct": false,
    "points": 5,
    "feedback": "Gram-positive bacteria have a thick peptidoglycan layer, while Gram-negative bacteria have a very thin layer and an outer membrane."
  },
  {
    "type": "multiple",
    "text": "In the Gram staining procedure, which reagent acts as the decolorizer?",
    "options": ["Crystal Violet", "Grams Iodine", "95% Ethyl Alcohol", "Safranin"],
    "correct": 2,
    "points": 5,
    "feedback": "Alcohol (or acetone) dehydrates the peptidoglycan and washes the primary stain out of Gram-negative cells."
  },
  {
    "type": "truefalse",
    "text": "Binary fission is the primary method by which most bacteria reproduce.",
    "correct": true,
    "points": 5,
    "feedback": "Binary fission is an asexual process where a single cell divides into two identical daughter cells."
  },
  {
    "type": "multiple",
    "text": "Which term describes a solution of carbohydrates, proteins, and salts where organelles are dispersed in a bacterial cell?",
    "options": ["Nucleoid", "Cytoplasm", "Mesosome", "Periplasm"],
    "correct": 1,
    "points": 5,
    "feedback": "The cytoplasm is the gelatinous internal matrix of the cell containing the genetic material and ribosomes."
  },
  {
    "type": "truefalse",
    "text": "Acid-fast staining is a type of simple staining technique.",
    "correct": false,
    "points": 5,
    "feedback": "Acid-fast staining is a differential stain used to distinguish organisms with waxy cell walls, like Mycobacterium."
  },
  {
    "type": "multiple",
    "text": "Organisms that hydrolyze starch do so by secreting which specific enzyme?",
    "options": ["Lipase", "Protease", "Amylase", "Catalase"],
    "correct": 2,
    "points": 5,
    "feedback": "Amylase breaks down the complex carbohydrate starch into simpler glucose units."
  },
  {
    "type": "truefalse",
    "text": "The lag phase of the growth curve is characterized by a rapid increase in the number of cells.",
    "correct": false,
    "points": 5,
    "feedback": "The lag phase is a period of adaptation with no significant increase in cell number; rapid growth occurs in the log phase."
  }

  // ===== YOU CAN DUPLICATE PATTERN TO SCALE =====
]);

function shuffleOptions(q) {
  if (q.type !== 'multiple') return q;

  const indexed = q.options.map((opt, i) => ({ opt, i }));
  const shuffled = indexed.sort(() => Math.random() - 0.5);

  const newOptions = shuffled.map(o => o.opt);
  const newCorrect = shuffled.findIndex(o => o.i === q.correct);

  return { ...q, options: newOptions, correct: newCorrect };
}


let current = 0;
let answers = new Array(questions.length).fill(null);
let submitted = new Array(questions.length).fill(false);
let skipped = new Array(questions.length).fill(false);
let timerInterval;
let secondsLeft = questions.length * 30;
 
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

  // estimate: 30 sec per question
  const totalSeconds = totalQuestions * 30;
  const minutes = Math.ceil(totalSeconds / 60);

  // Update UI
  document.querySelector('.quiz-category').textContent = 'STM 311 · Microbiology';
  
  document.querySelector('.quiz-title').textContent = 'STM 311 Practice Quiz';

  // STATIC description (as you requested)
  document.querySelector('.quiz-description').textContent =
    'Test your understanding of microbiology concepts including bacteria structure, staining techniques, and growth principles.';

  const stats = document.querySelectorAll('.quiz-stats .stat-item span');

  // ⏱ Time
  stats[0].innerHTML = `<strong>${minutes} minutes</strong> estimated`;

  // ❓ Questions
  stats[1].innerHTML = `<strong>${totalQuestions} questions</strong>`;

  // ⭐ Points
  stats[2].innerHTML = `<strong>${totalPoints} points</strong> total`;

  // ✅ Pass threshold (keep static or dynamic)
  stats[3].innerHTML = `Pass threshold: <strong>70%</strong>`;
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