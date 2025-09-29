import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getAllBlogsMetadata, BlogPost } from "../lib/blogs";

export default function BlogPage({ posts }: { posts: BlogPost[] }) {
  const [activePost, setActivePost] = useState<string | null>(null);
  const activeIndex = activePost ? posts.findIndex((p) => p.slug === activePost) : -1;
  const activeBlog = activeIndex >= 0 ? posts[activeIndex] : null;

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex > 0) setActivePost(posts[activeIndex - 1].slug);
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex < posts.length - 1) setActivePost(posts[activeIndex + 1].slug);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-[100px] p-4 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Blog</h1>

        {/* Grid of blog tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="rounded-lg shadow hover:shadow-2xl transition cursor-pointer overflow-hidden bg-white flex flex-col"
              onClick={() => setActivePost(post.slug)}
            >
              {post.image && (
                <div className="w-full relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <p className="text-gray-700 flex-1">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for active blog */}
        {activeBlog && (
          <div
            className="fixed inset-0 bg-white bg-opacity-95 flex items-start justify-center z-50 overflow-y-auto p-4 pt-20"
            onClick={() => setActivePost(null)}
          >
            <div
              className="bg-white rounded-lg max-w-4xl w-full p-6 relative shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-lg"
              >
                ✕
              </button>

              {/* Prev / Next buttons */}
              {activeIndex > 0 && (
                <button
                  onClick={goPrev}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-gray-700 hover:text-gray-900 font-bold text-2xl"
                >
                  ‹
                </button>
              )}
              {activeIndex < posts.length - 1 && (
                <button
                  onClick={goNext}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-gray-700 hover:text-gray-900 font-bold text-2xl"
                >
                  ›
                </button>
              )}

              {activeBlog.image && (
                <div className="w-full max-h-[500px] bg-gray-100 flex items-center justify-center rounded mb-4 overflow-hidden">
                  <img
                    src={activeBlog.image}
                    alt={activeBlog.title}
                    className="w-full object-contain"
                  />
                </div>
              )}

              <h2 className="text-3xl font-bold mb-2">{activeBlog.title}</h2>
              <p className="text-gray-500 text-sm mb-6">{activeBlog.date}</p>
              <div className="space-y-4">
                {activeBlog.content.split("\n").map((paragraph, idx) =>
                  paragraph.trim() ? (
                    <p key={idx} className="text-gray-800 leading-relaxed">
                      {paragraph}
                    </p>
                  ) : null
                )}
              </div>
            </div>
          </div>
        )}
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
