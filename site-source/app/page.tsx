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
    title: "Artificial Minds & Future Memories",
    description: "AI, consciousness, memory, and futures that refuse to stay contained.",
    books: [books[1], books[3], books[4], books[9]],
  },
  {
    title: "Myths, Love & Hidden Worlds",
    description: "Ancient legends, unfinished love stories, and places waiting beyond the map.",
    books: [books[0], books[6], books[14], books[17]],
  },
  {
    title: "Murder, Shadows & Secrets",
    description: "Detectives, impossible crimes, and secrets concealed in the dark.",
    books: [books[2], books[5], books[7], books[11], books[15], books[16]],
  },
  {
    title: "Games, Time & Other Realities",
    description: "Virtual worlds, unstable time, and lives transformed by technology.",
    books: [books[8], books[10], books[12], books[13]],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
          <a className="name" href="#top" aria-label="Back to top">EMMA LK</a>
        <nav aria-label="Main navigation">
          <a href="#books">Books</a>
          <a href="#about">About</a>
          <a href={wattpadProfile} target="_blank" rel="noreferrer">Wattpad</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">Emma Lk · Original fiction</p>
          <h1>Between<br />Myth &amp;<br />Machine</h1>
          <div className="gold-line" aria-hidden="true" />
          <p className="intro-copy">
            Love, memory, artificial intelligence, ancient legends, and
            mysteries that challenge reality.
          </p>
          <div className="actions">
            <a className="button primary" href="#books">View my books <span>→</span></a>
            <a className="button secondary" href={wattpadProfile} target="_blank" rel="noreferrer">
              Read on Wattpad <span>→</span>
            </a>
          </div>
        </div>
        <div className="hero-art" aria-label="Selected books by Emma Lk">
          <div className="cover-showcase">
            <img src="/memory-of-tomorrow.png" alt="The Memory of Tomorrow book cover" />
            <img src="/ensnared-by-love.png" alt="Ensnared by Love book cover" />
            <img src="/architecture-of-restraint.png" alt="The Architecture of Restraint book cover" />
            <img src="/museum-lost-loves.png" alt="The Museum of Lost Loves book cover" />
          </div>
        </div>
      </section>

      <section className="books" id="books" aria-labelledby="books-title">
        <div className="books-intro">
          <p className="kicker">Four worlds · Eighteen stories</p>
          <h2 id="books-title">Explore the collection</h2>
        </div>
        <div className="collection-stack">
          {collections.map((collection, collectionIndex) => (
            <section className={`collection collection-${collectionIndex + 1}`} key={collection.title}>
              <header className="collection-header">
                <span>0{collectionIndex + 1}</span>
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
                      <p className="book-meta">{book.genre} · Published</p>
                      <h4>{book.title}</h4>
                      <p>{book.description}</p>
                      <a href={wattpadProfile} target="_blank" rel="noreferrer">Read on Wattpad <span aria-hidden="true">↗</span></a>
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
          <div>
            <p className="kicker">About the writer</p>
            <h2 id="about-title">Behind the stories</h2>
          </div>
          <div className="about-copy">
            <p>
              I write stories about mystery, memory, love, technology, and the
              unknown. My books move between science fiction, crime, romance,
              and speculative fantasy, but they all begin with the same
              question: what happens when ordinary people face something
              impossible?
            </p>
            <p>
              I enjoy creating atmospheric worlds, complex characters, hidden
              truths, and stories that stay with the reader after the final
              chapter. From artificial intelligence and forgotten cities to
              unsolved murders and unfinished love stories, each book is an
              invitation to step into a different world.
            </p>
            <p>All of my stories are available to read on Wattpad.</p>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 EMMA LK</span>
        <a href={wattpadProfile} target="_blank" rel="noreferrer">Wattpad profile ↗</a>
      </footer>
    </main>
  );
}
