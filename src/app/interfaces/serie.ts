export interface Serie {
    idFilm: number;
    title: string;
    fullTitle: string;
    description: string;
    thumbnail: string;
    poster: string;
    trailerUrl: string;
    year: string;
    types: Array<string>;
    cast: Array<string>;
    creators: Array<string>;
}