import "./Main.css";

function Main() {
  return (
    <main>
      <div className="container1">
        <div className="header">
        <h1>Floripa</h1>
        <div className="class-btn">
        <button className="btn-header">Home</button>
        <button className="btn-header">Contato</button>
        <button className="btn-header">Sobre</button>
        <button className="btn-descubra">Descubra mais</button>
        </div>
        </div>
        <p>
          Bem-vindo ao Guia Floripa! Aqui você encontrará informações sobre os
          melhores lugares para visitar em Florianópolis.
        </p>
        <button className="destaque">Descubra mais</button>
      </div>
    </main>
  );
}

export default Main;
