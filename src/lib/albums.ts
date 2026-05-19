import fs from "node:fs";
import path from "node:path";

export type AlbumKind = "place" | "sport";

export type Album = {
  slug: string;
  kind: AlbumKind;
  name: string;
  cover: string;
  count: number;
  region?: string;
};

export type AlbumWithPhotos = Album & {
  photos: string[];
};

const PLACES_DIR = path.join(process.cwd(), "public/images/travel");
const SPORTS_DIR = path.join(process.cwd(), "public/sports");

// Display name + region overrides for places
const placeMeta: Record<string, { name: string; region: string }> = {
  andorra: { name: "Andorra", region: "Europe" },
  australia: { name: "Australia", region: "Oceania" },
  canada: { name: "Canada", region: "North America" },
  germany: { name: "Germany", region: "Europe" },
  greece: { name: "Greece", region: "Europe" },
  ireland: { name: "Ireland", region: "Europe" },
  italy: { name: "Italy", region: "Europe" },
  japan: { name: "Japan", region: "Asia" },
  morocco: { name: "Morocco", region: "Africa" },
  nz: { name: "New Zealand", region: "Oceania" },
  portugal: { name: "Portugal", region: "Europe" },
  scotland: { name: "Scotland", region: "Europe" },
  singapore: { name: "Singapore", region: "Asia" },
  spain: { name: "Spain", region: "Europe" },
  switzerland: { name: "Switzerland", region: "Europe" },
  usa: { name: "USA", region: "North America" },
};

// Map URL slug -> filesystem folder name for sports
const sportFolderForSlug: Record<string, string> = {
  basketball: "Georgia Tech - Basketball",
  football: "Georgia Tech - Football",
  "ice-hockey": "Georgia Tech - Ice Hockey",
};

const sportDisplay: Record<string, string> = {
  basketball: "Basketball",
  football: "Football",
  "ice-hockey": "Ice Hockey",
};

function listImages(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort();
}

function placeAlbum(folder: string): Album | null {
  const dir = path.join(PLACES_DIR, folder);
  const files = listImages(dir);
  if (files.length === 0) return null;
  const meta = placeMeta[folder] ?? {
    name: folder.charAt(0).toUpperCase() + folder.slice(1),
    region: "Other",
  };
  return {
    slug: folder,
    kind: "place",
    name: meta.name,
    region: meta.region,
    cover: `/images/travel/${folder}/${files[0]}`,
    count: files.length,
  };
}

function sportAlbum(slug: string): Album | null {
  const folder = sportFolderForSlug[slug];
  if (!folder) return null;
  const dir = path.join(SPORTS_DIR, folder);
  const files = listImages(dir);
  if (files.length === 0) return null;
  return {
    slug,
    kind: "sport",
    name: sportDisplay[slug] ?? slug,
    cover: `/sports/${encodeURIComponent(folder)}/${files[0]}`,
    count: files.length,
  };
}

export function getPlaceAlbums(): Album[] {
  if (!fs.existsSync(PLACES_DIR)) return [];
  return fs
    .readdirSync(PLACES_DIR)
    .map(placeAlbum)
    .filter((a): a is Album => a !== null)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getSportAlbums(): Album[] {
  return Object.keys(sportFolderForSlug)
    .map(sportAlbum)
    .filter((a): a is Album => a !== null);
}

export function getAlbum(slug: string): AlbumWithPhotos | null {
  // try sport first
  if (sportFolderForSlug[slug]) {
    const folder = sportFolderForSlug[slug];
    const dir = path.join(SPORTS_DIR, folder);
    const files = listImages(dir);
    if (files.length === 0) return null;
    return {
      slug,
      kind: "sport",
      name: sportDisplay[slug] ?? slug,
      cover: `/sports/${encodeURIComponent(folder)}/${files[0]}`,
      count: files.length,
      photos: files.map(
        (f) => `/sports/${encodeURIComponent(folder)}/${f}`
      ),
    };
  }

  // otherwise treat as place
  const dir = path.join(PLACES_DIR, slug);
  if (!fs.existsSync(dir)) return null;
  const files = listImages(dir);
  if (files.length === 0) return null;
  const meta = placeMeta[slug] ?? {
    name: slug.charAt(0).toUpperCase() + slug.slice(1),
    region: "Other",
  };
  return {
    slug,
    kind: "place",
    name: meta.name,
    region: meta.region,
    cover: `/images/travel/${slug}/${files[0]}`,
    count: files.length,
    photos: files.map((f) => `/images/travel/${slug}/${f}`),
  };
}

export function getAllAlbumSlugs(): string[] {
  return [
    ...getPlaceAlbums().map((a) => a.slug),
    ...getSportAlbums().map((a) => a.slug),
  ];
}
