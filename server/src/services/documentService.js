let documents = [];

export const createDoc = (doc) => {
    const { id, title, description } = doc;
    documents.push({ id, title, description });
}

export const getAllDocuments = () => {
    return documents;
}

export const getDocumentById = (docId) => {
    const document = documents.find(x => x.id === docId)
    return document
}

export const editDocument = (docId, data) => {
    const document = documents.find(x => x.id === docId)
    console.log(data)
    document['title'] = data.title;
    document['description'] = data.description;

    return document;
}

export const deleteDocument = (docId) => {
    const newDocuments = documents.filter(x => x.id !== docId);
    documents = newDocuments;
    return documents;
}