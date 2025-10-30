import AuthModal from "./Modal";
import LoginModal from "./ModalLogin";

export default function ModalWrapper({ isOpen, onClose, modalType, setModalType }) {
  if (modalType === "register") {
    return (
      <AuthModal
        isOpen={isOpen}
        onClose={onClose}
        setModalType={setModalType}
      />
    );
  }

  return (
    <LoginModal
      isOpen={isOpen}
      onClose={onClose}
      setModalType={setModalType}
    />
  );
}
