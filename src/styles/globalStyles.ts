import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    body {
        font-family: 'Inter', sans-serif;
        width: 100%;
    }

    #root{
        min-height: 100vh;
        display: flex;
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1: #868E96;
        --color-grey-0: #F8F9FA;
        --color-sucess: #3FE864;
        --color-negative: #E83F5B;

        --font-title-1: 1rem;
        --font-title-2: 1rem;
        --font-title-3: 1rem;
        --font-headline: 0.75rem;
        --font-headline-bold: 0.75rem;
        --font-headline-italic: 0.75rem;
        --border-radius: 4px;

        --toastify-color-progress-error: #E83F5B;
        --toastify-icon-color-error: #E83F5B;
        
        --toastify-color-progress-success: #3FE864;
        --toastify-icon-color-success: #3FE864;

    }

    button{ 
        cursor: pointer;
    }

    #root{
        background-color: #121214;
        
    }

 
    
`;
