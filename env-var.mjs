#!/usr/bin/env node

import {spawnSync} from 'node:child_process';

const interpolatedArgv = process.argv.slice(2).map(
  arg => arg.replace(/\{\{([^{}]+)\}\}/g, (_all, group1) => process.env[group1])
);
const [command, ...args] = interpolatedArgv;

const {status, error} = spawnSync(command, args, {stdio: 'inherit', shell: true});

if (error) {
  throw error;
}

process.exit(status);
