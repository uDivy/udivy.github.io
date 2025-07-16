const siteData = {
    landing: {
        profileImage: "files/divy.jpg",
        name: "Divya Upadhyay",
        description: "A dynamic Full-Stack Engineer and Machine Learning expert, driving innovation through scalable web applications, DevOps & Data Engineering pipelines, and advanced AI solutions. Integrating cutting-edge technologies to deliver impactful digital transformations.",
        iconNavItems: [
            { href: "#education", title: "Education", iconClass: "fas fa-graduation-cap", text: "Education" },
            { href: "#work", title: "Work Experience", iconClass: "fas fa-briefcase", text: "Work" },
            { href: "#volunteering", title: "Volunteer", iconClass: "fas fa-hands-helping", text: "Volunteering" },
            { href: "#projects", title: "Projects", iconClass: "fas fa-folder-open", text: "Projects" },
            { href: "#skills", title: "Skills", iconClass: "fas fa-laptop-code", text: "Skills" },
            { href: "#awards", title: "Awards", iconClass: "fas fa-award", text: "Awards" },
            { href: "#certifications", title: "Certifications", iconClass: "fas fa-certificate", text: "Certifications" },
        ]
    },
    summarySection: {
        sectionId: "journey-summary",
        title: "My Journey at a Glance",
        iconClass: "fas fa-route",
        profileImage: "files/my.jpg",
        summaryPoints: [
            { label: "Education", description: "MS in Computer and Information Sciences, University of Florida; B Tech in Computer Science and Engineering, KIIT University." },
            { label: "Skills", description: "Full-Stack Engineering, Machine Learning, Cloud & DevOps, Data Engineering, and more." },
            { label: "Interests", description: "Staying updated with Geopolitics, AI, Healthcare AI, and expressing creativity through Dance and Poetry." },
            { label: "Soft Skills", description: "Problem-solving, Leadership, Communication, Teamwork, Adaptability." },
        ]
    },
    educationSection: {
        sectionId: "education",
        title: "Education",
        iconClass: "fas fa-graduation-cap",
        items: [
            {
                institution: "University of Florida",
                degree: "MS in Computer and Information Sciences",
                years: "2022 - 2024",
                description: "GPA: 3.90. Gainesville Florida, USA"
            },
            {
                institution: "Kiit University",
                degree: "B Tech in Computer Science and Engineering",
                years: "2015 - 2019",
                description: "GPA: 8.98. Bhubaneswar Odhisha, India"
            }
        ]
    },
    workSection: {
        sectionId: "work",
        title: "Work Experience",
        iconClass: "fas fa-briefcase",
        items: [
            {
                company: "Golok Global INC.",
                website: "https://golokglobal.com/",
                logo: "files/healthInnInc.png",
                location: "Gainesville, FL, USA",
                dates: "06/2025 - Present",
                role: "Software Engineer",
                companyIcon: "fa-solid fa-taxi",
                responsibilities: [
                    "Leading backend development for a scalable travel platform, overseeing end-to-end architecture, backend services, and API integration using React, Java (Spring Boot), and AWS.",
                    "Designing and deploying an AI-powered chatbot for a ride-hailing service (Uber-like app), leveraging LLMs, LangChain, and RAG frameworks to deliver real-time query resolution and booking assistance.",
                    "Spearheading process optimization by identifying development pain points and delivering tooling, scripts, and sandbox environments to streamline onboarding and testing.",
                    "Creating technical documentation and infrastructure blueprints to support agile DevOps teams in accelerating development velocity.",
                    "Implementing secure API gateways, CI/CD pipelines, and monitoring dashboards for backend microservices, ensuring low latency and high uptime."
                ]
            },
            {
                company: "Health Innovators Inc.",
                website: "https://www.hiagents.life/",
                logo: "files/healthInnInc.png",
                location: "Remote",
                dates: "08/2024 - 06/2025",
                role: "AI Engineer",
                companyIcon: "fas fa-heartbeat",
                responsibilities: [
                    "Built and deployed AI-powered chatbots for telehealth, enabling appointment triage, symptom screening, and patient query resolution using OpenAI APIs and prompt engineering.",
                    "Led development of a multi-agent telehealth platform, including specialized agents (e.g., Radiology Agent) to assist clinicians with medical interpretation and workflow automation.",
                    "Developed scalable AI microservices with FastAPI, Docker, and Kubernetes; automated CI/CD pipelines with GitHub Actions, cutting manual ops by 40%.",
                    "Optimized model performance through real-time feedback analysis, CSAT tracking, and prompt tuning—boosting user experience by 25% in A/B tests."
                ]
            },
            {
                company: "University of Florida",
                website: "https://www.ufl.edu",
                logo: "files/uflogo.png",
                location: "Gainesville, FL, USA",
                dates: "01/2024 - 05/2024",
                role: "Graduate Teaching Assistant for Mobile Computing",
                companyIcon: "fa fa-graduation-cap",
                responsibilities: [
                    "Delivered lectures, provided technical assistance, and managed Canvas for the Mobile Computing course."
                ]
            },
            {
                company: "Nissan Digital India LLP",
                website: "https://www.nissanmotor.jobs/ami/india/ndi/index.html",
                logo: "files/ndi.png",
                location: "Trivandrum, India",
                dates: "09/2018 - 06/2022",
                role: "DevOps / Data Engineer",
                companyIcon: "fa-solid fa-car",
                responsibilities: [
                    "Led DevOps automation for Nissan’s Next Gen Delivery initiative, building CI/CD pipelines with Jenkins, GitLab CI, and GitHub Actions to cut release times by 40%.",
                    "Automated cloud infrastructure provisioning using Terraform, Ansible, and AWS CloudFormation, enabling zero-touch deployments across environments.",
                    "Engineered scalable ETL pipelines and monitoring systems using Apache Airflow, PySpark, Prometheus, and ELK Stack—boosting data reliability and reducing system downtime.",
                    "Drove cross-functional collaboration across Dev, QA, and Ops teams, improving deployment velocity by 25% and delivering actionable insights through Tableau dashboards.",
                ]
            },
            {
                company: "Trigent Software, India",
                website: "https://trigent.com/",
                logo: "files/trigentsoft.png",
                location: "Bangalore, India",
                dates: "01/2018 - 09/2018",
                role: "Data Engineer Intern",
                companyIcon: "fa-solid fa-desktop",
                responsibilities: [
                    "Built and maintained ETL pipelines using Python, SQL, and Apache NiFi to process structured and unstructured data for analytics and reporting.",
                    "Contributed to cloud migration efforts to AWS, working with S3, EC2, and RDS to support scalable, cost-efficient data storage solutions.",
                    "Improved data quality and performance through preprocessing workflows in Pandas/NumPy and optimization of complex SQL queries.",
                    "Enabled data-driven decision-making by supporting Tableau dashboard development and participating in schema design and documentation for scalable analytics.",
                ]
            }
        ]
    },
    volunteeringSection: {
        sectionId: "volunteering",
        title: "Volunteering Experience",
        iconClass: "fas fa-hands-helping",
        items: [
            {
                organization: "IGSA@UF Gainesville, FL",
                role: "PR Director",
                years: "2023 - 2024",
                description: "Organizing and coordinating key events, including orientation, Diwali, and Holi festivals. I ensured smooth communication and effective collaboration."
            }
        ]
    },
    projectsSection: {
        sectionId: "projects",
        title: "Projects",
        iconClass: "fas fa-folder-open",
        items: [
            {
                title: "Dell-Nvidia Hackathon: Gen AI",
                link: "https://github.com/uDivy/Hackathon/tree/dockerized/dell_nvidia_challenge",
                iconClass: "fas fa-robot",
                description: "Transcribe doctor's prescriptions and extract structured data from them, then create talking digital avatars that read the prescriptions."
            },
            {
                title: "DeepNucleiNet: Nuclei Segmentation",
                link: "https://github.com/asan333/MLE-Group14",
                iconClass: "fas fa-dna",
                description: "Fine-tuned SAM and implemented a comparative study using YOLOv8, SAM, & Detectron2; achieving a mAP of 0.49 with Detectron2."
            },
            {
                title: "GeoPricePredictor",
                link: "https://github.com/uDivy/GeoPricePredictor",
                iconClass: "fas fa-chart-line",
                description: "Developed a house price prediction ML model integrating intrinsic and image features and external POI data, achieving an R² score of 0.9."
            },
            {
                title: "Road Accident Analysis",
                link: "https://github.com/uDivy/road_acc_analysis_dbms/tree/master",
                iconClass: "fas fa-car-crash",
                description: "Engineered an interactive dashboard to analyze over 1.3 million FARS data points using Angular and Express and SQL, providing real-time insights."
            },
            {
                title: "MediMates",
                link: "https://github.com/asan333/DH_MediMate",
                iconClass: "fas fa-user-md",
                description: "Led a team to develop a conversational AI system that generates avatars and doctor's notes of patient's diagnosis, leveraging cutting-edge AI tools."
            },
            {
                title: "Sign Language Detection",
                link: "https://www.youtube.com/watch?v=pDXdlXlaCco",
                iconClass: "fa-solid fa-ear-deaf",
                description: "Studied a real-time ASL detection system using OpenCV, Mediapipe Holistic, and LSTM using TensorFlow and Keras APIs."
            },
            {
                title: "Gator Taxi Ride Management",
                link: "https://github.com/uDivy/gator_taxi_ads_cop5536/tree/dev",
                iconClass: "fa-solid fa-taxi",
                description: "Engineered a sophisticated backend for a ride-sharing service using data structures like Red-Black Trees and Min Heaps."
            },
            {
                title: "CodeLings: English to Bash Script",
                link: "https://huggingface.co/uDivy/codet5p-220m-bimodal-finetune-english-to-bash",
                iconClass: "fas fa-code",
                description: "Fine-tuned a codet5p-220m-bimodal model using HF transformers library for translating natural language to Bash commands"
            },
            {
                title: "GatorMAITH: Math Symbol Classification",
                link: "https://github.com/UF-EEL5840-F22/homework-3-part-2-gatormaith",
                iconClass: "fas fa-code",
                description: "Collaborated with a team to develop a CNN using PyTorch. Achieved exceptional training accuracy of 95 and test accuracy of 85%."
            }
            
        ]
    },
    skillsSection: {
        title: "Skills",
        iconClass: "fas fa-laptop-code",
        categories: [
            {
                name: "Programming Languages",
                skills: ["C", "C++", "Erlang", "GoLang", "Groovy", "Java", "Python"]
            },
            {
                name: "Artificial Intelligence",
                skills: [
                    "AI", "Computer Vision (CV)", "Deep Learning (DL)", "Fine-Tuning",
                    "Generative AI", "Large Language Models (LLM)", "Machine Learning (ML)",
                    "NLP", "Prompt Engineering", "Transfer Learning", "Vision Language Models"
                ]
            },
            {
                name: "Machine Learning Frameworks",
                skills: ["Keras", "NumPy", "Pandas", "PyTorch", "sklearn", "TensorFlow"]
            },
            {
                name: "Cloud & DevOps",
                skills: ["Automation", "AWS", "Bamboo", "Bitbucket", "CI/CD", "Cloud Computing", "DevOps", "DevSecOps", "Docker", "Github", "Jenkins", "Kubernetes", "Nexus"]
            },
            {
                name: "Databases & Data Engineering",
                skills: ["Advanced SQL", "Amazon Redshift", "Cassandra", "Data Preparation", "ETL", "Hadoop", "MongoDB", "neo4j", "Oracle", "PostgreSQL", "Redis"]
            },
            {
                name: "Big Data & Streaming Technologies",
                skills: ["Apache Airflow", "Apache Kafka", "Apache Spark", "Apache Zookeeper"]
            },
            {
                name: "Web Development & Frameworks",
                skills: ["Angular", "Django", "Express", "Flask", "Java Springboot", "Node.js"]
            },
            {
                name: "Monitoring & Security",
                skills: ["Clair Scan", "ELK Stack", "JMeter", "Liquibase", "Prometheus", "SonarQube", "Veracode"]
            },
            {
                name: "Visualization & Analytics",
                skills: ["EDA", "Tableau"]
            },
            {
                name: "Industry-Specific AI Applications",
                skills: ["Healthcare AI"]
            }
        ]
    },
    awardsSection: {
        sectionId: "awards",
        title: "Awards & Achievements",
        iconClass: "fas fa-award",
        items: [
            {
                award: "High Five Award",
                description: "Awarded by Nissan Digital India LLP for outstanding performance."
            }
        ]
    },
    certificationsSection: {
        sectionId: "certifications",
        title: "Certifications",
        iconClass: "fas fa-certificate",
        items: [
            { certification: "Data Engineering Bootcamp", organization: "dataexpert.io", years: "03/2025 - Present" },
            { certification: "Agentic Design Patterns with AutoGen", organization: "DeepLearning.AI", years: "10/2024 - Present" },
            { certification: "GPU-Accelerated Data Manipulation", organization: "NVIDIA", years: "10/2024 - Present" },
            { certification: "Knowledge Graphs for RAG", organization: "DeepLearning.AI", years: "09/2024 - Present" },
            { certification: "Multimodal RAG: Chat with Videos", organization: "DeepLearning.AI", years: "09/2024 - Present" },
            { certification: "Data Parallelism: Training on Multiple GPUs", organization: "NVIDIA", years: "09/2024 - Present" },
            { certification: "LangChain for LLM Application Development", organization: "DeepLearning.AI", years: "09/2024" },
            { certification: "LangChain Chat with Your Data", organization: "DeepLearning.AI", years: "09/2024 - Present" },
            { certification: "Generative AI with Diffusion Models", organization: "NVIDIA", years: "02/2024 - Present" },
            { certification: "NLP with Transformers in Python", organization: "Udemy", years: "06/2022 - Present" },
            { certification: "Data Warehousing on AWS", organization: "Amazon Web Services", years: "12/2021 - Present" },
            { certification: "CI/CD with Jenkins, Ansible, Docker, Kubernetes", organization: "Udemy", years: "07/2021 - Present" },
            { certification: "Monitoring & Telemetry of Production Systems", organization: "Coursera", years: "02/2021 - Present" },
            { certification: "Container Orchestration using Kubernetes", organization: "Coursera", years: "02/2021 - Present" },
            { certification: "Taming Big Data with Apache Spark and Python", organization: "Udemy", years: "06/2020 - Present" },
            { certification: "Angular & NodeJS - The MEAN Stack Guide", organization: "Udemy", years: "05/2020 - Present" },
            { certification: "Tableau Desktop Advanced", organization: "Tableau", years: "05/2020 - Present" }
        ]
    }
};