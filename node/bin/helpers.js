import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const addOptions = (yargs, options) => {
  for (const key in options) {
    yargs.option(key, options[key]);
  }
  return yargs;
};
export const yargsInit = ({ options, usage, help }) => {
  const initYargs = addOptions(yargs(hideBin(process.argv)), options);
  return initYargs.usage(usage).help(help);
};
