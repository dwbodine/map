import type { Photo } from 'react-photo-album';

const breakpoints = [960, 640, 384, 256];

function imageLink(
  path: string,
  width: number,
  height: number,
  size: number,
  extension: string
) {
  return `/galleries/weddings/${path}.${width}x${height}.${size}w.${extension}`;
}

const weddingPhotos: Photo[] = [
  {
    src: 'IMG_0605.960x640.jpg',
  },
  {
    src: 'IMG_0835.960x640.jpg',
  },
  {
    src: 'IMG_1498.960x640.jpg',
  },
  {
    src: 'IMG_1599.960x640.jpg',
  },
  {
    src: 'IMG_1689.960x640.jpg',
  },
  {
    src: 'IMG_3579-1.960x640.jpg',
  },
  {
    src: 'IMG_3739.960x640.jpg',
  },
  {
    src: 'IMG_3953.960x640.jpg',
  },
  {
    src: 'IMG_6281.960x640.jpg',
  },
  {
    src: 'IMG_7303-1.960x640.jpg',
  },
  {
    src: 'IMG_8171.960x640.jpg',
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

export default weddingPhotos;
