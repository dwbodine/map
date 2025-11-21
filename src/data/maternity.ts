import type { Photo } from 'react-photo-album';

const breakpoints = [960, 640, 384, 256];

function imageLink(
  path: string,
  width: number,
  height: number,
  size: number,
  extension: string
) {
  return `/galleries/maternity/${path}.${width}x${height}.${size}w.${extension}`;
}

const maternityPhotos: Photo[] = [
  {
    src: 'IMG_0277-1.960x1440.jpg',
  },
  {
    src: 'IMG_0315.960x1440.jpg',
  },
  {
    src: 'IMG_0375.960x1440.jpg',
  },
  {
    src: 'IMG_1490.960x1438.jpg',
  },
  {
    src: 'IMG_1493.960x1438.jpg',
  },
  {
    src: 'IMG_2633.960x1440.jpg',
  },
  {
    src: 'IMG_2954.960x1440.jpg',
  },
  {
    src: 'IMG_3078.960x1440.jpg',
  },
  {
    src: 'IMG_3121.960x1440.jpg',
  },
  {
    src: 'IMG_3142.960x1440.jpg',
  },
  {
    src: 'IMG_5021.960x1438.jpg',
  },
  {
    src: 'IMG_5204.960x640.jpg',
  },
  {
    src: 'IMG_5211.960x640.jpg',
  },
  {
    src: 'IMG_5247.960x640.jpg',
  },
  {
    src: 'IMG_5250.960x640.jpg',
  },
  {
    src: 'IMG_6149.960x1440.jpg',
  },
  {
    src: 'IMG_6364.960x1440.jpg',
  },
  {
    src: 'IMG_6446.960x1440.jpg',
  },
  {
    src: 'IMG_7739.960x1440.jpg',
  },
  {
    src: 'IMG_7785.960x1440.jpg',
  },
  {
    src: 'IMG_7797.960x1440.jpg',
  },
  {
    src: 'IMG_8504.960x1440.jpg',
  },
  {
    src: 'IMG_8638.960x1440.jpg',
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

export default maternityPhotos;
