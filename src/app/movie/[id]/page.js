import Image from "next/image";
import Link from "next/link";
import { Star, Calendar, Clock, ArrowLeft } from "lucide-react";
import { getMovieDetails } from '@/lib/tmdb';

export async function generateMetadata({ params }) {
  const { id } = await params;

const movie = await getMovieDetails(id);

  return {
    title: movie?.title || "Movie Details",
    description:
      movie?.overview || "Explore movie details, ratings and overview.",
  };
}

export default async function MovieDetails({ params }) {
 const { id } = await params;

const movie = await getMovieDetails(id);
  if (!movie) {
    return (
      <div className="min-h-screen bg-[#050816] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Movie Not Found
          </h1>

          <p className="text-gray-400 mb-6">
            Something went wrong while fetching movie details.
          </p>

          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
          >
            Go Back
          </Link>
        </div>
      </div>
    );
  }

  const posterUrl = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/no-image.png";

  const backdropUrl = movie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      
      {/* BACKDROP */}
      <div className="relative h-[70vh] w-full">
        {backdropUrl && (
          <Image
            src={backdropUrl}
            alt={movie?.title || "Movie Backdrop"}
            fill
            priority
            className="object-cover opacity-40"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/70 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 -mt-72 relative z-10">
        
        {/* BACK BUTTON */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-gray-300 hover:text-white transition"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* POSTER */}
          <div className="flex justify-center">
            <Image
              src={posterUrl}
              alt={movie?.title || "Movie Poster"}
              width={400}
              height={600}
              priority
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>

          {/* DETAILS */}
          <div>
            <h1 className="text-5xl font-bold mb-4">
              {movie?.title}
            </h1>

            {movie?.tagline && (
              <p className="text-lg italic text-gray-400 mb-6">
                "{movie.tagline}"
              </p>
            )}

            {/* INFO */}
            <div className="flex flex-wrap gap-6 mb-8">
              
              <div className="flex items-center gap-2 bg-[#111827] px-4 py-2 rounded-lg">
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <span>{movie?.vote_average?.toFixed(1)}/10</span>
              </div>

              <div className="flex items-center gap-2 bg-[#111827] px-4 py-2 rounded-lg">
                <Calendar size={20} />
                <span>
                  {movie?.release_date || "Unknown"}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-[#111827] px-4 py-2 rounded-lg">
                <Clock size={20} />
                <span>
                  {movie?.runtime
                    ? `${movie.runtime} min`
                    : "N/A"}
                </span>
              </div>
            </div>

            {/* GENRES */}
            <div className="flex flex-wrap gap-3 mb-8">
              {movie?.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-blue-600/20 border border-blue-500 px-4 py-2 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* OVERVIEW */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Overview
              </h2>

              <p className="text-gray-300 leading-8 text-lg">
                {movie?.overview || "No overview available."}
              </p>
            </div>

            {/* EXTRA INFO */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              
              <div className="bg-[#111827] p-5 rounded-2xl">
                <h3 className="text-gray-400 mb-2">
                  Language
                </h3>

                <p className="text-lg font-semibold uppercase">
                  {movie?.original_language || "N/A"}
                </p>
              </div>

              <div className="bg-[#111827] p-5 rounded-2xl">
                <h3 className="text-gray-400 mb-2">
                  Status
                </h3>

                <p className="text-lg font-semibold">
                  {movie?.status || "Unknown"}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}