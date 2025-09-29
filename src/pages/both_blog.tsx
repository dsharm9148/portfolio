import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getAllBlogsMetadata, BlogPost } from "../lib/blogs";

// Technique articles (manual list for now)
const techniqueArticles = [
  {
    title: "Alcaraz and Sabalenka Shine at the 2025 US Open",
    date: "2025-09-16",
    excerpt:
      "The 2025 U.S. Open Tennis Championships came to a close with two superstars showing why they are at the top of tennis today",
    link: "https://nique.net/sports/2025/09/16/alcaraz-and-sabalenka-shine-at-the-2025-us-open/",
  },
  {
    title: "Volleyball Dominates in Georgia Tech Classic",
    date: "2025-09-09",
    excerpt: "Tech’s 2025 volleyball season started strong with a perfect 3-0 record",
    link: "https://nique.net/sports/2025/09/09/volleyball-dominates-in-georgia-tech-classic/",
  },
  // Add more as needed
];

export default function BlogPage({ posts }: { posts: BlogPost[] }) {
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get the 2 most recent from each
  const recentPersonal = sortedPosts.slice(0, 2);
  const recentTechnique = techniqueArticles.slice(0, 2);

  return (
    <div>
      <Navbar />
      <main className="pt-24 px-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Personal Blog */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Personal Blog
            </h2>
            <div className="space-y-6">
              {recentPersonal.map((post) => (
                <div
                  key={post.slug}
                  className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition"
                >
                  {/* Blog Image */}
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-48"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                    <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
                    <Link
                      href="/blog"
                      className="text-blue-700 font-medium mt-2 inline-block hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/blog"
                className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-900 transition"
              >
                See All Blogs
              </Link>
            </div>
          </div>

          {/* Technique Articles */}
            <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Technique Articles
            </h2>

            {/* About Technique Section (moved above articles) */}
            <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-inner">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                About The Technique
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                The Technique is Georgia Tech’s student-run newspaper, covering
                campus news, sports, opinions, and culture. As a contributor, I
                write articles highlighting major events, athletics, and stories
                that matter to the GT community. Here you’ll find a selection of
                my work, with links to the full stories on{" "}
                <a
                    href="https://nique.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    nique.net
                </a>
                .
                </p>
            </div>

            {/* Recent Technique Articles */}
            <div className="space-y-6">
                {recentTechnique.map((article, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-lg shadow hover:shadow-lg p-4 transition"
                >
                    <h3 className="text-xl font-semibold">{article.title}</h3>
                    <p className="text-gray-500 text-sm">{article.date}</p>
                    <p className="text-gray-600 text-sm mt-2">{article.excerpt}</p>
                    <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium mt-2 inline-block hover:underline"
                    >
                    Read on Technique →
                    </a>
                </div>
                ))}
            </div>

            <div className="mt-6">
                <Link
                href="/technique"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-800 transition"
                >
                See All Technique Articles
                </Link>
            </div>
            </div>


        </div>
      </main>
      <Footer />
    </div>
  );
}

// Next.js: fetch posts
export async function getStaticProps() {
  const posts = getAllBlogsMetadata();
  return { props: { posts } };
}
