'use client';

import { useEffect, useState } from "react";
import ContactModal from "./ModalChat";

export default function ModalProvider() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      {showModal && (
        <ContactModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
}
