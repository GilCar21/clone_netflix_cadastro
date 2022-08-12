import { AiOutlineGlobal } from "react-icons/ai"
import { BiDownArrow } from "react-icons/bi"
import styled from "styled-components"

const Rodape = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    margin: 0 auto;
    padding-top: 3rem;

    @media only screen and (max-width: 900px){
        width: 95%;
    }

    .duvidas{
        color: #585252;

    }

    .tudo{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 2rem auto;
        p{
            margin: 1rem 0;
            color: #585252;
        }
    }
    .button{
        color: #585252;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        margin-bottom: 1rem;
        span{
            color: #585252;
        }
        button{
            color: #585252;
            font-size: 1rem;
            font-weight: 400;
            line-height: normal;
            cursor: pointer;
            border-radius: 2px;
            gap: .25rem;
            padding: 7px 7px;
            background: transparent;
            border: 1px solid #585252;
            display: flex;
            justify-content: center;
            align-items: center;
        }

    }
`

export function Footer(){

    return(
        
        <Rodape>
            <div className="duvidas">Dúvidas? Ligue 0800 591 8942</div>
            <div className="tudo">
                <div>
                    <p>Perguntas frequentes</p>
                    <p>Relações com investidores</p>
                    <p>Formas de assistir</p>
                    <p>Informações corporativas</p>
                    <p>Só na Netflix</p>
                </div>
                <div>
                    <p>Central de Ajuda</p>
                    <p>Carreiras</p>
                    <p>Termos de Uso</p>
                    <p>Entre em contato</p>
                </div>
                <div>
                    <p>Conta</p>
                    <p>Resgatar cartão pré-pago</p>
                    <p>Privacidade</p>
                    <p>Teste de velocidade</p>
                </div>
                <div>
                    <p>Media Center</p>
                    <p>Comprar cartão pré-pago</p>
                    <p>Preferências de cookies</p>
                    <p>Avisos legais</p>
                </div>
            </div>
            <div className="button">
                <button><AiOutlineGlobal/>Portugues <BiDownArrow/></button>
                <span>Netflix Brasil</span>
            </div>
        </Rodape>
    )
}