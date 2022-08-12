import styled from "styled-components"
import mobile from '../assets/mobile.jpg'
import box from '../assets/boxshot.png'
import {FcDownload} from 'react-icons/fc'

const Session = styled.div`
width: 100%;
margin: 0 auto;
padding: 70px 45px;
border-bottom: 8px solid #222;
.content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    width: 100%;
    margin: 0  auto;
    @media only screen and (max-width: 900px){
        flex-direction: column;
    }
}

.text{
    width: 52%;
    font-size: 1.35rem;
    margin: 0;
    padding-left: 3rem;

    @media only screen and (max-width: 900px){
        width: 100%;
        margin: 2rem auto 0; 
        text-align: center;
        padding: 0;
    }

    h3{
        font-size: 3rem;
        margin: -1rem 0 1rem;

        @media only screen and (max-width: 900px){
            font-size: 2.5rem;
        }
    }
}
.img{
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    height: 100%;
    width: 48%;
    position: relative;
    margin: -5% 0 -1% -8%;

    @media only screen and (max-width: 900px){
        width: 85%;
        margin: -6% 0 0 0%;
    }
    img{
        border: 0;
        height: auto;
        max-width: 100%;
    }
    .card{
        align-items: center;
        background: #000;
        border: 2px solid hsla(0,0%,100%,.25);
        border-radius: 0.75em;
        bottom: 8%;
        box-shadow: 0 0 2em 0 #000;
        display: flex;
        left: 50%;
        margin: 0 auto;
        min-width: 15em;
        padding: 0.25em 0.65em;
        position: absolute;
        transform: translateX(-50%);
        width: 60%;
        padding:  0.5rem 1rem;

        img{
            width: 57px;
            margin-right: .75rem;
            @media only screen and (max-width: 900px){
                width: 20%;
            }

        }
        .download{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .75rem;
            font-size: .75rem;
        }
    }
}
`
export function Section2(){


    return(
        <Session>
                <div className="content">
                    <div className="img">
                        <img src={mobile} alt="" />
                        <div className="card">
                            <img src={box} alt="" />
                            <div className="download">
                                <div>
                                    <h4>Stranger Things</h4>
                                    <a href="#">Download em andamento...</a>
                                </div>
                                <FcDownload size={25} />
                            </div>
                        </div>
                    </div>
                    <div className="text">
                        <h3>Baixe séries para assistir offline.</h3>
                        <p>Salve seus títulos favoritos e sempre tenha algo para assistir.</p>
                    </div>
                </div>
            </Session>
    )
}