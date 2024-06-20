import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.jpg'

function App() {
  const [texto, setTexto] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)


  const allTexto = [
    {
      id: 1,
      nome: 'Motivação',
      frases: [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O riso é menor distancia entre duas pessoa.',
        'Deixei de lados as preocupações e seja feliz',
        'Realize o óbvio, mas não dependa deles',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o fracasso.'
      ],
    },
    {
      id: 2,
      nome: 'Bom dia',
      frases: [

        'Que sua jornada hoje seja cheia de sorrisos e momentos especiais. Bom dia!',
        'Bom dia! Que cada passo que você der hoje o aproxime mais dos seus sonhos!',
        'Comece o dia com gratidão e veja como a sua perspectiva muda. Bom dia!',
        'Sorria para o espelho. Você é a obra-prima mais bonita que já existiu. Bom dia!',
        'A vida é feita de escolhas. Escolha ser feliz hoje. Bom dia!',
      ]
    },
    {
      id: 3,
      nome: 'Boa noite',
      frases: [
        'Durma com a certeza de que amanhã será um dia melhor. Boa noite!',
        'Cada noite é uma chance de recomeçar. Boa noite!',
        'Que seus sonhos sejam a inspiração para suas conquistas. Boa noite!',
        'Boa noite, meu amor! Sonhe comigo e com todos os nossos momentos felizes.',
        'Que a sua noite seja tão doce quanto o seu sorriso. Boa noite, meu amor!',
        'Mesmo longe, meu coração está com você. Boa noite!',
      ]
    }
  ]

  function handleSwitchCategory(index: number) { 
    setCategoriaSelecionada(index);
  }

  function gerarTexto(){
    const numeroAleatorio = Math.floor(Math.random() * allTexto[categoriaSelecionada].frases.length)    
    setTexto(`"${allTexto[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className='container'>
      <img alt='Logo frases' src={logoImg} className='logo'/>
      <h2 className='title'>Categoria</h2>
      <section className='category-area'>
        {allTexto.map((item, index) => (
          <button key={item.id} className='category-button'
            style={{
              borderWidth: item.nome === allTexto[categoriaSelecionada].nome ? 2 : 0,
              borderColor: '#1fa4db'
            }}
            onClick={() => handleSwitchCategory(index)}>
            {item.nome}
          </button>
        ))}

      </section>
      <button className='button-frase' onClick={gerarTexto}>Gerar Frase</button>

      {texto !== '' && <p className='textoFrase'>{texto}</p>}

    </div>
  )
}

export default App
