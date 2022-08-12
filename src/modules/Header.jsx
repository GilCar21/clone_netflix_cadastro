import styled from "styled-components"
import banner from '../assets/bannerNetflix.jpg' 
import { IoIosArrowForward } from 'react-icons/io'
import Netflix from '../assets/Netflix.svg'
import {AiOutlineGlobal} from 'react-icons/ai'
import {BiDownArrow} from 'react-icons/bi'

const Section = styled.section`
    background: rgba(0,0,0,.4);
    background-image:linear-gradient(0deg, rgba(0,0,0,.8) 0, transparent 60%, rgba(0,0,0,.8));
    height: 745px;
    border-bottom: 8px solid #222;
    width: 100%;

    @media only screen and (max-width: 900px){
        height: 600px;
    }
`

const HeaderStyle = styled.header`
    height: 5rem;
    margin: 0 auto;
    max-width: 1780px;
    padding-top: 20px;
    width: 92%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;

    img{
        width: 13.8rem;
        margin-left: -2rem;

        @media only screen and (max-width: 900px){
            width: 12rem;
        }
    }
    div{
        display: flex;

        button{
            margin-top: -.75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: normal;
            padding: 7px 17px;
            cursor: pointer;
            background: #e50914;
            border: none;
            border-radius: 2px;
            
            @media only screen and (max-width: 900px){
                font-size: .875rem;
            }
        }
    
        .language{
            gap: .25rem;
            margin-right: 2rem;
            padding: 7px 7px;
            background: transparent;
            border: 1px solid #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
    }

`
const Content = styled.div`
    margin: 5rem auto 0;
    width: 100%;
    max-width: 950px;
    padding: 75px 0;
    text-align: center;
    position: relative;
    justify-content: center;
    z-index: 1;

    @media only screen and (max-width: 900px){
        margin:  1rem auto 0;
        width: 90%;
    }
    h1{
        font-size: 4.2rem;
        max-width: 800px;
        margin: 0 auto;
        display: block;
        font-weight: bold;
        @media only screen and (max-width: 900px){
            font-size: 3rem;
        }
    }
    h2{
        font-size: 1.6rem;
        margin: 0 auto 1rem;
        max-width: 800px;
        font-weight: 400;
        display: block;
        @media only screen and (max-width: 900px){
            font-size: 1.4rem;
        }
    }
   form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 950px;

    @media only screen and (max-width: 900px){
        width: 90%;
        margin: 0 auto;
    }
        h3{
            font-size: 1.2rem;
            max-width: none;
            padding-bottom: 20px;
            font-weight: 400;
            margin: 0 auto;
            display: block;
            text-align: center;
            @media only screen and (max-width: 900px){
                font-size: 1rem;
            }
        }
        div{
            max-width: 950px;
            display: flex;
            align-items: center;
            justify-content: center;
            
            @media only screen and (max-width: 900px){
                width: 100%;
            }

            input{
                border: none;
                border-radius: 4px;
                border-bottom-right-radius: 0;
                border-top-right-radius: 0;
                height: 70px;
                min-width: 500px;
                padding: 0 1rem;
                color: black;
                font-size: 1.1rem;
                @media only screen and (max-width: 900px){
                    min-width: auto;
                    width: 70%;
                }
            }
            button{
                font-size: 1.875rem;
                min-height: 70px;
                border: none;
                border-radius: 4px;
                border-bottom-left-radius: 0;
                border-left: 1px solid #333;
                border-top-left-radius: 0;
                margin: 0;
                background: #e50914;
                padding: 0 1.4rem;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                @media only screen and (max-width: 900px){
                    width: 30%;
                }
        }
    }
   }
`
const Banner = styled.div`
    height: 830px;
    max-width: 100%;
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: -90px;
    z-index: -1;
    display: block;

    @media only screen and (max-width: 900px){
        height: 690px ;
    }

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

function Header() {

    return (
        <Section>
            {/* <img src={banner} alt="" /> */}
            <HeaderStyle>
                <img src={Netflix} alt="" />
                <div>
                    <button className="language"><AiOutlineGlobal/>Portugues <BiDownArrow/></button>
                    <button>Entrar</button>
                </div>
            </HeaderStyle>
            <Content>
                <div>
                    <h1>Filmes, séries e muito mais. Sem limites.</h1>
                    <h2>Assista onde quiser. Cancele quando quiser.</h2>
                </div>
                <form>
                    <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
                    <div>
                        <input type="email" placeholder="Email"/>
                        <button>Vamos lá <IoIosArrowForward /></button>
                    </div>
                </form>
            </Content>
            <Banner>
                <img src={banner} />
            </Banner>
        </Section>

    )
}
export { Header }