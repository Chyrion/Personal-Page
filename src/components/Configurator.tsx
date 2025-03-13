import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface Machine {
  id: number;
  name: string;
  price: number;
}

interface MachineOption {
  id: number;
  name: string;
  price: Array<number | null>;
  selected: boolean;
}

const machines: Array<Machine> = [
  { id: 0, name: 'aquaBlast 915', price: 15839 },
  { id: 1, name: 'aquaBlast 1215', price: 19604 },
  { id: 2, name: 'aquaBlast 1515', price: 26562 },
  { id: 3, name: 'aquaBlast 1215 Wheelblast', price: 23222 },
];

const options: Array<MachineOption> = [
  {
    id: 0,
    name: 'Blast gun holder',
    price: [150, 150, 150, 150],
    selected: false,
  },
  {
    id: 1,
    name: 'Boron carbide nozzle upgrade',
    price: [393, 393, 393, 393],
    selected: false,
  },
  {
    id: 2,
    name: 'Pneumatic guillotine opening door',
    price: [6164, 6801, 7828, null],
    selected: false,
  },
];

const Configurator = () => {
  const [price, setPrice] = useState(1.2);
  const [machine, setMachine] = useState(machines[0]);
  const [option, setOption] = useState(options);

  const handleMachine = (event: SelectChangeEvent) => {
    setMachine(machines[parseInt(event.target.value)]);
  };

  return (
    <div
      className='configurator-main'
      style={{
        gridArea: 'cont-mid',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <h1>Configurator</h1>
      <h3>Price: {price}</h3>
      <div className='configurator-config'>
        <FormControl>
          <InputLabel id='machine-select-label'>Machine</InputLabel>
          <Select
            labelId='machine-select-label'
            id='machine-select'
            value={`0`}
            label='Machine'
            onChange={handleMachine}>
            {machines.map((_machine) => (
              <MenuItem value={_machine.id}>{_machine.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Configurator;
