import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const ButtonBack = ({link, addClass}) => {
    return (
        <Link to={link} className={`flex items-center gap-3 font-semibold capitalize ${addClass}`}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <p className="hidden md:flex">kembali</p>
        </Link>
    )
}

export default ButtonBack