import React from 'react';

//posso usar
//Header(props) para acessar props.title
//ou posso usar //Header({children}) assim pego direto a propriedade children, para não pegar todas
export default function Header({children}) { 
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

//export default Header; //pode ficar aqui ou no cabeçalho da função (export default function...)