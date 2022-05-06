import './esquerda.css';
import Stories from './stories/Stories';
import Posts from './posts/Posts';
function Esquerda() {
    return (
        <div className='esquerda'>
            <Stories />
            <Posts />
           
        </div>
    );
}

export default Esquerda;