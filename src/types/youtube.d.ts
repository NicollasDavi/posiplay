// youtube.d.ts
declare global {
  interface Window {
    YT: any; // Declara a API global do YouTube (tipo any para evitar erro)
  }
}

export {};
