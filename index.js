// --- RABEYA NOOR SMART RESUME DATABASE & CONTROLLER ---

// 1. PROJECT DATABASE (Map of 32 GitHub Repositories)
const projectsData = [
  {
    id: "daffodilcodehub",
    name: "DaffodilCodeHub",
    title: "DaffodilCodeHub — Competitive Programming Platform",
    category: "web",
    desc: "A state-of-the-art competitive programming platform built for DIU CSE students — modeled after LeetCode, Codeforces, and Toph — with AI-powered mentoring, Docker-isolated code judging, and real-time leaderboards.",
    highlights: [
      "Engineered a secure Docker-isolated online judge for real-time code execution across multiple languages.",
      "Integrated Google Gemini 1.5 Flash AI Mentor with streaming responses, contest integrity locks, and Redis semantic caching.",
      "Built AI Question Scan feature: admins upload a photo of a problem and AI auto-extracts text, constraints, and sample test cases.",
      "Implemented Leaderboard Freeze (hide live standings 30-60 min before contest end) for tournament excitement.",
      "Full LaTeX math rendering and Mermaid.js diagram support inside problem statements.",
      "Production-hardened with rate limiting, Docker resource constraints, and isolated networking.",
      "214+ commits across a full monorepo (Next.js frontend, FastAPI backend, Celery judge workers)."
    ],
    tags: ["TypeScript", "Next.js", "Python", "FastAPI", "Gemini AI", "Docker", "Redis", "PostgreSQL"],
    githubUrl: "https://github.com/rabeyanoor/DaffodilCodeHub",
    liveUrl: "https://daffodil-code-hub.vercel.app"
  },
  {
    id: "anpr",
    name: "Automatic-number-plate-recognition",
    title: "Automatic Number Plate Recognition (ANPR)",
    category: "aiml",
    desc: "A deep-learning-based vehicle license plate recognition system designed using YOLO/OpenCV and OCR algorithms.",
    highlights: [
      "Performs real-time license plate detection in video streams and static images.",
      "Processes image thresholds, contours, and character segmentation.",
      "Integrates Tesseract OCR for high-accuracy character recognition.",
      "Implements a multi-stage pipeline: Detection -> Segmentation -> OCR Recognition."
    ],
    tags: ["Python", "YOLO", "OpenCV", "OCR", "Deep Learning"],
    githubUrl: "https://github.com/rabeyanoor/Automatic-number-plate-recognition"
  },
  {
    id: "plant-disease",
    name: "Plant-Disease-Detector-App",
    title: "Plant Disease Detector App",
    category: "aiml",
    desc: "A mobile-first computer vision and deep learning application that identifies crop and plant leaf diseases in real-time.",
    highlights: [
      "Trained a high-performance Convolutional Neural Network (CNN) model for leaf classification.",
      "Provides organic/chemical treatment advice based on recognized symptoms.",
      "Optimized model size to run on lightweight device runtimes using TensorFlow Lite.",
      "Designed an intuitive camera interface and offline diagnostic engine."
    ],
    tags: ["TypeScript", "React Native", "CNN", "TensorFlow Lite", "Mobile App"],
    githubUrl: "https://github.com/rabeyanoor/Plant-Disease-Detector-App"
  },
  {
    id: "aetherscript",
    name: "AetherScript-Compiler",
    title: "AetherScript Custom Compiler",
    category: "systems",
    desc: "A fully custom compiler built from scratch for a dedicated object-oriented scripting language named AetherScript.",
    highlights: [
      "Features a lexical scanner (Lexer) that tokenizes input code seamlessly.",
      "Implements a recursive-descent Parser that checks grammar rules and handles errors.",
      "Generates an Abstract Syntax Tree (AST) tree and provides a graphical AST visualizer.",
      "Designed custom bytecode execution logic for language statements, functions, and objects."
    ],
    tags: ["Python", "Compiler Design", "Lexer/Parser", "AST", "Systems"],
    githubUrl: "https://github.com/rabeyanoor/AetherScript-Compiler"
  },
  {
    id: "diu-backend",
    name: "DIU-Contest-Backend",
    title: "DIU Programming Contest Backend",
    category: "web",
    desc: "Complete backend infrastructure for managing computer programming contests, leaderboard aggregations, and submissions.",
    highlights: [
      "Engineered secure student/admin authentication layers using JWT security models.",
      "Features real-time leaderboard calculations and scoreboards with WebSocket technology.",
      "Designed a robust REST API layer handling contest rules, schedules, and problems.",
      "Integrates with online sandboxed code execution containers."
    ],
    tags: ["JavaScript", "Node.js", "Express", "MongoDB", "REST APIs"],
    githubUrl: "https://github.com/rabeyanoor/DIU-Contest-Backend"
  },
  {
    id: "myskinx",
    name: "MySkinX--model",
    title: "MySkinX Skin Cancer Diagnostic Model",
    category: "aiml",
    desc: "Advanced dermatological diagnostic model analyzing skin images to detect lesions and early signs of skin cancer.",
    highlights: [
      "Built with Transfer Learning architectures using ResNet50 and MobileNet.",
      "Achieved 92%+ classification accuracy on public medical benchmarks.",
      "Preprocesses and augments irregular skin photo assets to boost generalization.",
      "Designed a light browser interface allowing clinicians to drag-and-drop photos."
    ],
    tags: ["Python", "TensorFlow", "Keras", "Transfer Learning", "Dermatology"],
    githubUrl: "https://github.com/rabeyanoor/MySkinX--model"
  },
  {
    id: "skin-core",
    name: "Skin",
    title: "Skin Clinical Diagnosis App UI",
    category: "web",
    desc: "Frontend portal for the Skin cancer clinical system, featuring high-fidelity diagnostic dashboards.",
    highlights: [
      "Integrated TensorFlow.js models for zero-latency client-side inference.",
      "Visualizes confidence levels of different lesion classifications with charts.",
      "Developed high-grade clinic workflows for patient logging and reports.",
      "Ensures strict compliance with medical UI accessibility principles."
    ],
    tags: ["TypeScript", "React", "TypeScript", "TensorFlow.js", "Medical UI"],
    githubUrl: "https://github.com/rabeyanoor/Skin"
  },
  {
    id: "skycast",
    name: "SkyCast-ML",
    title: "SkyCast Time-Series Weather Forecaster",
    category: "aiml",
    desc: "A neural weather prediction system leveraging sequential historical meteorological sensor data.",
    highlights: [
      "Implements Long Short-Term Memory (LSTM) recurrent nets for meteorological time-series.",
      "Features data engineering pipelines correcting sensor outliers and microclimatic shifts.",
      "Forecasts rainfall probabilities, humidity peaks, and wind directions.",
      "Includes an interactive Streamlit weather dashboard."
    ],
    tags: ["Python", "LSTM", "Recurrent Networks", "Time-Series", "Pandas"],
    githubUrl: "https://github.com/rabeyanoor/SkyCast-ML"
  },
  {
    id: "whatsapp-chat",
    name: "WhatsApp-Chat-Analysis",
    title: "WhatsApp Chat Sentiment & Trend Analyzer",
    category: "aiml",
    desc: "Natural Language Processing (NLP) dashboard that ingests chat exports to present messaging trends and user insights.",
    highlights: [
      "Performs NLP sentiment classification to plot positive/negative conversational moods.",
      "Maps active user hours, word clouds, and emoji distribution metrics.",
      "Cleans and parses raw text dumps using Regex pattern compilers.",
      "Generates interactive charts using Seaborn and Matplotlib."
    ],
    tags: ["Python", "Streamlit", "NLTK", "Natural Language Processing", "Data Analysis"],
    githubUrl: "https://github.com/rabeyanoor/WhatsApp-Chat-Analysis"
  },
  {
    id: "movie-recommender",
    name: "ml-movie-recommender",
    title: "Machine Learning Movie Recommender",
    category: "aiml",
    desc: "Personalized movie search engine utilizing content filtering algorithms and metadata matching.",
    highlights: [
      "Utilizes Term Frequency-Inverse Document Frequency (TF-IDF) feature vectors.",
      "Calculates multi-dimensional Cosine Similarity matrices over 5,000+ movies.",
      "Allows instant recommendations based on genres, keywords, directors, and casts.",
      "Implements dynamic web-based UI matching TMDB movie cover graphics."
    ],
    tags: ["Python", "Cosine Similarity", "TF-IDF", "Scikit-Learn", "Streamlit"],
    githubUrl: "https://github.com/rabeyanoor/ml-movie-recommender"
  },
  {
    id: "computer-vision-core",
    name: "computer-vision",
    title: "Computer Vision Sandbox",
    category: "aiml",
    desc: "Comprehensive suite of computer vision scripts demonstrating object tracking, filters, and image contouring.",
    highlights: [
      "Applies Sobel, Canny, and Laplacian filters for high-precision edge mapping.",
      "Implements real-time face and eye recognition pipelines using Haar Cascades.",
      "Uses color threshold masking for object tracking in motion fields.",
      "Features background subtraction methods for static security cameras."
    ],
    tags: ["Python", "OpenCV", "NumPy", "Haar Cascades", "Image Processing"],
    githubUrl: "https://github.com/rabeyanoor/computer-vision"
  },
  {
    id: "student-perf",
    name: "student-performance-prediction",
    title: "Student Performance Prediction ML",
    category: "aiml",
    desc: "Predictive engine calculating student academic marks and outcomes based on multiple socio-demographic indicators.",
    highlights: [
      "Features a complete data preprocessing pipeline with column transformer scales.",
      "Evaluates performance of Linear Regression, Ridge, and Random Forest Regressors.",
      "Identifies key performance factors (parental education, study hours) using feature weights.",
      "Provides student diagnostics to flag low-performing tendencies early."
    ],
    tags: ["Python", "Scikit-Learn", "Regression", "Feature Selection", "Data Science"],
    githubUrl: "https://github.com/rabeyanoor/student-performance-prediction"
  },
  {
    id: "dl-experiments",
    name: "deep-learning-experiments",
    title: "Deep Learning Neural Labs",
    category: "aiml",
    desc: "Experimental laboratory repository examining custom neural layers, optimizers, and classification models.",
    highlights: [
      "Builds and tunes deep Convolutional Neural Networks on MNIST and CIFAR.",
      "Investigates the effect of Dropout, Batch Normalization, and weight initialization.",
      "Compiles comparative benchmark reports for optimizers (Adam, RMSProp, SGD).",
      "Features custom callback visualizers for active validation accuracy loss."
    ],
    tags: ["Jupyter Notebook", "PyTorch", "TensorFlow", "Hyperparameter Tuning", "CNNs"],
    githubUrl: "https://github.com/rabeyanoor/deep-learning-experiments"
  },
  {
    id: "ai-mastery",
    name: "Artificial-Intelligence-Mastery",
    title: "Artificial Intelligence Mastery Core",
    category: "aiml",
    desc: "Rigorous mathematical and computational catalog of classical artificial intelligence algorithms and theories.",
    highlights: [
      "Implements search heuristics like A*, Breadth-First-Search, and Minimax logic.",
      "Builds decision trees and k-Nearest Neighbors from raw mathematical formulas.",
      "Investigates principal component analysis (PCA) for high-dimensional feature scaling.",
      "Includes complete mathematical breakdowns inside explanatory Jupyter notebooks."
    ],
    tags: ["Jupyter Notebook", "Math", "AI Algorithms", "Numpy", "Machine Learning"],
    githubUrl: "https://github.com/rabeyanoor/Artificial-Intelligence-Mastery"
  },
  {
    id: "nextgen-ui",
    name: "nextgen-gaming-ui",
    title: "NextGen Gaming UI Portal",
    category: "web",
    desc: "Vibrant, ultra-modern gaming portal designed with cutting-edge CSS layouts, glassmorphic widgets, and glowing states.",
    highlights: [
      "Features futuristic glass UI panels using CSS backdrop filters.",
      "Implements custom floating elements, animated grid tiles, and linear glows.",
      "Optimized with pure vanilla CSS for near-zero loading layout shifts.",
      "Fully accessible, incorporating responsive design grids across all resolutions."
    ],
    tags: ["HTML", "CSS", "Vanilla CSS", "Glassmorphism", "Gaming UI"],
    githubUrl: "https://github.com/rabeyanoor/nextgen-gaming-ui"
  },
  {
    id: "crop-yield",
    name: "crop-yield-prediction-ml",
    title: "Smart Crop Yield Predictor",
    category: "aiml",
    desc: "Agricultural yield diagnostic tool computing harvest estimates based on local environment indices and crop types.",
    highlights: [
      "Utilizes advanced Gradient Boosting (XGBoost) and Random Forest ML algorithms.",
      "Identifies weather variables having critical correlation with agricultural yield.",
      "Features interactive Streamlit interface geared for local extension workers.",
      "Achieved low Mean Absolute Error (MAE) scores during model evaluation."
    ],
    tags: ["Python", "XGBoost", "Random Forest", "AgriTech", "Predictive Analytics"],
    githubUrl: "https://github.com/rabeyanoor/crop-yield-prediction-ml"
  },
  {
    id: "payoo-bank",
    name: "Reusable-Payoo-Mobile-Bank",
    title: "Payoo Mobile Financial UI",
    category: "web",
    desc: "A reusable client dashboard clone of Payoo Mobile Financial Services, featuring real-time transaction tracking.",
    highlights: [
      "Implements reusable DOM layout widgets for fast, dynamic loading.",
      "Features frontend validations protecting against invalid balances and bad inputs.",
      "Engineers elegant financial charts illustrating user expenses.",
      "Focused on mobile UI ergonomics and instant button touch triggers."
    ],
    tags: ["HTML", "CSS", "JavaScript", "FinTech UI", "Reusable Components"],
    githubUrl: "https://github.com/rabeyanoor/Reusable-Payoo-Mobile-Bank"
  },
  {
    id: "biker-zone",
    name: "biker-zone-with-daisyUI",
    title: "Biker Zone E-Portal",
    category: "web",
    desc: "High-end dynamic marketplace portal showcasing premium sport motorbikes, detailed specifications, and ratings.",
    highlights: [
      "Built rapidly using DaisyUI and Tailwind CSS layout systems.",
      "Includes animated carousels, responsive specification tables, and customer reviews.",
      "Optimized image loading configurations for fast user loading speeds.",
      "Beautiful typography and high-contrast dark/light layout tokens."
    ],
    tags: ["HTML", "Tailwind CSS", "DaisyUI", "E-Commerce", "Responsive Grid"],
    githubUrl: "https://github.com/rabeyanoor/biker-zone-with-daisyUI"
  },
  {
    id: "tea-house",
    name: "tea-house-with-tailwind",
    title: "Artisanal Tea House Portal",
    category: "web",
    desc: "Beautifully styled landing web layout for an online organic tea house catalog.",
    highlights: [
      "Tailored styling utilizing optimized utility-first Tailwind CSS class layers.",
      "Highlights dynamic responsive grids adapting cleanly from phone screens to ultrawides.",
      "Interactive tea catalog cards with smooth hover animations.",
      "Designed beautiful SVG vectors and modern color blends."
    ],
    tags: ["HTML", "Tailwind CSS", "E-Commerce", "Flexbox", "UI/UX Design"],
    githubUrl: "https://github.com/rabeyanoor/tea-house-with-tailwind"
  },
  {
    id: "space-shooter",
    name: "Space-Shooter-Game",
    title: "Retro Space Shooter Arcade",
    category: "systems",
    desc: "A fully playable classic retro 2D space shooter arcade game built with a custom game loop engine.",
    highlights: [
      "Implements custom collision detection vectors between bullets, ships, and meteors.",
      "Features dynamic sprite sheets, backgrounds scrolling, and automated enemy wave spawners.",
      "Tracks user scores, high-score levels, and sound effect managers.",
      "Maintains clean state handling (Start, Play, Game Over) locking steady 60fps."
    ],
    tags: ["Python", "Pygame", "Game Engine", "OOP", "Arcade Game"],
    githubUrl: "https://github.com/rabeyanoor/Space-Shooter-Game"
  },
  {
    id: "stock-price",
    name: "Stock-Price-Prediction-ML",
    title: "Stock Price Prediction forecasting",
    category: "aiml",
    desc: "Quantitative finance project predicting daily stock movements and closing price indicators.",
    highlights: [
      "Employs sequential LSTM recurrent neural networks to capture historic price queues.",
      "Applies statistical ARIMA filters to benchmark predictive neural net outputs.",
      "Calculates technical indicators like MACD, RSI, and Simple Moving Averages.",
      "Minimizes training losses using Dropout and Early Stopping algorithms."
    ],
    tags: ["Python", "LSTM", "Keras", "ARIMA", "Technical Indicators"],
    githubUrl: "https://github.com/rabeyanoor/Stock-Price-Prediction-ML"
  },
  {
    id: "penguin-fashion",
    name: "penguin-fashion-with-tailwind",
    title: "Penguin E-Commerce Portal",
    category: "web",
    desc: "Modern fashion apparel marketplace portal showcasing winter outfits and client listings.",
    highlights: [
      "Configured utility-first Tailwind layout grids for rapid visual styling.",
      "Responsive card elements adapting smoothly to screen width shifts.",
      "Features interactive hover elevations and detailed price calculation widgets.",
      "Clean semantic HTML layout ensuring high screen reader compatibility."
    ],
    tags: ["HTML", "Tailwind CSS", "E-Commerce UI", "Responsive Design"],
    githubUrl: "https://github.com/rabeyanoor/penguin-fashion-with-tailwind"
  },
  {
    id: "data-analysis",
    name: "data-analysis-with-python",
    title: "Data Analytics Lab",
    category: "aiml",
    desc: "Complete laboratory of data engineering, data cleaning, and statistical visualization pipelines.",
    highlights: [
      "Performs extensive Exploratory Data Analysis (EDA) on vast complex data.",
      "Features methods cleaning missing metrics, handling duplicates, and filtering outliers.",
      "Generates beautiful plots (heatmaps, violin plots) to highlight correlation indexes.",
      "Applies statistical hypothesis testing (t-tests, ANOVA) for dataset validations."
    ],
    tags: ["Jupyter Notebook", "Pandas", "NumPy", "Seaborn", "Data Science"],
    githubUrl: "https://github.com/rabeyanoor/data-analysis-with-python"
  },
  {
    id: "g3-architects",
    name: "g3-architects-website",
    title: "G3 Architects Showcase",
    category: "web",
    desc: "Sophisticated portfolio landing site built for architectural firms featuring sleek minimalist structural grids.",
    highlights: [
      "Exquisite layout utilizing modern vanilla CSS grid masonry techniques.",
      "Incorporates clean image zooms, bold outline borders, and elegant structural text.",
      "Highly performant loading scores matching strict web vitals principles.",
      "Fully responsive navigation layouts adjusting for touch-device ports."
    ],
    tags: ["HTML", "CSS", "CSS Grid", "Architecture Portfolio", "Responsive Web"],
    githubUrl: "https://github.com/rabeyanoor/g3-architects-website"
  },
  {
    id: "portfolio-resources",
    name: "web-dev-portfolio-resources",
    title: "Web Dev Modular Boilerplates",
    category: "web",
    desc: "Reusable CSS components, layout matrices, and static blocks built to optimize portfolio scaffolding.",
    highlights: [
      "Includes flexible layout blocks, floating drawers, and modern form validations.",
      "Pure, lightweight responsive vanilla CSS layout files without external bloat.",
      "Saves extensive dev hours across web asset scaffolding.",
      "Demonstrates modular and clean style structural configurations."
    ],
    tags: ["HTML", "CSS", "UI Library", "Boilerplate", "Flexbox"],
    githubUrl: "https://github.com/rabeyanoor/web-dev-portfolio-resources"
  },
  {
    id: "flower-shop",
    name: "Flower-Shop-UI",
    title: "Flower Boutique E-Commerce",
    category: "web",
    desc: "A boutique florist retail shop interface styled with pastel color palettes and custom floral catalogs.",
    highlights: [
      "Features micro-animated shopping items and detailed product checkout matrices.",
      "Employs high-fidelity grid layouts that cleanly scale across screen splits.",
      "Designed with strict attention to soft, premium color harmonies.",
      "Includes client reviews slider panels and custom contact elements."
    ],
    tags: ["HTML", "CSS", "E-Commerce", "Responsive Grid", "UI Design"],
    githubUrl: "https://github.com/rabeyanoor/Flower-Shop-UI"
  },
  {
    id: "dom-tour",
    name: "tour-of-dom",
    title: "Dynamic DOM Explorer",
    category: "web",
    desc: "A visually rich learning platform built to explain and test dynamic HTML DOM APIs and events.",
    highlights: [
      "Demonstrates dynamic element creation, node traversals, and attribute mutations.",
      "Implements dynamic score calculations and item lists with local storage states.",
      "Includes visual triggers highlighting event capturing, bubbling, and delegation.",
      "Enables students to edit, add, and remove HTML sections in real-time."
    ],
    tags: ["HTML", "CSS", "JavaScript", "DOM API", "Interactive Tutorial"],
    githubUrl: "https://github.com/rabeyanoor/tour-of-dom"
  },
  {
    id: "food-restaurant",
    name: "food-restaurant-project",
    title: "Gourmet Diner Portal",
    category: "web",
    desc: "A luxurious restaurant menu and reservation portal geared for visual brand recognition.",
    highlights: [
      "Features dynamic menu filtering by meal categories (breakfast, dinner, drinks).",
      "Interactive table booking scheduler form with validation parameters.",
      "Luxurious user testimonial feedback card carousels.",
      "Perfect mobile layout adaptations ensuring simple ordering flow."
    ],
    tags: ["HTML", "CSS", "JavaScript", "Restaurant Tech", "UI Design"],
    githubUrl: "https://github.com/rabeyanoor/food-restaurant-project"
  },
  {
    id: "event-mgmt",
    name: "Event-Management-System",
    title: "TypeScript Event Management System",
    category: "web",
    desc: "A robust event handling dashboard scheduling calendar items, ticket sales, and guest credentials.",
    highlights: [
      "Built with strict TypeScript schemas to prevent runtime calculation issues.",
      "Interactive scheduling calendar grid with custom category tags.",
      "Integrated secure guest check-in dashboard logging unique IDs.",
      "Designed modular backend pipelines matching standard REST models."
    ],
    tags: ["TypeScript", "Node.js", "Express", "REST APIs", "Calendar Tech"],
    githubUrl: "https://github.com/rabeyanoor/Event-Management-System"
  },
  {
    id: "ems-java",
    name: "EMS",
    title: "Enterprise Java Event System (EMS)",
    category: "systems",
    desc: "Enterprise-grade client application built in Java to catalog, register, and report on corporate events.",
    highlights: [
      "Designed desktop dashboard with high-grade OOP principles using Swing layouts.",
      "Features transactional database updates preserving atomic records.",
      "Produces diagnostic export files (PDF/CSV reports) on event ticket metrics.",
      "Maintains local configurations within light property sheets."
    ],
    tags: ["Java", "Swing UI", "SQL", "OOP", "Enterprise Systems"],
    githubUrl: "https://github.com/rabeyanoor/EMS"
  },
  {
    id: "object-det",
    name: "Object-Detection",
    title: "Web-Based Object Detection",
    category: "aiml",
    desc: "An in-browser computer vision application running real-time deep neural networks over live webcams.",
    highlights: [
      "Utilizes lightweight pre-trained COCO-SSD neural models.",
      "Executes local inferences inside client browsers utilizing TensorFlow.js acceleration.",
      "Plots clean visual bounding boxes and accuracy confidence flags in real-time.",
      "Runs with zero backend host servers, keeping absolute data privacy."
    ],
    tags: ["HTML", "JavaScript", "TensorFlow.js", "Computer Vision", "Object Detection"],
    githubUrl: "https://github.com/rabeyanoor/Object-Detection"
  },
  {
    id: "web-dev",
    name: "Web-Development",
    title: "Web Development Sandbox",
    category: "web",
    desc: "Experimental workshop containing layout grids, SVG animators, and dynamic interactive widgets.",
    highlights: [
      "Compiles modular layouts including CSS Grids, custom Flexbox margins, and layouts.",
      "Demonstrates rapid prototyping templates across various website niches.",
      "Includes detailed guides on web standards, semantical nodes, and accessibility.",
      "Acts as a foundational toolkit for high-quality client websites."
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Boilerplate"],
    githubUrl: "https://github.com/rabeyanoor/Web-Development"
  },
  {
    id: "ai-ml-core",
    name: "AI-ML",
    title: "AI & Machine Learning Core Labs",
    category: "aiml",
    desc: "Core computational notebook repository highlighting fundamental AI models and exploratory statistics.",
    highlights: [
      "Implements linear regression, support vector machines, and decision tree models.",
      "Compiles detailed feature weight graphs validating dataset dependencies.",
      "Demonstrates data pre-processing steps including scaling, encoding, and slicing.",
      "Uses Jupyter platforms to outline clean code blocks with clear visual diagrams."
    ],
    tags: ["Jupyter Notebook", "Python", "Scikit-Learn", "Matplotlib", "Data Science"],
    githubUrl: "https://github.com/rabeyanoor/AI-ML"
  }
];

// 2. DYNAMIC TITLES ROTATION (Typing Effect)
const typingTitles = [
  "AI & Machine Learning Engineer",
  "Full-Stack Software Developer",
  "Systems & Compiler Creator",
  "Data Scientist & Researcher"
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenTitles = 2000;

function typeTitle() {
  const titleContainer = document.getElementById("typing-text");
  if (!titleContainer) return;
  
  const currentTitle = typingTitles[titleIndex];
  
  if (isDeleting) {
    titleContainer.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
  } else {
    titleContainer.textContent = currentTitle.substring(0, charIndex + 1);
    charIndex++;
  }
  
  let nextSpeed = isDeleting ? deletingSpeed : typingSpeed;
  
  if (!isDeleting && charIndex === currentTitle.length) {
    isDeleting = true;
    nextSpeed = delayBetweenTitles; // Pause at full title
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % typingTitles.length;
    nextSpeed = 500; // Pause before typing next
  }
  
  setTimeout(typeTitle, nextSpeed);
}

// 3. RENDER PORTFOLIO PROJECTS GRID
function renderProjects(filterValue = "all") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  
  grid.innerHTML = "";
  
  const filtered = filterValue === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filterValue);
    
  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("onclick", `openModal('${p.id}')`);
    
    // Choose appropriate SVG icon based on category
    let iconSvg = "";
    if (p.category === "aiml") {
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`;
    } else if (p.category === "systems") {
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;
    } else {
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`;
    }
    
    const tagsHtml = p.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join("");
    
    card.innerHTML = `
      <div class="project-icon">
        ${iconSvg}
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tags">
        ${tagsHtml}
      </div>
      <div class="project-footer">
        <span>View Details</span>
        <span class="project-link">
          GitHub
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </span>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// 4. INTERACTIVE MODAL OVERLAYS
window.openModal = function(id) {
  const modal = document.getElementById("modal-overlay");
  const project = projectsData.find(p => p.id === id);
  if (!modal || !project) return;
  
  const modalTitle = document.getElementById("modal-title");
  const modalBadge = document.getElementById("modal-category-badge");
  const modalDesc = document.getElementById("modal-desc-full");
  const modalHighlightsList = document.getElementById("modal-highlights");
  const modalTagsContainer = document.getElementById("modal-tags");
  const modalGitLink = document.getElementById("modal-github-link");
  
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalBadge) {
    modalBadge.textContent = project.category === "aiml" ? "AI & Machine Learning" : (project.category === "systems" ? "Systems & Compilers" : "Web & Full-Stack");
  }
  if (modalDesc) modalDesc.textContent = project.desc;
  
  if (modalHighlightsList) {
    modalHighlightsList.innerHTML = project.highlights.map(h => `<li>${h}</li>`).join("");
  }
  
  if (modalTagsContainer) {
    modalTagsContainer.innerHTML = project.tags.map(t => `<span class="tag">${t}</span>`).join("");
  }
  
  if (modalGitLink) {
    modalGitLink.setAttribute("href", project.githubUrl);
  }
  
  // Handle Live Demo button
  const modalLiveLink = document.getElementById("modal-live-link");
  if (modalLiveLink) {
    if (project.liveUrl) {
      modalLiveLink.setAttribute("href", project.liveUrl);
      modalLiveLink.style.display = "inline-flex";
    } else {
      modalLiveLink.style.display = "none";
    }
  }
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable background scrolling
};

window.closeModal = function() {
  const modal = document.getElementById("modal-overlay");
  if (modal) {
    modal.classList.remove("active");
  }
  document.body.style.overflow = ""; // Enable scrolling
};

// 5. ANIMATING SKILLS PROGRESS BARS ON SCROLL
function triggerSkillsAnimation() {
  const skillsSection = document.getElementById("skills");
  if (!skillsSection) return;
  
  const rect = skillsSection.getBoundingClientRect();
  const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
  
  if (isVisible) {
    const bars = document.querySelectorAll(".skill-progress");
    bars.forEach(bar => {
      const value = bar.getAttribute("data-value");
      bar.style.width = value + "%";
    });
  }
}

// 6. INITIALIZATION & EVEN BINDING
document.addEventListener("DOMContentLoaded", () => {
  // Start dynamic typing
  typeTitle();
  
  // Render all projects on start
  renderProjects("all");
  
  // Set default theme state (dark mode)
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
  }
  const currentTheme = localStorage.getItem("theme");
  document.body.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);
  
  // Listen for scroll events to animate skills progress
  window.addEventListener("scroll", triggerSkillsAnimation);
  // Trigger once in case section is visible on load
  setTimeout(triggerSkillsAnimation, 300);
  
  // Setup project filtering tags
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filterValue = btn.getAttribute("data-filter");
      renderProjects(filterValue);
    });
  });
  
  // Close modal when clicking overlay background
  const modalOverlay = document.getElementById("modal-overlay");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }
  
  // Render A4 print projects
  renderA4PrintProjects();
});

// 7. PRINT ENGINE DYNAMIC GENERATOR
function renderA4PrintProjects() {
  const leftCol = document.getElementById("print-projects-list-left");
  const rightCol = document.getElementById("print-projects-list-right");
  if (!leftCol || !rightCol) return;
  
  leftCol.innerHTML = "";
  rightCol.innerHTML = "";
  
  // Pick featured highly impressive projects for A4 Layout (Total 5 key projects for space management)
  const featured = [
    projectsData.find(p => p.id === "daffodilcodehub"),
    projectsData.find(p => p.id === "plant-disease"),
    projectsData.find(p => p.id === "aetherscript"),
    projectsData.find(p => p.id === "anpr"),
    projectsData.find(p => p.id === "myskinx"),
  ].filter(Boolean);
  
  featured.forEach((p, idx) => {
    const item = document.createElement("div");
    item.className = "print-project-item";
    
    // Split key tech tools for print
    const techText = p.tags.slice(0, 4).join(" | ");
    
    item.innerHTML = `
      <div class="print-project-header">
        <span class="print-project-name">${p.title}</span>
        <span class="print-project-tech">${techText}</span>
      </div>
      <p class="print-project-desc">${p.highlights[0]} ${p.highlights[1] || ""}</p>
    `;
    
    // Alternating between print columns for balanced layout
    if (idx % 2 === 0) {
      leftCol.appendChild(item);
    } else {
      rightCol.appendChild(item);
    }
  });
}

// 8. GLOBAL CONTROLS (Theme & Print trigger)
window.toggleTheme = function() {
  const current = document.body.getAttribute("data-theme");
  const target = current === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", target);
  localStorage.setItem("theme", target);
  updateThemeIcon(target);
};

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-toggle-icon");
  if (!icon) return;
  
  if (theme === "light") {
    // Sun icon
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  } else {
    // Moon icon
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

window.triggerPrint = function() {
  window.print();
};
