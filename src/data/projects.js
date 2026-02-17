export const projects = [
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
    period: 'Ongoing',
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
    period: 'May 2025',
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
];
