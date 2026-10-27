# Node library

A small TypeScript ES module library.

## Agent workflow

1. Install dependencies with `npm ci`.
2. Run the tests once with `npm test`; run the CI gate with `npm run test:ci`.
3. Put tests beside source files in `src/` and name them `*.test.ts`.
4. Add or update a test for every code change.
5. The required `test` check fails when it finds zero tests.
6. A person reviews and merges every pull request.

Run `npm run build` to compile the library to `dist/`.
