/**
 * Title: Write a program using JavaScript on Modal
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 20, September 2023
 */

// components/Modal.js
import { useEffect, useRef } from "react";
import OutsideClickClose from "./OutsideClickClose";
import Cross from "../icons/Cross";

function Modal({ isOpen, onClose, children, title }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black/70">
      <OutsideClickClose onOutsideClick={onClose}>
        <div
          ref={modalRef}
          className="relative w-auto max-w-md mx-auto my-6 md:px-0 px-4"
        >
          {/* Modal content */}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/* Header */}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <button className="h-6 w-6 text-2xl outline-none focus:outline-none absolute top-0 right-2 text-white bg-red-500 rounded-t-full flex justify-center items-center rotate-180">
                  <Cross className="h-5 w-5" />
                </button>
              </button>
            </div>
            {/* Body */}
            <div className="relative p-6 flex-auto">{children}</div>
          </div>
        </div>
      </OutsideClickClose>
    </div>
  );
}

export default Modal;
