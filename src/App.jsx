import "./App.css";
import React from "react";

import Primeiro from "./components/Primeiro";
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from "./components/layout/Card";
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";
import CondicionalComIf from "./components/CondicionalComIf";
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/from/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default (props) => (
  <div className="App"> 

<div>

<Card titulo="#11 - Mega" color="#73503C">
      <Mega qtdeNumero={8}></Mega>
    </Card>  

  <Card titulo="#10 - Contador" color="#293E6A">
      <Contador passo={10}></Contador>
    </Card>


    <Card titulo="#09 - Input" color="#9C0F5F">
      <Input></Input>
    </Card>


   <Card titulo="#08 - Comunicação Indereta" color="#000">
      <Super></Super>
    </Card>

    </div>   

    
  <div> 

   <Card titulo="#07 - Comunicação Direta" color="#4298B5">
      <Pai></Pai>
    </Card>

   <Card titulo="#06 - Condicional v2" color="#FA6900">
      <CondicionalComIf numero={22}></CondicionalComIf>
    </Card>
    <Card titulo="#05 - Condicional v1" color="#E94C6F">
      <Condicional numero={22}></Condicional>
    </Card>

    <Card titulo="#04 - Repeticao" color="#008BBA">
      <Repeticao></Repeticao>
    </Card>

   </div>

   <div> 

     <Card titulo ="#03 - Componente com Filhos" color="#D96459">
      <ComFilhos>
          <ul>
              <li>Ana</li>
              <li>Bia</li>
              <li>Luiza</li>
              <li>Well</li>
          </ul>
      </ComFilhos>
    </Card>

   <Card titulo="#02 - Componente com Parametro" color="#FF85CB">
      <ComParametro titulo="Esse é o tiutlo" 
                     subtitulo="Esse é o subtitutlo" />
       </Card>

    <Card titulo="#01 - Primeiro Componente" color="#92B06A">
       <Primeiro /> 
    </Card>
  
    </div>
</div>

);


