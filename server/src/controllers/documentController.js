const { Router } = require('express');
const { createDoc, getAllDocuments, getDocumentById, editDocument, deleteDocument } = require('../services/documentService');

const docController = Router();

docController.post('/create-document', (req, res) => {

    const { title, description } = req.body;
    const id = Math.random().toString().split('.')[1];

    try {
        const response = createDoc({ id, title, description });
        res.json(response)
    } catch (err) {
        throw new Error(err.message)
    }
})

docController.get('/get-documents', (req, res) => {
    const response = getAllDocuments();
    res.json(response)
})

docController.get('/get-document/:docId', (req, res) => {
    const docId = req.params.docId;

    try {
        const response = getDocumentById(docId)
        res.json(response)
    } catch (err) {
        throw new Error(err.message);
    }

})

docController.put('/edit-doc/:docId', (req, res) => {
    const { title, description } = req.body;
    const docId = req.params.docId;

    try {
        const response = editDocument(docId, { title, description });
        res.json(response);
    } catch (err) {
        throw new Error(err.message)
    }

})

docController.delete('/delete/:docId',(req,res)=>{
    const docId = req.params.docId;

    try{
        const response = deleteDocument(docId);
        res.json(response)
    }catch(err){
        throw new Error(err.message)
    }

})

module.exports = { docController }