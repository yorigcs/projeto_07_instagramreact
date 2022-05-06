import './mainContent.css';
import Esquerda from './leftContent/Esquerda';
import SideBar from './rightContent/Sidebar';
function MainContent() {
    return (
        <div className='corpo'>
            <Esquerda />
            <SideBar />
        </div>
    )
}


export default MainContent;