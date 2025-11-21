import type { Photo } from 'react-photo-album';

const breakpoints = [960, 640, 384, 256];

function imageLink(
  path: string,
  width: number,
  height: number,
  size: number,
  extension: string
) {
  return `/galleries/family/${path}.${width}x${height}.${size}w.${extension}`;
}

const familyPhotos: Photo[] = [
  {
    src: '8.960x640.jpg',
  },
  {
    src: 'canvas.960x640.jpg',
  },
  {
    src: 'IMG_0945-1.960x640.jpg',
  },
  {
    src: 'IMG_1240.960x640.jpg',
  },
  {
    src: 'IMG_1836.960x640.jpg',
  },
  {
    src: 'IMG_2070.960x640.jpg',
  },
  {
    src: 'IMG_8199.960x640.jpg',
  },
  {
    src: 'IMG_8217.960x640.jpg',
  },
  {
    src: 'IMG_8249-F.960x640.jpg',
  },
  {
    src: 'IMG_9268.960x640.jpg',
  },
  {
    src: 'IMG_9299.960x640.jpg',
  },
  {
    src: 'IMG_9500.960x640.jpg',
  },
  {
    src: 'IMG_9603-1.960x640.jpg',
  },
  {
    src: 'IMG_9758.960x640.jpg',
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

export default familyPhotos;
