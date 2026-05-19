import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { getPlaceAlbums, getSportAlbums } from "@/lib/albums";

export const metadata: Metadata = {
  title: "Photos — Diya Sharma",
  description: "Travel and sports photography archive.",
};

export default function PhotosPage() {
  const places = getPlaceAlbums();
  const sports = getSportAlbums();
  const totalPlacePhotos = places.reduce((n, a) => n + a.count, 0);
  const totalSportPhotos = sports.reduce((n, a) => n + a.count, 0);

  return (
    <article className="pt-20 sm:pt-28 pb-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <p className="mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)] mb-6">
            Photos · {places.length + sports.length} albums ·{" "}
            {totalPlacePhotos + totalSportPhotos} images
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="serif text-5xl sm:text-7xl leading-[1.02] tracking-[-0.02em] max-w-[16ch]">
            Places & Sports.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-[color:var(--foreground)]/80">
            Travel photography from my study-abroad year and sports shots
            from the sidelines at Georgia Tech.
          </p>
        </Reveal>
      </div>

      {/* PLACES */}
      <section className="mt-16 sm:mt-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 mb-6 flex items-baseline justify-between">
          <p className="mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)]">
            Places
          </p>
          <p className="mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
            {places.length} countries · {totalPlacePhotos} photos
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {places.map((album, idx) => (
              <Reveal key={album.slug} delay={(idx % 8) * 0.04}>
                <Link
                  href={`/photos/${album.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden bg-[color:var(--rule)]"
                >
                  <Image
                    src={album.cover}
                    alt={album.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    quality={78}
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/0" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="serif text-lg leading-tight">{album.name}</p>
                    <p className="mono text-[10px] uppercase tracking-[0.2em] opacity-80 mt-0.5">
                      {album.region} · {album.count}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPORTS */}
      <section className="mt-20 sm:mt-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 mb-6 flex items-baseline justify-between">
          <p className="mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)]">
            Sports
          </p>
          <p className="mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
            {sports.length} albums · {totalSportPhotos} photos
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {sports.map((album, idx) => (
              <Reveal key={album.slug} delay={idx * 0.06}>
                <Link
                  href={`/photos/${album.slug}`}
                  className="group relative block aspect-[3/2] overflow-hidden bg-[color:var(--rule)]"
                >
                  <Image
                    src={album.cover}
                    alt={album.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={78}
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/0" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="serif text-xl leading-tight">{album.name}</p>
                    <p className="mono text-[10px] uppercase tracking-[0.2em] opacity-80 mt-0.5">
                      Georgia Tech · {album.count}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
