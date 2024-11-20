import styled from 'styled-components/native'; // Importa a biblioteca 'styled-components' para criar componentes estilizados no React Native

// Criação de um container com estilo personalizado
export const Container = styled.View` 
    flex: 1; // O container ocupa todo o espaço disponível, preenchendo a tela
    justify-content: center; // Alinha o conteúdo no eixo vertical ao centro
    align-items: center; // Alinha o conteúdo no eixo horizontal ao centro
    //background-color: #121212; // Comentado: cor de fundo escura (não será aplicada)
    background-color: ${props => props.cores.bg}; // Cor de fundo dinâmica baseada no valor passado para 'cores.bg' via props
`;

// Criação de um título com estilo personalizado
export const Title = styled.Text`
    font-size: 28px; // Define o tamanho da fonte como 28px
    //color: #FFF; // Comentado: cor de texto branca (não será aplicada)
    color: ${props => props.cores.color}; // Cor do texto dinâmica baseada no valor passado para 'cores.color' via props
`;

// Criação de um subtítulo com estilo personalizado
export const Subtitle = styled.Text`
    font-size: 20px; // Define o tamanho da fonte como 20px
    color: red; // Define a cor do texto como vermelha
`;
