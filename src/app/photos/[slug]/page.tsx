import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import AlbumMasonry from "@/components/AlbumMasonry";
import { getAlbum, getAllAlbumSlugs } from "@/lib/albums";

export async function generateStaticParams() {
  return getAllAlbumSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const album = getAlbum(slug);
  if (!album) return { title: "Album not found" };
  return {
    title: `${album.name} — Diya Sharma`,
    description: `${album.count} photos from ${album.name}.`,
  };
}

export default async function AlbumPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const album = getAlbum(slug);
  if (!album) notFound();

  const subtitle =
    album.kind === "sport"
      ? `Georgia Tech · ${album.count} photos`
      : `${album.region} · ${album.count} photos`;

  return (
    <article className="pt-20 sm:pt-28 pb-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Link
          href="/photos"
          className="mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
        >
          ← All photos
        </Link>

        <Reveal>
          <p className="mt-10 mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)]">
            {album.kind === "sport" ? "Sports" : "Places"}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-4 serif text-5xl sm:text-7xl leading-[1.02] tracking-[-0.02em]">
            {album.name}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
            {subtitle} · click to expand
          </p>
        </Reveal>
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-10 mt-12 sm:mt-16">
        <AlbumMasonry photos={album.photos} albumName={album.name} />
      </div>
    </article>
  );
}
