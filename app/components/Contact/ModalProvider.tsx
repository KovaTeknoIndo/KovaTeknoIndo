'use client';

import { useEffect, useState } from "react";
import ContactModal from "./ModalChat";

export default function ModalProvider() {
  const [showModal, setShowModal] = useState(false);
  const isProd = process.env.NODE_ENV === "production";
  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      {showModal && isProd && (
        <ContactModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
}
