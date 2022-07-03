import HlCard from "./HlCard";

export default function Movie(){
    return(
        <div>
            <h1 className="Test">This is a page about Movies</h1>
            <p style={{fontStyle:"italic"}}>Just Checking Movies, so cool amirite?</p>
            <div className="OuterBox">
                <HlCard/><HlCard/><HlCard/>
            </div>
        </div>
    );
}