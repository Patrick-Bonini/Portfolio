import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"

const ProjectCardData = [
    {
        imgsrc: project1,
        title: "AutoSchedule",
        langs: "Python, Google Cloud, Google Calendar API, Tesseract OCR, OAuth",
        desc: "Created an authorization system that lets you log in to your google account. Coded a python script that automatically uploaded a semester worth of classes to your google calendar when given your classes as a text file. Integrated an image to text API but decided to remove it due to issues with it’s accuracy",
        source: "https://github.com/Patrick-Bonini/Calendar-Scripting-Project"
    },
    {
        imgsrc: project2,
        title: "PlagGuard AI",
        langs: "Python, Spacy API, skLearn, Transformers, Natural Language Processing, Machine Learning",
        desc: "Provided training data for the script to know the difference between an AI generated essay and a human written essay. Developed a user friendly way to give the script your text and have it return ‘AI’ or ‘Human’ depending on the given text. Achieved a 92% success rate that could easily be improved by giving the script more training data",
        source: "https://github.com/Patrick-Bonini/NLP-AI-Detector-Project"
    },
    {
        imgsrc: project3,
        title: "Portfolio Website",
        langs: "HTML/CSS, JavaScript, React.js",
        desc: "Created the personal portfolio website that you're currently on using the React framework. Styled everything using CSS to make it look sleek and modern",
        source: "https://github.com/Patrick-Bonini/Portfolio"
    }
]

export default ProjectCardData