import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');
    *{
        margin:0;
        padding:0;
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
    section {
        padding: 3% 10%;
    }
    p {
        font-family: Roboto;
        font-style: normal;
    }
`;

