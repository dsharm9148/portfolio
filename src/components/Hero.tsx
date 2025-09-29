import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col">

      {/* Landing Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center">
        <Image
          src="/images/DSC_0202.jpg" // Replace with your landing image
          alt="Landing Background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-7xl font-serif font-medium drop-shadow-lg">
            Diya Sharma&apos;s Portfolio
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-2xl mx-auto font-serif font-medium drop-shadow">
            Travel Photography
          </p>
        </div>
      </section>

      {/* Travel Section */}
      <section id="travel-section" className="min-h-[70vh] flex flex-col md:flex-row items-center px-8 py-16 bg-white justify-center md:justify-start">
        {/* Left: Travel Text */}
        <div className="flex-1 text-center md:text-left max-w-md md:ml-16">
          <h2 className="text-4xl font-bold text-gray-800">Travel & Photography</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-lg">
            Travel has always been one of my greatest passions. 
            Through my photography and stories, I try to capture not just the places I visit, 
            but the moments that make them unforgettable. From bustling city streets to quiet mountain 
            trails, every trip is a chance to see the world in a new way. On this page, 
            I share my adventures through my photographs.
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a
              href="/travel"
              className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              Travel
            </a>
            <a
              href="/blog"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              Blog
            </a>
          </div>
        </div>

        {/* Right: Travel Image */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <div className="rounded-lg shadow-xl overflow-hidden w-full max-w-md">
            <Image
              src="/images/DSCF0548.jpg"
              alt="Travel"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Blog Section (Image Left, Text Right) */}
        <section className="min-h-[70vh] flex flex-col md:flex-row items-center px-8 py-16 bg-gray-50">
        {/* Left: Blog Image */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0 md:mr-12">
            <div className="rounded-lg shadow-xl overflow-hidden w-full max-w-md">
            <Image
                src="/images/1234.JPG" // Replace with your blog image
                alt="Blog"
                width={500}
                height={400}
                className="object-cover w-full h-full"
            />
            </div>
        </div>

        {/* Right: Blog Text */}
        <div className="flex-1 text-center md:text-left mt-8 md:mt-0 md:ml-12">
            <h2 className="text-4xl font-bold text-gray-800">Blog</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-lg">
            My blog is where I reflect on the experiences I gather along the way. 
            I write about the people I meet, the new foods I try, the cultures I explore, 
            and the lessons I learn. It&apos;s also a place where I share my sports writing 
            from Georgia Tech&apos;s newspaper, The Technique!
            </p>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a
                href="/blog"
                className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-900 transition"
            >
                Visit Blog
            </a>
            <a
                href="/technique"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
                Technique Articles
            </a>
            </div>
        </div>
        </section>


      {/* About Me Section */}
      <section className="min-h-[70vh] flex flex-col md:flex-row items-center px-8 py-16 bg-white">
        {/* Left: About Text */}
        <div className="flex-1 text-center md:text-left mt-8 md:mt-0 md:mr-12">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-lg">
            Hi, I&apos;m Diya! I&apos;m a Computer Science student at Georgia Tech 
            with a love for AI, data science, and neuroscience. I enjoy working 
            on projects that combine technology and creativity, especially those 
            that make a real impact on people. Outside of school, I love photography, 
            writing, sports, and the outdoors. Traveling young has taught me how big the world is and how important it is to stay curious, open, 
            and grateful for every opportunity.
          </p>
        </div>

        {/* Right: About Image */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <div className="rounded-lg shadow-xl overflow-hidden w-full max-w-md">
            <Image
              src="/images/234.png"
              alt="About Me"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center bg-gray-50 px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-800">Resume</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-xl text-center">
          Take a look at my academic journey, work experience, and skills in detail.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <a
            href="/Diya-Sharma-September-2025.pdf"
            download
            className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow hover:bg-blue-950 transition"
          >
            Download Resume
          </a>

          <a
            href="https://www.linkedin.com/in/diyasharma5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-800 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/dsharm9148"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-300 text-black font-semibold rounded-lg shadow hover:bg-blue-500 transition"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
