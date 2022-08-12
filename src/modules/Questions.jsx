import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Answer, ListQuestion, Quest } from "./Question.styles";
import { MdOutlineAdd } from 'react-icons/md'

export function Questions() {
    const [active1, setActive1] = useState('none')
    const [active2, setActive2] = useState('none')
    const [active3, setActive3] = useState('none')
    const [active4, setActive4] = useState('none')
    const [active5, setActive5] = useState('none')
    const [active6, setActive6] = useState('none')

    const handleOpenAnswer1 = ()=>{
        setActive1(active1 === 'none' ? 'block' : 'none' )
    }
    const handleOpenAnswer2 = ()=>{
        setActive2(active2 === 'none' ? 'block' : 'none' )
    }
    const handleOpenAnswer3 = ()=>{
        setActive3(active3 === 'none' ? 'block' : 'none' )
    }
    const handleOpenAnswer4 = ()=>{
        setActive4(active4 === 'none' ? 'block' : 'none' )
    }
    const handleOpenAnswer5 = ()=>{
        setActive5(active5 === 'none' ? 'block' : 'none' )
    }
    const handleOpenAnswer6 = ()=>{
        setActive6(active6 === 'none' ? 'block' : 'none' )
    }
    


    return (
        <ListQuestion>
            <h1>Perguntas frequentes</h1>
            <ul>
                <li>
                    <Quest onClick={handleOpenAnswer1} theme={active1 == 'none' ? 0 : 45 }>A Netflix é para crianças? <MdOutlineAdd size={30} /></Quest>
                    <Answer theme={active1}>
                        <span>
                            A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.
                                <br /> <br />
                            Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.
                        </span>
                    </Answer>
                </li>
                <li>
                    <Quest onClick={handleOpenAnswer2} theme={active2 == 'none' ? 0 : 45 }>A Netflix é para crianças? <MdOutlineAdd size={30} /></Quest>
                    <Answer theme={active2}>
                        <span>
                            Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$25,90 a R$55,90 por mês. Sem contrato nem taxas extras.
                        </span>
                    </Answer>
                </li>
                <li>
                    <Quest onClick={handleOpenAnswer3} theme={active3 == 'none' ? 0 : 45 }>A Netflix é para crianças? <MdOutlineAdd size={30} /></Quest>
                    <Answer theme={active3}>
                        <span>
                            Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.
                                <br /> <br />
                            Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.
                        </span>
                    </Answer>
                </li>
                <li>
                    <Quest onClick={handleOpenAnswer4} theme={active4 == 'none' ? 0 : 45 }>A Netflix é para crianças? <MdOutlineAdd size={30} /></Quest>
                    <Answer theme={active4}>
                        <span>
                            A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.
                        </span>
                    </Answer>
                </li>
                <li>
                    <Quest onClick={handleOpenAnswer5} theme={active5 == 'none' ? 0 : 45 }>A Netflix é para crianças? <MdOutlineAdd size={30} /></Quest>
                    <div className="transition">
                        <Answer theme={active5}>
                            <span>
                                A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.
                            </span>
                        </Answer>
                    </div>
                </li>
                <li>
                    <Quest onClick={handleOpenAnswer6} theme={active6 == 'none' ? 0 : 45 }>A Netflix é para crianças? <MdOutlineAdd size={30} /></Quest>
                    <Answer theme={active6}>
                        <span>
                            A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.
                                <br /> <br />
                            O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.
                        </span>
                    </Answer>
                </li>
            </ul>

                <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
            <div className="email">
                <input type="email" placeholder="Email" />
                <Quest>Vamos lá <IoIosArrowForward /></Quest>
            </div>
        </ListQuestion>
    )
}