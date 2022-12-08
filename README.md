<div id='top'>

# AluraTube | Imersão React / Next.js

</div>

_[Read it in English](#English)_

O **Covers-Tube**, é a minha adaptação própria do **AluraTube**, é uma plataforma clone do YouTube onde estou colocando meus clipes favoritos de músicas versão cover para compartilhar com amigos.

Esse projeto foi desenvolvido em uma imersão da [**Alura**](https://www.alura.com.br) voltada para iniciantes em React com foco em Next.js. O projeto está sendo desenvolvido sob a orientação do instrutor [Mario Souto](https://github.com/omariosouto) com participação da desenvolvedora [Nayanne Lopes](https://github.com/NayanneBatista) e do CEO da Alura, [Paulo Silveira](https://github.com/peas).

<!-- prettier-ignore -->
| 🪧 Vitrine. Dev |     |
| -------------- | --- |
| ✨ Nome        | **AluraTube | Imersão React / Next.js** |
| 🏷️ Tecnologias | React, Next, Styled-Components, Radix UI, Supabase |
| 🚀 URL         | [https://covers-tube.vercel.app/](https://covers-tube.vercel.app/) |
| 🔥 Desafio     | [Design no Figma](https://www.figma.com/file/3ryManadSVXjYYdva3orGD/Aluratube-(Copy)?node-id=5%3A2) |

![](https://uploaddeimagens.com.br/images/004/253/708/original/Covers-Tube.png?1670517329#vitrinedev)

## Detalhes do projeto

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Next-ffffff?style=for-the-badge&logo=nextdotjs&logoColor=000000"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/styled components-3C3C3C?style=for-the-badge&logo=styled-components&logoColor=DB7093">
  <img src="https://img.shields.io/badge/supabase-1C1C1C?style=for-the-badge&logo=supabase&logoColor=3ECF8E">
  <img src="https://img.shields.io/badge/radix ui-32275F?style=for-the-badge">
</div>

A imersão contemplou o uso de **Next.js** para o desenvolvimento da UI da aplicação, com o menu, a função de busca dos vídeos cadastrados, a estilização e definição de tema claro e tema escuro com **styled-components**, bem como mostrou como criar um banco de dados para cadastro dos vídeos na plataforma **Supabase**.

Como atividades adicionais, criei outras opções de tema além do claro/escuro, trocando o _toggle_ feito durante o evento por um _select_ com as opções de tema (esse _select_ foi criado com **Radix UI**). Também implementei a opção de escolher dentre três playlists diferentes para salvar os vídeos, pois no evento foi mostrado apenas como salvar no Supabase em uma única playlist pré-definida. Para finalizar a aplicação, criei a funcionalidade de excluir um vídeo de uma determinada playlist, bastando clicar no botão no canto superior direito da _thumbnail_.

Como ideia de implementação futura, pode ser feito um sistema de cadastro/login para mostrar os vídeos por usuário, além da opção de poder criar uma nova playlist além das existentes. Atualmente a aplicação aceita apenas vídeos do YouTube, então torna-se necessário corrigir um erro que ocorre ao tentar adicionar vídeos de outras fontes.

## ⚙️ Como usar

Para usar a aplicação, basta acessar [este link](https://covers-tube.vercel.app/). Não é necessário login, sendo mostrado na página da aplicação alguns dos meus vídeos favoritos.

Para cadastrar novos vídeos, basta:

- Clicar no botão que se encontra no canto inferior direito da tela;
- Inserir o nome do vídeo;
- Selecionar uma das três playlists existentes;
- Inserir a URL do vídeo;
- Clicar no botão "Ver thumbnail" para extrair a imagem do vídeo;
- Clicar em "Cadastrar" para salva-lo na playlist especificada.

<a href='#top'>🔼 Voltar ao topo</a>
