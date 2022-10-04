import "./App.css";

const mostrarTitulo = (tit) => {
  return <h1>{tit}</h1>;
};

function App() {
  return (
    <>
      <h1>{mostrarTitulo("Hola Mundo!")}</h1>
      <p>{mostrarTitulo("Fin!")}</p>
    </>
  );
}

export default App;
