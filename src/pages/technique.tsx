import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { techniqueArticles } from "../lib/techniqueArticles";

export default function TechniquePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Technique Articles</h1>

        {/* Intro Section */}
        <section className="bg-gray-200 rounded-lg p-8 max-w-5xl mx-auto mb-12 shadow-inner">
          <h2 className="text-2xl font-bold mb-4 text-center">About The Technique</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            The Technique is Georgia Tech&apos;s student-run newspaper, covering campus news, sports, culture, and opinions since 1911. 
            Known as the South&apos;s liveliest college newspaper, it provides students with insightful reporting and a platform to engage with the Tech community. 
            As a sports contributor, I write articles highlighting major athletic events at Tech as well as national news. 
            Here you&apos;ll find a selection of my work, with links to the full stories on nique.net.
          </p>
        </section>

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techniqueArticles.map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-lg shadow hover:shadow-xl transition overflow-hidden bg-white"
            >
              {article.image && (
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-gray-500 text-sm">{article.date}</p>
                <p className="mt-2">{article.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
