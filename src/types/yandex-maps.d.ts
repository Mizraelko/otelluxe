declare global {
  interface Window {
    ymaps: {
      ready: (callback: () => void) => void;
      Map: new (element: string, state: any) => any;
      Placemark: new (coordinates: [number, number], properties: any, options: any) => any;
    };
  }
}

export {};
