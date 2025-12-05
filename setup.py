
### 31. **setup.py**

from setuptools import setup, find_packages

setup(
    name="career-ai-suite",
    version="1.0.0",
    description="Advanced AI-powered career assistant",
    author="Your Name",
    author_email="your.email@example.com",
    packages=find_packages(where="."),
    package_dir={"": "."},
    install_requires=[
        "streamlit>=1.31.0",
        "google-generativeai>=0.3.0",
        "python-dotenv>=1.0.0",
        "pandas>=2.0.3",
        "plotly>=5.18.0",
        "PyPDF2>=3.0.1",
        "python-docx>=0.8.11",
        "scikit-learn>=1.3.2",
        "sentence-transformers>=2.2.2",
        "spacy>=3.7.2"
    ],
    python_requires=">=3.11",
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "Topic :: Office/Business",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3.11",
    ],
)