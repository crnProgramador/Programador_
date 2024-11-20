import React from 'react'; // Importa o React, que é necessário para criar componentes no React Native
import Home from './src/Home'; // Importa o componente 'Home' que provavelmente contém a estrutura principal da aplicação

import { ThemeProvider } from 'styled-components'; // Importa o 'ThemeProvider' da biblioteca 'styled-components' para fornecer um tema global aos componentes estilizados

// Define um objeto 'cores' que contém as cores do tema a ser utilizado
const cores = {
    bg: '#191a24', // Cor de fundo (dark mode)
    color: '#FF3F4A' // Cor principal do texto ou outros elementos (tom vermelho)
};

function App() {
    return (
        // O 'ThemeProvider' fornece o tema para os componentes estilizados dentro de seu escopo
        <ThemeProvider theme={cores}>
            <Home/> {/* Renderiza o componente 'Home', que receberá o tema definido */}
        </ThemeProvider>
    );
}

export default App; // Exporta o componente 'App' como o componente principal da aplicação
