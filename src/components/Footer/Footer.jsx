import styled from 'styled-components';
import { VscGithubInverted, VscTwitter } from 'react-icons/vsc';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <Container>
            <div className="footer">
                <p className="footer__text">Created by Jordi Ollé</p>
                <div className="footer__links">
                    <a href="https://github.com/jolle11" className="footer__link">
                        <VscGithubInverted />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jordi-oll%C3%A9-ballest%C3%A9-8398b181/"
                        className="footer__link footer__link--linkedin"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://jordi0lle.hashnode.dev/"
                        className="footer__link footer__link--hashnode"
                    >
                        <SiHashnode />
                    </a>
                    <a
                        href="https://twitter.com/jordi0lle"
                        className="footer__link footer__link--twitter"
                    >
                        <VscTwitter />
                    </a>
                    <a
                        href="https://www.instagram.com/jordi0lle/"
                        className="footer__link footer__link--instagram"
                    >
                        <AiFillInstagram />
                    </a>
                </div>
            </div>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
    .footer {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &__text {
            text-align: center;
        }
        &__links {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        &__link {
            font-size: 25px;
            color: black;
            margin: 5px;
            transition: color 0.2s ease;
            &:hover {
                color: #202020;
            }
            &--linkedin {
                transition: color 0.2s ease;
                &:hover {
                    color: #0a66c2;
                }
            }
            &--hashnode {
                transition: color 0.2s ease;
                &:hover {
                    color: #2962ff;
                }
            }
            &--twitter {
                transition: color 0.2s ease;
                &:hover {
                    color: #1d9bf0;
                }
            }
            &--instagram {
                transition: color 0.2s ease;
                &:hover {
                    color: #fe0a64;
                }
            }
        }
    }
`;
