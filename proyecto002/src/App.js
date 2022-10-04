import logo from './logo.svg';
import './App.css';

const retornarAleatorio = () => {
    return Math.trunc(Math.random() * 10);
}

function App() {
    const siglo = 21
    const persona = {
        nombre: 'Juan',
        edad: '34'
    }

    return (
        <>
            <h1>Titulo nivel 1</h1>
            <hr/>
            <p>Estamos en siglo {siglo}</p>
            <h3>Acceso a un objeto</h3>
            <p>{persona.nombre} tiene {persona.edad} años</p>
            <h3>llamada a un metodo</h3>
            <p>Un valor aleatorio llamando a un método</p>
            {retornarAleatorio()}
            <h3>calculo inmediato de expresiones</h3>
            3+3 = {3 + 3}

        </>
    );
}

export default App;
