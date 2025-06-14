"use client";

interface MapWithNoSSRProps {
  height: string;
}

const MapWithNoSSR = ({ height }: MapWithNoSSRProps) => {
  // URL iframe từ Google Maps Embed API, nhúng địa điểm Thành cổ Vinh
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.885628058594!2d105.6891715!3d18.6716977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139d2f0b0f0b0b1%3A0x9b0b0b0b0b0b0b0b!2sThanh%20co%20Vinh!5e0!3m2!1svi!2s!4v1698765432109";

  return (
    <div style={{ height: height, width: "100%" }}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "0.5rem" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps - Thành cổ Vinh"
      ></iframe>
    </div>
  );
};

export default MapWithNoSSR;