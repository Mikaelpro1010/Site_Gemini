import Image from 'next/image'
import Footer from '../../../components/footer';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-center">
        <iframe className="flex justify-center" width="560" height="315" src="https://www.youtube.com/embed/jV1vkHv4zq8?si=KnRBvDa_hpIkDEbO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <br />
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-100 p-4 border-b border-gray-200">
          <h4 className="text-center mt-3">
            Gemini AI: Uma nova geração de inteligência artificial
          </h4>

        </div>

        <div className="p-4  text-black text-justify">
          <div className="flex justify-center">
            <img src="Google.png" alt="" width={500} height={200} />
          </div>
          <br/>
        A Google lançou recentemente uma nova geração de inteligência artificial (IA) chamada Gemini AI. Sendo que, essa IA é um modelo de linguagem factual que foi treinado em um enorme conjunto de dados de texto e código, permitindo assim com que ele entenda o mundo ao seu redor e responda às suas perguntas de forma informativa.

        Este modelo de linguagem factual também é capaz de raciocínio e resolução de problemas. Isso significa que pode entender a relação entre diferentes informações e usar essas informações para resolver problemas.

        Finalmente, o modelo foi treinado para detectar e evitar preconceitos e toxicidade em seu conteúdo. Isso significa que é menos provável que ele gere conteúdo que seja prejudicial ou discriminatório.

        O modelo tem o potencial de revolucionar a forma como interagimos com a tecnologia. À medida que o Gemini AI continua a ser desenvolvido, ele se tornará ainda mais poderoso e capaz. O Gemini AI tem o potencial de ser usado para melhorar a comunicação, a educação e a pesquisa. Também pode ser usado para desenvolver novos produtos e serviços.
        Aqui estão alguns exemplos de como o modelo pode ser usado no futuro:
        <br />
        <li>
          O modelo pode ser usado para criar assistentes virtuais mais inteligentes e úteis.
        </li>
        <li>
          Outro exemplo de aplicação pode ser usado para desenvolver ferramentas de aprendizado automático mais poderosas.
        </li>
        <li>
          Por último, o Gemini AI também pode ser usado para criar novas formas de arte e entretenimento.
        </li>
        <br />
          Além disso, O Gemini AI usa dois modelos de IA generativa: LaMDA e GPT-3. LaMDA é um modelo de linguagem generativo que pode gerar texto, traduzir idiomas, escrever diferentes tipos de conteúdo criativo e responder às perguntas de forma informativa. GPT-3 é um modelo de aprendizado profundo que pode gerar imagens, música, áudio e vídeos.
          A IA generativa é essencial para o Gemini AI, pois é o que permite que a plataforma crie novos conteúdos de alta qualidade
          
          Sendo assim, o Gemini AI é uma ferramenta poderosa com o potencial de mudar o mundo. À medida que o modelo continua a ser desenvolvido, ele se tornará ainda mais poderoso e capaz.
        </div>
      </div>
    </main>
  )
}
