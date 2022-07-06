export default function MovieCard(props){
    const obj = props;
    return(
        <div className="OuterBox">
           <img alt="NO PIC AVAILABLE" src={obj.Poster}></img>
           <div className = "InfoBox">
                <div>{obj.Title}</div>
                <div>{obj.Runtime}</div>
                <div>{obj.Genre}</div>
                <div>
                    <h3>PLOT</h3>
                    <p>{obj.Plot}</p>
                    <h3>ACTORS</h3>
                    <p>{obj.Actors}</p>
                </div>
           </div>
        </div>
    )
}
