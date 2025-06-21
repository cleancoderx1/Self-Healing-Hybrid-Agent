import axios from 'axios';
import config from '../config.json';

export async function notify(message) {
  await axios.post(config.slackWebhookUrl, { text: message });
}
