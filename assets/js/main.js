/**
 * FUZION ACADEMY - INTERACTIVE CORE ENGINE
 * Sector-11, Pratap Vihar, Ghaziabad | Helpline: 9582774387
 * Founder & Chief Mentor: Praveen Singh Rawat
 */

// Defensive HTML escaping helper to prevent DOM XSS
function escapeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Course Database with full syllabus breakdowns
const coursesData = {
  // ACADEMIC COACHING
  'maths-board': {
    title: 'Mathematics Mastery (Classes 9th to 12th)',
    category: 'academic',
    gradeBadge: 'CBSE & ICSE Boards',
    duration: 'Full Academic Year (10 Months)',
    batchSlots: 'Morning: 7:30 AM - 9:00 AM | Evening: 4:30 PM - 6:00 PM',
    targetAudience: 'Class 9th, 10th, 11th & 12th students targeting 95%+ in Board Exams & competitive foundation.',
    overview: 'An intensive, concept-driven mathematics program designed to eliminate math phobia, solidify core theoretical principles, and develop lightning-fast problem-solving techniques for CBSE and ICSE board exams.',
    modules: [
      'Calculus Intensive: Limits, Continuity, Differentiation, Integrals & Differential Equations',
      'Algebra & Matrices: Determinants, Matrix Algebra, Sequences & Series, Complex Numbers',
      'Vectors & 3D Geometry: Coordinate Geometry, Line & Plane Equations in Space',
      'Trigonometry & Inverse Trigonometric Functions: Identities and proofs mastery',
      'Probability & Statistics: Conditional Probability, Bayes Theorem & Distributions',
      'Step-by-step NCERT + Exemplar + 10 Years Previous Board Papers Rigorous Drilling',
      'Weekly Timed Mock Tests & Personalized Doubt Resolution Sessions'
    ]
  },
  'physics-board': {
    title: 'Physics Concept & Problem Solving (Classes 11th & 12th)',
    category: 'academic',
    gradeBadge: 'Class 11th & 12th',
    duration: 'Academic Year Program (9 Months)',
    batchSlots: 'Morning: 6:30 AM - 7:30 AM | Evening: 6:00 PM - 7:30 PM',
    targetAudience: 'Class 11th and 12th Science students (PCM/PCB) aspiring for top marks in Board Exams.',
    overview: 'Comprehensive conceptual physics training connecting theoretical physics with practical real-world intuition. Master numerical problems, derivations, ray/wave diagrams, and circuit analysis with zero rote memorization.',
    modules: [
      'Electrostatics & Current Electricity: Potentials, Capacitors, Kirchhoff\'s Laws',
      'Magnetism & Electromagnetic Induction: Ampere\'s Law, Faraday\'s Law, AC Circuits',
      'Optics & Dual Nature: Ray Optics, Wave Optics, Photoelectric Effect & Atoms/Nuclei',
      'Class 11 Mechanics Revisit: Kinematics, Laws of Motion, Work Energy Power & Rotational Dynamics',
      'Thermodynamics, Waves & Oscillations: Kinetic theory and harmonic motions',
      'Mastery of CBSE Formula Derivations & High-Order Thinking (HOTS) Numericals',
      'Regular Chapter-wise Tests with Model Answer Evaluation'
    ]
  },
  'chemistry-board': {
    title: 'Comprehensive Chemistry (Physical, Organic & Inorganic)',
    category: 'academic',
    gradeBadge: 'Class 11th & 12th',
    duration: 'Academic Year Program (9 Months)',
    batchSlots: 'Morning: 9:00 AM - 10:30 AM | Evening: 5:00 PM - 6:30 PM',
    targetAudience: 'Medical & Engineering stream students (Class 11 & 12) demanding total clarity across all 3 Chemistry branches.',
    overview: 'Demystifying chemical reactions and molecular structures through systematic organic mechanisms, physical chemistry numerical shortcuts, and strategic mnemonic frameworks for inorganic chemistry.',
    modules: [
      'Physical Chemistry: Solutions, Electrochemistry, Chemical Kinetics & Thermodynamics',
      'Organic Chemistry Mechanism Mastery: Haloalkanes, Alcohols, Aldehydes, Ketones, Carboxylic Acids & Amines',
      'Reaction Mechanisms: Electrophilic/Nucleophilic additions, named reactions, and conversion roadmaps',
      'Inorganic Chemistry: d- and f-Block Elements, Coordination Compounds & Periodic Trends',
      'Biomolecules, Polymers & Everyday Chemistry',
      'Lab Practical Preparation, Viva Guidance & Board Balance Sheets',
      'Exclusive Organic Conversion Cheat Sheets and High-Frequency Reaction Drills'
    ]
  },
  'applied-maths': {
    title: 'Applied Mathematics (Commerce & Humanities)',
    category: 'academic',
    gradeBadge: 'Class 11th & 12th',
    duration: '8 - 10 Months',
    batchSlots: 'Evening: 3:30 PM - 5:00 PM | Weekend Special: 10:00 AM - 1:00 PM',
    targetAudience: 'Commerce, Humanities & Economics students seeking a career in Data, Finance, Economics, CA, or Management.',
    overview: 'Specialized syllabus tailored precisely for CBSE Applied Mathematics (Subject Code 241), bridging numerical reasoning with practical business calculations, financial mathematics, and statistical forecasting.',
    modules: [
      'Numbers, Quantification & Numerical Applications: Modulo Arithmetic, Logarithms & Boats/Pipes',
      'Algebra & Matrices applied to Economic models and Input-Output Analysis',
      'Calculus in Business: Marginal Cost, Marginal Revenue, Optimization & Rate of Growth',
      'Financial Mathematics: Compound Interest, Annuities, Amortization, Perpetuity, Sinking Funds & EMI calculations',
      'Probability Distributions: Poisson, Normal, Binomial Distributions & Hypothesis Testing',
      'Linear Programming Problems (LPP) with Graphic Optimization',
      'Spreadsheet Data Analysis Practical Support & CBSE Sample Papers'
    ]
  },
  'english-board': {
    title: 'English Core & Elective (Board Exam Excellence)',
    category: 'academic',
    gradeBadge: 'Classes 9th to 12th',
    duration: '6 Months Fast-Track / Year Long',
    batchSlots: 'Evening: 4:00 PM - 5:15 PM | Saturday - Sunday Batches',
    targetAudience: 'Students wanting to convert English from an overlooked subject into a 98+ score booster in overall board percentage.',
    overview: 'Master reading comprehension, advance analytical literature interpretation, and draft impeccably structured creative writing formats (Notices, Formal Letters, Articles, Report Writing, Debates).',
    modules: [
      'Reading Comprehension: Speed-reading and inference extraction for unseen factual & discursive passages',
      'Advanced Writing Skills: Formats and lexical styling for Letters, Invitations, Replies, Reports, and Articles',
      'Flamingo & Vistas / First Flight Prose Analysis: Character sketches, thematic depth, and quote integration',
      'Poetry Appreciation: Stanza-by-stanza figurative language analysis, central ideas, and tone examination',
      'Grammar Precision: Tenses, reported speech, active-passive voice, and error correction drills',
      'Presentation & Word Choice: Structuring answers for maximum board examiner appeal',
      'Full-Length 80-Mark Sample Board Paper Time Management Drills'
    ]
  },

  // SOFT SKILLS & COMMUNICATION
  'spoken-english': {
    title: 'Spoken English & Fluency Mastery',
    category: 'skills',
    gradeBadge: 'All Levels (Beginner to Advanced)',
    duration: '3 Months (Live Practice & Roleplay)',
    batchSlots: 'Morning: 8:00 AM - 9:30 AM | Evening: 6:30 PM - 8:00 PM',
    targetAudience: 'School/College students, job seekers, and homemakers looking to break hesitation and speak fluent, natural English.',
    overview: 'A high-energy, immersive program structured to eliminate hesitation, remove native language translation barriers, and develop immediate situational fluency in social, professional, and everyday life.',
    modules: [
      'Elimination of Mother Tongue Influence (MTI) and Hesitation Removal Frameworks',
      'Day-to-Day Conversational English: 50+ real-life scenarios (Travel, Social, Business, Casual)',
      'Vocabulary Expansion: High-frequency idioms, modern phrasal verbs, and expressive collocations',
      'Sentence Structure Optimization: Thinking in English without internal Hindi translation',
      'Interactive Daily Pair Talks, Extempore Sessions & Group Discussions',
      'Correct Pronunciation of Tricky Words & Vowel Sound Articulation',
      'Weekly Audio/Video Recording Self-Review with Mentor Feedback'
    ]
  },
  'comm-skills': {
    title: 'Professional Communication & Interpersonal Dynamics',
    category: 'skills',
    gradeBadge: 'Career & Executive Track',
    duration: '2.5 Months',
    batchSlots: 'Evening: 7:00 PM - 8:30 PM | Weekend Fast-Track',
    targetAudience: 'College graduates, corporate professionals, entrepreneurs, and team leaders.',
    overview: 'Upgrade your communication from simply talking to commanding respect. Learn active listening, conflict negotiation, persuasive messaging, assertive dialogue, and diplomatic email/chat correspondence.',
    modules: [
      'The 7 Cs of Effective Communication: Clarity, Conciseness, Coherence, and Courtesy',
      'Active Listening & Empathetic Response: De-escalating conflicts and building rapport',
      'Assertive vs. Passive/Aggressive Communication Mastery',
      'Corporate Email & Business Writing: Proposals, status reports, and executive updates',
      'Non-Violent Feedback & Difficult Workplace Conversations',
      'Cross-Cultural Communication & Workplace Etiquette',
      'Live Case Studies and Simulated Workplace Negotiations'
    ]
  },
  'presentation-skills': {
    title: 'Executive Presentation Skills & Slide Mastery',
    category: 'skills',
    gradeBadge: 'College & Professional',
    duration: '6 Weeks',
    batchSlots: 'Weekend Saturday & Sunday: 11:00 AM - 1:30 PM',
    targetAudience: 'Students preparing for seminar/project defense and professionals pitching to clients, stakeholders, or boards.',
    overview: 'Turn mundane slides into captivating storytelling experiences. Learn how to structure your narrative, design high-impact visual decks, control audience attention, and handle spontaneous Q&A sessions under pressure.',
    modules: [
      'Storytelling Frameworks for Presentations: Hook, Problem, Solution, Impact & Call-to-Action',
      'Slide Design Principles: Typography, white space, charts, and avoiding text-heavy clutter',
      'Body Language & Stage Mechanics: Eye contact triangulations, posture, and purposeful movement',
      'Voice Dynamics: Pacing, pauses, inflection, and vocal projection without shouting',
      'Mastering High-Stakes Q&A: Handling skeptical questions and graceful topic pivoting',
      'Live Presentation Delivery: Record, Review, Refine with video playback critique'
    ]
  },
  'public-speaking': {
    title: 'Public Speaking & Stage Presence',
    category: 'skills',
    gradeBadge: 'Youth & Adults',
    duration: '8 Weeks',
    batchSlots: 'Evening: 5:30 PM - 7:00 PM | Sunday Intensive',
    targetAudience: 'Anyone who feels nervous on stage, at podiums, or speaking before crowds of 10 to 500+ people.',
    overview: 'Conquer glossophobia (stage fright) once and for all. Under the direct coaching of Praveen Singh Rawat, you will step up to the podium, deliver memorable keynotes, debates, and toasts with unshakable charisma.',
    modules: [
      'Overcoming Stage Fright & Adrenaline Management: Breathing techniques and physical grounding',
      'Speech Crafting Architecture: Aristotle\'s Ethos, Pathos, and Logos for persuasive speeches',
      'Extempore & Impromptu Speaking: The PREP and STAR methods for speaking on the spot',
      'Microphone Technique, Podium Etiquette & Audience Engagement Hacks',
      'Debating Techniques & Counter-Argument Strategy',
      'Humor, Metaphors & Emotion: Keeping audiences leaning forward',
      'Final Graduation Showcase: Live Speech in front of a live academy audience'
    ]
  },
  'interview-prep': {
    title: 'Comprehensive Interview Preparation & Placement Readiness',
    category: 'skills',
    gradeBadge: 'Graduates & Job Seekers',
    duration: '6 Weeks (Intensive)',
    batchSlots: 'Evening: 7:30 PM - 9:00 PM | Flexible Weekend Slots',
    targetAudience: 'Final year college students, freshers, and experienced professionals transitioning to new career roles.',
    overview: 'A complete end-to-end recruitment transformation program. Craft an ATS-beating resume, master behavioral & technical interview rounds, navigate salary negotiations, and ace group discussions.',
    modules: [
      'ATS-Optimized Resume, Cover Letter & LinkedIn Profile Revamp',
      'Mastering "Tell Me About Yourself" & Key Behavioral Questions with STAR Technique',
      'Cracking Group Discussions (GD): Initiating, summarizing, moderating, and standing out',
      'Virtual & In-Person Interview Body Language, Attire, and Camera Presence',
      'Handling Stress Interviews, Career Gaps & Tricky HR Questions',
      'Compensation & Salary Negotiation Strategy for Freshers & Lateral Hires',
      '3 1-on-1 Mock Interviews with Detailed Scorecards & Personalized Improvement Roadmaps'
    ]
  },
  'personality-dev': {
    title: 'Complete Personality Development & Grooming',
    category: 'skills',
    gradeBadge: 'All Ages',
    duration: '2 Months',
    batchSlots: 'Morning: 10:00 AM - 11:30 AM | Evening: 6:00 PM - 7:30 PM',
    targetAudience: 'Young learners, college students, and aspiring leaders seeking high self-esteem, grooming, and social polish.',
    overview: 'Holistic character and confidence development covering personal grooming, table manners, posture, mindset shifts, emotional intelligence, and executive presence that makes you memorable anywhere.',
    modules: [
      'Developing Unshakeable Self-Esteem & Overcoming Inferiority Complex',
      'Body Language, Posture Correction & Confident Handshakes',
      'Grooming, Dressing Sense & Formal Wardrobe Etiquette',
      'Social Grace & Table Etiquette: Dining manners, introductions, and networking small talk',
      'Emotional Intelligence (EQ): Anger management, positive outlook, and handling peer pressure',
      'Goal Setting, Habit Architecture & Daily Time Mastery',
      'Personal Brand Formulation & Charismatic Gravitas'
    ]
  },
  'voice-accent': {
    title: 'Voice & Accent Training (Neutral International English)',
    category: 'skills',
    gradeBadge: 'BPO / Corporate / Global Careers',
    duration: '6 Weeks',
    batchSlots: 'Evening: 8:00 PM - 9:30 PM | Special Night Batch',
    targetAudience: 'Professionals dealing with overseas clients, call center aspirants, trainers, and voice artists.',
    overview: 'Refine your vocal identity. Neutralize strong regional accents, correct vowel/consonant phonetics, and adopt natural English intonation, pitch variation, and cadence for flawless global communication.',
    modules: [
      'Phonetics & The International Phonetic Alphabet (IPA) Simplified',
      'Neutralizing Mother Tongue Accent (Jaw, Tongue & Lip positioning exercises)',
      'Vowel Lengths, Diphthongs & Consonant Clarity (P/B, T/D, S/SH, V/W distinctions)',
      'Intonation, Word Stress & Sentence Rhythm Patterns',
      'Connected Speech: Elision, linking, and contractions for natural fluency',
      'Vocal Warm-Ups: Breathing support, resonance, tone modulation, and pitch control',
      'Live Studio Mic Practice & Accent Neutralization Certification'
    ]
  }
};

// Default Gallery Images Database with real photos converted from CR2
const defaultGalleryData = [
  {
    src: 'assets/academy/IMG_2550.jpg',
    thumb: 'assets/academy/thumbs/IMG_2550.jpg',
    category: 'classroom',
    title: 'Interactive Conceptual Mentorship',
    desc: 'Praveen Sir delivering focused problem-solving sessions at Fuzion Academy.'
  },
  {
    src: 'assets/academy/IMG_2555.jpg',
    thumb: 'assets/academy/thumbs/IMG_2555.jpg',
    category: 'speaking',
    title: 'Public Speaking & Stage Presentations',
    desc: 'Students actively speaking and presenting on stage to overcome stage fear.'
  },
  {
    src: 'assets/academy/IMG_2559.jpg',
    thumb: 'assets/academy/thumbs/IMG_2559.jpg',
    category: 'classroom',
    title: 'Small Batch Individual Attention',
    desc: 'Ensuring every student gets doubt resolution and personal guidance.'
  },
  {
    src: 'assets/academy/IMG_2563.jpg',
    thumb: 'assets/academy/thumbs/IMG_2563.jpg',
    category: 'facilities',
    title: 'State-of-the-Art Learning Ambiance',
    desc: 'Comfortable, air-conditioned smart classrooms designed for deep focus.'
  },
  {
    src: 'assets/academy/IMG_2567.jpg',
    thumb: 'assets/academy/thumbs/IMG_2567.jpg',
    category: 'speaking',
    title: 'Debates & Group Discussion Drills',
    desc: 'Engaging peer discussions on current topics and communication nuances.'
  },
  {
    src: 'assets/academy/IMG_2571.jpg',
    thumb: 'assets/academy/thumbs/IMG_2571.jpg',
    category: 'classroom',
    title: 'Rigorous Board Exam Preparation',
    desc: 'Exam-oriented question analysis, speed drills, and mock test evaluations.'
  },
  {
    src: 'assets/academy/IMG_2575.jpg',
    thumb: 'assets/academy/thumbs/IMG_2575.jpg',
    category: 'facilities',
    title: 'Dedicated Study & Practice Space',
    desc: 'Students utilizing quiet study resources and reference materials.'
  },
  {
    src: 'assets/academy/IMG_2579.jpg',
    thumb: 'assets/academy/thumbs/IMG_2579.jpg',
    category: 'speaking',
    title: 'Confidence Transformation Activities',
    desc: 'Instilling poise, body language awareness, and vocal clarity.'
  },
  {
    src: 'assets/academy/IMG_2583.jpg',
    thumb: 'assets/academy/thumbs/IMG_2583.jpg',
    category: 'classroom',
    title: 'Science & Math Formula Demystification',
    desc: 'Breaking down tough physics and calculus derivations into intuitive steps.'
  },
  {
    src: 'assets/academy/IMG_2592.jpg',
    thumb: 'assets/academy/thumbs/IMG_2592.jpg',
    category: 'facilities',
    title: 'Mentor-Student One-on-One Consultations',
    desc: 'Regular progress tracking and career counseling with parents and students.'
  },
  {
    src: 'assets/academy/IMG_2596.jpg',
    thumb: 'assets/academy/thumbs/IMG_2596.jpg',
    category: 'speaking',
    title: 'Interview & Presentation Rehearsals',
    desc: 'Mock interview rounds building placement readiness and executive presence.'
  },
  {
    src: 'assets/academy/IMG_2603.jpg',
    thumb: 'assets/academy/thumbs/IMG_2603.jpg',
    category: 'classroom',
    title: 'Student Milestone Celebrations',
    desc: 'Acknowledging board toppers and communication graduates at Fuzion Academy.'
  }
];

// Active Gallery Data (loads custom picks from localStorage if user customized via photo-selector.html)
let galleryData = [...defaultGalleryData];

function applyCustomPhotoConfig() {
  const customConfigRaw = localStorage.getItem('fuzion_photos_config');
  let customAddedPhotos = [];
  try {
    customAddedPhotos = JSON.parse(localStorage.getItem('fuzion_custom_added_photos') || '[]');
  } catch (e) {
    customAddedPhotos = [];
  }

  function resolveSrc(filename) {
    const custom = customAddedPhotos.find(p => typeof p === 'object' && p.name === filename);
    if (custom && custom.dataUrl) return custom.dataUrl;
    if (filename.startsWith('data:') || filename.startsWith('http') || filename.startsWith('blob:') || filename.startsWith('assets/')) return filename;
    return `assets/academy/${filename}`;
  }

  function resolveThumb(filename) {
    const custom = customAddedPhotos.find(p => typeof p === 'object' && p.name === filename);
    if (custom && custom.dataUrl) return custom.dataUrl;
    if (filename.startsWith('data:') || filename.startsWith('http') || filename.startsWith('blob:') || filename.includes('/thumbs/')) return filename;
    if (filename.startsWith('assets/academy/')) return filename.replace('assets/academy/', 'assets/academy/thumbs/');
    return `assets/academy/thumbs/${filename}`;
  }

  if (customConfigRaw) {
    try {
      const config = JSON.parse(customConfigRaw);
      
      // Update Hero Image
      if (config.hero) {
        const heroImg = document.getElementById('heroCardImage');
        if (heroImg) {
          heroImg.src = resolveSrc(config.hero);
        }
      }
      
      // Update Gallery
      if (Array.isArray(config.gallery) && config.gallery.length > 0) {
        galleryData = config.gallery.map(item => ({
          src: resolveSrc(item.file),
          thumb: resolveThumb(item.file),
          category: item.category || 'classroom',
          title: item.title || `Fuzion Academy (${item.file.replace(/\.[^/.]+$/, '')})`,
          desc: item.desc || 'Real classroom and student activity session at Fuzion Academy.'
        }));
      }
    } catch (err) {
      console.warn('Could not parse fuzion_photos_config', err);
    }
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  applyCustomPhotoConfig();
  initMobileNav();
  initCourseTabs();
  initSyllabusModal();
  initStatsCounter();
  initGallery();
  initLightbox();
  initRegistrationForm();
  initTestimonialsSlider();
  initNavbarScroll();
  initDiscountModal();
  initLazyMap();
});

// Mobile Navigation Toggle
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('closeMobileMenu');
  const menu = document.getElementById('mobileMenuDrawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.remove('translate-x-full');
      document.body.classList.add('overflow-hidden');
    });

    const closeMenu = () => {
      menu.classList.add('translate-x-full');
      document.body.classList.remove('overflow-hidden');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    links.forEach(link => link.addEventListener('click', closeMenu));
  }
}

// Navbar scroll blur effect
function initNavbarScroll() {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    const isLight = document.documentElement.classList.contains('light');
    if (window.scrollY > 40) {
      if (isLight) {
        navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-md', 'border-b', 'border-slate-200');
        navbar.classList.remove('bg-transparent', 'bg-[#080c14]/90', 'border-emerald-500/20');
      } else {
        navbar.classList.add('bg-[#080c14]/90', 'backdrop-blur-md', 'shadow-2xl', 'border-b', 'border-emerald-500/20');
        navbar.classList.remove('bg-transparent', 'bg-white/95', 'border-slate-200');
      }
    } else {
      navbar.classList.remove('bg-[#080c14]/90', 'bg-white/95', 'backdrop-blur-md', 'shadow-2xl', 'shadow-md', 'border-b', 'border-emerald-500/20', 'border-slate-200');
      navbar.classList.add('bg-transparent');
    }
  });
}

// Course Tabs Switching
function initCourseTabs() {
  const tabs = document.querySelectorAll('.course-tab-btn');
  const academicGrid = document.getElementById('academicCoursesGrid');
  const skillsGrid = document.getElementById('skillsCoursesGrid');

  if (!tabs.length || !academicGrid || !skillsGrid) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active', 'border-emerald-400', 'text-emerald-400', 'bg-emerald-500/15', 'shadow-lg');
        t.classList.add('border-white/10', 'text-slate-400', 'bg-white/5');
      });

      tab.classList.add('active', 'border-emerald-400', 'text-emerald-400', 'bg-emerald-500/15', 'shadow-lg');
      tab.classList.remove('border-white/10', 'text-slate-400', 'bg-white/5');

      const targetCategory = tab.dataset.target;
      if (targetCategory === 'academic') {
        academicGrid.classList.remove('hidden');
        skillsGrid.classList.add('hidden');
      } else {
        academicGrid.classList.add('hidden');
        skillsGrid.classList.remove('hidden');
      }
    });
  });
}

// Syllabus Modal Open/Close & Auto-populate Form
function initSyllabusModal() {
  const modal = document.getElementById('syllabusModal');
  const modalClose = document.getElementById('closeModalBtn');
  const modalBackdrop = document.getElementById('modalBackdropOverlay');
  const enrollBtn = document.getElementById('modalEnrollBtn');

  if (!modal) return;

  // Buttons that trigger syllabus modal
  document.querySelectorAll('.open-syllabus-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const courseKey = btn.dataset.course;
      const data = coursesData[courseKey];
      if (!data) return;

      // Populate Modal Fields
      document.getElementById('modalCourseTitle').textContent = data.title;
      document.getElementById('modalCourseBadge').textContent = data.gradeBadge;
      document.getElementById('modalCourseOverview').textContent = data.overview;
      document.getElementById('modalCourseDuration').textContent = data.duration;
      document.getElementById('modalCourseSlots').textContent = data.batchSlots;
      document.getElementById('modalCourseTarget').textContent = data.targetAudience;

      // Populate Modules
      const modulesList = document.getElementById('modalCourseModules');
      modulesList.innerHTML = '';
      data.modules.forEach(mod => {
        const li = document.createElement('li');
        li.className = 'flex items-start gap-3 text-slate-300 text-sm md:text-base leading-relaxed';
        li.innerHTML = `
          <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-[#00FF66] shrink-0 mt-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
          </span>
          <span>${mod}</span>
        `;
        modulesList.appendChild(li);
      });

      // Bind enroll button with current course
      enrollBtn.dataset.enrollCourse = courseKey;

      // Show Modal
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('modal-open');
      }, 10);
      document.body.classList.add('overflow-hidden');
    });
  });

  const closeModal = () => {
    modal.classList.remove('modal-open');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 250);
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Enroll in This Course Button inside Modal
  if (enrollBtn) {
    enrollBtn.addEventListener('click', () => {
      const courseKey = enrollBtn.dataset.enrollCourse;
      closeModal();

      // Scroll smoothly to registration section
      const regSection = document.getElementById('register');
      if (regSection) {
        regSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      // Pre-select course in dropdown
      const courseSelect = document.getElementById('regCourse');
      if (courseSelect && courseKey) {
        courseSelect.value = courseKey;
        // Visual highlight effect
        courseSelect.classList.add('ring-2', 'ring-[#00FF66]', 'bg-emerald-950/40');
        setTimeout(() => {
          courseSelect.classList.remove('ring-2', 'ring-[#00FF66]', 'bg-emerald-950/40');
        }, 3000);
      }
    });
  }
}



// Animated Numbers for Result Counters
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-counter');
  let animated = false;

  const runCounterAnimation = () => {
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target, 10);
      const prefix = counter.dataset.prefix || '';
      const suffix = counter.dataset.suffix || '';
      let count = 0;
      const step = Math.ceil(target / 45);

      const updateCounter = () => {
        count += step;
        if (count >= target) {
          counter.textContent = prefix + target.toLocaleString('en-IN') + suffix;
        } else {
          counter.textContent = prefix + count.toLocaleString('en-IN') + suffix;
          requestAnimationFrame(updateCounter);
        }
      };
      updateCounter();
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        runCounterAnimation();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('results');
  if (statsSection) observer.observe(statsSection);
}

// Gallery rendering and filtering
function initGallery() {
  const container = document.getElementById('galleryContainer');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  if (!container) return;

  const renderGallery = (filter = 'all') => {
    container.innerHTML = '';
    const filtered = filter === 'all' ? galleryData : galleryData.filter(item => item.category === filter);

    filtered.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-item liquid-glass rounded-2xl overflow-hidden cursor-pointer group relative';
      card.innerHTML = `
        <div class="gallery-img-wrap aspect-[4/3] w-full overflow-hidden bg-slate-900">
          <img src="${escapeHTML(item.thumb)}" onerror="this.onerror=null;this.src='${escapeHTML(item.src)}'" alt="${escapeHTML(item.title)}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
          <span class="text-xs font-mono font-semibold tracking-wider text-[#00FF66] uppercase mb-1">${escapeHTML(item.category)}</span>
          <h4 class="text-white font-bold text-base md:text-lg mb-1">${escapeHTML(item.title)}</h4>
          <p class="text-slate-300 text-xs line-clamp-2">${escapeHTML(item.desc)}</p>
          <div class="mt-3 inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
            <span>View Fullscreen</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openLightbox(index, filtered);
      });

      container.appendChild(card);
    });
  };

  renderGallery('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500/50');
        b.classList.add('bg-white/5', 'text-slate-400', 'border-white/10');
      });
      btn.classList.add('bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500/50');
      btn.classList.remove('bg-white/5', 'text-slate-400', 'border-white/10');
      renderGallery(btn.dataset.category);
    });
  });
}

// Lightbox modal for gallery viewing
let currentGalleryItems = [];
let currentPhotoIndex = 0;

function initLightbox() {
  const lightbox = document.getElementById('galleryLightbox');
  const closeBtn = document.getElementById('closeLightbox');
  const prevBtn = document.getElementById('prevPhoto');
  const nextBtn = document.getElementById('nextPhoto');

  if (!lightbox) return;

  const closeBox = () => {
    lightbox.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeBox);

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentPhotoIndex = (currentPhotoIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
      updateLightboxContent();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentPhotoIndex = (currentPhotoIndex + 1) % currentGalleryItems.length;
      updateLightboxContent();
    });
  }

  // Close on outside click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.id === 'lightboxBackdrop') {
      closeBox();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') closeBox();
      if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
      if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
    }
  });
}

function openLightbox(index, items) {
  const lightbox = document.getElementById('galleryLightbox');
  if (!lightbox) return;

  currentGalleryItems = items;
  currentPhotoIndex = index;
  updateLightboxContent();

  lightbox.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function updateLightboxContent() {
  const item = currentGalleryItems[currentPhotoIndex];
  if (!item) return;

  const imgEl = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const descEl = document.getElementById('lightboxDesc');
  const counterEl = document.getElementById('lightboxCounter');

  if (imgEl) imgEl.src = item.src;
  if (titleEl) titleEl.textContent = item.title;
  if (descEl) descEl.textContent = item.desc;
  if (counterEl) counterEl.textContent = `${currentPhotoIndex + 1} / ${currentGalleryItems.length}`;
}

// Student & Parent Registration Form Handling
function initRegistrationForm() {
  const form = document.getElementById('studentRegistrationForm');
  const successModal = document.getElementById('submissionSuccessModal');
  const closeSuccess = document.getElementById('closeSuccessModal');
  const successSummary = document.getElementById('successSummaryText');
  const whatsappConfirmBtn = document.getElementById('whatsappConfirmBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.fullName.value.trim().slice(0, 100);
    const rawPhone = form.phoneNumber.value.trim();
    const phone = rawPhone.replace(/\D/g, '').slice(0, 10);
    const course = form.courseSelect.options[form.courseSelect.selectedIndex] ? form.courseSelect.options[form.courseSelect.selectedIndex].text : '';
    const batch = form.preferredBatch.options[form.preferredBatch.selectedIndex] ? form.preferredBatch.options[form.preferredBatch.selectedIndex].text : '';
    const role = (form.userRole && (form.userRole.value === 'Parent' ? 'Parent' : 'Student')) || 'Student';
    const notes = form.messageNotes ? form.messageNotes.value.trim().slice(0, 500) : '';

    // Validation
    if (name.length < 3) {
      alert('Please enter your full name (minimum 3 characters).');
      form.fullName.focus();
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit mobile phone number.');
      form.phoneNumber.focus();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Reserving Your Seat...
    `;
    submitBtn.disabled = true;

    // Simulate instant secure processing
    setTimeout(() => {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;

      // Populate Success Modal safely with escaped HTML
      if (successSummary) {
        successSummary.innerHTML = `
          <strong>Applicant:</strong> ${escapeHTML(name)} (${escapeHTML(role)})<br>
          <strong>Helpline Registered:</strong> +91 ${escapeHTML(phone)}<br>
          <strong>Course:</strong> ${escapeHTML(course)}<br>
          <strong>Preferred Timing:</strong> ${escapeHTML(batch)}
        `;
      }

      // Configure direct WhatsApp follow-up button with sanitized inputs
      if (whatsappConfirmBtn) {
        const cleanNameForMsg = name.replace(/[\r\n\t]/g, ' ');
        const cleanNotesForMsg = notes.replace(/[\r\n\t]+/g, ' ');
        const msg = encodeURIComponent(
          `Hi Fuzion Academy! I just submitted an inquiry on your website.\n\n` +
          `\u2022 *Name:* ${cleanNameForMsg} (${role})\n` +
          `\u2022 *Phone:* ${phone}\n` +
          `\u2022 *Course:* ${course}\n` +
          `\u2022 *Timing:* ${batch}` +
          (cleanNotesForMsg ? `\n\u2022 *Note:* ${cleanNotesForMsg}` : '')
        );
        whatsappConfirmBtn.href = `https://wa.me/919582774387?text=${msg}`;
      }

      // Show Success Modal
      if (successModal) {
        successModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }

      form.reset();
    }, 800);
  });

  if (closeSuccess && successModal) {
    closeSuccess.addEventListener('click', () => {
      successModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }
}



// Testimonials Slider with Swiper
function initTestimonialsSlider() {
  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonials-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 28,
        },
      },
    });
  }
}



// ==========================================================================
// THEME TOGGLE (DARK & LIGHT MODE)
// ==========================================================================
function initThemeToggle() {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('fuzion_theme');

  if (savedTheme === 'light') {
    root.classList.remove('dark');
    root.classList.add('light');
    updateThemeIcons(true);
  } else {
    root.classList.remove('light');
    root.classList.add('dark');
    updateThemeIcons(false);
  }

  const toggleBtns = document.querySelectorAll('.theme-toggle-trigger');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isLight = root.classList.contains('light');
      if (isLight) {
        root.classList.remove('light');
        root.classList.add('dark');
        localStorage.setItem('fuzion_theme', 'dark');
        updateThemeIcons(false);
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
        localStorage.setItem('fuzion_theme', 'light');
        updateThemeIcons(true);
      }
    });
  });
}

function updateThemeIcons(isLight) {
  const icons = document.querySelectorAll('.theme-toggle-icon');
  const labels = document.querySelectorAll('.theme-toggle-label');
  icons.forEach(el => {
    if (isLight) {
      // Show Moon icon (switch back to dark)
      el.innerHTML = `<svg class="w-4 h-4 text-indigo-500 fill-current" viewBox="0 0 24 24"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/></svg>`;
    } else {
      // Show Sun icon (switch to light)
      el.innerHTML = `<svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
    }
  });
  labels.forEach(l => {
    l.textContent = isLight ? 'Dark Mode' : 'Light Mode';
  });
}

// ==========================================================================
// 1-MINUTE DISCOUNT POPUP MODAL & BANNER SERVICE
// ==========================================================================
function initDiscountModal() {
  const modal = document.getElementById('discountModal');
  if (!modal) return;

  const closeBtn = document.getElementById('closeDiscountBtn');
  const laterBtn = document.getElementById('discountMaybeLater');
  const backdrop = document.getElementById('discountModalBackdrop');
  const claimBtn = document.getElementById('claimDiscountBtn');
  const copyBtn = document.getElementById('copyDiscountCodeBtn');
  const floatingPill = document.getElementById('floatingDiscountPill');
  const timerEl = document.getElementById('discountTimer');

  let countdownMinutes = 14;
  let countdownSeconds = 59;
  let timerInterval = null;

  const startTimer = () => {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (countdownSeconds > 0) {
        countdownSeconds--;
      } else {
        if (countdownMinutes > 0) {
          countdownMinutes--;
          countdownSeconds = 59;
        } else {
          clearInterval(timerInterval);
        }
      }
      if (timerEl) {
        timerEl.textContent = `${String(countdownMinutes).padStart(2, '0')}:${String(countdownSeconds).padStart(2, '0')}`;
      }
    }, 1000);
  };

  const showModal = () => {
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.add('modal-open');
    }, 10);
    document.body.classList.add('overflow-hidden');
    startTimer();
  };

  const closeModal = (permanent = false) => {
    modal.classList.remove('modal-open');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 250);
    if (permanent) {
      sessionStorage.setItem('fuzion_discount_dismissed', 'true');
    }
  };

  // Schedule auto-popup after 1 minute (60,000 ms)
  const isDismissed = sessionStorage.getItem('fuzion_discount_dismissed');
  if (!isDismissed) {
    setTimeout(() => {
      const alreadyClaimed = sessionStorage.getItem('fuzion_discount_claimed');
      if (!alreadyClaimed) {
        showModal();
      }
    }, 60000); // 1 minute
  }

  // Quick manual trigger for test & visitors
  if (floatingPill) {
    floatingPill.addEventListener('click', () => {
      showModal();
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', () => closeModal(true));
  if (laterBtn) laterBtn.addEventListener('click', (e) => { e.preventDefault(); closeModal(true); });
  if (backdrop) backdrop.addEventListener('click', () => closeModal(true));

  // Copy Code Button
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('FUZION20').then(() => {
        copyBtn.innerHTML = `
          <svg class="w-4 h-4 text-[#00FF66]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          <span class="text-[#00FF66] font-bold">COPIED!</span>
        `;
        setTimeout(() => {
          copyBtn.innerHTML = `
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
            <span>Copy Code</span>
          `;
        }, 2500);
      });
    });
  }

  // Claim Discount Button (Auto fills form & smooth scrolls)
  if (claimBtn) {
    claimBtn.addEventListener('click', () => {
      sessionStorage.setItem('fuzion_discount_claimed', 'true');
      closeModal();

      const regSection = document.getElementById('register');
      if (regSection) {
        regSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      const notesField = document.getElementById('messageNotes');
      if (notesField) {
        notesField.value = 'Applied Early-Bird Voucher: FUZION20 (20% Off Admissions)';
        notesField.classList.add('ring-2', 'ring-[#00FF66]', 'bg-emerald-950/40');
        setTimeout(() => {
          notesField.classList.remove('ring-2', 'ring-[#00FF66]', 'bg-emerald-950/40');
        }, 3500);
      }
    });
  }
}

// Deferred Lazy Load for Google Maps iframe to boost Initial Page Speed
function initLazyMap() {
  const mapFrame = document.querySelector('.lazy-map-frame');
  if (!mapFrame) return;

  if ('IntersectionObserver' in window) {
    const mapObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const iframe = entry.target;
          const src = iframe.getAttribute('data-src');
          if (src) {
            iframe.src = src;
            iframe.removeAttribute('data-src');
          }
          observer.unobserve(iframe);
        }
      });
    }, { rootMargin: '300px 0px' });
    mapObserver.observe(mapFrame);
  } else {
    // Fallback for older browsers
    const src = mapFrame.getAttribute('data-src');
    if (src) mapFrame.src = src;
  }
}

