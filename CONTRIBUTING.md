# Contributing

Open a pull request against `main`. Keep the change small and say why it is needed.

## Voice

- Prefer "Bitcoin with the BLAKE2b algorithm" and "money only."
- This hardfork is not BIP-110. BIP-110 was a softfork.
- Say "node operators," not "node users."
- Say "hardfork block height" when you mean chain height. Keep the RPC field name `hardfork.height` in comments.
- Do not invent a mainnet hardfork block height or headline. If it is not published, say so.
- Hardware after the hardfork: "BLAKE2b and BLAKE2b-sia miners."
- Proof of work: [Knots PR 359](https://github.com/bitcoinknots/bitcoin/pull/359). Reduced data: [PR 358](https://github.com/bitcoinknots/bitcoin/pull/358). Opt-in unified sighash: [PR 357](https://github.com/bitcoinknots/bitcoin/pull/357).
- Do not use em dashes or en dashes.
- Copyright line: © Bitcoin Project from 2009 to 2026.

## Do not add

- Hosting, deploy, or operator branding.
- Third-party pool marketing.
- A second copy of the site for a preview host. Preview chrome is applied at deploy time, not in this tree.

## Files

Edit the HTML in place, and keep `SITE-COPY.txt` in sync when you change shared wording. Bump `style.css?v=` or `site.js?v=` only when those files change.
