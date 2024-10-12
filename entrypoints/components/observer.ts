import { SvgIcon } from "./SvgIcon";

export function addIcon() {
    const observer = new MutationObserver(() => {
        Array.from(document.querySelectorAll(".msg-form__msg-content-container--scrollable"))
            .forEach((messageBox: Element) => {

                messageBox.addEventListener('click', () => {
                    if (!messageBox.querySelector('.generate-button')) {
                        const button = SvgIcon();

                        button.style.bottom = '5px';
                        button.style.right = '5px';

                        (messageBox as HTMLElement).style.position = 'relative';

                        messageBox.appendChild(button);
                    }
                });

                document.addEventListener('click', (event) => {
                    const target = event.target as HTMLElement;
                    if (!messageBox.contains(target)) {
                        const existingButton = messageBox.querySelector('.generate-button');
                        if (existingButton) {
                            existingButton.remove();
                        }
                    }
                });
            });
    });

    observer.observe(document.body, { subtree: true, childList: true });
}