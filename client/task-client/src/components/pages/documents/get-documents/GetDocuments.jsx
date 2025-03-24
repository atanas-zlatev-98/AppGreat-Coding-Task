import DocumentsList from "./documents-list/DocumentsList"
import './GetDocuments.style.scss';

const GetDocuments = () => {
    return (
        <div className="doc-container">
            <h1>Documents List</h1>
            <div className="container">
                <DocumentsList/>
            </div>
        </div>
    )
}

export default GetDocuments