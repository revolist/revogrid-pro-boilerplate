import { spawnSync } from 'node:child_process';

const starters = [
  'vanilla-ts/tree',
  'vanilla-ts/pivot',
  'react/tree',
  'react/pivot',
  'vue/tree',
  'vue/pivot',
  'angular/tree',
  'angular/pivot',
  'svelte/tree',
  'svelte/pivot',
];

const skipInstall = process.argv.includes('--skip-install');

function run(starter, args) {
  const result = spawnSync('pnpm', ['--dir', starter, ...args], {
    stdio: 'inherit',
    shell: false,
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

for (const starter of starters) {
  console.log(`\nVerifying ${starter}`);
  if (!skipInstall) {
    run(starter, ['install', '--frozen-lockfile', '--ignore-workspace']);
  }
  run(starter, ['build']);
}
