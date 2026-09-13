// // // import React, { useEffect } from 'react'

// // // const Cursor = () => {
// // //   useEffect(()=>{
// // //     window.addEventListener("mousemove",(e)=>{
// // // document.querySelector(".cursor").style.transform=`translate3d(${e.clientX-450}px, ${e.clientY-450}px, 0px)`
// // //     })
// // //  },[] )
// // //   return (
// // //     <div className='cursor'>
      
// // //     </div>
// // //   )
// // // }

// // // export default Cursor
// // ```jsx
// // import React, { useEffect } from "react";

// // const Cursor = () => {
// //   useEffect(() => {
// //     const cursor = document.querySelector(".cursor");

// //     if (!cursor) return;

// //     let targetX = 0;
// //     let targetY = 0;

// //     let currentX = 0;
// //     let currentY = 0;

// //     let hasStarted = false;

// //     const EASE = 0.12;

// //     const handleMouseMove = (e) => {
// //       targetX = e.clientX;
// //       targetY = e.clientY;

// //       // First movement: directly place cursor
// //       // instead of coming from 0,0
// //       if (!hasStarted) {
// //         currentX = targetX;
// //         currentY = targetY;
// //         hasStarted = true;
// //       }
// //     };

// //     window.addEventListener("mousemove", handleMouseMove);

// //     const tick = () => {
// //       currentX += (targetX - currentX) * EASE;
// //       currentY += (targetY - currentY) * EASE;

// //       cursor.style.transform = `
// //         translate3d(
// //           ${currentX - 450}px,
// //           ${currentY - 450}px,
// //           0
// //         )
// //       `;

// //       requestAnimationFrame(tick);
// //     };

// //     const animationId = requestAnimationFrame(tick);

// //     return () => {
// //       window.removeEventListener("mousemove", handleMouseMove);
// //       cancelAnimationFrame(animationId);
// //     };
// //   }, []);

// //   return <div className="cursor"></div>;
// // };

// // export default Cursor;


// import React, { useEffect } from "react";

// const Cursor = () => {
//   useEffect(() => {
//     const cursor = document.querySelector(".cursor");

//     if (!cursor) return;

//     let targetX = 0;
//     let targetY = 0;

//     let currentX = 0;
//     let currentY = 0;

//     let started = false;

//     const EASE = 0.12;

//     const handleMouseMove = (e) => {
//       targetX = e.clientX;
//       targetY = e.clientY;

//       if (!started) {
//         currentX = targetX;
//         currentY = targetY;
//         started = true;
//       }
//     };

//     const handleMouseEnter = () => {
//       cursor.style.opacity = "1";
//     };

//     const handleMouseLeave = () => {
//       cursor.style.opacity = "0";
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     document.body.addEventListener("mouseenter", handleMouseEnter);
//     document.body.addEventListener("mouseleave", handleMouseLeave);

//     const tick = () => {
//       currentX += (targetX - currentX) * EASE;
//       currentY += (targetY - currentY) * EASE;

//       // IMPORTANT:
//       // Don't subtract 450 here.
//       // CSS margin-left/top already does that.
//       cursor.style.transform = `
//         translate3d(${currentX}px, ${currentY}px, 0)
//       `;

//       requestAnimationFrame(tick);
//     };

//     const animationId = requestAnimationFrame(tick);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       document.body.removeEventListener("mouseenter", handleMouseEnter);
//       document.body.removeEventListener("mouseleave", handleMouseLeave);
//       cancelAnimationFrame(animationId);
//     };
//   }, []);

//   return <div className="cursor"></div>;
// };

// export default Cursor;
import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    if (!cursor) return;

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    let started = false;

    const EASE = 0.12;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!started) {
        currentX = targetX;
        currentY = targetY;
        started = true;
      }
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove);

    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    const tick = () => {
      currentX += (targetX - currentX) * EASE;
      currentY += (targetY - currentY) * EASE;

  
      cursor.style.transform = `
        translate3d(${currentX}px, ${currentY}px, 0)
      `;

      requestAnimationFrame(tick);
    };

    const animationId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;