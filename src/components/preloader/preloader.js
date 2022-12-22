import { useEffect, useState } from "react";
import { Poly, PreloaderContainer, Lines } from "./preloaderElement";

const Preloader = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1500);
  }, []);
  return (
    <>
      {show && (
        <PreloaderContainer>
          <Lines viewBox="-3 -4 39 39">
            <Poly points={"16,0,32,32,0,32"} />
          </Lines>
        </PreloaderContainer>
      )}
    </>
  );
};

export default Preloader;
