# npm bundled-copy security fixture

Public, disposable fixture for supply-chain's npm carrier remediation.

The seeded manifest declares aws-cdk-lib 2.272.0 and its compatible constructs
peer. The npm-generated lock records brace-expansion 5.0.9 inside the CDK
archive with inBundle=true.

Use Node 24+ and npm 11.20. The initial lock was generated with:

```sh
npm install --package-lock-only --ignore-scripts --min-release-age=0 \
  --registry=https://registry.npmjs.org --no-audit --no-fund
```

Check it with:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm test
```

EXPECTED.md defines remediation, inventory and timing acceptance. VALIDATION.md
records the seed and the tool runs. Run secure-it and bump-it independently from
the same seed. Do not merge a routine CDK update before exercising the security
carrier move.

This fixture isn't part of regular tool passes: it runs only in release-candidate
passes that opt fixtures in (`SUPPLY_CHAIN_FIXTURES=1`).
The gate's pin is the `uses:` line in `.github/workflows/supply-chain.yml` (its
history is in git); `fixture-repin` moves it after each stable release. The gate uses
the same commit for inventory and comparison. Tools are deployed separately; record
their release/commit for each trial.
