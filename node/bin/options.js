export const options = {
  f: {
    alias: 'file',
    describe: 'Path to Image File',
    type: 'string',
    demandOption: true,
  },
  w: {
    alias: 'width',
    describe: 'Image width',
    type: 'number',
    demandOption: false,
  },
  h: {
    alias: 'height',
    describe: 'Image height',
    type: 'number',
    demandOption: false,
  },
};
