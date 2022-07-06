import MovieCard from "./MovieCard";

const movieData1 = {
    Title: "The Mavengers",
    Year: "2012",
    Rated: "PG-13",
    Released: "04 May 2012",
    Runtime: "143 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Joss Whedon",
    Writer: "Joss Whedon, Zak Penn",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Plot:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    Language: "English, Russian, Hindi",
    Country: "United States",
    Awards: "Nominated for 1 Oscar. 38 wins & 80 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.0/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "91%"
      },
      {
        Source: "Metacritic",
        Value: "69/100"
      }
    ],
    Metascore: "69",
    imdbRating: "8.0",
    imdbVotes: "1,339,955",
    imdbID: "tt0848228",
    Type: "movie",
    DVD: "25 Sep 2012",
    BoxOffice: "$623,357,910",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  };

  const movieData2 = {
    Title: "The Cawvengers",
    Year: "2012",
    Rated: "PG-13",
    Released: "04 May 2012",
    Runtime: "143 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Joss Whedon",
    Writer: "Joss Whedon, Zak Penn",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Plot:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    Language: "English, Russian, Hindi",
    Country: "United States",
    Awards: "Nominated for 1 Oscar. 38 wins & 80 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.0/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "91%"
      },
      {
        Source: "Metacritic",
        Value: "69/100"
      }
    ],
    Metascore: "69",
    imdbRating: "8.0",
    imdbVotes: "1,339,955",
    imdbID: "tt0848228",
    Type: "movie",
    DVD: "25 Sep 2012",
    BoxOffice: "$623,357,910",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  };

  const movieData3 = {
    Title: "The Skavengers",
    Year: "2012",
    Rated: "PG-13",
    Released: "04 May 2012",
    Runtime: "143 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Joss Whedon",
    Writer: "Joss Whedon, Zak Penn",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Plot:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    Language: "English, Russian, Hindi",
    Country: "United States",
    Awards: "Nominated for 1 Oscar. 38 wins & 80 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.0/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "91%"
      },
      {
        Source: "Metacritic",
        Value: "69/100"
      }
    ],
    Metascore: "69",
    imdbRating: "8.0",
    imdbVotes: "1,339,955",
    imdbID: "tt0848228",
    Type: "movie",
    DVD: "25 Sep 2012",
    BoxOffice: "$623,357,910",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  };
  
export default function Movie(){
    return(
        <div>
            <h1 className="Test">This is a page about Movies</h1>
            <p style={{fontStyle:"italic"}}>Just Checking Movies, so cool amirite?</p>
            <div className="OuterBox">
                <MovieCard {...movieData1}/>
                <MovieCard {...movieData2}/>
                <MovieCard {...movieData3}/>
            </div>
        </div>
    );
}