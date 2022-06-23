import { useState } from "react";
import { Container } from "semantic-ui-react";
import Modal from './Modal.jsx';

const base_url = "http://image.tmdb.org/t/p/";
const poster_size = "w300";
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";



const SeriesBlock = ({name, overview, vote_average, backdrop_path, poster_path, id}) =>{

    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
         <Container className="container-2">
            <Modal className ="modal" open ={isOpen} onClose = {() => setIsOpen(false)}
            name={name}
            overview={overview}
            vote_average={vote_average}
            backdrop_path= {backdrop_path}
            poster_path={poster_path}
            id = {id}
            >
            </Modal>
            </Container>
        <div className="tvblock1">
            <img onClick={()=>setIsOpen(true)} className="poster-img" src = {`${base_url}${poster_size}${poster_path}`} alt ={id} />
            <h2 className="block-title">{name}</h2>
            <div className="bottom">
                <h3>Rating: </h3>
                <button className="rating">{vote_average}</button>
            </div>
        </div>
        </>
    )
}



export default SeriesBlock;