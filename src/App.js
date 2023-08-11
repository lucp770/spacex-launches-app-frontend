import { useState } from 'react';

import PieChart from './Components/PieChart';
import BarChart from './Components/BarChart';
import SearchBar from './Components/SearchBar';
import ResultadoVoo from './Components/ResultadoVoo';

import './App.css';
import RocketImg from './Images/rocket.png';


function App() {
  const [searchResult, setSearch] = useState('');

  let dados=[{numero: 180, logo:'link', missao: 'Starlink 4-27(v1.5)', dataDeLanc: '05/10/2022', foguete:'Used Falcon 9' ,resultado:'Sucesso', video: 'link'},
  {numero: 179, logo:'link', missao: 'Starlink 4-27(v1.5)', dataDeLanc: '05/10/2022', foguete:'Used Falcon 9' ,resultado:'Sucesso', video: 'link'},
  {numero: 178, logo:'link', missao: 'Starlink 3-3(v1.5)', dataDeLanc: '07/09/2022', foguete:'Used Falcon 9' ,resultado:'Falha', video: 'link'}];
  let chartData = [
    ["Foguete", "nLancamentos"],
    ["used Falcon 9", 60],
    ["New Falcon 9", 15],
    ["Falcon 1", 15],
    ["Falcon Heavy", 10],
  ];

  return (
    <div className="App">

      <h1> <img src={RocketImg} className='rocket-img'/>SPACE X </h1>
      <div className='plot-container'>
        <PieChart data = {chartData}/>
        <BarChart  data = {[1,2,3]}/>
      </div>
      <SearchBar handleSearch={setSearch}/>
      
      <div className='result-container'>
        <table>
          <thead>
            <tr>
              <th>NºVoo</th>
              <th>Logo</th>
              <th>Missão</th>
              <th>Data de Lançamento</th>
              <th>Foguete</th>
              <th>Resultado</th>
              <th>Vídeo</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((dataObj)=> {
              return (<ResultadoVoo data = {dataObj}/>);
            }) 
            }
          </tbody>
        </table>

        <div className='result-footer'>
          <span> 1</span>
          <span> 2 </span>
          ...
          <span> 20</span>
        </div>

      </div>
    </div>
  );
}

export default App;

/*
components:

-grafico de barras
-grafico de pizza
-barra de pesquisa
-lista Resultados
  -varias componentes ResultadoVoo

*/
