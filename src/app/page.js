import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MovieSearch from "@/components/MovieSearch";
import ThemeWrapper from "@/components/ThemeWrapper";

import { getPopularMovies } from "@/lib/tmdb";

export default async function HomePage() {
  const data = await getPopularMovies();

  return (
    <ThemeWrapper>
      <main className="min-h-screen">
        <Navbar />

        <Hero />

        <section className="max-w-7xl mx-auto py-16">
          <h2 className="text-4xl font-bold px-6 mb-10">
            Popular Movies
          </h2>

          <MovieSearch movies={data.results} />
        </section>

        <Footer />
      </main>
    </ThemeWrapper>
  );
}