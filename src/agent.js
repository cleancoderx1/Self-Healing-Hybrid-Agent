```js
import { checkDisk, clearTemp } from './healers/diskSpace.js';
import { watchProcs, restartProc } from './healers/procWatcher.js';
import { notify } from './cloud/notifier.js';
import config from './config.json';

async function mainLoop() {
  // Disk space healer
  const diskOK = await checkDisk(config.diskThreshold);
  if (!diskOK) {
    await clearTemp();
    await notify('Disk cleaned due to high usage');
  }

  // Process watcher healer
  for (const proc of config.processes) {
    const running = await watchProcs(proc.name);
    if (!running) {
      await restartProc(proc.name);
      await notify(`Process ${proc.name} restarted`);
    }
  }
}

// Run once on start, then every N seconds
mainLoop();
setInterval(mainLoop, config.intervalMs);
