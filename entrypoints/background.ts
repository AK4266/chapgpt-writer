export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "open_dialog_box") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs[0].id) {
          chrome.tabs.sendMessage(tabs[0].id, { action: "open_dialog_box" });
        }
      });
    }
  });
});
