/// <reference types="react-scripts" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_METAR_KEY: string;
    }
  }
}

export {};
