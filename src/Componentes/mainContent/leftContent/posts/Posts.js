import './posts.css';
import React from 'react';


export default function Posts() {
    const usersPosts = [
        {username: 'meowed', userimage: 'meowed', userpost: 'gato-telefone',
        actions: {likedBy: 'respondeai', image: 'respondeai', allLikes: 101.523}, id: 0},

        {username: 'barked', userimage: 'barked', userpost: 'dog',
        actions: {likedBy: 'adorable_animals', image: 'adorable_animals', allLikes: 99.159}, id: 1}
    ];
    
    return (
        <div className='posts'>
            {usersPosts.map( user => (

                <div className='post' key={user.id}>
                    <Post {...user} />            
                </div>
            ))}
        </div>
    );
}

const Post = ({username,userimage,userpost,actions}) => {
    const [like,setLike] = React.useState(["black","heart-outline"]);

    function getLike(clickImage = '') {
        if(clickImage === 'clickImage'){
            if(like[1] === 'heart') {
                return;
            }
            setLike(["red","heart"]);
        } else {
            if(like[1] === 'heart') {
                setLike(["black","heart-outline"]);
            } else {
                setLike(["red","heart"]);
            }
        }   
    }
    return (
        <div >
            <div className='topo'>
                <div className='usuario'>
                    <img src={`img/${userimage}.svg`}  alt={userimage}></img>
                    {username}
                </div>
    
                <div className="acoes">
                      <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
    
            <div className="conteudo">
                <img src={`img/${userpost}.svg`} onClick={() => getLike('clickImage')} alt={userpost}></img>
            </div>
    
            <div className='fundo'>
                <div className="acoes">
                    <div>
                        <ion-icon style={{color:like[0]}} name={like[1]} onClick={getLike}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                <img src={`img/${actions.image}.svg`} alt={actions.image}></img>
                    <div className="texto">
                        Curtido por <strong>{actions.likedBy}</strong> e <strong>outras {actions.allLikes} pessoas</strong>
                    </div>
                </div>        
            </div>
    
        </div>
    );
};


