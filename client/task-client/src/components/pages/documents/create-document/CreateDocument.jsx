
import { useState } from 'react';
import './CreateDocument.style.scss';
import { createNewDocument } from '../../../../api/documentApi';

const CreateDocument = () => {

    const initialValues = {
        title:'',
        description:'',
    }

    const [formData,setFormData] =useState(initialValues);

    const changeHandler = (e) =>{
        setFormData(oldValues =>({
            ...oldValues,
            [e.target.name]:e.target.value
        }))
    }

    const submitFormHandler = async (e) =>{
        e.preventDefault();
        
        try{
            if(!formData.title || !form.title){
                return
            }
           await createNewDocument(formData);
        }catch(err){
            throw new Error(err.message)
        }
    }
    return (
        <div className="create">
            <div className="document-form">
                <h1>Create Document</h1>
                <form onSubmit={submitFormHandler}>
                    <div className="formGroup">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" value={formData.title} onChange={changeHandler}></input>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" name="description" value={formData.description} onChange={changeHandler}></input>
                    </div>

                    <button type='submit'>Create Document</button>

                </form>
            </div>
        </div>
    )
}

export default CreateDocument;