import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Button from '../Button';

const Formulario = () => {

    const times = [
        'Educare',
        'Protheus',
        'BI',
        'Head',
        'Designer UX/UI'
    ]

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log('Form submetido')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio = {true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio = {true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label= "Time" itens={times}/>
                <Button>Criar Card</Button> 
            </form>
        </section>
    )
}

export default Formulario;