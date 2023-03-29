import sharp from 'sharp';
import _ from 'lodash';
export const twoDimensionalIterate = (arrays, fn = console.log) => {
  for (const array of arrays) {
    for (const value of array) {
      fn(value);
    }
  }
};

export const brightnessMap =
  ' `^",:;Il!i~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$';
export const toBrightnessArr = (rgbArr) => {
  return rgbArr.map((val) => {
    return _.floor(_.sum(val) / 3);
  });
};
export const toAsciiCharacterArr = (brightnessArr) => {
  return brightnessArr.map((val) => {
    const index = _.round((val / 255) * brightnessMap.length);
    return _.repeat(brightnessMap[index], 3);
  });
};

export const openImage = (imagePath) => {
  try {
    const image = sharp(imagePath);
    return image;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const getImageMetadata = async (image) => {
  try {
    const metadata = await image.metadata();
    return metadata;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
export const getImageDataBuffer = async (image) => {
  try {
    const { data } = await image.raw().toBuffer({ resolveWithObject: true });
    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
export const bufferToArray = (buffer) => {
  try {
    return new Uint8ClampedArray(buffer);
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
export const chunkArray = (rgbArray, width) => {
  return _.chunk(_.chunk(rgbArray, 3), width);
};
