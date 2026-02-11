"""
Portfolio Website - Adithya Reddy Geeda
Deploy on Streamlit Cloud: https://share.streamlit.io
"""

import streamlit as st

# Page config - must be first Streamlit command
st.set_page_config(
    page_title="Adithya Reddy Geeda | Data Scientist",
    page_icon="👋",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom CSS for a polished portfolio look
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    
    .stApp {
        background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
        font-family: 'Inter', sans-serif;
    }
    
    /* Hero section */
    .hero {
        text-align: center;
        padding: 4rem 2rem;
        margin-bottom: 3rem;
    }
    .hero h1 {
        font-size: 3rem;
        font-weight: 700;
        color: #e8e8e8;
        margin-bottom: 0.5rem;
        letter-spacing: -0.02em;
    }
    .hero .subtitle {
        font-size: 1.1rem;
        color: #94a3b8;
        margin-bottom: 1.5rem;
    }
    .hero .links {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        flex-wrap: wrap;
    }
    .hero .links a {
        color: #38bdf8;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s;
    }
    .hero .links a:hover {
        color: #7dd3fc;
    }
    
    /* Section styling */
    .section {
        background: rgba(30, 41, 59, 0.5);
        border-radius: 12px;
        padding: 2rem;
        margin-bottom: 2rem;
        border: 1px solid rgba(148, 163, 184, 0.1);
    }
    .section h2 {
        color: #38bdf8;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        border-bottom: 2px solid rgba(56, 189, 248, 0.3);
        padding-bottom: 0.5rem;
    }
    .section h3 {
        color: #e2e8f0;
        font-size: 1.15rem;
        margin-top: 1.25rem;
        margin-bottom: 0.25rem;
    }
    .section p, .section li {
        color: #94a3b8;
        line-height: 1.7;
    }
    .section ul {
        margin: 0.5rem 0 1rem 1.5rem;
    }
    
    /* Skills chips */
    .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.75rem;
    }
    .skill-chip {
        background: rgba(56, 189, 248, 0.15);
        color: #7dd3fc;
        padding: 0.35rem 0.75rem;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 500;
    }
    
    /* Hide Streamlit branding for cleaner look */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    
    /* Reduce padding */
    .block-container {
        padding-top: 2rem;
        padding-bottom: 2rem;
        max-width: 900px;
        margin: 0 auto;
    }
</style>
""", unsafe_allow_html=True)

# --- Hero Section ---
st.markdown("""
<div class="hero">
    <h1>Adithya Reddy Geeda</h1>
    <p class="subtitle">Data Scientist | MS Engineering Data Science @ University of Houston</p>
    <div class="links">
        <a href="mailto:adithyareddygeeda@gmail.com">📧 Email</a>
        <a href="https://www.linkedin.com/in/adithya-reddy-geeda/" target="_blank">LinkedIn</a>
        <a href="https://github.com/AdithyaReddyGeeda" target="_blank">GitHub</a>
    </div>
    <p class="subtitle" style="margin-top: 1rem;">New York, USA</p>
</div>
""", unsafe_allow_html=True)

# --- About ---
with st.container():
    st.markdown("""
    <div class="section">
        <h2>About Me</h2>
        <p>
        I'm an <strong>MS in Engineering Data Science</strong> candidate at the <strong>University of Houston</strong> (May 2026), 
        with a BTech in <strong>Computer Science (AI)</strong> from SRM University. I build systems across 
        <strong>machine learning, deep learning, NLP, and computer vision</strong>—from brain tumor detection and 
        multilingual NLU to video action recognition and LLM-powered recommendation engines.
        </p>
        <p>
        Currently working on <strong>video action recognition</strong> (CNN+LSTM, R3D-18), 
        <strong>multilingual NLU</strong> (XLM-RoBERTa), and <strong>LLM-based applications</strong>. 
        Experienced in TensorFlow, PyTorch, prompt engineering, and end-to-end ML pipelines (Streamlit, Gradio, Flask).
        </p>
    </div>
    """, unsafe_allow_html=True)

# --- Education ---
with st.container():
    st.markdown("""
    <div class="section">
        <h2>Education</h2>
        
        <h3>University of Houston</h3>
        <p><strong>Master of Science, Engineering Data Science</strong> — May 2026</p>
        <p>Data Science, Probability & Statistics, Machine Learning, Big Data, Digital Image Processing · CGPA 3.85/4</p>
        
        <h3>SRM University</h3>
        <p><strong>Bachelor of Technology, Computer Science (AI)</strong> — June 2024</p>
        <p>Python, Deep Learning, DSA, Web Development, Soft Computing · CGPA 8.81/10</p>
    </div>
    """, unsafe_allow_html=True)

# --- Technical Skills ---
with st.container():
    st.markdown("""
    <div class="section">
        <h2>Technical Skills</h2>
        <p><strong>Programming:</strong> Python, R, Java, C++, C, SQL, Git</p>
        <p><strong>ML & Data:</strong> TensorFlow, PyTorch, Keras, Pandas, NumPy, Scikit-Learn, Matplotlib</p>
        <p><strong>Visualization:</strong> Power BI, Tableau, MongoDB</p>
        <p><strong>Web & UI:</strong> HTML, CSS, JavaScript, Bootstrap, Figma, Flask, Streamlit</p>
    </div>
    """, unsafe_allow_html=True)

# --- Experience ---
with st.container():
    st.markdown("""
    <div class="section">
        <h2>Experience</h2>
        
        <h3>Research Intern (Team Lead) — SRM University, India</h3>
        <p><em>Brain Tumor Detection · Jan 2024 – Apr 2024</em></p>
        <ul>
            <li>Led a team to build a brain tumor detection system using ResNet and VGG16, achieving <strong>97% accuracy</strong></li>
            <li>Curated and labelled 800+ MRI datasets with advanced preprocessing (noise reduction, intensity normalization)</li>
            <li>Delivered precision 1.0, sensitivity 0.95, and misclassification rate of 2.5%</li>
        </ul>
        
        <h3>Data Science Intern — Tavant Technologies, Hyderabad, India</h3>
        <p><em>GPT Responsiveness · Sep 2023 – Dec 2023</em></p>
        <ul>
            <li>Developed interactive client demo modules and improved GPT-4 prompt engineering, increasing response accuracy by <strong>15%</strong></li>
            <li>Built responsive dashboards for GPT-4 performance metrics and real-time monitoring</li>
            <li>Optimized prompts for a more reliable product experience</li>
        </ul>
        
        <h3>Research Intern — SRM University, India</h3>
        <p><em>Strategies for Preparation of Exhaustive Datasets · Jan 2023 – May 2023</em></p>
        <ul>
            <li>Constructed a comprehensive Bollywood songs dataset from YouTube using systematic frame extraction</li>
            <li>Collaborated on data gathering, literature review, and coding to support further research</li>
        </ul>
    </div>
    """, unsafe_allow_html=True)

# --- Projects ---
with st.container():
    st.markdown("""
    <div class="section">
        <h2>Projects</h2>
        
        <h3>Multilingual NLU — Joint Intent Classification & Slot Filling</h3>
        <p><em>Dec 2025</em></p>
        <ul>
            <li>Fine-tuned <strong>XLM-RoBERTa (278M)</strong> for joint intent (60 classes) and slot filling (BIO + CRF) on MASSIVE across 20 languages</li>
            <li><strong>86.9%</strong> intent accuracy, <strong>71.5%</strong> slot F1; outperformed LSTM baseline by ~7% in cross-lingual setting</li>
            <li>Zero-shot and few-shot transfer; 72–81% on held-out low-resource languages</li>
            <li>End-to-end pipeline: tokenization, class-weighted loss, CRF decoding, Streamlit frontend</li>
        </ul>
        
        <h3>LLM-Powered Intelligent Recommendation Engine & Sales Prediction</h3>
        <p><em>May 2025</em></p>
        <ul>
            <li>Vector-based recommendation engine using LLMs across 6,810 books; <strong>30%</strong> lower retrieval latency, <strong>35%</strong> higher accuracy</li>
            <li>Analyzed 1.2M+ words with AI-driven text classification and sentiment analysis; <strong>92%</strong> accuracy in emotional insight detection</li>
            <li>Interactive Gradio dashboard handling 10,000+ queries; 50% faster search, 40% higher engagement</li>
        </ul>
        
        <h3>Sales Prediction — Supply Management</h3>
        <p><em>Jan 2025</em></p>
        <ul>
            <li>ML-based sales prediction on 8,500+ records, 11 features, 10 retail outlets</li>
            <li>RMSE 1150.60, R² 0.53</li>
        </ul>
        
        <h3>Customer Churn & Revenue Analysis</h3>
        <p><em>Sep 2024</em></p>
        <ul>
            <li>SQL-based analytics; top 20% drive 70% revenue, 15% churn in Q4</li>
            <li>Identified >3 unresolved tickets as 2.5× churn risk</li>
        </ul>
        
        <h3>Video Action Recognition</h3>
        <p><em>PyTorch, CNN+LSTM, R3D-18</em></p>
        <ul>
            <li>Deep learning pipeline for human action recognition in video (3D CNNs, CNN+LSTM)</li>
            <li>Flask and Streamlit apps for real-time prediction; UCF-101–style datasets</li>
        </ul>
    </div>
    """, unsafe_allow_html=True)

# --- Contact ---
with st.container():
    st.markdown("""
    <div class="section">
        <h2>Connect With Me</h2>
        <div class="links">
            <a href="mailto:adithyareddygeeda@gmail.com">📧 adithyareddygeeda@gmail.com</a> &nbsp;|&nbsp;
            <a href="https://www.linkedin.com/in/adithya-reddy-geeda/" target="_blank">LinkedIn</a> &nbsp;|&nbsp;
            <a href="https://github.com/AdithyaReddyGeeda" target="_blank">GitHub</a>
        </div>
    </div>
    """, unsafe_allow_html=True)
