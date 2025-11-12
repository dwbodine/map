// Extend ImportMeta for Vite-style HMR (import.meta.hot)
interface ImportMeta {
  readonly hot?: {
    accept: (cb?: () => void) => void;
    dispose?: (cb: () => void) => void;
  };
}

// Extend NodeJS.Module for Webpack HMR (module.hot)
declare namespace NodeJS {
  interface Module {
    hot?: {
      accept: (path?: string, callback?: () => void) => void;
      dispose?: (callback: () => void) => void;
    };
  }
}
