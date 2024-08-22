import { Link } from "react-router-dom"

const LinkDefault = ({name, link, addClass}) => {
    return (
        <Link to={link ?? '/'} 
        className={`transition-colors text-custom-yellow hover:text-yellow-400 font-semibold ${addClass}`}
            >
            {name}
        </Link>
    )
}

export default LinkDefault