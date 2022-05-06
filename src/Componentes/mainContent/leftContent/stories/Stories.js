import './stories.css';

export default function Stories() {
    const users = [
        {name: '9gag', image: '9gag', id: 0},
        {name: 'meowed', image: 'meowed', id: 1},
        {name: 'barked', image: 'barked', id: 2},
        {name: 'nathanwpylestrangeplanet', image: 'nathanwpylestrangeplanet', id: 3},
        {name: 'wawawicomics', image: 'wawawicomics', id: 4},
        {name: 'respondeai', image: 'respondeai', id: 5},
        {name: 'filomoderna', image: 'filomoderna', id: 6},
        {name: 'memeriagourmet', image: 'memeriagourmet', id: 7},


    ];
    return (
    <ul className='stories'>
        {users.map( user =>
        (
          <li key={user.id}>
              <Story 
                user ={user.name}
                image = {user.image}
              />
          </li>  
        )
        )}

        <div className='setinha'>
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </ul>
    
    
    );
}

const Story = ({user,image}) => (
    <div className="story">
        <div className="imagem">
            <img src={`/img/${image}.svg`} alt={image} />
        </div>

        <div className="usuario">
            {user}
        </div>
    </div>
    );

