import './index.scss'
import { useState } from 'react'
import Post from '../../components/comppost'

export default function Insta () {
    const [imagem, setImagem] = useState ('')
    const [usuario, setUsuario] = useState ('')
    const [curtid, setCurtid] = useState (0)
    const [tempo, setTempo] = useState ('')
    const [avatar, setAvatar] = useState ('')
    const [descricao, setDescricao] = useState ('')

    const [postagem, setPostagem] = useState ([])

    const [mostrar, setMostrar] = useState(false)

    function recarregarAPagina(){
        window.location.reload();
    } 

    function Postagem(){
        const postag = {
            usuaria: usuario,
            time: tempo,
            avata: avatar,
            desc: descricao,
            post: imagem,
            likes: curtid
        }

        setPostagem([...postagem, postag])
    }

    function mostrarPublicar() {
        setMostrar(!mostrar)
    }

    return (
        <div className='Insta'>
            
            <section className='Insta-Redirects'>
                <div className='PortfolioMe'>
                    <a href=''><img src='/assets/images/Instagram/logo.png'/></a>
                    <a href=''>Portfolio.Me</a>
                </div>

                <div className='Redirects'>
                    <a href=''><img src='/assets/images/Instagram/ic_round-home.png'/></a>
                    <a href=''>Pagina Inicial</a>
                </div>

                <div className='Redirects'>
                    <a href=''><img src='/assets/images/Instagram/charm_search.png'/></a>
                    <a href=''>Pesquisa</a>
                </div>

                <div className='Redirects'>
                    <a href=''><img src='/assets/images/Instagram/icon-park-outline_video-two.png'/></a>
                    <a href=''>Reels</a>
                </div>

                <div className='Redirects'>
                    <a href=''><img src='/assets/images/Instagram/tabler_message-circle.png'/></a>
                    <a href=''>Mensagens</a>
                </div>

                <div className='Redirects'>
                    <a href=''><img src='/assets/images/Instagram/icon-park-outline_like.png'/></a>
                    <a href=''>Notificações</a>
                </div>

                <div className='Redirects'>
                    <a onClick={mostrarPublicar}><img src='/assets/images/Instagram/bx_message-square-add.png'/></a>
                    <button onClick={mostrarPublicar}>Criar</button>
                </div>

                {mostrar == true &&
                    <div className='fundo'>
                        <div className='CriarPubli'>
                            <h1>Hack do Insta</h1>
                            <p>Usuário</p>
                            <input type="text" onChange={e => setUsuario (e.target.value)} value={usuario}/>
                            <p>Tempo</p>
                            <input type="text" onChange={e => setTempo (e.target.value)} value={tempo} />
                            <p>Avatar</p>
                            <label class="custom-file-upload">
                            <input type="text" onChange={e => setAvatar (e.target.value)} value={avatar} />
                            </label>
                            <p>Descrição</p>
                            <input type="text" onChange={e => setDescricao (e.target.value)} value={descricao} />
                            <p>Post</p>
                            <input type="text" onChange={e => setImagem (e.target.value)} value={imagem}/>
                            <p>Curtidas iniciais</p>
                            <input type="number" onChange={e => setCurtid (e.target.value)} value={curtid}/>
                            <button className='publicar' onClick={Postagem}>Postar</button>
                            <button className='sair' onClick={mostrarPublicar}>Sair</button>
                        </div>
                    </div>
                }

            </section>

            <section className='Insta-Page'>

                <div className='Recarregar'>
                    <button  onClick={recarregarAPagina}>Recarregar Pagina</button>
                </div>

                <div className='Section-Storys'>
                    <div className='Storys'>
                        <img src='/assets/images/Instagram/Storys/Ellipse 13 (1).png' />
                    </div>
                    <div id='amigos' className='Storys'>
                        <img src='/assets/images/Instagram/Storys/Ellipse 13 (2).png' />
                    </div>
                    <div className='Storys'>
                        <img src='/assets/images/Instagram/Storys/Ellipse 13 (3).png' />
                    </div>
                    <div className='Storys'>
                        <img src='/assets/images/Instagram/Storys/Ellipse 13 (4).png' />
                    </div>
                    <div className='Storys'>
                        <img src='/assets/images/Instagram/Storys/Ellipse 13 (5).png' />
                    </div>

                    <div className='Storys'>
                        <img src='/assets/images/Instagram/Storys/Ellipse 13 (6).png' />
                    </div>
                    <div className='Storys'>
                        <img src='/assets/images/Instagram/Storys/Ellipse 13 (7).png' />
                    </div>
                    <div className='Storys'>
                        <img src='/assets/images/Instagram/Storys/Ellipse 13 (7).png' />
                    </div>
                    <div className='Storys'>
                        <img src='/assets/images/Instagram/Storys/Ellipse 13 (7).png' />
                    </div>
                    <div className='Storys'>
                        <img src='/assets/images/Instagram/Storys/Ellipse 13 (7).png' />
                    </div>
                </div>

                <section className='Postagens'>
                    {postagem.map( item =>
                        <Post u={item.usuaria} t={item.time} a={item.avata} d={item.desc} p={item.post} l={item.likes} i={item.post} />
                    )}
                </section>
            </section>
        </div>
    )
}