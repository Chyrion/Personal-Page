import { ChangeEvent, useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
} from '@mui/material';
import { useImmer } from 'use-immer';

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

type ChangeFunction = (e: ChangeEvent) => any;

interface OptionBoxProps {
  machineOption: MachineOption;
  onChange: ChangeFunction;
}

const machines: Array<Machine> = [
  { id: 0, name: 'aquaBlast 915', price: 15839 },
  { id: 1, name: 'aquaBlast 1215', price: 19604 },
  { id: 2, name: 'aquaBlast 1515', price: 26562 },
  { id: 3, name: 'aquaBlast 1215 Wheelblast', price: 23222 },
];

const optionList: Array<MachineOption> = [
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

const OptionBox = ({ machineOption, onChange }: OptionBoxProps) => {
  return (
    <div className='configurator-option-box'>
      <h3>{machineOption.name}</h3>
      <p>Price: {machineOption.price}</p>
      <Switch id={machineOption.id.toString()} onChange={onChange} />
    </div>
  );
};

const Configurator = () => {
  const [price, setPrice] = useState(1.2);
  const [machine, setMachine] = useState(machines[0]);
  const [options, updateOptions] = useImmer(optionList);

  const handleMachine = (event: SelectChangeEvent) => {
    setMachine(machines[parseInt(event.target.value)]);
  };

  const handleOption = (event: ChangeEvent) => {
    let optionHandled = options[parseInt(event.target.id)];

    updateOptions((opt) => {
      const _opt = opt.find((a) => a.id === optionHandled.id);
      if (_opt !== undefined) _opt.selected = !_opt.selected;
    });

    console.log(options);
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
      <h3>Price: {machine.price}</h3>
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
        <div className='configurator-options'>
          {options.map((_option) => (
            <OptionBox machineOption={_option} onChange={handleOption} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
