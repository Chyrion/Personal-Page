type Machine = {
  id: number;
  name: string;
  price: number;
};

type MachineOption = {
  id: number;
  name: string;
  price: Array<number | null>;
  selected: boolean;
};

export type { Machine, MachineOption };
