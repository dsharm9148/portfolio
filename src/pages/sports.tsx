"use client";
import { useState } from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Navbar from "../components/Navbar";

// --- Types ---
type GalleryFolder = {
  folder: string;
  files: string[];
};

type SportsProps = {
  galleryData: GalleryFolder[];
};

// --- getStaticProps ---
export async function getStaticProps() {
  const sportsDir = path.join(process.cwd(), "public/sports");
  const folders = fs.readdirSync(sportsDir);

  const galleryData: GalleryFolder[] = folders
    .filter((folder) => folder !== ".DS_Store")
    .map((folder) => {
      const folderPath = path.join(sportsDir, folder);
      const files = fs
        .readdirSync(folderPath)
        .filter((f) => /\.(jpg|jpeg|png)$/i.test(f));
      return { folder, files };
    });

  return { props: { galleryData } };
}

// --- Component ---
export default function Sports({ galleryData }: SportsProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Helper to navigate images
  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;

    const [folderName, fileName] = selectedImage.replace("/sports/", "").split("/");
    const folderData = galleryData.find((f) => f.folder === folderName);
    if (!folderData) return;

    const idx = folderData.files.indexOf(fileName);
    if (idx === -1) return;

    const newIndex =
      direction === "prev"
        ? (idx - 1 + folderData.files.length) % folderData.files.length
        : (idx + 1) % folderData.files.length;

    setSelectedImage(`/sports/${folderName}/${folderData.files[newIndex]}`);
  };

  return (
    <div className="min-h-screen bg-white text-black scroll-smooth">
      <Navbar />

      {/* Buffer for navbar */}
      <div className="pt-28 px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-serif font-semibold mb-8 text-center">
          Sports Photography Gallery
        </h1>

        {/* Section Shortcut Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {galleryData.map(({ folder }) => (
            <a
              key={folder}
              href={`#${folder}`}
              className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded transition text-sm font-medium"
            >
              {folder.replace(/_/g, " ")}
            </a>
          ))}
        </div>

        {galleryData.map(({ folder, files }) => (
          <div key={folder} id={folder} className="mb-12 scroll-mt-28">
            <h2 className="text-2xl font-medium mb-4 border-b border-gray-300 pb-2">
              {folder.replace(/_/g, " ")}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {files.map((file) => {
                const imgPath = `/sports/${folder}/${file}`;
                return (
                  <div
                    key={file}
                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
                    onClick={() => setSelectedImage(imgPath)}
                  >
                    <Image
                      src={imgPath}
                      alt={file}
                      width={400}
                      height={400}
                      className="object-cover w-full h-60"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-sm font-medium">
                      Click to View
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-transparent rounded-lg max-w-[90vw] max-h-[90vh] p-2 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Selected"
              width={1000}
              height={1000}
              className="max-w-full max-h-[80vh] object-contain rounded"
            />

            {/* Controls */}
            <div className="flex justify-between mt-4 w-full max-w-md">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>

              <div className="flex gap-2">
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded"
                  onClick={() => navigateImage("prev")}
                >
                  ◀
                </button>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded"
                  onClick={() => navigateImage("next")}
                >
                  ▶
                </button>
              </div>

              <a
                href={selectedImage}
                download
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
