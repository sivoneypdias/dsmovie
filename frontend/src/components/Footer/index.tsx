import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-1 bg-dark">
            <div className="container">
                <p className="text-light">App desenvolvido por 
                    <a href="https://github.com/sivoneypdias/dsmovie" target="_blank" rel="noreferrer"> Sivoney Pinto</a>
                </p>
                <p className="text-light">
                    <small>
                        <strong>Semana Spring React</strong><br />
                        Evento promovido pela escola DevSuperior: 
                        <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer"> @devsuperior.ig</a><br />
                        <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer"> <GithubIcon /> /devsuperior</a>
                    </small>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
