import { useParams } from "react-router"
import { useState,useEffect } from "react";
import { getDocumentById,deleteDocument} from "../../../../../api/documentApi";
import { Link } from "react-router";
import './GetDocumentDetails.style.scss';

const getDocumentDetails = () => {

    const [document, setDocument] = useState({})
    const { docId } = useParams();
    
    useEffect(() => {

        const getDocument = async () => {
            try {
                const response = await getDocumentById(docId);
                 setDocument(response);
            } catch (err) {
                throw new Error(err.message);
            }
        }

        getDocument();
    }, [])

    const delDocument = async () =>{
        
        try{
            const resposne = await deleteDocument(docId)
        }catch(err){
            throw new Error(err.message);
        }
    }
    return (
        <div className="docDetails">
            <h1>Document Details</h1>

            <p>Title: {document.title}</p>
            <p>Description: {document.description}</p>
 
            <div className="btns">
                <Link to={`/edit-doc/${docId}`}>Edit Post</Link>
                <Link to='' onClick={delDocument}>Delete Document</Link>
            </div>
        </div>
    )
}

export default getDocumentDetails