import { get, post, put,del} from "./requester";

const baseUrl = 'http://localhost:3000';

export async function createNewDocument(data) {
    const newDocument = await post(`${baseUrl}/create-document`,data)
    return newDocument
}

export async function getDocuments() {
    const documents = await get(`${baseUrl}/get-documents`);
    return documents;
}

export async function getDocumentById(docId) {
    const document = await get(`${baseUrl}/get-document/${docId}`)
    return document
}

export async function editDocument(docId,data) {
    const document = await put(`${baseUrl}/edit-doc/${docId}`,data)
    return document
}

export async function deleteDocument(docId) {
    const document = await del(`${baseUrl}/delete/${docId}`);
    return document
}