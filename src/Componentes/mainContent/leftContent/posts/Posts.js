import './posts.css';

const usersPosts = [
    {username: 'meowed', userimage: 'meowed', userpost: 'gato-telefone', id: 0},
    {username: 'barked', userimage: 'barked', userpost: 'dog', id: 1}
];

const likedPosts = [
    {mainLiked: 'respondeai', imageMainLiked: 'respondeai', allLikes: 101.523},
    {mainLiked: 'adorable_animals', imageMainLiked: 'adorable_animals', allLikes: 99.159}
];

export default function Posts() {
    return (
        <div className='posts'>
            {usersPosts.map( user => (

                <div className='post' key={user.id}>
                    <Post {...user} />

                    <div className='fundo' key={likedPosts[user.id]}>
                        <Fundo {...likedPosts[user.id]} />
                    </div>
                </div>
            ))}
        </div>
    );
}

const Post = ({username,userimage,userpost}) => (
    <div >
        <div className='topo'>
            <div className='usuario'>
                <img src={`img/${userimage}.svg`} alt={userimage}></img>
                {username}
            </div>

            <div className="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div className="conteudo">
            <img src={`img/${userpost}.svg`} alt={userpost}></img>
        </div>

    </div>
);


const Fundo = ({mainLiked,imageMainLiked,allLikes}) => (
    <div>
        <div className="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>

            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>

        <div className="curtidas">
        <img src={`img/${imageMainLiked}.svg`} alt={imageMainLiked}></img>
            <div className="texto">
                Curtido por <strong>{mainLiked}</strong> e <strong>outras {allLikes} pessoas</strong>
            </div>
        </div>
    </div>
);