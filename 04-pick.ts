interface Movie {
    title: string;
    director: string;
    year: number;
    genre: string;
    rating: number;
}

type MovieBasicInfo = Pick<Movie, "title" | "director">;

const movieBasicInfo: MovieBasicInfo = {
    title: "Movie 1",
    director: "Director 1"
}

type MovieRating = Pick<Movie, "rating">;

const movieRating: MovieRating = {
    rating: 5
}

const rating: Movie['rating'] = 5;