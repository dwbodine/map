import type { Photo } from 'react-photo-album';

const breakpoints = [960, 640, 384, 256];

function imageLink(
  path: string,
  width: number,
  height: number,
  size: number,
  extension: string
) {
  return `/galleries/children/${path}.${width}x${height}.${size}w.${extension}`;
}

const childrenPhotos: Photo[] = [
  {
    src: 'IMG_0116.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_1057.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_1760.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_1929.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_2218.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_2717.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_3612.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_4897.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_5087.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_5446.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_5894.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_6973.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_7460.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_8517-1.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_9870.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_9954.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_9959.960x640.jpg',
    alt: '',
  },
  {
    src: 'IMG_9962.960x640.jpg',
    alt: '',
  },
  {
    src: 'mason_1.960x640.jpg',
    alt: '',
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

export default childrenPhotos;
