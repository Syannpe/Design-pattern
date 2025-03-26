interface HardDisk {
  read(): string;
  save(data: string): void;
}

export {HardDisk}