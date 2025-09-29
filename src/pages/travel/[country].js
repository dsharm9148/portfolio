import fs from "fs";
import path from "path";
import Image from "next/image";
import Navbar from "../../components/Navbar"; // adjust path if needed

export async function getStaticPaths() {
  const countries = [
    "usa", "canada", "italy", "japan",
    "nz", "australia", "singapore", "switzerland", "spain",
    "andorra", "greece", "germany", "morocco",
    "portugal", "scotland", "ireland"
  ];

  const paths = countries.map(slug => ({ params: { country: slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const countrySlug = params.country;
  const countryDir = path.join(process.cwd(), "public", "images", "travel", countrySlug);

  let imageFiles = [];
  try {
    imageFiles = fs.readdirSync(countryDir).filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));
  } catch (err) {
    console.error("Error reading images for", countrySlug, err);
  }

  const images = imageFiles.map(file => `/images/travel/${countrySlug}/${file}`);
  const captions = imageFiles.map(file => {
    const name = file.substring(0, file.lastIndexOf('.')); // remove extension
    return name.replace(/[-_]/g, ' '); // replace - or _ with space
  });

  return {
    props: {
      country: countrySlug.toUpperCase(),
      images,
      captions
    }
  };
}

export default function CountryPage({ country, images, captions }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />  
      <div className="p-8 pt-32">
        <h1 className="text-4xl font-bold mb-8">{country}</h1>
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4">
          {images.map((src, idx) => {
            const caption = captions[idx];
            // Hide caption if it starts with IMG or DSC
            const showCaption = caption && !/^IMG|DSC/i.test(caption);

            return (
              <div key={idx} className="mb-4 break-inside-avoid rounded overflow-hidden shadow">
                <Image
                  src={src}
                  alt={caption}
                  width={500}
                  height={400}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
                {showCaption && (
                  <p className="mt-2 text-left text-gray-600 text-sm uppercase">
                    {caption}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
