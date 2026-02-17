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
    title: 'LLM-Powered Intelligent Recommendation Engine & Sales Prediction',
    period: 'May 2025',
    bullets: [
      'Vector-based recommendation engine using LLMs across 6,810 books; 30% lower retrieval latency, 35% higher accuracy.',
      'Analyzed 1.2M+ words with AI-driven text classification and sentiment analysis; 92% accuracy in emotional insight detection.',
      'Interactive Gradio dashboard handling 10,000+ queries; 50% faster search, 40% higher engagement.',
    ],
    links: {
      code: 'https://github.com/AdithyaReddyGeeda',
      demo: null,
    },
    tags: ['LLM', 'Gradio', 'Python', 'NLP'],
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
];


