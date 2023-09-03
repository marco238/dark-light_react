import './Section.css';
import videoCodeLight from '../../assets/video-js-light.png';
import videoCodeDark from '../../assets/video-js-dark.png';
import videoLight from '../../assets/video-light.png';
import videoDark from '../../assets/video-dark.png';

function Section(props) {
    const { isActive } = props

    return (
        <section className={`section ${isActive ? 'light' : 'dark' }`}>
            <div className='section-content'>
                <h2>Crea interfaces de usuario a partir de componentes</h2>
                <p>React te permite construir interfaces de usuario a partir de piezas individuales<br/>llamadas componentes. Crea tus propios componentes de React como<br/><span>Thumbnail</span>, <span>LikeButton</span>, y <span>Video</span>. Luego combínalos para formar pantallas,<br/>páginas y aplicaciones.</p>
            </div>    
                <div className='section-images'>
                    <img src={isActive ? videoCodeLight : videoCodeDark} alt="Video code" />
                    <img src={isActive ? videoLight : videoDark} alt="video" />
                </div>
            <div className='section-content'>    
                <p>Sin importar si trabajas por tu cuenta o con otros miles de desarrolladores,<br/>utilizar React se siente igual. Está diseñado para permitirte combinar a la<br/>perfección componentes escritos por personas, equipos y organizaciones de<br/>forma independiente.</p>
            </div>
        </section>
    )
}

export default Section