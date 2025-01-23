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
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label= "Time" itens={times}/>
                <Button>Criar Card</Button> 
            </form>
        </section>
    )
}

export default Formulario;