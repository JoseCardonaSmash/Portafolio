
import React, { useEffect, useRef, useState } from "react";

export default function ContactWhatsapp() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollTop = useRef(0); // Mantiene la posición del scroll entre renders

  const handleScroll = () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    // Compara la posición actual del scroll con la última posición conocida
    if (currentScroll > lastScrollTop.current) {
      // Si el scroll actual es mayor, se está desplazando hacia abajo
      setIsVisible(false);
    } else {
      // Si el scroll actual es menor o igual, se está desplazando hacia arriba
      setIsVisible(true);
    }

    // Actualiza la referencia de lastScrollTop con la posición del scroll actual
    lastScrollTop.current = currentScroll;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Ejecutar handleScroll para el estado inicial
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // El arreglo vacío asegura que useEffect solo se ejecute al montar y desmontar el componente

  const handleWhatsAppClick = () => {
    const phoneNumber = "3104426317";
    const message = "¡Hola! Quisiera hacer una consulta sobre alguno de tus servicios.";
    const url =
      "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message);
    window.open(url, "_blank");
  };

  return (
    <>
      {isVisible && (
        <button
          id="scrollButton"
          className="whatsappButton fixed z-30 border-0 border-transparent rounded-full transition-all flex items-center justify-center w-16 h-16 cursor-pointer btn-show p-4 right-7 bottom-5"
          onClick={handleWhatsAppClick}
        >
          <svg
            className="text-white text-8xl icon icon-tabler icon-tabler-brand-whatsapp"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none"></path>
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
          </svg>
        </button>
      )}
    </>
  );
};
