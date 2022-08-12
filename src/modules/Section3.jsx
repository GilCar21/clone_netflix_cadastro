import styled from "styled-components"
import tv from '../assets/device-pile.png'



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
        margin: -3rem  auto;
        @media only screen and (max-width: 900px){
            flex-direction: column;
        }
    }

    .text{
        width: 52%;
        font-size: 1.35rem;
        margin: 0;
        padding-right: 3rem;

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
        p{
            @media only screen and (max-width: 900px){
            font-size: 1.25rem;
        }
        }
    }
    .img{
        margin: 0;
        padding: 0;
        width: 50%;
        overflow: hidden;
        position: relative;
        border: 0;
        height: auto;
        max-width: 100%;

        @media only screen and (max-width: 900px){
            width: 90%;
        }

        img{
            width: 100%;
            position: relative;
            z-index: 2;
        }
        video{
            position: absolute;
            z-index: 1;
            height: 100%;
            left: 50%;
            max-height: 47%;
            max-width: 63%;
            position: absolute;
            top: 34%;
            transform: translate(-50%,-50%);
            width: 100%;
        }
    }
`

export function Section3() {

    return (
             <Session>
                <div className="content">
                    <div className="text">
                        <h3>Assista quando quiser.</h3>
                        <p>Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.</p>
                    </div>
                    <div className="img">
                        <img src={tv} alt="" />
                        <div>
                            <video  data-uia="our-story-card-video" autoPlay playsInline muted loop>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />

                                </video>
                        </div>
                    </div>
                </div>
            </Session>
    )
}