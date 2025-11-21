import type { Photo } from 'react-photo-album';

const breakpoints = [960, 640, 384, 256];

function imageLink(
  path: string,
  width: number,
  height: number,
  size: number,
  extension: string
) {
  return `/galleries/special/${path}.${width}x${height}.${size}w.${extension}`;
}

const specialPhotos: Photo[] = [
  {
    src: 'IMG_1107.960x640.jpg',
  },
  {
    src: 'IMG_4828.960x640.jpg',
  },
  {
    src: 'IMG_8157.960x640.jpg',
  },
  {
    src: 'IMG_8212.960x640.jpg',
  },
].map(({ src, ...rest }) => {
  const matcher = src.match(/^(.*)\.(\d+)x(\d+)\.(.*)$/)!;

  const path = matcher[1] || '';
  const width = Number.parseInt(matcher[2] || '0', 10);
  const height = Number.parseInt(matcher[3] || '0', 10);
  const extension = matcher[4] || '';

  return {
    key: path,
    src: imageLink(path, width, height, width, extension),
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => ({
      src: imageLink(path, width, height, breakpoint, extension),
      width: breakpoint,
      height: Math.round((height / width) * breakpoint),
    })),
    ...rest,
  } as Photo;
});

export default specialPhotos;
