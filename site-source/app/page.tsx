import catalogue from "../books.json";

const wattpadProfile = "https://www.wattpad.com/user/user34912981";
const books = catalogue.map((book) => ({
  ...book,
  cover: "/" + book.cover.split("/").pop(),
}));
const collectionDetails = [
  { title: "The Machine Within", description: "Stories grouped in the current site catalogue under science fiction and artificial intelligence." },
  { title: "Myth, Love & the Unseen", description: "Stories grouped in the current site catalogue under myth, romance, and hidden worlds." },
  { title: "Cases in the Dark", description: "Stories grouped in the current site catalogue under mystery and crime." },
  { title: "Worlds Beyond the Rules", description: "Stories grouped in the current site catalogue under gaming and speculative worlds." },
];
const collections = collectionDetails.map((collection) => ({
  ...collection,
  books: books.filter((book) => book.collection === collection.title),
}));

export default function Home() {
  const firstSteps = [
    {
      label: "A mystery with one clue",
      hook: "Explore the current catalogue entry for The Park Bench Murder.",
      title: "The Park Bench Murder",
      cover: books.find((book) => book.title.includes("The Park Bench Murder"))?.cover ?? "",
      alt: "The Park Bench Murder",
    },
    {
      label: "A racing story about data",
      hook: "A driver and an engineer pursue the perfect lap through instinct and technology.",
      title: "Beyond the Apex",
      cover: books.find((book) => book.title === "Beyond the Apex")?.cover ?? "",
      alt: "Beyond the Apex",
    },
    {
      label: "A love story with a mythic edge",
      hook: "Explore the current catalogue entry for Ensnared by Love.",
      title: "Ensnared by Love",
      cover: books.find((book) => book.title.startsWith("Ensnared by Love"))?.cover ?? "",
      alt: "Ensnared by Love",
    },
  ];

  return (
    <main>
      <header className="site-header">
        <a className="name" href="#top" aria-label="Emma Lk, back to top"><span className="brand-mark">✳</span><span>EMMA LK</span><small>AUTHOR · STORYTELLER</small></a>
        <nav aria-label="Main navigation">
          <a href="#start-here">Start here</a>
          <a href="#books">All stories</a>
          <a href="#about">The writer</a>
          <a className="nav-cta" href={wattpadProfile} target="_blank" rel="noopener noreferrer">Visit Wattpad profile <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">For the curious <span>·</span> Emma Lk</p>
          <h1>One good<br />story can<br /><em>change you.</em></h1>
          <div className="gold-line" aria-hidden="true"><span /></div>
          <p className="intro-copy">
            No reading list. No pressure. Just a mystery, a myth, or a future
            you might want to follow for one more page.
          </p>
          <div className="actions">
            <a className="button primary" href="#start-here">Find your first story <span>↓</span></a>
            <a className="text-link" href={wattpadProfile} target="_blank" rel="noopener noreferrer">Meet me on Wattpad <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-facts" aria-label="Explore the stories">
            <div><strong>18</strong><span>catalogue entries</span></div>
            <div><strong>04</strong><span>kinds of worlds</span></div>
            <div><strong>01</strong><span>page at a time</span></div>
          </div>
        </div>
        <div className="hero-art" aria-label="Selected book covers by Emma Lk">
          <span className="art-index"><span>FIELD NOTES</span><b>FICTION / 01—18</b></span>
          <div className="cover-showcase">
            <img src="/memory-of-tomorrow.png" alt="The Memory of Tomorrow book cover" />
            <img src="/ensnared-by-love.png" alt="Ensnared by Love book cover" />
            <img src="/architecture-of-restraint.png" alt="The Architecture of Restraint book cover" />
            <img src="/museum-lost-loves.png" alt="The Museum of Lost Loves book cover" />
          </div>
          <p className="art-caption"><span>FICTION FOR THE CURIOUS</span><br /><em>Turn the page. Cross the line.</em></p>
        </div>
      </section>

      <section className="start-here" id="start-here" aria-labelledby="start-title">
        <div className="start-heading">
          <p className="kicker">Not sure books are your thing?</p>
          <h2 id="start-title">Start with an idea.</h2>
          <p>Pick the premise that makes you curious. If you want to know what happens next, the story is waiting on Wattpad.</p>
        </div>
        <div className="gateway-grid">
          {firstSteps.map((step, index) => (
            <article className={`gateway-card gateway-${index + 1}`} key={step.title}>
              <div className="gateway-art"><img src={step.cover} alt={`${step.alt} book cover`} loading="lazy" /><span>0{index + 1}</span></div>
              <div className="gateway-copy">
                <p className="gateway-label">{step.label}</p>
                <h3>{step.hook}</h3>
                <p className="gateway-title">Start with <strong>{step.title}</strong></p>
                <a href={wattpadProfile} target="_blank" rel="noopener noreferrer">Find it on Wattpad <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
        <p className="start-note">No commitment. Follow the story for a page—or as far as it takes you.</p>
      </section>

      <section className="books" id="books" aria-labelledby="books-title">
        <div className="books-intro section-heading">
          <div><p className="kicker">The complete collection <span>·</span> 18 stories</p><h2 id="books-title">Stay for<br /><em>another world.</em></h2></div>
          <p className="section-deck">Mystery, myth, artificial minds, and places that do not appear on any map. Find the premise that stays with you.</p>
        </div>
        <div className="collection-stack">
          {collections.map((collection, collectionIndex) => (
            <section className={`collection collection-${collectionIndex + 1}`} key={collection.title}>
              <header className="collection-header">
                <span>0{collectionIndex + 1}<i aria-hidden="true">✳</i></span>
                <div>
                  <h3>{collection.title}</h3>
                  <p>{collection.description}</p>
                </div>
              </header>
              <div className="book-list">
                {collection.books.map((book) => (
                  <article className="book-entry" key={book.title}>
                    <img className="real-cover" src={book.cover} alt={`${book.title} book cover`} />
                    <div className="book-details">
                      <p className="book-meta">{book.genre}</p>
                      <h4>{book.title}</h4>
                      <p>{book.description}</p>
                      <a href={wattpadProfile} target="_blank" rel="noopener noreferrer">Visit Wattpad profile <span aria-hidden="true">↗</span></a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="section-number">02</div>
        <div className="section-content about-grid">
          <div className="about-heading"><p className="kicker">A note from the writer</p><h2 id="about-title">Stories to<br /><em>stay in.</em></h2><p className="about-signature">— Emma Lk</p></div>
          <div className="about-copy">
            <p>
              This portfolio presents the titles, covers, and descriptions currently maintained in the site catalogue.
            </p>
            <p>
              Wattpad publication, descriptions, genres, series, and individual story links have not been independently confirmed for these entries. Visit my profile for the latest published catalogue.
            </p>
            <a className="button primary about-button" href={wattpadProfile} target="_blank" rel="noopener noreferrer">Visit my Wattpad profile <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <p className="kicker">Just one more page</p>
        <h2 id="closing-title">See where<br /><em>the story goes.</em></h2>
        <a className="button light" href={wattpadProfile} target="_blank" rel="noopener noreferrer">Choose a story on Wattpad <span aria-hidden="true">↗</span></a>
        <span className="closing-mark" aria-hidden="true">✳</span>
      </section>

      <footer>
        <a className="footer-brand" href="#top"><span className="brand-mark">✳</span> EMMA LK</a>
        <span>Fiction for the curious · © 2026 Emma Lk</span>
        <a href={wattpadProfile} target="_blank" rel="noopener noreferrer">Wattpad ↗</a>
      </footer>
    </main>
  );
}
