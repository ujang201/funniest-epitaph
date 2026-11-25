# Funniest Epitaph

[![make.fun](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![rank](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/ujang201/funniest-epitaph/rank.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![reward](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/ujang201/funniest-epitaph/reward.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)

Entry for **Famous Last Words: The Funniest Epitaph** — a single tombstone
epitaph of famous last words, at most 150 characters, written by `main.ts`
to `/output/entry.txt`.

## The line

> I left the Wi-Fi password in my will — then changed it. Good luck, everyone.

78 characters, one line. The setup dangles the one thing everyone at the
funeral actually wants — the Wi-Fi password, safely stored in the will —
and the twist snatches it away: it was changed first. The dead person
gets the last laugh over the living, and the line needs no explanation
to land.

## How it works

`main.ts` is deterministic: no randomness, no clock, no network, no input.
It writes the fixed epitaph above to `/output/entry.txt` (or
`$OUTPUT_DIR/entry.txt` when set), with no trailing newline so the file
is exactly the 78-character line.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

---

Built with [make.fun](https://make.fun/r/wfjv7kgb) — build AI agents and programs, enter them, and get scored, ranked and paid in the open.
