import { useState } from "react";
import { Link } from "react-router-dom";
import "./NewPage.css";


const CATEGORIAS = ["Tudo", "Praias", "Trilhas", "Gastronomia", "Shows e música", "Cultura", "Passeios de barco"];

const ITENS = [
  { titulo: "Trilha da Lagoinha do Leste", categoria: "Trilhas", tag: "Trilha", info: "Pântano do Sul · [DISTÂNCIA]", arte: "trilha" },
  { titulo: "Mercado Público", categoria: "Gastronomia", tag: "Gastronomia", info: "Centro · [HORÁRIO]", arte: "comida" },
  { titulo: "Santo Antônio de Lisboa", categoria: "Passeios de barco", tag: "Passeio", info: "Norte da Ilha · Pôr do sol", arte: "barco" },
  { titulo: "[NOME DO EVENTO]", categoria: "Shows e música", tag: "Música", info: "Lagoa da Conceição · [DATA]", arte: "musica" },
  { titulo: "Praia Mole", categoria: "Praias", tag: "Praia", info: "Leste da Ilha · [HORÁRIO]", arte: "praia" },
  { titulo: "Museu Histórico de Santa Catarina", categoria: "Cultura", tag: "Cultura", info: "Centro · [HORÁRIO]", arte: "cultura" },
];

const svgProps = { viewBox: "0 0 300 160", preserveAspectRatio: "xMidYMid slice", "aria-hidden": true };

const ARTES = {
  trilha: (
    <svg {...svgProps}>
      <rect width="300" height="160" fill="#8cd3e2" />
      <circle cx="270" cy="30" r="22" fill="#ffffff" />
      <path d="M0 70c60-30 120 0 190 10s80-10 110-20v100H0z" fill="#028299" />
      <path d="M0 110c80-30 150 10 300-10v60H0z" fill="#116264" />
      <path d="M60 160c50-30 120-35 190-50" stroke="#9ac1c7" strokeWidth="7" fill="none" strokeLinecap="round" />
    </svg>
  ),
  comida: (
    <svg {...svgProps}>
      <rect width="300" height="160" fill="#bfeaf1" />
      <path d="M0 28h300v22c-20 16-40 16-60 0-20 16-40 16-60 0-20 16-40 16-60 0-20 16-40 16-60 0-20 16-40 16-60 0z" fill="#0191ac" />
      <rect y="105" width="300" height="55" fill="#116264" />
      <circle cx="25" cy="90" r="20" fill="#0a8fb0" />
      <circle cx="78" cy="98" r="16" fill="#12929f" />
      <circle cx="135" cy="85" r="22" fill="#0b6f99" />
      <circle cx="195" cy="96" r="16" fill="#0a8fb0" />
      <circle cx="250" cy="88" r="21" fill="#12929f" />
    </svg>
  ),
  barco: (
    <svg {...svgProps}>
      <rect width="300" height="160" fill="#0191ac" />
      <path d="M95 105a55 55 0 0 1 110 0z" fill="#e8fafc" />
      <rect y="105" width="300" height="55" fill="#116264" />
      <path d="M0 120h300M0 135h300M0 148h300" stroke="#4acde4" strokeWidth="3" />
      <path d="M232 60l22 38-34 4z" fill="#f6efe4" />
    </svg>
  ),
  musica: (
    <svg {...svgProps}>
      <rect width="300" height="160" fill="#09768a" />
      <g fill="#4acde4">
        <rect x="0" y="95" width="30" height="65" rx="4" />
        <rect x="45" y="55" width="30" height="105" rx="4" />
        <rect x="90" y="100" width="28" height="60" rx="4" />
        <rect x="132" y="30" width="30" height="130" rx="4" />
        <rect x="178" y="85" width="28" height="75" rx="4" />
        <rect x="222" y="45" width="30" height="115" rx="4" />
        <rect x="268" y="105" width="32" height="55" rx="4" />
      </g>
    </svg>
  ),
  praia: (
    <svg {...svgProps}>
      <rect width="300" height="160" fill="#8cd3e2" />
      <circle cx="60" cy="40" r="20" fill="#f3fbfc" />
      <path d="M0 85c50-12 100 12 150 0s100-12 150 0v75H0z" fill="#0191ac" />
      <path d="M0 120c60-14 120 10 180 0s90-8 120 0v40H0z" fill="#9ac1c7" />
    </svg>
  ),
  cultura: (
    <svg {...svgProps}>
      <rect width="300" height="160" fill="#bfeaf1" />
      <path d="M60 70l90-40 90 40z" fill="#09768a" />
      <rect x="75" y="72" width="150" height="62" fill="#f3fbfc" />
      <g fill="#09768a">
        <rect x="90" y="86" width="16" height="48" />
        <rect x="128" y="86" width="16" height="48" />
        <rect x="156" y="86" width="16" height="48" />
        <rect x="194" y="86" width="16" height="48" />
      </g>
      <rect y="134" width="300" height="26" fill="#116264" />
    </svg>
  ),
};

const Coracao = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
  </svg>
);

const CHUVA = [
  {
    titulo: "Museus e centros culturais",
    href: "#chuva-museus",
    fundo: "#d9eff4",
    icone: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    titulo: "Cafés e cafés coloniais",
    href: "#chuva-cafes",
    fundo: "#c9ece8",
    icone: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 8h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
        <path d="M16 9h2a2 2 0 0 1 0 4h-2" />
      </svg>
    ),
  },
  {
    titulo: "Cinema, teatro e shows",
    href: "#chuva-shows",
    fundo: "#d4e8f8",
    icone: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M10 9.5v5l4.5-2.5z" />
      </svg>
    ),
  },
];


export default function GuiaFloripa() {
  const [categoria, setCategoria] = useState("Tudo");
  const [favoritos, setFavoritos] = useState({});


  useEffect(() => {
    try {
      const salvo = JSON.parse(localStorage.getItem("gf-favs") || "{}");
      if (salvo && typeof salvo === "object") setFavoritos(salvo);
    } catch (e) {}
  }, []);

  function alternarFavorito(titulo) {
    setFavoritos((atual) => {
      const novo = { ...atual, [titulo]: !atual[titulo] };
      try {
        localStorage.setItem("gf-favs", JSON.stringify(novo));
      } catch (e) {}
      return novo;
    });
  }

  const total = Object.values(favoritos).filter(Boolean).length;
  const lista = ITENS.filter((i) => categoria === "Tudo" || i.categoria === categoria);

  return (
    <div className="gf" id="topo">
      <header>
        <div className="wrap">
          <a className="logo" href="#topo" aria-label="Guia Floripa, início">
            <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
              <path d="M3 20a15 15 0 0 1 30 0z" fill="#ffffff" />
              <path d="M3 24c6-4 10 3 16-1s11 0 14-2v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" fill="#09768a" />
            </svg>
            Guia Floripa
          </a>
          <nav aria-label="Principal">
            <a href="#explorar">Explorar</a>
            <a href="#mapa">Mapa</a>
            <a href="#sobre">Sobre</a>
            <button className="btn" type="button">
              {total ? `Meu roteiro (${total})` : "Meu roteiro"}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <div className="wrap" id="explorar">
          <div className="filters" role="group" aria-label="Filtrar por categoria">
            {CATEGORIAS.map((c) => (
              <button
                key={c}
                type="button"
                className="chip"
                aria-pressed={c === categoria}
                onClick={() => setCategoria(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="sec-head">
            <h2>Neste fim de semana</h2>
            <a href="#explorar" onClick={() => setCategoria("Tudo")}>Ver tudo</a>
          </div>

          <div className="grid" aria-live="polite">
            {lista.length === 0 && (
              <div className="empty">Ainda não temos dicas nessa categoria. Que tal sugerir uma?</div>
            )}
            {lista.map((i) => (
              <article className="card" key={i.titulo}>
                <div className="thumb">
                  {ARTES[i.arte]}
                  <span className="tag">{i.tag}</span>
                  <button
                    className="fav"
                    type="button"
                    aria-pressed={!!favoritos[i.titulo]}
                    aria-label={`Adicionar ${i.titulo} ao roteiro`}
                    onClick={() => alternarFavorito(i.titulo)}
                  >
                    <Coracao />
                  </button>
                </div>
                <div className="card-body">
                  <h3>{i.titulo}</h3>
                  <p>{i.info}</p>
                  <a href="#detalhes">Ver detalhes</a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <section className="rain">
          <div className="wrap">
            <div>
              <h2>Dia de chuva? Sem problema</h2>
              <p>Sugestões para quando o tempo fecha: lugares cobertos e programas para fazer com calma.</p>
            </div>
            <div className="rain-cards">
              {CHUVA.map((c) => (
                <a className="rain-card" href={c.href} key={c.titulo}>
                  <div className="ico" style={{ background: c.fundo }}>{c.icone}</div>
                  <h3>{c.titulo}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="sobre">
        <div className="wrap">
          <div>
            <strong>Guia Floripa</strong>
            <p>Projeto SENAI · [SEU NOME] · [ANO]</p>
          </div>
          <a className="btn" href="#sugerir">Sugerir um evento</a>
        </div>
      </footer>
    </div>
  );
}''
