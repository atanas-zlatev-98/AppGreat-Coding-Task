import './NavigationBar.style.scss';
import { Link } from 'react-router';

const NavigationBar = () =>{

return(
    <div className="navbar">
       <Link to="/">Home</Link>
       <Link to="/create-document">Create Document</Link>
       <Link to="/all-documents">All Documents</Link>
    </div>
)
}

export default NavigationBar