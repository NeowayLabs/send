const html = require('choo/html');
const Component = require('choo/component');

class Footer extends Component {
  constructor(name, state) {
    super(name);
    this.state = state;
  }

  update() {
    return false;
  }

  createElement() {
    return html`
      <footer
        class="flex flex-col md:flex-row items-start w-full flex-none self-start p-6 md:p-8 font-medium text-xs text-grey-60 dark:text-grey-40 md:items-center justify-between"
      >
      <p style="text-align:justify"> Neoway Drop é uma ferramenta baseada em código-aberto, destinada a uso não-comercial apenas por colaboradores, fornecedores, clientes e demais parceiros da Neoway. O código-aberto utilizado pela DropSend Neoway foi publicado sob a licença pública <a href="https://www.mozilla.org/en-US/MPL/2.0/" style="color: #F0680A;">Mozilla, v. 2.0</a>. e maiores informações podem ser acessadas em <a href="https://github.com/mozilla/send" style="color: #F0680A;">GitHub - mozilla/send: Simple, private file sharing from the makers of Firefox</a>.<br/>
      <br/>
      <p style="text-align:center">Copyright © 2019 Todos os direitos reservados para Neoway
      <span style="color: #F0680A;">
      <a href="https://blog.neoway.com.br/politica-seguranca" rel="noopener" target="_blank" style="color: #F0680A;">Política de Segurança<span style="color: #000000;"> | </span></a>
      <a href="https://blog.neoway.com.br/politica-de-privacidade/" rel="noopener" target="_blank"
              style="color: #F0680A;"> Aviso de Privacidade do Site<span style="color: #000000;"> | </span></a>
      <a href="https://www.neoway.com.br/files/pdf/politica-de-tratamento-de-dados.pdf?hsLang=pt-br" rel="noopener"
              target="_blank" style="color: #F0680A;"> Política de Dados </a></span><span style="color: #000000;"> |<span
              class="Apple-converted-space"> </span></span>
      <a href="https://privacyportal.onetrust.com/webform/02ac84a7-09aa-4536-8e56-42e4d3c6f987/b3f9ab67-4dfd-435d-a798-9e268a668bf5"
          rel="noopener" target="_blank" style="color: #F0680A;">Exercite seus Direitos</a>
      </p>
      </p>
      </footer>
    `;
  }
}

module.exports = Footer;
