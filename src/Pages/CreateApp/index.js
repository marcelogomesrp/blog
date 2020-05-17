import React from 'react';
import { Link } from 'react-router-dom'
import style from './style.module.css';


export default function CreateAPP() {

    return(
        <div>
            <h1>Create React APP</h1>
            <p>Para criar um novo projeto, usando o comando npx passando como parâmetro o comando create-react-app seguido do nome da aplicação que não pode conter espaço e todos os caracteres precisam ser em letra minúscula.</p>
            <pre>
                npx create-react-app NomeDaAplicação
            </pre>
            <p>Exemplo:</p>
            <pre>
                npx create-react-app frontend
            </pre>
            <h2>Testando sua aplicação</h2>
            <p>Após criar a aplicação, podemos executar a mesma e garantir que tudo está rodando bem, para isso execute os comandos a seguir:</p>
            <pre>
            cd frontend
            npm start
            </pre>
            <p>Em seguida visite o endereço <a href="http://localhost:3000">http://localhost:3000</a> uma página com o logo do React deve ser exibida</p>
            <Link to="CreateApp">Create APP</Link>
            <Link to="Page1">
               Página 1
           </Link>
           <Link to="Page2">
               Página 2
           </Link>
        </div>
    );
}