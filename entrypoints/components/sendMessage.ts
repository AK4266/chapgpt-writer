import { createElement } from "react";
import { createRoot } from "react-dom/client";
import Modal from "./Modal";

export const sendMessage = () => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === 'open_dialog_box') {
            // Find LinkedIn's main content container where you want to render the modal
            const linkedInContainer = document.querySelector(".application-outlet");

            if (linkedInContainer) {
                // Create a modal container inside LinkedIn's content area
                const modalContainer = document.createElement('div');
                linkedInContainer.appendChild(modalContainer);

                const root = createRoot(modalContainer);
                root.render(createElement(Modal, { onClose: () => modalContainer.remove() }));

                console.log("Modal rendered inside LinkedIn container");
            } else {
                console.error("Could not find the LinkedIn container to append the modal");
            }
        }
    });
}