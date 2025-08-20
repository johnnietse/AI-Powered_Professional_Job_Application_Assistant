# Professional Job Assistant
https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=Streamlit&logoColor=white
https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white
https://img.shields.io/badge/Google%2520Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white
https://img.shields.io/badge/SerpAPI-34A853?style=for-the-badge&logo=google&logoColor=white

## 🚀 Overview
Professional Job Assistant is an AI-powered application that helps job seekers create tailored job applications with personalized cover letters, resume analysis, company research, and ATS (Applicant Tracking System) optimization. Built with Streamlit and powered by Google Gemini AI, this tool provides a comprehensive suite of features to enhance your job application process.

## ✨ Features
- 🤖 AI-Powered Cover Letters: Generate professional cover letters tailored to specific job descriptions
- 📊 Resume Analysis: Get detailed analysis of your resume with strengths, weaknesses, and optimization suggestions
- 🏢 Company Research: Access comprehensive company insights and culture information
- 🎯 ATS Optimization: Improve your resume's compatibility with Applicant Tracking Systems
- 💼 Multiple Variations: Choose from different cover letter styles (Technical, Cultural, Leadership)
- 📥 Export Options: Download your cover letters in DOCX or TXT format
- 🎨 Beautiful UI: Modern, professional interface with responsive design

## 🛠️ Technologies Used
- Frontend: Streamlit, Custom CSS
- Backend: Python
- AI Services: Google Gemini AI (as an API too)
- APIs: SerpAPI for company research
- File Processing: PyPDF2, python-docx
- Data Visualization: Plotly (optional)

## 📦 Installation
### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Setup Instructions
1. Clone the repository
```bash
git clone https://github.com/your-username/professional-job-assistant.git
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
SERPAPI_API_KEY = "your_serpapi_key_here"  # Optional but recommended
```

5. Run the application
```bash
streamlit run main.py
```

## 🔧 Configuration
### API Keys
1. Google Gemini API Key:
- Required for all AI functionalities
- Get it from: Google AI Studio

2. SerpAPI Key (Optional but recommended):
- Enhances company research capabilities
- Get it from: SerpAPI

## 📖 Usage
1. **Input Job Details**: Paste the job description and specify the company name
2. **Upload Your Resume**: Support for PDF, DOCX, and TXT formats
3. **Choose Tone**: Select from Professional, Technical, Creative, or Leadership styles
4. **Generate Application**: Let the AI create your tailored application package
5. **Review Results**: Explore the cover letter variations, resume analysis, company insights, and ATS report
6. **Download**: Export your cover letter in your preferred format

## 📁 Project Structure
<pre>
professional-job-assistant/
├── main.py                 # Main application file
├── style.css               # Custom CSS styling
├── requirements.txt        # Python dependencies
├── .streamlit/
│   └── secrets.toml        # API keys (not in version control)
├── job_assistant.log       # Application logs (generated at runtime)
└── README.md              # This file
</pre>

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




<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/a0308f2b-f772-433c-ae55-8b46da3f3fe7" />

<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/eb37da0c-b0c7-40b7-9a06-851eb6aedd42" />

<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/a24000e3-05ae-43bd-ab45-e115363d9005" />


<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/fe2562b1-2f27-4d67-8cbe-5dd2db25db42" />

<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/9d7340d2-1dae-4367-83c0-545fcb702d5e" />

<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/62d86755-0785-4e5a-ac5f-286a180cbe85" />

<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/5135ca48-4697-4cd8-aca7-bc09c7429871" />

<img width="2256" height="1504" alt="image" src="https://github.com/user-attachments/assets/4f6c77e1-120b-405a-9074-00ee8b19567d" />

<img width="392" height="1034" alt="image" src="https://github.com/user-attachments/assets/309a712b-7e36-4527-b8c8-c516a5370c85" />
