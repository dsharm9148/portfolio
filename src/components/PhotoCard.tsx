import Image from 'next/image';

interface PhotoCardProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function PhotoCard({ src, alt, caption }: PhotoCardProps) {
  return (
    <div className="border rounded overflow-hidden shadow hover:shadow-lg transition">
      <Image src={src} alt={alt} width={300} height={200} className="object-cover w-full h-48" />
      {caption && <p className="p-2 text-center">{caption}</p>}
    </div>
  );
}
