import React, { useState } from 'react';
import ArrowIcon from "@/assets/Vector.svg";
import RegenerateIcon from "@/assets/Regenerate.svg";
import DownArrow from "@/assets/Downarrow.svg";

type ModalProps = {
    onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    const [response, setResponse] = useState('');
    const [generateClicked, setGenerateClicked] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [bubbleText, setBubbleText] = useState(''); 

    const handleGenerate = () => {
        if (inputValue.trim() !== '') {
            setBubbleText(inputValue); 
            setInputValue(''); 
            setResponse('Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask.');
            setGenerateClicked(true);
        }
    };

    const handleInsert = () => {
        const messageInput = document.querySelector('.msg-form__msg-content-container--scrollable [contenteditable="true"]');

        if (messageInput) {
            const inputElement = messageInput as HTMLElement;
            const currentText = inputElement.innerText;
            inputElement.innerText = currentText + response;

            inputElement.focus();
        }

        onClose();
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-4 rounded shadow-lg w-[870px]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col gap-2">
                    {generateClicked && bubbleText && (
                        <div className="flex justify-end">
                            <div className="bg-gray-200 text-left p-2 rounded-lg w-1/2">
                                {bubbleText} 
                            </div>
                        </div>
                    )}
                    {generateClicked && response && (
                        <div className="flex justify-start">
                            <div className="bg-blue-100 text-left p-2 rounded-lg w-1/2">
                                {response}
                            </div>
                        </div>
                    )}
                </div>

                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border p-2 w-full mt-4"
                    placeholder="Your prompt"
                />
                <div className='flex justify-end gap-3'>
                    {generateClicked && (
                        <button
                            className="!border-solid !border-gray-400  text-gray-600 px-1 py-2 mt-2 !rounded w-40 hover:bg-gray-200 transition duration-200"
                            onClick={handleInsert}
                        >
                            <div className='flex flex-row justify-center items-center gap-2.5'>
                                <div className='w-6'>
                                    <img src={DownArrow} alt='down-arrow-icon' />
                                </div>
                                <div>Insert</div>
                            </div>
                        </button>
                    )}

                    <button
                        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded w-48"
                        onClick={handleGenerate}
                    >
                        <div className='flex flex-row justify-center items-center gap-2.5'>
                            <div className='w-6'>
                                <img src={generateClicked ? RegenerateIcon : ArrowIcon} alt='arrow-icon' />
                            </div>
                            <div>{generateClicked ? "Regenerate" : "Generate"}</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
