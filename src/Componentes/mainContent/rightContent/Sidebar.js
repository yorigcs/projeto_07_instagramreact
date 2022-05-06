import './sideBar.css';

export default function SideBar() {
    const suggestions = [
        {name:'bad.vibes.memes', image: 'bad.vibes.memes', motive: 'Segue você',id: 0},
        {name:'chibirdart', image: 'chibirdart', motive: 'Segue você',id: 1},
        {name:'razoesparaacreditar', image: 'razoesparaacreditar', motive: 'Novo no Instagram',id: 2},
        {name:'adorable_animals', image: 'adorable_animals', motive: 'Segue você',id: 3},
        {name:'smallcutecats', image: 'smallcutecats', motive: 'Segue você',id: 4},
    ];
    return (
        <div className='sidebar'>
            <Usuario
                image = {'catanacomics'}
                username = {'catanacomics'}
                name = {'Catana'}
            />

            <ul className='sugestoes'>
                <li className="titulo">
                    <span>Sugestões para você</span>
                    <span>Ver tudo</span>
                </li>

                {suggestions.map( suggest =>
                    <li className='sugestao' key={suggest.id}>
                        <Suggests {...suggest} />
                        <div className="seguir">Seguir</div>
                    </li> 
                )}
            </ul>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}



const Usuario = (props) => (
    <div className='usuario'>
        <img src={`/img/${props.image}.svg`} alt={props.image} />
        <div className="texto">
            <strong>{props.username}</strong>
            {props.name}
        </div>
    </div>
    
);


const Suggests = ({name,image,motive}) => (
    <div>
        <div className="usuario">
        <img src={`/img/${image}.svg`} alt={image} />
            <div className="texto">
                  <div className="nome">{name}</div>
                  <div className="razao">{motive}</div>
            </div>
        </div>

        
    </div>
);





