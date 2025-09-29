import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Resume() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16">
        
        {/* Left: Headshot */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-lg shadow-2xl overflow-hidden w-80 h-100">
            <Image
              src="/IMG_6900.jpg"
              alt="Headshot"
              width={320}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right: About Me */}
        <div className="flex-1 text-center md:text-left mt-8 md:mt-0 md:ml-12">
          <h1 className="text-5xl font-bold text-gray-800">
            Hi, I'm Diya Sharma!
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            I'm a Computer Science student at Georgia Tech passionate about AI,
            data science, and neuroscience. I've had expereince with biomedical research and computational data science. 
            Check out my resume and feel free to reach out to me with any questions, opportunities, or collaborations.
          </p>
        </div>
      </section>

      <main className="p-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Diya Sharma</h1>
          <p className="mt-2 text-gray-700">
            U.S. Citizen |{" "}
            <a href="mailto:d_sh@outlook.com" className="text-blue-500 hover:underline">
              d_sh@outlook.com
            </a>{" "}
            | +1 (443) 779-0236 |{" "}
            <a
              href="https://www.linkedin.com/in/diyasharma5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/diyasharma5
            </a>
          </p>
        </div>
        <div className="text-center mb-6">
        <a
            href="/Diya Sharma September 2025 .pdf"
            download="Diya_Sharma_Resume.pdf"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
            Download Resume (PDF)
        </a>
        </div>

        {/* Education */}
        <section id="education" className="mb-10 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div>
            <p className="font-semibold">Georgia Institute of Technology — Atlanta, GA</p>
            <p>B.S. Computer Science; Minor in Neuroscience, Expected May 2027</p>
            <p>Cumulative GPA: 3.77 | Dean’s List 2023–2025 | Faculty Honors 2025–Present</p>
            <p>
              Relevant Coursework: Data Structures and Algorithms, Objects and Design,
              Introduction to Artificial Intelligence, Intro to Cognitive Science,
              User Interface Design, Research Methods: Human Factors and HCI
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section id="work" className="mb-10 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

          <div className="mb-6">
            <p className="font-semibold">
              University of Maryland School of Medicine, Blanpied Lab — Baltimore, MD
            </p>
            <p className="italic">Data Science Intern — Summer 2024, Oct 2022 – Apr 2023</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Developed a classification system (SVM, Random Forest, Gradient Boosting)
                to automatically differentiate synapses.
              </li>
              <li>
                Applied feature engineering and dimensionality reduction techniques
                using SciKit-Learn and OpenAI.
              </li>
              <li>
                Automated data collection and image processing pipelines using Java,
                MATLAB, and Python.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">
              Johns Hopkins University Applied Physics Laboratory — Laurel, MD
            </p>
            <p className="italic">Mechanical Engineering Intern — June 2022 – Mar 2023</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Conceived project idea for fully electronic triage tagging system,
                leading to $20,000 grant.
              </li>
              <li>
                Led intern team designing a novel medical sensor component.
              </li>
              <li>
                Presented research and prototype at the 2023 IEEE Integrated STEM
                Education Conference.
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section is = "skills" className="mb-10 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold">Programming</p>
              <p className="text-gray-700">
                Python · Java · C++ · MATLAB · Django · SQL · HTML/CSS · JavaScript ·
                Git · GitHub · Agile/Scrum · VS Code · PyCharm
              </p>
            </div>
            <div>
              <p className="font-semibold">Data Science & Analytics</p>
              <p className="text-gray-700">
                Pandas · NumPy · SciPy · Matplotlib · Seaborn · Scikit-learn ·
                PyTorch · OpenAI Gym · Jupyter Lab · Excel · Data Visualization
              </p>
            </div>
            <div>
              <p className="font-semibold">Robotics & Hardware</p>
              <p className="text-gray-700">
                CAD · Ultimaker 3D Printing · Arduino · Raspberry Pi · PCB Design ·
                Micro Soldering
              </p>
            </div>
            <div>
              <p className="font-semibold">Campus Involvements</p>
              <p className="text-gray-700">
                Campus Tour Guide · Grand Challenges LLC · Event Services Assistant ·
                Tower Undergrad Research Paper (Editor) · Technique Newspaper ·
                Medical Robotics · SynapseX
              </p>
            </div>
          </div>
        </section>

        {/* Research */}
        <section id = "research" className="mb-10 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Research</h2>
          <p className="font-semibold">
            Bio-Interfaced Translational Nanoengineering Lab — Atlanta, GA
          </p>
          <p className="italic mb-2">Undergraduate Research Assistant — Jan 2024 – Present</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Developed a wearable device prototype for monitoring stress through EEG,
              ECG, and physiological signals.
            </li>
            <li>
              Built data preprocessing pipelines: filtering, artifact removal,
              normalization, and feature extraction.
            </li>
            <li>
              Trained and optimized deep learning models (CNN, BLSTM-LSTM) for
              biomedical signal classification.
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section id = "projects" className="mb-10 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>

          <div className="mb-6">
            <p className="font-semibold">
              Surgical Arm, GT Medical Robotics — Software Team
            </p>
            <p className="italic">Aug 2023 – Present</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Employed image processing and computer vision with OpenCV and TensorFlow.
              </li>
              <li>
                Collaborated with a multidisciplinary team to enable robotic arm to
                autonomously locate and classify surgical tools.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <p className="font-semibold">Spotify Wrapper, CS 2340 — Scrum Master</p>
            <p className="italic">Oct 2024 – Dec 2024</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Coordinated 5-member team to deliver Spotify Wrapped-style analytics tool
                ahead of deadline.
              </li>
              <li>
                Integrated with API using Java for seamless data connection.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Restaurant Finder, CS 2340 — Scrum Master</p>
            <p className="italic">Aug 2024 – Oct 2024</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Led team to deliver Atlanta Food Finder website on time.
              </li>
              <li>
                Contributed to front-end design using HTML and CSS.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
