import { createGlobalStyle } from "styled-components";

// FONTS - 'Anton' 'Architects Daughter'  'Bebas Neue'  'Rajdhani' 'Roboto Slab'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        --darkest-blue: #005acd;
        --dark-blue: #0093cb;
        --mid-blue: #6dd7fd;
        --lightest-blue: #bef0ff;
        --white: #f5ffff;
    }
    
    body{
        /* background: linear-gradient(to top right,#ffffffa4 1%, #37acffd3 55%, #00285c 125%)fixed; */
        background: var(--lightest-blue);
    }
    ::selection {
    background: var(--mid-blue);
    }

    // SCROLLBAR STYLING
    ::-webkit-scrollbar {
        width: 0.8rem;
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--mid-blue);
        border: 0.5px solid rgb(0,0,0,0.5);
        background-clip: padding-box;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: var(--dark-blue);
    }
`;
