# NX Vitest Bench Repro

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Installation

Run `npm install` to install all the dependencies.

## Reproduction

Running `npm run bench` (which runs NX Vitest executor) does not exit after running the Vitest benchmark.

Running regular tests with Vitest using `npm run test` command exits successfully.

Also running `vitest bench --run` directly exits successfully.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
