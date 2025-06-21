import { exec } from 'child_process';
import os from 'os';

export async function checkDisk(thresholdPercent) {
  // Simplified: on Linux/macOS use `df`, on Windows use `wmic`
  // Return false if any partition > thresholdPercent
  return true; // stub
}

export async function clearTemp() {
  const dir = os.tmpdir();
  // Recursively delete old files
}
