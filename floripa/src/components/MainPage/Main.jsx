import { useState } from 'react';
import './Main.css';

/* ===== SideNav ===== */

const ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Contato', href: '#contato' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Explorar Floripa', href: '#explorar', cta: true },
];

function SideNav({ onExplore }) {
  const [active, setActive] = useState(ITEMS[0].label);

  return (
    <nav className="side-nav" aria-label="Navegação principal">
      <ul className="side-nav__list">
        {ITEMS.map(({ label, href, cta }) => (
          <li key={label}>
            {cta ? (
              <a
                className="side-nav__cta"
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  onExplore?.();
                }}
              >
                {label}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            ) : (
              <a
                href={href}
                className={`side-nav__link${active === label ? ' is-active' : ''}`}
                aria-label={label}
                aria-current={active === label ? 'page' : undefined}
                onClick={() => setActive(label)}
              >
                <span className="side-nav__letters" aria-hidden="true">
                  {Array.from(label).map((char, i) => (
                    <span
                      key={i}
                      className="side-nav__letter"
                      style={{ '--i': i }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ===== Hero ===== */

export default function MainPage({ onExplore }) {
  return (
    <header className="hero" id="home">
      <SideNav onExplore={onExplore} />

      <div className="hero__content">
        <p className="hero__location">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Santa Catarina · Brasil
        </p>

        <h1 className="hero__title">
          <span>Descubra o melhor</span>{' '}
          <span>
            de <em>Floripa</em>
          </span>
        </h1>

        <p className="hero__subtitle">
          Praias, trilhas e experiências para viver a ilha.
        </p>

        <div className="hero__actions">
          <a className="hero__cta" href="#destinos">
            Explorar destinos
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a className="hero__link" href="#experiencias">
            Ver experiências
          </a>
        </div>
      </div>
    </header>
  );
}
