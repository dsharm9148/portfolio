import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

// List of countries with slugs and example image
const countries = [
  { name: 'USA', slug: 'usa', image: '/images/travel/usa/dc.JPG' },
  { name: 'Canada', slug: 'canada', image: '/images/travel/canada/toronto.JPG' },
  { name: 'Italy', slug: 'italy', image: '/images/travel/italy/milan.JPG' },
  { name: 'Japan', slug: 'japan', image: '/images/travel/japan/ueno-park.JPG' },
  { name: 'NZ', slug: 'nz', image: '/images/travel/nz/milford-sound.JPG' },
  { name: 'Australia', slug: 'australia', image: '/images/travel/australia/bondi-beach.JPG' },
  { name: 'Singapore', slug: 'singapore', image: '/images/travel/singapore/gardens-by-the-bay.JPG' },
  { name: 'Switzerland', slug: 'switzerland', image: '/images/travel/switzerland/first-grindelwald.jpg' },
  { name: 'Spain', slug: 'spain', image: '/images/travel/spain/barcelona.jpg' },
  { name: 'Andorra', slug: 'andorra', image: '/images/travel/andorra/la-massana.JPG' },
  { name: 'Greece', slug: 'greece', image: '/images/travel/greece/acropolis.jpg' },
  { name: 'Germany', slug: 'germany', image: '/images/travel/germany/munster.jpg' },
  { name: 'Morocco', slug: 'morocco', image: '/images/travel/morocco/sahara-desert.jpg' },
  { name: 'Portugal', slug: 'portugal', image: '/images/travel/portugal/douro-river.jpg' },
  { name: 'Scotland', slug: 'scotland', image: '/images/travel/scotland/cockburn-street.JPG' },
  { name: 'Ireland', slug: 'ireland', image: '/images/travel/ireland/cliffs-of-moher.JPG' },
];

export default function Travel() {
  return (
    <div>
      <Navbar />
      <main className="pt-20 p-4 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Travel Destinations
        </h1>

        {/* Gallery container */}
        <div
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {countries.map((country, idx) => (
            <Link key={idx} href={`/travel/${country.slug}`}>
              <div className="break-inside-avoid rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 bg-white cursor-pointer mb-4">
                {country.image ? (
                  <Image
                    src={country.image}
                    alt={country.name}
                    width={400}
                    height={300}
                    className="w-full object-contain"
                  />
                ) : (
                  <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                <p className="p-3 text-center text-gray-700 font-medium uppercase">
                  {country.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}