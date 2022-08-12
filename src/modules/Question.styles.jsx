import styled from "styled-components";


const ListQuestion = styled.div`
    border-bottom: 8px solid #222;
    h1{
        text-align: center;
        padding-top: 5rem;
        padding-bottom: 2rem;
        font-size: 3rem;

        @media only screen and (max-width: 900px){
            width: 95%;
        }
    }
    ul{
        margin: 2em auto;
        width: 75%;
        max-width: 815px;
        @media only screen and (max-width: 900px){
            width: 95%;
        }
        li{
            width: 100%;
            list-style: none;
        }
    }

    h3{
        text-align: center;
        margin-bottom: 1rem;
    }
    .email{
        max-width: 720px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;
        @media only screen and (max-width: 900px){
            width: 95%;
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
`
const Quest = styled.button`
    outline: none;
   order: 0;
   font-weight: 400;
   font-size: 1.625rem;
   margin-bottom: 2px;
   padding: 0.8em 2.2em 0.8em 1.2em;
   position: relative;
   width: 100%;
   background: #303030;
   display: flex;
   align-items: center;
   justify-content: space-between;
   
   cursor: pointer;
   margin: 0;
   border: none;
   border-radius: 2px;
   margin-top: .5rem;

   svg{
    rotate: ${props => props.theme}deg;
    transition: rotate .1s;
   }

`

const Answer = styled.div`
     display: inline-block;
    margin: 1px 0;
    padding: 1.2em;
    text-align: left;
    font-size: 1.625rem;
    font-weight: 400;
    background: #303030;
    border-radius: 2px;
    display:  ${props => props.theme};
`

export { ListQuestion, Quest, Answer };