import { Link } from 'react-router';
import './DocumentItem.style.scss';

const DocumentItem = ({ id,title, description }) => {
    return (
        <p>
        <Link to={`/document/${id}`} className="doc">
            Title: {title}
        </Link>
        </p>
    )
}

export default DocumentItem