import { Machine, MachineOption } from './ConfiguratorTypes';

const createMachineFile = (machine: Machine, options: Array<MachineOption>) => {
  const selOptionIds = options.filter((o) => o.selected).map((o) => o.id);
  const machineDetails = JSON.stringify(
    {
      machine: machine.id,
      options: selOptionIds,
    },
    null,
    2
  );
  const machineFile = new File([machineDetails], 'machine.json', {
    type: 'application/json',
  });
  return machineFile;
};

export { createMachineFile };
