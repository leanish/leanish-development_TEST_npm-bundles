# Validation

Each record below states how far its evidence goes:

- **seed/probe verified**: the seed, or a local probe of it, was checked; no tool ran.
- **real tool run verified**: a real secure-it or bump-it run produced it.

Branch heads are this clone's remote-tracking refs, fetched on 2026-10-12. Only the
branches' contents are evidence here: PR numbers, tool versions, gate and cooldown
results and CI aren't recorded for these runs.

| Record | Date | Evidence state | Tool version | PRs / heads |
|---|---|---|---|---|
| Seed | 2026-10-10 | seed committed; no probe results recorded | none | e7bb09c |
| secure-it held draft (young carrier) | 2026-10-11 | real tool run verified (branch contents only) | not recorded | `secure-it/2026-10-11-security-cooldown`, change 523874e, head 4ba1cf3 |
| bump-it routine and Action majors | 2026-10-11 to 2026-10-12 | real tool run verified (branch contents only) | not recorded | `bump-it/2026-10-11-routine` (head 36f80aa) and two Action major branches |

## Seed — 2026-10-10

- e7bb09c declares aws-cdk-lib 2.272.0 and constructs 10.5.0. The lock records
  brace-expansion 5.0.9 inside the CDK archive with inBundle=true.
- README.md gives the npm 11.20 command that generated the lock. No `npm ci`,
  `npm test` or tool-probe result is recorded for the seed.

## secure-it held draft — 2026-10-11

- Branch `secure-it/2026-10-11-security-cooldown`; its name marks secure-it's held
  security-cooldown unit. Its change, 523874e (07:23 +03:00), moves aws-cdk-lib 2.272.0 -> 2.273.0 in
  `package.json` and the lock, and the bundled
  `node_modules/aws-cdk-lib/node_modules/brace-expansion` 5.0.9 -> 5.0.12.
- constructs stays 10.5.0. There is no brace-expansion declaration, override or floor.
  This matches the planned move in "A: bundled vulnerable copy" and "A: young carrier".
  The PR's draft state, verification, comparison and cooldown results aren't recorded.
- Later commits only merge main (head 4ba1cf3, 2026-10-11).
- Next: after 2026-10-15T20:05:24.284Z, secure-it's review should retire this draft,
  and a later run should open a fresh PR ("A: aged carrier").

## bump-it routine and Action majors — 2026-10-11 to 2026-10-12

- `bump-it/2026-10-11-routine` (head 36f80aa, 2026-10-12): checkout and setup-node
  pins to v4.4.0, constructs 10.5.0 -> 10.8.1 and the gate pin v0.4.0 -> v0.4.2.
- aws-cdk-lib stays 2.272.0, as "A: young carrier" expects while 2.273.0 is younger
  than seven days.
- Separate major branches: `bump-it/2026-10-11-actions-checkout-major` and
  `bump-it/2026-10-11-actions-setup-node-major`.
