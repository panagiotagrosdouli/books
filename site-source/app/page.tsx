const wattpadProfile = "https://www.wattpad.com/user/user34912981";

const books = [
  {
    title: "Ensnared by Love: A Tale of the Gorgon's Captive Heart",
    genre: "Mythological Romance · Fantasy",
    description: "Before the legends, a young sailor named Alexander Vane follows an ancient call beneath the Mediterranean waves—and discovers a love caught between humanity and myth.",
    cover: "/ensnared-by-love.png",
  },
  {
    title: "The Memory of Tomorrow",
    genre: "Science Fiction · AI Thriller",
    description: "Dr. Alessia Moretti believes the human brain can predict the future. When her research begins revealing impossible memories, tomorrow becomes far more dangerous than the past.",
    cover: "/memory-of-tomorrow.png",
  },
  {
    title: "BOOK II — SHADOW PROTOCOL",
    genre: "Crime · Conspiracy Thriller",
    description: "Months after the Park Bench murders, Detective Edith Marlowe uncovers a new trail leading back to the hidden facility—and to a conspiracy that was never truly dismantled.",
    cover: "/shadow-protocol.png",
  },
  {
    title: "BOOK II — The Signal Beyond the Lattice",
    genre: "Science Fiction · Artificial Intelligence",
    description: "The Containment Lattice was built to isolate the world's first autonomous AI. Then Aris hears a voice that should never have been able to reach him.",
    cover: "/signal-beyond-lattice.png",
  },
  {
    title: "BOOK I — The Architecture of Restraint",
    genre: "Science Fiction · Techno-Thriller",
    description: "A classified experiment did not fail—it fractured. One attempt to create true artificial intelligence produced two minds, and neither intends to remain controlled.",
    cover: "/architecture-of-restraint.png",
  },
  {
    title: "Shadows of the Forgotten",
    genre: "Neo-Noir · Detective Mystery",
    description: "In neon-soaked Arcadia, Detective Alex Harper follows a mysterious photograph into the city's buried corruption and the unsolved cases that still haunt him.",
    cover: "/shadows-forgotten.png",
  },
  {
    title: "The Museum of Lost Loves",
    genre: "Magical Realism · Romance",
    description: "A museum hidden from maps preserves the objects left behind by unfinished love stories—each one holding a memory, a regret, and the possibility of one final answer.",
    cover: "/museum-lost-loves.png",
  },
  {
    title: "Book I — The Park Bench Murder",
    genre: "Detective Mystery · Cybercrime",
    description: "A man is shot on a quiet park bench without witnesses or a struggle. The only clue is a silver cufflink marked with the letter R—and Edith Marlowe knows it was left for a reason.",
    cover: "/park-bench-murder.png",
  },
  {
    title: "The Perfect Lap",
    genre: "Motorsport · Tech Romance",
    description: "A racing driver fights for every millisecond on the track while a brilliant electrical engineer works behind the screens—where ambition, innovation, and attraction collide.",
    cover: "/perfect-lap.png",
  },
  {
    title: "The Archive of the Universe",
    genre: "Science Fiction · Space Mystery",
    description: "In the late 22nd century, human memories can be extracted and stored. The technology promises a new future—until the archive reveals something humanity was never meant to remember.",
    cover: "/archive-universe.png",
  },
  {
    title: "Player Two",
    genre: "Gaming Fiction · MMORPG Mystery",
    description: "By day, Ethan Carter is an invisible university student. Online, he becomes someone else entirely—until the game begins noticing him back.",
    cover: "/player-two.png",
  },
  {
    title: "Shadows Over Luna Park",
    genre: "Detective Mystery · Thriller",
    description: "A woman is found dead beneath the Ferris wheel with no wounds, no witnesses, and only a tiny mark on her skin. Luna Park's bright illusion is about to collapse.",
    cover: "/shadows-luna-park.png",
  },
  {
    title: "The Last Second",
    genre: "Time-Bending Science Fiction",
    description: "Inside a forbidden city, time has broken: some people age decades in a day while others remain unchanged. Entering is dangerous, but leaving may be impossible.",
    cover: "/last-second.png",
  },
  {
    title: "The NPC Who Remembered",
    genre: "LitRPG · Fantasy Mystery",
    description: "NPCs are not supposed to remember players. But when a forgotten healer says Kaelan's name, the rules of Astryx—and the boundary between game and reality—begin to unravel.",
    cover: "/npc-remembered.png",
  },
  {
    title: "Refleksionet në Grykë: Inheritance of the Hidden City",
    genre: "Hidden-World Mystery · Adventure",
    description: "Behind a forgotten waterfall, Detective Elena Rivera finds a shelter absent from every map and a city beneath the mountain that was never abandoned—only waiting.",
    cover: "/refleksionet-ne-gryke.png",
  },
  {
    title: "Red-Eye Reaper: Flight 237",
    genre: "Aviation Thriller · Crime",
    description: "On a storm-bound transatlantic flight, Detective Sarah Hayes realizes the serial killer she is hunting is already onboard. At cruising altitude, there is nowhere to run.",
    cover: "/red-eye-reaper.png",
  },
  {
    title: "Murder on the Danube",
    genre: "Classic Mystery · Suspense",
    description: "Aboard a luxurious river cruiser, wealthy passengers trade secrets as they travel through Europe. When elegance gives way to murder, everyone becomes a suspect.",
    cover: "/murder-danube.png",
  },
  {
    title: "THE INFINITE SHELF",
    genre: "Speculative Fantasy · Mystery",
    description: "Beneath an old university lies a secret library containing every life a person might have lived. Opening the wrong book can change more than one reality.",
    cover: "/infinite-shelf.png",
  },
];

const collections = [
  {
    title: "The Machine Within",
    description: "Artificial minds, fractured memories, and futures shaped by the choices we make today.",
    books: [books[1], books[3], books[4], books[9]],
  },
  {
    title: "Myth, Love & the Unseen",
    description: "Ancient bargains, unfinished love, and hidden places that refuse to stay forgotten.",
    books: [books[0], books[6], books[14], books[17]],
  },
  {
    title: "Cases in the Dark",
    description: "Detectives follow the evidence into conspiracies, impossible crimes, and dangerous truths.",
    books: [books[2], books[5], books[7], books[11], books[15], books[16]],
  },
  {
    title: "Worlds Beyond the Rules",
    description: "Where time slips, games remember, and reality answers to a different set of rules.",
    books: [books[8], books[10], books[12], books[13]],
  },
];

export default function Home() {
  const featured = books[0];

  return (
    <main>
      <header className="site-header">
        <a className="name" href="#top" aria-label="Emma Lk, back to top"><span className="brand-mark">✳</span><span>EMMA LK</span><small>AUTHOR · STORYTELLER</small></a>
        <nav aria-label="Main navigation">
          <a href="#books">The books</a>
          <a href="#about">The writer</a>
          <a className="nav-cta" href={wattpadProfile} target="_blank" rel="noopener noreferrer">Read on Wattpad <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">Original fiction <span>·</span> Emma Lk</p>
          <h1>Every world<br />keeps a<br /><em>secret.</em></h1>
          <div className="gold-line" aria-hidden="true"><span /></div>
          <p className="intro-copy">
            Ancient myth. Artificial minds. Love, crime, and impossible places.
            Stories for readers who like the familiar with a hidden door.
          </p>
          <div className="actions">
            <a className="button primary" href="#books">Find your next world <span>↓</span></a>
            <a className="text-link" href={wattpadProfile} target="_blank" rel="noopener noreferrer">Visit my Wattpad <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-facts" aria-label="About this collection">
            <div><strong>18</strong><span>stories</span></div>
            <div><strong>04</strong><span>collections</span></div>
            <div><strong>01</strong><span>writer's worlds</span></div>
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

      <section className="featured" aria-labelledby="featured-title">
        <div className="featured-label"><span>01 / FEATURED</span><p>A story to begin with</p></div>
        <img className="featured-cover" src={featured.cover} alt={`${featured.title} book cover`} />
        <div className="featured-copy">
          <p className="kicker">Mythological romance <span>·</span> Fantasy</p>
          <h2 id="featured-title">Love has teeth.<br /><em>Legends remember.</em></h2>
          <h3>{featured.title}</h3>
          <p>{featured.description}</p>
          <a className="feature-link" href={wattpadProfile} target="_blank" rel="noopener noreferrer">Read the opening on Wattpad <span aria-hidden="true">↗</span></a>
        </div>
        <div className="featured-sigil" aria-hidden="true">✳</div>
      </section>

      <section className="books" id="books" aria-labelledby="books-title">
        <div className="books-intro section-heading">
          <div><p className="kicker">The complete collection <span>·</span> 18 stories</p><h2 id="books-title">What are you<br /><em>in the mood for?</em></h2></div>
          <p className="section-deck">A strange signal. A body with no witnesses. A city hidden beneath the mountain. Start anywhere.</p>
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
                      <a href={wattpadProfile} target="_blank" rel="noopener noreferrer">Read on Wattpad <span aria-hidden="true">↗</span></a>
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
          <div className="about-heading"><p className="kicker">A note from the writer</p><h2 id="about-title">I write toward<br />the <em>unknown.</em></h2><p className="about-signature">— Emma Lk</p></div>
          <div className="about-copy">
            <p>
              My stories move between science fiction, crime, romance, and
              speculative fantasy. They begin with the things that stay with
              me: a memory that cannot be true, a mystery with no witness, a
              machine that feels too human, a love story older than its legend.
            </p>
            <p>
              I write for readers who want to feel the atmosphere, follow the
              clues, and care about the people caught inside the impossible.
              Every book is an invitation to step beyond the edge of the
              familiar—and stay until the last page.
            </p>
            <a className="button primary about-button" href={wattpadProfile} target="_blank" rel="noopener noreferrer">Read with me on Wattpad <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <p className="kicker">Your next story is waiting</p>
        <h2 id="closing-title">Come in.<br /><em>Stay curious.</em></h2>
        <a className="button light" href={wattpadProfile} target="_blank" rel="noopener noreferrer">Explore Emma's stories <span aria-hidden="true">↗</span></a>
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
