export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  num: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  description: string[];
  images?: ProjectImage[];
  /** optional override for the home-page highlight cover image */
  cover?: string;
  /** how to render the image area. default: gallery */
  imageLayout?: "gallery" | "feature";
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    num: "01",
    title: "TrainSmartAI",
    tagline:
      "A local-first health intelligence dashboard for Apple Health data.",
    year: "2025 — Present",
    role: "Solo · design, ML, full stack",
    stack: [
      "FastAPI",
      "PostgreSQL",
      "pandas",
      "scikit-learn",
      "LangChain",
      "Ollama",
      "Streamlit",
    ],
    description: [
      "Built a streaming XML parser to ingest multi-gigabyte Apple Health exports into PostgreSQL.",
      "Designed a weighted daily readiness score across sleep, heart rate, training load, and bedtime consistency.",
      "Implemented K-means clustering to auto-label day archetypes (hard training, deep recovery, balanced).",
      "Engineered a LangChain RAG chat assistant with Chroma + Ollama embeddings running entirely on-device — no API keys, no cloud calls.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/dsharm9148/TrainSmartAI" },
    ],
  },
  {
    num: "02",
    title: "EEG-Based Stress & Workload Detection",
    tagline:
      "A wearable biosensor and deep-learning pipeline for real-time mental workload and stress detection.",
    year: "Jan 2024 — Present",
    role:
      "Undergraduate Research Assistant · Bio-Interfaced Translational Nanoengineering (BITN) Lab",
    stack: [
      "EEG",
      "Signal Processing",
      "BLSTM-LSTM",
      "CNN",
      "Python",
      "PyTorch",
      "ICA",
      "Wearable Hardware",
    ],
    description: [
      "Developed a wearable device prototype that monitors stress through EEG, ECG, and physiological signals.",
      "Built data preprocessing pipelines: filtering, artifact removal, normalization, and feature extraction.",
      "Trained and optimized deep learning models (CNN, BLSTM-LSTM) for biomedical signal classification.",
      "Fabricated biocompatible hardware tailored for stress detection with EEG as the primary modality.",
    ],
    images: [
      {
        src: "/projects/vip-sensor.jpg",
        alt: "Sensor placement diagram showing EEG, EOG, blue light, and IR PPG sensors on the head",
      },
      {
        src: "/projects/vip-pipeline.jpg",
        alt: "EEG preprocessing pipeline using RICA on F3 and F4 signals",
      },
      {
        src: "/projects/vip-ica.jpg",
        alt: "ICA mixing and unmixing matrices showing anticorrelation of F3 and eye motion",
      },
    ],
    cover: "/projects/vip-pipeline.jpg",
    imageLayout: "gallery",
    links: [],
  },
  {
    num: "03",
    title: "Machine Learning-Driven Analysis of Synaptic Structures",
    tagline:
      "A machine learning study of synaptic protein clusters across inhibitory neuron subtypes.",
    year: "Oct 2022 – Apr 2023 · Summer 2024",
    role:
      "Data Science Intern · University of Maryland School of Medicine · Blanpied Lab",
    stack: [
      "Python",
      "Java",
      "MATLAB",
      "scikit-learn",
      "SVM",
      "Random Forest",
      "Gradient Boosting",
      "Image Processing",
    ],
    description: [
      "Developed a classification system (SVM, Random Forest, Gradient Boosting) to automatically differentiate synapses.",
      "Applied feature engineering and dimensionality reduction techniques using scikit-learn.",
      "Automated data collection and image processing pipelines in Java, MATLAB, and Python over confocal microscopy data.",
      "Authored an upcoming first-author manuscript on synaptic protein cluster diversity across inhibitory neuron subtypes.",
    ],
    images: [
      { src: "/projects/umb-poster.jpg", alt: "UMB Blanpied Lab research poster" },
      { src: "/projects/umb-heatmap.jpg", alt: "Heatmap of normalized mean weighted feature importances" },
      { src: "/projects/umb-importance.jpg", alt: "Aggregated weighted feature importances by classifier" },
      { src: "/projects/umb-auc.jpg", alt: "AUC scores by class pair and classifier" },
      { src: "/projects/umb-umap.jpg", alt: "UMAP projection with HDBSCAN clusters" },
      { src: "/projects/umb-dendrogram.jpg", alt: "Hierarchical clustering dendrogram and feature correlation matrix" },
    ],
    cover: "/projects/umb-umap.jpg",
    imageLayout: "gallery",
    links: [
      { label: "Manuscript (PDF)", href: "/projects/umb-manuscript.pdf" },
      {
        label: "GitHub",
        href: "https://github.com/dsharm9148/UMB_ML_DataAnalysis_Project",
      },
    ],
  },
  {
    num: "04",
    title: "Electronic Sensor for Mass Casualty Triage",
    tagline:
      "A low-cost electronic triage tag designed to replace paper tags in mass casualty events.",
    year: "June 2022 – Mar 2023",
    role:
      "Mechanical Engineering Intern · Johns Hopkins University Applied Physics Laboratory",
    stack: [
      "CAD",
      "PCB Design",
      "Mechanical Product Design",
      "Microcontrollers",
      "Sensors",
      "3D Printing",
    ],
    description: [
      "Conceived the fully electronic triage tagging system concept, securing a $20,000 grant.",
      "Led the intern team designing a novel medical sensor component (~$70 prototype).",
      "Captured vital signs — blood oxygen, heart rate, temperature, and mobility — with an onboard LED status indicator.",
      "Redesigned the prototype around a custom PCB for a compact, adhesive form factor.",
      "Presented the research and prototype at the 2023 IEEE Integrated STEM Education Conference.",
    ],
    images: [
      {
        src: "/projects/apl-poster.jpg",
        alt: "Novel Medical Sensor Design for Mass Casualty Triage and Trauma Care — vertical poster",
      },
      {
        src: "/projects/apl-poster-horizontal.jpg",
        alt: "HEARTS: A Virtual System for Mass Casualty Triage and Trauma Care — horizontal poster",
      },
    ],
    imageLayout: "gallery",
    links: [],
  },
  {
    num: "05",
    title: "CS 2340 · Objects and Design",
    tagline:
      "Two team projects from Georgia Tech CS 2340: a Spotify Wrapped clone and an Atlanta restaurant finder.",
    year: "Aug – Dec 2024",
    role: "Scrum Master · Team 5 · Georgia Tech CS 2340 (Objects and Design)",
    stack: [
      "Django",
      "Next.js",
      "Python",
      "Java",
      "TypeScript",
      "Spotify Web API",
      "Google Maps API",
      "OAuth",
    ],
    description: [
      "Served as Scrum Master across two team projects, coordinating a 5-member team through sprints and standups.",
      "Built Spotify Wrapper — a year-round Spotify Wrapped clone — with Java-based Spotify Web API integration.",
      "Built Atlanta Food Finder — a Django + Next.js restaurant discovery app on top of the Google Maps Places API.",
      "Drove the OO design across both projects with use-case and sequence diagrams.",
      "Delivered both projects ahead of deadline.",
    ],
    images: [
      {
        src: "/projects/cs2340-spotify.jpg",
        alt: "Spotify Wrapper — public Spotify Wrapped presentation page",
      },
      {
        src: "/projects/cs2340-food-finder.jpg",
        alt: "Atlanta Food Finder — restaurant detail modal over a Google Maps view",
      },
    ],
    imageLayout: "gallery",
    links: [
      {
        label: "Team site",
        href: "https://sites.google.com/view/cs2340-team5/home",
      },
      {
        label: "Spotify Wrapper · GitHub",
        href: "https://github.com/dsharm9148/2340SpotifyWrapper",
      },
      {
        label: "Food Finder · GitHub",
        href: "https://github.com/dsharm9148/CS-2340",
      },
    ],
  },
];
