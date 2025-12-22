export function WhatsAppFloat({
  phone = "57XXXXXXXXXX",
  message = "Hola, vengo desde la web y quiero una cotización.",
  imageSrc = "/brand/whatsapp.png",
}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chatear por WhatsApp"
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        zIndex: 9999,
        width: 80,
        height: 80,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        boxShadow: "0 14px 34px rgba(0,0,0,0.32)",
      }}
    >
      <img
        src={imageSrc}
        alt="WhatsApp"
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          display: "block",
        }}
      />
    </a>
  );
}
