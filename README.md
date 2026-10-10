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

EXPECTED.md defines remediation, inventory and timing acceptance. Run secure-it
and bump-it independently from the same seed. Do not merge a routine CDK update
before exercising the security carrier move.

Gate adoption uses the same supply-chain commit for inventory and comparison;
see EXPECTED.md for the prerelease pin and released v0.3.0 acceptance.
