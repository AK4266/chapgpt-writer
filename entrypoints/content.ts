import { addIcon } from "./components/observer";
import "@/entrypoints/popup/style.css"
import { sendMessage } from './components/sendMessage';

export default defineContentScript({
  matches: ['*://*.google.com/*', 'https://www.linkedin.com/*'],
  main() {
    addIcon();

    sendMessage()
  },
});
