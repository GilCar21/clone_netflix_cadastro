import styled from "styled-components"
import desenho from '../assets/desenho.png'

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
    margin: 0 0 -1% -8%;

    @media only screen and (max-width: 900px){
        width: 85%;
        margin: 0;
    }

    img{
        border: 0;
        height: auto;
        max-width: 100%;
    }
}
`
export function Section4(){


    return(
        <Session>
                <div className="content">
                    <div className="img">
                        <img src={desenho} alt="" />
                    </div>
                    <div className="text">
                        <h3>Baixe séries para assistir offline.</h3>
                        <p>Salve seus títulos favoritos e sempre tenha algo para assistir.</p>
                    </div>
                </div>
            </Session>
    )
}