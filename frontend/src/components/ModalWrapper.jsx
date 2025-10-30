import { useState } from "react";
import ModalLogin from "./ModalLogin"; // modal de login
import Modal from "./Modal";           // modal de cadastro

export default function ModalWrapper({ isOpen, onClose }) {
  const [modalType, setModalType] = useState("login"); // controla o tipo do modal

  if (!isOpen) return null;

  return (
    <>
      {modalType === "login" && (
        <ModalLogin
          isOpen={isOpen}
          onClose={onClose}
          setModalType={setModalType} // usado para alternar para cadastro
        />
      )}

      {modalType === "register" && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          setModalType={setModalType} // usado para alternar de volta para login
        />
      )}
    </>
  );
}