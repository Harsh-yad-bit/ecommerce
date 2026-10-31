
import React, { useEffect } from "react";
import upperaddress from "../assets/withspecs.png";
import baseaddress from "../assets/hero-person.png";

const Maskimage = () => {
  useEffect(() => {
    const imageCont = document.querySelector(".imagecont");
    const upper = document.querySelector(".upper");

    if (!imageCont || !upper) return;

    const MASK_SIZE = 400;
    const EASE = 0.12;

    let targetX = -200;
    let targetY = -200;

    let currentX = -200;
    let currentY = -200;

    let animationId;

    const handleMouseMove = (e) => {
      const rect = imageCont.getBoundingClientRect();

      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetX = -200;
      targetY = -200;
    };

    const maskTick = () => {
      currentX += (targetX - currentX) * EASE;
      currentY += (targetY - currentY) * EASE;

      const x = currentX - MASK_SIZE / 2;
      const y = currentY - MASK_SIZE / 2;

      upper.style.maskPosition = `${x}px ${y}px`;
      upper.style.webkitMaskPosition = `${x}px ${y}px`;

      animationId = requestAnimationFrame(maskTick);
    };

    imageCont.addEventListener("mousemove", handleMouseMove);
    imageCont.addEventListener("mouseleave", handleMouseLeave);

    animationId = requestAnimationFrame(maskTick);

    return () => {
      imageCont.removeEventListener("mousemove", handleMouseMove);
      imageCont.removeEventListener("mouseleave", handleMouseLeave);

      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="imagecont">
      <img className="base" src={baseaddress} alt="" />
      <img className="upper" src={upperaddress} alt="" />
    </div>
  );
};

export default Maskimage;