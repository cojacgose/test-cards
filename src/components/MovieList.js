import { useState } from "react";

export default function MovieList(){
    const [bgColor, setBg] = useState("red"); //destructuring; pass something into useState to set the initial value
    const [movies, setMovies] = useState(["Max Max","Max Max II","Max Max III"]);
    const [isUserLoggedIn, setUserIsLoggedIn] = useState(false);
    
    return(
    <div style={{backgroundColor: bgColor}}>
        <div >Movie List</div>
        <button onClick={()=> setBg("blue")}>Blue</button>
        <button onClick={()=> setBg("red")}>Red</button>
        <button onClick={()=> setBg("green")}>Green</button>
        {movies.length > 0 ? (
            movies.map((movie) => (
                <div>{movie}</div>
            ))
        ):(
            <div>No Movies Ya Goof!</div>
        ) }
        {isUserLoggedIn && <div>Yeah you're logged in</div>}
        
    </div>
    )
}