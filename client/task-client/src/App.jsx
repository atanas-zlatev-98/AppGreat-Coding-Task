
import { Route, Routes } from 'react-router'
import './App.css'
import NavigationBar from './components/navigation/NavigationBar'
import HomePage from './components/pages/home/HomePage'
import CreateDocument from './components/pages/documents/create-document/CreateDocument'
import GetDocuments from './components/pages/documents/get-documents/GetDocuments'
import GetDocumentDetails from './components/pages/documents/get-documents/get-document-details/GetDocumentDetails'
import EditDocument from './components/pages/documents/edit-document/EditDocument'

function App() {

  return (
      <div className='main'>
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/create-document' element={<CreateDocument/>}></Route>
          <Route path='/all-documents' element={<GetDocuments/>}></Route>
          <Route path='/document/:docId' element={<GetDocumentDetails/>}></Route>
          <Route path='/edit-doc/:docId' element={<EditDocument/>}></Route>
        </Routes>
      </div>
  )
}

export default App
