import MovieCard from "./MovieCard";

const movie = {
  id: 1,
  title: "Avengers: Endgame",
  overview:
    "After the devastating events of Infinity War, the Avengers assemble one final time.",
  poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
};

export default {
  title: "Components/MovieCard",
  component: MovieCard,

  args: {
    movie,
  },
};

export const Default = {};

export const Batman = {
  args: {
    movie: {
      id: 2,
      title: "The Batman",
      overview: "Batman investigates corruption in Gotham City.",
      poster_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    },
  },
};

export const SpiderMan = {
  args: {
    movie: {
      id: 3,
      title: "Spider-Man: No Way Home",
      overview:
        "Spider-Man seeks help from Doctor Strange after his identity is revealed.",
      poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    },
  },
};