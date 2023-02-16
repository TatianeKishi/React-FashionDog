import Botao from '../Botao';
import CaixaTexto from '../CaixaTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const porte = [
  "mini",
  "pequeno",
  "médio",
  "grande",
]

const aoEnviar = (evento) => {
  evento.preventDefault()
  console.log('Enviado...')
}

const Formulario = () => {
    return(
      
          <section className='formulario'>
            <form onSubmit={aoEnviar}>
                <h2> Preencha os dados para criar o card</h2>
                <ListaSuspensa itens={porte}/>
                <CaixaTexto nome="Nome" placeholder="digite seu nome"/>
                <CaixaTexto nome="E-mail" placeholder="digite seu e-mail"/>
                <CaixaTexto nome="Foto" placeholder="insira sua Foto"/>
                <Botao>Cadastrar</Botao>
            </form>
          </section>
    )
}

export default Formulario;
