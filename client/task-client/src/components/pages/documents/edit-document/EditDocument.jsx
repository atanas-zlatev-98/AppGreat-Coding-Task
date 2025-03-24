
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { editDocument, getDocumentById } from '../../../../api/documentApi';

const EditDocument = () => {

    const initialValues = {
        title: '',
        description: '',
    }
    const { docId } = useParams();
    const [formData, setFormData] = useState(initialValues);

    const changeHandler = (e) => {
        setFormData(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }))
    }

    const submitFormHandler = async (e) => {
        e.preventDefault();
        const {title,description} = formData
        try {
          const response = await editDocument(docId,{title,description})
        } catch (err) {
            throw new Error(err.message)
        }
    }

    useEffect(() => {
        const findDocument = async () => {

            try {
                const findDoc = await getDocumentById(docId)
                const {title,description} = findDoc;
                setFormData({title,description});
            } catch (err) {
                throw new Error(err.message)
            }
        }

        findDocument();
    }, [])

    return (
        <div className="edit">
            <div className="document-form">
                <h1>Edit Document</h1>
                <form onSubmit={submitFormHandler}>
                    <div className="formGroup">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" value={formData.title} onChange={changeHandler}></input>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" name="description" value={formData.description} onChange={changeHandler}></input>
                    </div>

                    <button type='submit'>Edit Document</button>
                    

                </form>
            </div>
        </div>
    )
}

export default EditDocument