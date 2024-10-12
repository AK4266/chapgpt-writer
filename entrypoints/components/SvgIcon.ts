import GenerateIcon from '@/assets/Frame.svg';

export const SvgIcon = () => {

    const div = document.createElement('div');

    const img = document.createElement('img');
    img.src = GenerateIcon;
    img.alt = 'Generate Icon';


    div.className = 'absolute text-white border-none p-2 cursor-pointer z-10 rounded-md generate-button';
    img.className = 'w-15 h-15';


    div.appendChild(img);

    div.addEventListener('click', (e) => {
        e.stopPropagation();
        chrome.runtime.sendMessage({ action: "open_dialog_box" });
    });

    return div;
};

