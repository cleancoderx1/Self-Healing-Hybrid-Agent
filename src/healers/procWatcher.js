import psList from 'ps-list';
import { exec } from 'child_process';

export async function watchProcs(name) {
  const procs = await psList();
  return procs.some(p => p.name === name);
}

export async function restartProc(name) {
  // On Linux: `systemctl restart name`, on Windows: `Restart-Service name`
}
