export const projects = [
  {
    title: 'Job Search Agent',
    period: 'March 2026',
    bullets: [
      'Autonomous AI agent for job searching with multi-source scraping (LinkedIn, Indeed, Greenhouse) and intelligent filtering.',
      'FAANG+ blacklist (40+ companies) and startup exclusion using heuristic detection; location-based filtering for targeted searches.',
      'AI-powered job ranking (0-100% match score) based on skills, title, location, and experience with profile matching.',
      'Automated resume tailoring and cover letter generation with ATS optimization; hiring simulation and bias analysis.',
      'Full-stack React + FastAPI dashboard with dark mode, search history, application tracking, and PDF resume parsing.',
    ],
    links: {
      code: 'https://github.com/AdithyaReddyGeeda/Linkedin-job-scraper',
      demo: null,
    },
    tags: ['Python', 'FastAPI', 'React', 'BeautifulSoup', 'OpenAI', 'Tailwind CSS'],
  },
  {
    title: 'Multilingual NLU — Joint Intent Classification & Slot Filling',
    period: 'December 2025',
    bullets: [
      'Fine-tuned XLM-RoBERTa (278M) for joint intent (60 classes) and slot filling (BIO + CRF) on MASSIVE across 20 languages.',
      'Achieved 86.9% intent accuracy and 71.5% slot F1; outperformed LSTM baseline by ~7% in cross-lingual setting.',
      'Zero-shot and few-shot transfer; 72–81% on held-out low-resource languages.',
      'End-to-end pipeline: tokenization, class-weighted loss, CRF decoding, Streamlit frontend.',
    ],
    links: {
      code: 'https://github.com/AdithyaReddyGeeda/Intent-classification-and-slot-filling',
      demo: null,
    },
    tags: ['PyTorch', 'XLM-RoBERTa', 'NLP', 'Streamlit'],
  },
  {
    title: 'Video Action Recognition',
    period: 'May 2025',
    bullets: [
      'Deep learning pipeline for human action recognition in video (3D CNNs, CNN+LSTM, R3D-18).',
      'Flask and Streamlit apps for real-time prediction; UCF-101–style datasets and custom training.',
    ],
    links: {
      code: 'https://github.com/AdithyaReddyGeeda/Video-Action-Recognition',
      demo: null,
    },
    tags: ['PyTorch', 'CNN', 'LSTM', 'Streamlit', 'Flask'],
  },
  {
    title: 'Financial News Sentiment Predictor',
    period: 'February 2026',
    bullets: [
      'End-to-end ML pipeline scraping financial news from 4 sources (Yahoo Finance, Google News, Reddit, Seeking Alpha) with FinBERT sentiment analysis.',
      'Universal bidirectional LSTM trained on 25 stocks across 5 sectors; dual prediction heads for direction and return magnitude.',
      'FAISS vector similarity search over 768-dim FinBERT embeddings for historical headline matching and real-time sentiment shift alerts.',
      'Interactive 5-tab Streamlit dashboard with live predictions, backtesting, and multi-currency support.',
    ],
    links: {
      code: 'https://github.com/AdithyaReddyGeeda/Financial-news-predictor',
      demo: null,
    },
    tags: ['PyTorch', 'FinBERT', 'LSTM', 'FAISS', 'Streamlit', 'NLP'],
  },
  {
    title: 'ClinicalExtract — Medical Information Extraction',
    period: 'February 2026',
    bullets: [
      'Structured extraction from unstructured clinical notes (discharge summaries, radiology reports) using Google LangExtract with precise source grounding.',
      'Few-shot prompting with no fine-tuning; covers medications, diagnoses, procedures, lab results, symptoms, and allergies.',
      'Dual LLM support — local models via Ollama (Qwen, LLaMA, Gemma) and cloud via Google Gemini for flexible deployment.',
      'Streamlit UI with highlighted source spans, JSON/CSV export, and evaluation framework (Precision 0.92, Recall 0.89, F1 0.90).',
    ],
    links: {
      code: 'https://github.com/AdithyaReddyGeeda/Medical-Extraction-Langextract',
      demo: null,
    },
    tags: ['LangExtract', 'Medical NLP', 'Streamlit', 'Gemini', 'Ollama', 'Python'],
  },
  {
    title: 'LLM-Powered Intelligent Recommendation Engine & Sales Prediction',
    period: 'February 2025',
    bullets: [
      'Vector-based recommendation engine using LLMs across 6,810 books; 30% lower retrieval latency, 35% higher accuracy.',
      'Analyzed 1.2M+ words with AI-driven text classification and sentiment analysis; 92% accuracy in emotional insight detection.',
      'Interactive Gradio dashboard handling 10,000+ queries; 50% faster search, 40% higher engagement.',
    ],
    links: {
      code: 'https://github.com/AdithyaReddyGeeda/Book-Recommandation',
      demo: null,
    },
    tags: ['LLM', 'Gradio', 'Python', 'NLP'],
  },
  {
    title: 'F1-prediction — Quali & Race Simulator',
    bullets: [
      'Streamlit dashboard for Formula 1 qualifying and race order prediction using FastF1.',
      'Race model with XGBoost (with heuristic fallbacks) and automatic season fallback when data is missing.',
      'Predicts qualifying order (1–22) and uses it as the starting grid for race predictions (or supports manual override).',
      'Weather-aware simulations (Dry/Wet/Rain) and prediction-vs-actual analysis with MAE for completed races.',
    ],
    links: {
      code: 'https://github.com/AdithyaReddyGeeda/F1-prediction.git',
      demo: null,
    },
    tags: ['Python', 'FastF1', 'Streamlit', 'XGBoost', 'Machine Learning'],
  },
  {
    title: 'Multi-Agent Research Assistant',
    bullets: [
      'Architected a 5-agent LangGraph pipeline (Planner → parallel Search × 3 → Summarizer → Critic → Synthesizer) with shared TypedDict state, conditional critic loop, and ThreadPoolExecutor parallel search across DuckDuckGo sub-queries — fully local via Ollama LLaMA 3.2, zero API cost.',
      'Implemented a Planner agent that decomposes any research query into 3 focused sub-queries (background, current state, future outlook) using structured JSON output with fallback parsing; parallel search reduces retrieval time by ~3×.',
      'Deployed end-to-end as a FastAPI backend plus a custom academic-themed Streamlit dashboard with real-time agent animation, 5-tab results view (Report / Plan / Sources / Logs / Critique), .md export, and Docker support.',
    ],
    links: {
      code: 'https://github.com/AdithyaReddyGeeda/Multi-agent-Research-Assistant.git',
      demo: null,
    },
    tags: ['LangGraph', 'LangChain', 'Ollama', 'FastAPI', 'Streamlit', 'Python'],
  },
];
