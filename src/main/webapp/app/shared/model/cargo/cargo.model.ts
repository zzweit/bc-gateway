export interface ICargo {
  id?: string;
  name?: string;
  capacity?: number;
}

export const defaultValue: Readonly<ICargo> = {};
