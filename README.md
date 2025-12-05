# Professional Job Assistant
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=Streamlit&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)
![SerpAPI](https://img.shields.io/badge/SerpAPI-34A853?style=for-the-badge&logo=google&logoColor=white)


## 🚀 Overview
Professional Job Assistant is an AI-powered application that helps job seekers create tailored job applications with personalized cover letters, resume analysis, company research, and ATS (Applicant Tracking System) optimization. Built with Streamlit and powered by Google Gemini AI (using it as an API for prompt engineering), this tool provides a comprehensive suite of features to enhance your job application process. At its core, the app takes a user's resume, a job description, and a company name as input. It then uses Google's Gemini AI model, orchestrated by LangGraph, to produce a complete application package.

## ✨ Features
- 🤖 **AI-Powered Cover Letters**: Generate professional cover letters tailored to specific job descriptions
- 📊 **Resume Analysis****: Get detailed analysis of your resume with strengths, weaknesses, and optimization suggestions
- 🏢 **Company Research**: Access comprehensive company insights and culture information
- 🎯 **ATS Optimization**: Improve your resume's compatibility with Applicant Tracking Systems
- 💼 **Multiple Variations**: Choose from different cover letter styles (Technical, Cultural, Leadership)
- 📥 **Export Options**: Download your cover letters in DOCX or TXT format
- 🎨 **Beautiful UI**: Modern, professional interface with responsive design

## 🛠️ Technologies Used
- **Frontend**: Streamlit, Custom CSS
- **Backend**: Python
- **AI Services**: Google Gemini AI (as an API too)
- **APIs**: SerpAPI for company research
- **File Processing**: PyPDF2, python-docx
- **Data Visualization**: Plotly (optional)

## Key Components & Technologies
- **Streamlit**: The core framework used to build the interactive web user interface (UI), including the sidebar, tabs, buttons, and charts.
- **LangGraph**: Used to define and execute the step-by-step logic of the application, ensuring tasks like research, analysis, and generation happen in the correct order.
- **Google Gemini (gemini-1.5-flash)**: The generative AI model that performs all the "thinking" — it analyzes text, calculates scores, summarizes information, and writes the cover letters and resume summaries.
- **SerpAPI**: A third-party service that allows the application to perform real-time Google searches to gather up-to-date company information for the research component.
- **Plotly**: A library used to create the interactive radial gauge chart for visualizing the ATS score.
- **PyPDF2 & python-docx**: Helper libraries used to extract text from PDF and Word document resume files, respectively.

## 📦 Installation
### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Setup Instructions
1. Clone the repository
```bash
git clone https://github.com/johnnietse/professional-job-assistant.git
cd professional-job-assistant
```

2. Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies
```
bash
pip install -r requirements.txt
```

4. Set up environment variables
Create a .streamlit/secrets.toml file with your API keys:
```toml
GOOGLE_API_KEY = "your_google_api_key_here"
SERPAPI_API_KEY = "your_serpapi_key_here"  #Optional but recommended
```

5. Run the application
```bash
streamlit run main.py
```

## 🔧 Configuration
### API Keys
1. **Google Gemini API Key:**
- Required for all AI functionalities
- Get it from: Google AI Studio

2. **SerpAPI Key (Optional but recommended):**
- Enhances company research capabilities
- Get it from: SerpAPI

## 📖 Usage
1. **Input Job Details**: Paste the job description and specify the company name
2. **Upload Your Resume**: Support for PDF, DOCX, and TXT formats
3. **Choose Tone**: Select from Professional, Technical, Creative, or Leadership styles
4. **Generate Application**: Let the AI create your tailored application package
5. **Review Results**: Explore the cover letter variations, resume analysis, company insights, and ATS report
6. **Download**: Export your cover letter in your preferred format


## How It Works
The application follows a structured workflow managed by LangGraph, a library for building stateful, multi-step applications. When the user clicks "Generate Application Package," the following sequence is triggered:

- **Input Collection**: The user provides a job description, company name, and their resume file via the sidebar interface. They can also set an API key for advanced research features.
- **Resume Parsing**: The text from the uploaded resume (PDF, DOCX, or TXT) is extracted.
Company Research: Using the SerpAPI tool, the application performs a Google search for information about the company. This data is then summarized by the Gemini AI to extract key insights like company culture, recent news, and products.
- **Resume Analysis**: The AI analyzes the user's resume against the job description to generate a compelling professional summary, highlighting strengths and identifying potential gaps.
- **ATS Scoring**: The code simulates an Applicant Tracking System (ATS) scan. The AI calculates a compatibility score from 0-100 and provides a detailed report including strengths, areas for improvement, and missing keywords.
- **Cover Letter Generation**: The AI generates three distinct versions of a professional cover letter, each with a different focus (e.g., technical skills, cultural fit, leadership). These letters incorporate the job requirements, the user's profile, and the company research.
- **Display Results**: All the generated content is neatly presented to the user in a tabbed interface.

## User Interface
The application's UI is divided into two main parts:

- **Sidebar**: This is where the user inputs all the necessary information:
    - API Key for SerpAPI.
    - The job description they are applying for.
    - The name of the company.
    - Their resume file.
    - The desired tone for the generated content (e.g., Professional, Technical).

- **Main Panel**: After generation, this area displays the results in four tabs:
    - 📝 **Cover Letter**: Shows the generated cover letters and allows the user to switch between variations and download them as DOCX or TXT files.
    - 📊 **Resume Analysis**: Displays the AI-optimized professional summary and the original resume text.
    - 🏢 **Company Research**: Presents the summarized company intelligence report and key metrics like employee ratings and company values.
    - 📈 **ATS Report**: Features the visual ATS score chart, along with lists of strengths, weaknesses, and keywords to add to the resume.

## 📁 Project Structure
<pre>
AI-Powered_Professional_Job_Application_Assistant/
├── backend/
│   ├── main.py            # Main application file
│   ├── requirements.txt   # Python dependencies
│   ├── style.css          # Custom CSS styling
│   └── .streamlit/
│       └── secrets.toml   # API keys (not in version control)
├── .gitignore
├── LICENSE
├── README.md              # This file
└── package.json
</pre>


## Technical Analysis
### Overall Architecture
The application is built on a **state machine** pattern using `LangGraph`, which is a sophisticated and correct choice for this multi-step, conditional workflow. It's not just a linear script; it's a defined graph of nodes and edges, making the logic clear, maintainable, and easily extendable.

The architecture separates concerns effectively:

 1.**Orchestration Layer**: The `LangGraph` workflow defines the process.
2. **Business Logic Layer**: The individual functions (nodes) contain the application logic (AI prompts, data processing).
3. **Presentation Layer**: `Streamlit` handles all user interaction and display.
4. **Styling Layer**: Custom CSS provides a professional, branded look and feel.

### Technical Strengths & Key Aspects

1. **LangGraph Workflow (`build_workflow`` function)**
- **Pattern**: Implements a directed acyclic graph (DAG). The flow is `extract_resume -> research_company -> generate_resume_summary -> calculate_ats_score -> generate_cover_letter -> END`.
- **State Management**: Uses a strongly-typed `ProfessionalState` (a `TypedDict`) to pass data between nodes. This is excellent practice as it makes the data structure explicit and prevents runtime errors related to missing or misspelled keys.
- **Scalability**: This architecture makes it trivial to add new steps. For example, adding a `generate_follow_up_email` node would be a matter of defining the function and adding it to the graph with the appropriate edges.

2. **AI Integration & Prompt Engineering**
- **Model Selection**: Wisely uses the faster and cheaper `gemini-1.5-flash` model for all tasks, which is cost-effective for a multi-step process like this. The separation into `RESUME_MODEL`, `COVER_LETTER_MODEL`, etc., is a good setup for future customization.
- **Advanced Prompting**: The prompts are not simple; they are structured and context-rich. For example:
    - `research_company`: The prompt asks the AI to act as an analyst and extract specific, actionable insights (culture, values, news) from raw web data.
    - `calculate_ats_score`: This is a fantastic feature. The prompt explicitly dictates a JSON output format, and the function includes a fallback parsing mechanism (`re.search(r'\{.*\}', ...`) to handle cases where the model doesn't return pure JSON. This is pragmatic and robust.
    - `generate_cover_letter`: The use of a loop to create three variations with different strategic focuses ("Technical", "Cultural Fit", "Leadership") is a standout user-centric feature.

3. **Data Processing & File Handling**
- **Resume Parsing**: The `extract_resume_text` function correctly handles both PDF (using `PyPDF2`) and text-based files. The inclusion of `try-except` blocks with logging is crucial for production-grade code.
- **Document Generation**: The `create_word_doc` function using `python-docx` is a professional touch, providing immediate tangible value to the user by creating a downloadable `.docx` file in memory (`BytesIO`) without saving to disk.

4. **External API Integration (SerpAPI)**
- **Proper Configuration**: The code checks for the API key's existence in both `st.secrets` and the session state, providing clear user feedback if it's missing.
- **Robust Error Handling**: The `research_company` and `get_company_insights` functions are wrapped in `try-except` blocks and return user-friendly messages on failure (e.g., "No company information found").
- **Data Transformation**: It doesn't just dump SerpAPI results. It uses the AI to summarize, structure, and extract meaning from the raw HTML/search results, which is the correct way to use an LLM in a RAG (Retrieval-Augmented Generation) pipeline.

5. **Frontend & UX (Streamlit + CSS)**
- **Professional Layout**: The use of a wide layout, a structured sidebar for inputs, and tabs for outputs is intuitive and organized.
- **Advanced Styling**: The custom `style.css` is extensive and professional. It moves the app far beyond the default Streamlit look, using a modern color scheme, gradients, shadows, hover effects, and a custom font. This attention to detail significantly elevates the project.
- **Interactive Elements**: The use of `st.progress` during processing, select boxes for cover letter variations, and the download buttons create a dynamic and engaging user experience.
- **Visualization**: The `create_ats_radial_chart` function using `Plotly` provides a much more impactful and understandable representation of the ATS score than a simple number would.

6. **Production-Grade Practices**
- **Logging**: Comprehensive logging (`logging.basicConfig`) is implemented to track errors and user actions, which is essential for debugging and monitoring.
- **Error Handling**: Nearly every function that can fail (file upload, API calls, AI generation) has `try-except` blocks. The application handles errors gracefully by displaying user-friendly messages instead of crashing.
- **Security**: API keys are correctly handled through `st.secrets`, preventing them from being exposed in the code.
- **Session State**: Correctly used to persist the results and workflow object across reruns, which is fundamental to Streamlit app logic.

## Potential Improvements & Considerations
1. **Cost & Rate Limiting**: The project makes numerous calls to both the Gemini and SerpAPI APIs. In a public deployment, this could become expensive and hit rate limits. Implementing caching (`@st.cache_data` on expensive functions like `research_company`) and user rate-limiting would be essential.
2. **Validation**: Input validation is minimal. For example, the app doesn't check if the uploaded file is a corrupt PDF or if the job description text is meaningful before sending it to the AI.
3. **Fallback for Plotly**: The `create_ats_radial_chart` function has a try-except with a fallback to a simple metric, which is good. However, the `except` block is bare (`except:`), which is not a best practice. It should catch specific exceptions.
4. **Modularization**: For very large-scale development, the nodes/functions could be moved into their own modules (e.g., `nodes/`, `services/`) to keep the main script clean.
5. **Testing**: The code is not easily testable in its current state because the functions are tightly coupled with `st.*` calls and the LangGraph state. Refactoring to separate pure logic functions from Streamlit I/O would allow for unit testing.
6. **Language Model**: The prompts are in English and assume Western naming conventions (e.g., "Hiring Manager"). For a global audience, this might need adjustment. Hence, the next step would be to make it compatible with other languages.

## Next Step
The next step is to implement a CI/CD pipeline for automated deployment of the backend API to an Oracle Cloud instance, and to re-design the UI with Next.js and TypeScript.

## 🚀 Deployment
### Local Deployment
```bash
streamlit run main.py
```

### Cloud Deployment Options
1. Streamlit Cloud (Recommended)
- Connect your GitHub repository
- Set secrets in the Streamlit Cloud dashboard
- Deploy with one click

2. Heroku
- Add a Procfile with: web: streamlit run main.py --server.port $PORT
- Deploy using Heroku CLI or GitHub integration

3. Other Platforms
- The app can be deployed on any platform that supports Python applications

## 🤝 Contributing
We welcome contributions! Please feel free to submit a Pull Request.
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments
- `Google Gemini AI` for powerful AI capabilities
- `Streamlit` for the excellent web framework
- `SerpAPI` for company research data
- Icons and emojis from various open source libraries

## ⚠️ Disclaimer
This tool generates AI-powered content that should be reviewed and customized before use. Results may vary based on input quality and API limitations. Always verify company information from official sources.


## New Feature: User-Configurable API Keys
We've enhanced the application's flexibility and security by integrating a user-facing interface for API key management. Users can now provide their own Google Gemini API key (besides the already existing SerpAPI key) directly within the application sidebar.

- **Secure Input**: Keys are entered via a password field, ensuring they are not displayed on screen.

- **Session Persistence**: Provided keys are persisted for the duration of the user's session using Streamlit's session state.

- **Dynamic Configuration**: The application's Gemini client is reconfigured in real-time upon key entry, enabling immediate use of all AI features without a restart.

This change allows for greater user autonomy and aligns with best practices for handling API credentials outside of pre-configured environment variables.

---

## 🎥 Demo Video
A short walkthrough of the application is available below.

▶️ Watch the full demo here:
https://youtu.be/OMdhI2n5sB8?si=-GssycEQ7z0jBiJM


---

## Screenshots

<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/a0308f2b-f772-433c-ae55-8b46da3f3fe7" />

<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/eb37da0c-b0c7-40b7-9a06-851eb6aedd42" />

<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/a24000e3-05ae-43bd-ab45-e115363d9005" />


<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/fe2562b1-2f27-4d67-8cbe-5dd2db25db42" />

<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/9d7340d2-1dae-4367-83c0-545fcb702d5e" />

<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/62d86755-0785-4e5a-ac5f-286a180cbe85" />

<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/5135ca48-4697-4cd8-aca7-bc09c7429871" />

<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/4f6c77e1-120b-405a-9074-00ee8b19567d" />

<img width="392" height="1034" alt="image" src="https://github.com/user-attachments/assets/309a712b-7e36-4527-b8c8-c516a5370c85" />



---
## Most Recent Updates (as I decide to extend the project to a larger scope) 

### The Transformation Journey
Before & After:

| Aspect    | Initial Version (Prototype) | Current Version |
| --------- | ------- | ------- |
| Architecture |     Single-file monolithic application	    |     Modular microservices with 8+ specialized modules    |
|     Code Organization      |     500+ lines in one file	    |   15+ organized files with separation of concerns      |
|      AI Integration	     |   Basic Gemini API calls      |    Multi-model system (Gemini, spaCy, sentence-transformers) with specialized agents     | 
|   UI/UX Design        |     	Default Streamlit components    |     Custom "Digital Comfort" design system with glassmorphism, animations, and premium styling    | 
|      Data Processing     |   Simple text extraction      |     Advanced NLP pipeline with resume parsing, semantic analysis, and structured data extraction    | 
|    Error Handling       |     	Basic try-catch blocks    |    Comprehensive logging, validation, and graceful degradation     | 
|      Scalability	     |   Local-only, single user      |     Dockerized, database-backed, supports 100+ concurrent users (potentailly)    |
|      Deployment		     |    	Local Streamlit run     |   	Production-ready with Docker, environment configuration, and cloud deployment      |

📈 Before & After: Technical Evolution
Aspect	Initial Version (Prototype)	Current Version (Enterprise-Grade)
Architecture	Single-file monolithic application	Modular microservices with 8+ specialized modules
Code Organization	500+ lines in one file	15+ organized files with separation of concerns
AI Integration	Basic Gemini API calls	Multi-model system (Gemini, spaCy, sentence-transformers) with specialized agents
UI/UX Design	Default Streamlit components	Custom "Digital Comfort" design system with glassmorphism, animations, and premium styling
Data Processing	Simple text extraction	Advanced NLP pipeline with resume parsing, semantic analysis, and structured data extraction
Error Handling	Basic try-catch blocks	Comprehensive logging, validation, and graceful degradation
Scalability	Local-only, single user	Dockerized, database-backed, supports 100+ concurrent users
Deployment	Local Streamlit run	Production-ready with Docker, environment configuration, and cloud deployment


