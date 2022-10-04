import "./App.css";

const retornarAleatorio = () => {
  return Math.trunc(Math.random() * 10);
};

function App() {
  const buscadores = [
    "http://www.google.com",
    "http://www.bing.com",
    "http://www.yahoo.com",
  ];

  return (
    <>
      <a href={buscadores[0]}>Google</a>
      <br />
      <a href={buscadores[1]}>Bing</a>
      <br />
      <a href={buscadores[2]}>Yahoo</a>
      <br />
    </>
  );
}

export default App;
