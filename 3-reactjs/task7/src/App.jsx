import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Counter from './components/Counter';
import BackgroundColorChanger from './components/BackgroundColorChanger';
import TodoList from './components/TodoList';
import Timer from './components/Timer';
import NameFilter from './components/NameFilter';
import RegistrationForm from './components/RegistrationForm';
import DataFetcher from './components/DataFetcher';
import ImageGallery from './components/ImageGallery';
import CountdownTimer from './components/CountdownTimer';
import Tabs from './components/Tabs';

function App() {
  return (
    <Router>
      <div>
        <h1>React Hooks Project Menu</h1>
        <nav>
          <ul>
            <li><Link to="/counter">Contador Simples</Link></li>
            <li><Link to="/background-color">Alteração de Cor de Fundo</Link></li>
            <li><Link to="/todo-list">Lista de Tarefas</Link></li>
            <li><Link to="/timer">Temporizador com useEffect</Link></li>
            <li><Link to="/name-filter">Filtro de Lista</Link></li>
            <li><Link to="/registration-form">Formulário de Registro Simples</Link></li>
            <li><Link to="/data-fetcher">Aplicação de Requisição de Dados Simples</Link></li>
            <li><Link to="/image-gallery">Galeria de Imagens com Visualização Detalhada</Link></li>
            <li><Link to="/countdown-timer">Timer com Intervalo e Alerta</Link></li>
            <li><Link to="/tabs">Componentes com Tabs Navegáveis</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/background-color" element={<BackgroundColorChanger />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/name-filter" element={<NameFilter />} />
          <Route path="/registration-form" element={<RegistrationForm />} />
          <Route path="/data-fetcher" element={<DataFetcher />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
          <Route path="/countdown-timer" element={<CountdownTimer />} />
          <Route path="/tabs" element={<Tabs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
