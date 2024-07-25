import { FunctionComponent, useCallback } from "react";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import CALLOUTBOX from "../components/CALLOUTBOX";
import FOOTER from "../components/FOOTER";

const HomePage: FunctionComponent = () => {
  const onLogoContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='nAVBARContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full relative bg-backgroundcolor overflow-hidden flex flex-col items-start justify-start pt-[51px] px-0 pb-0 box-border gap-[81px] leading-[normal] tracking-[normal] mq450:gap-[20px] mq1000:gap-[40px]">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-16 box-border gap-[82px] max-w-full mq450:gap-[20px] mq450:pb-[27px] mq450:box-border mq1000:gap-[41px] mq1000:pb-[42px] mq1000:box-border">
        <FrameComponent7 />
        <FrameComponent6 />
      </section>
      <FrameComponent5 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-7 box-border max-w-full">
        <div className="w-[1320px] overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-center gap-[24px] max-w-full">
          <FrameComponent4 />
          <FrameComponent3 />
          <FrameComponent2 />
          <FrameComponent1 />
        </div>
      </section>
      <FrameComponent />
      <CALLOUTBOX />
      <FOOTER
        vector="/vector.svg"
        infoIcons="/vector-1.svg"
        vector1="/vector-2.svg"
        vector2="/vector-3.svg"
        mailIcon="/mail-icon.svg"
        group="/group-1@2x.png"
        onLogoContainerClick={onLogoContainerClick}
      />
    </div>
  );
};

export default HomePage;
