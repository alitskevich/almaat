# ALMAAT

A general-purpose framework for cognitive modeling, written as a layered knowledge base in Markdown. One ontology, built from a single irreducible primitive (the `Azon`) up through `Set`, `Graph`, `Sequence`, `Space`, dynamic `System`, `Mind`, `Agent`, and `Growth`, then applied to the human, the collective, and software engineering.

```text
Azon → Set → Graph → Sequence → Space → System → Mind → Agent → Growth
        └── formal ──┘    └── dynamic ──┘    └── applied ──┘
```

## Read it

- [`docs/welcome.md`](docs/welcome.md) — entry page, the layers at a glance.
- [`docs/INDEX.md`](docs/INDEX.md) — master index of every section and file.
- Each section folder under `docs/` has its own `index.md`.

## Sections

Content lives in `docs/`, one folder per ontological layer or applied domain:

| Folder         | Topic                                                              |
|----------------|--------------------------------------------------------------------|
| `0-math/`      | Formal foundations: `Azon`, `Set`, `Graph`, `Algebras`, `Sequence`, `Space`. |
| `1-nature/`    | Dynamics: `Process`, `System`, `Agency`.                           |
| `3-intellect/` | Knowing: `Reasoning`, `Computation`, `Intellect`, `Science`, `Psyche`. |
| `4-human/`     | The human as a layered composition of body and psyche.             |
| `5-socium/`    | The collective: society, ecology, politics, the manifesto.         |
| `7-mastery/`   | The disciplines: vitality, productivity, mindset, defense, security, learning. |
| `9-engx/`      | Applied software engineering.                                      |

Top-level files: `welcome.md`, `INDEX.md`, `_quotes.md` (curated quotations), `_translations.md` (canonical English Terms → Belarusian-rooted equivalents).

## Banners

Every content file gets a generated SVG banner under `images/`, mirroring the `docs/` layout. Regenerate them all with:

```bash
npm run banners
```

The script walks `docs/`, deterministically renders one SVG per Markdown file from a path-based seed, and rewrites the `![…](/images/…)` line just below each file's heading. Don't hand-edit that line; the next run overwrites it.

## Contributing

Working on the content has its own rulebook: [`docs/CLAUDE.md`](docs/CLAUDE.md) (translate → reduce → route → index). Repo-level tooling and conventions are in [`CLAUDE.md`](CLAUDE.md) at the root.
