import type { Photo } from 'react-photo-album';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function imageLink(
  path: string,
  width: number,
  height: number,
  size: number,
  extension: string
) {
  return `/galleries/children/${path}.${width}x${height}.${size}w.${extension}`;
}

const childrenPhotos = [
  {
    "src": "IMG_0116.jpg",
    "alt": ""
  },
  {
    "src": "IMG_0637-1.jpg",
    "alt": ""
  },
  {
    "src": "IMG_0899.jpg",
    "alt": ""
  },
  {
    "src": "IMG_1057.jpg",
    "alt": ""
  },
  {
    "src": "IMG_1708.jpg",
    "alt": ""
  },
  {
    "src": "IMG_1760.jpg",
    "alt": ""
  },
  {
    "src": "IMG_1818.jpg",
    "alt": ""
  },
  {
    "src": "IMG_1929.jpg",
    "alt": ""
  },
  {
    "src": "IMG_2218.jpg",
    "alt": ""
  },
  {
    "src": "IMG_2455.jpg",
    "alt": ""
  },
  {
    "src": "IMG_2717.jpg",
    "alt": ""
  },
  {
    "src": "IMG_3612.jpg",
    "alt": ""
  },
  {
    "src": "IMG_4897.jpg",
    "alt": ""
  },
  {
    "src": "IMG_5087.jpg",
    "alt": ""
  },
  {
    "src": "IMG_5446.jpg",
    "alt": ""
  },
  {
    "src": "IMG_5894.jpg",
    "alt": ""
  },
  {
    "src": "IMG_5938.jpg",
    "alt": ""
  },
  {
    "src": "IMG_6973.jpg",
    "alt": ""
  },
  {
    "src": "IMG_7460.jpg",
    "alt": ""
  },
  {
    "src": "IMG_7604-1.jpg",
    "alt": ""
  },
  {
    "src": "IMG_8517-1.jpg",
    "alt": ""
  },
  {
    "src": "IMG_9870.jpg",
    "alt": ""
  },
  {
    "src": "IMG_9954.jpg",
    "alt": ""
  },
  {
    "src": "IMG_9959.jpg",
    "alt": ""
  },
  {
    "src": "IMG_9962.jpg",
    "alt": ""
  },
  {
    "src": "mason_1.jpg",
    "alt": ""
  }
].map(({ src, ...rest }) => {
  const matcher = src.match(/^(.*)\.(\d+)x(\d+)\.(.*)$/)!;

  const path = matcher[1] || '';
  const width = Number.parseInt(matcher[2] || '0', 10);
  const height = Number.parseInt(matcher[3] || '0', 10);
  const extension = matcher[4] || '';

  return !path
    ? ''
    : ({
        href: imageLink(path, width, height, width, extension),
        width,
        height,
        srcSet: breakpoints.map((breakpoint) => ({
          src: imageLink(path, width, height, breakpoint, extension),
          width: breakpoint,
          height: Math.round((height / width) * breakpoint),
        })),
        ...rest,
      } as Photo);
});

export default childrenPhotos;
