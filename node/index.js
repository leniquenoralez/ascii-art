// import sharp from 'sharp';
import _ from 'lodash';
import chalk from 'chalk';
import {
  toAsciiCharacterArr,
  toBrightnessArr,
  openImage,
  getImageDataBuffer,
  chunkArray,
  getImageMetadata,
  bufferToArray,
} from './utils.js';

(async () => {
  const image = openImage('output.jpg');

  const { width } = await getImageMetadata(image);
  const { buffer } = await getImageDataBuffer(image);
  const pixelArray = bufferToArray(buffer);
  const chunked = chunkArray(pixelArray, width);
  const brightnessArr = chunked.map((chunk) => toBrightnessArr(chunk));
  const asciiArr = brightnessArr.map((arr) =>
    toAsciiCharacterArr(arr).join('')
  );

  console.log(asciiArr.join('\n'));
})();
// (96 + 80 + 64) / 3 = 80;
