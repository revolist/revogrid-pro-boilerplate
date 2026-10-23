import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

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
    const installArgs = ['install', '--frozen-lockfile'];
    if (!existsSync(`${starter}/pnpm-workspace.yaml`)) {
      installArgs.push('--ignore-workspace');
    }
    run(starter, installArgs);
  }
  run(starter, ['build']);
}
