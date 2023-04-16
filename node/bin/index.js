#! /usr/bin/env node

import chalk from 'chalk';
import { yargsInit } from './helpers.js';
import { options } from './options.js';
import path from 'path';

const usage = chalk.magenta(
  '\nUsage: img2asc -f <path to image>  -w <width> -l <height>\n'
);

const yargs = yargsInit({ options, usage, help: true });
const { argv } = yargs;
