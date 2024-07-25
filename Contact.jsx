import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent9 from "../components/FrameComponent9";
import InfoContact from "../components/InfoContact";
import FOOTER from "../components/FOOTER";

const Contact: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeAboutLinkClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onNavTextContainerClick = useCallback(() => {
    navigate("/faqs");
  }, [navigate]);

  const onNavTextContainerClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-backgroundcolor overflow-hidden flex flex-col items-start justify-start gap-[122px] leading-[normal] tracking-[normal] mq450:gap-[30px] mq975:gap-[61px]">
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <FrameComponent9
          aboutUs="Contact Us"
          homeIcon="/vector3.svg"
          aboutUs1="Contact Us"
          group="/group3@2x.png"
          riarrowDropDownLine="/riarrowdropdownline.svg"
          riarrowDropDownLine1="/riarrowdropdownline.svg"
          riarrowDropDownLine2="/riarrowdropdownline.svg"
          riarrowDropDownLine3="/riarrowdropdownline.svg"
          riarrowDropDownLine4="/riarrowdropdownline.svg"
          riarrowDropDownLine5="/riarrowdropdownline.svg"
          basilsearchSolid="/basilsearchsolid3.svg"
          bgPosition="relative"
          bgTop="unset"
          bgLeft="unset"
          bgWidth="unset"
          bgAlignSelf="stretch"
          onInnerSubMenuClick={onHomeAboutLinkClick}
          onNavTextContainerClick1={onNavTextContainerClick}
          onNavTextContainerClick2={onNavTextContainerClick1}
        />
        <InfoContact />
      </main>
      <FOOTER
        vector="/vector.svg"
        infoIcons="/vector-33.svg"
        vector1="/vector-42.svg"
        vector2="/vector-51.svg"
        mailIcon="/mail-icon.svg"
        group="/group-13@2x.png"
        onLogoContainerClick={onHomeAboutLinkClick}
      />
    </div>
  );
};

export default Contact;