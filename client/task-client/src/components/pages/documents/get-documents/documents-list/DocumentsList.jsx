import { useEffect, useState } from "react"
import { getDocuments } from "../../../../../api/documentApi";
import DocumentItem from "./documents-item/DocumentItem";
import './DocumentList.style.scss';

const DocumentsList = () => {

    const [allDocuments, setAllDocuments] = useState([]);


    useEffect(() => {

        const getAllDocuments = async () => {

            try {
                const documents = await getDocuments();
                console.log(documents)
                setAllDocuments(documents)
                
            } catch (err) {
                throw new Error(err.message)
            }
            console.log(allDocuments);
        }

        getAllDocuments();
    }, [])

    return (
        <div className="allDocuments">
            {allDocuments.map(doc => <DocumentItem key={doc.id} {...doc}></DocumentItem>)}
        </div>
    )
}

export default DocumentsList