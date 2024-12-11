import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import styled from "styled-components";

const socialLinks = [
	{
		href: "https://github.com/jolle11",
		icon: <VscGithubInverted />,
		className: "footer__link",
	},
	{
		href: "https://www.linkedin.com/in/jordi-oll%C3%A9-ballest%C3%A9-8398b181/",
		icon: <FaLinkedinIn />,
		className: "footer__link footer__link--linkedin",
	},
	{
		href: "https://jordi0lle.hashnode.dev/",
		icon: <SiHashnode />,
		className: "footer__link footer__link--hashnode",
	},
	{
		href: "https://twitter.com/jordi0lle",
		icon: <FaXTwitter />,
		className: "footer__link footer__link--twitter",
	},
	{
		href: "https://www.instagram.com/jordi0lle/",
		icon: <AiFillInstagram />,
		className: "footer__link footer__link--instagram",
	},
];

const Footer = () => {
	return (
		<Container>
			<div className="footer">
				<p className="footer__text">Created by Jordi Ollé</p>
				<div className="footer__links">
					{socialLinks.map((link, index) => (
						<a key={index} href={link.href} className={link.className}>
							{link.icon}
						</a>
					))}
				</div>
			</div>
		</Container>
	);
};

export default Footer;

const Container = styled.div`
	width: 100%;
	.footer {
		overflow: hidden;
		min-height: 70px;
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
