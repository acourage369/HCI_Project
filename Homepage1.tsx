import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent9 from "./FrameComponent9";
import CardService from "./CardService";

export type Homepage1Type = {
  className?: string;
};

const Homepage1: FunctionComponent<Homepage1Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onNavTextContainerClick = useCallback(() => {
    navigate("/faqs");
  }, [navigate]);

  const onNavTextContainerClick1 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='hEROTEXTContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className={`self-stretch h-[1398px] relative max-w-full text-left text-3xl text-coolgray-900 font-heading-5 ${className}`}
    >
      <FrameComponent9
        aboutUs="Services"
        homeIcon="/vector2.svg"
        aboutUs1="Services"
        group="/group2@2x.png"
        riarrowDropDownLine="/riarrowdropdownline.svg"
        riarrowDropDownLine1="/riarrowdropdownline.svg"
        riarrowDropDownLine2="/riarrowdropdownline.svg"
        riarrowDropDownLine3="/riarrowdropdownline.svg"
        riarrowDropDownLine4="/riarrowdropdownline.svg"
        riarrowDropDownLine5="/riarrowdropdownline.svg"
        basilsearchSolid="/basilsearchsolid2.svg"
        onNavTextContainerClick1={onNavTextContainerClick}
        onNavTextContainerClick2={onNavTextContainerClick1}
      />
      <div className="absolute top-[461px] left-[300px] w-[1320px] flex flex-col items-start justify-start max-w-full z-[2]">
        <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[25px] box-border max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px_22px] min-h-[912px] max-w-full">
            <CardService
              img="/img1.svg"
              iPhoneRepair="Smartphone Repair"
              inTheSoonManyPerfectedOfT="Fast smartphone repair services"
              buttonIcons="/vector-12.svg"
            />
            <CardService
              img="/img-1.svg"
              iPhoneRepair="Desktop Repair"
              inTheSoonManyPerfectedOfT="Software troubleshooting solutions"
              buttonIcons="/vector-22.svg"
              propBoxShadow="0px 4px 90px rgba(163, 171, 185, 0.24)"
              propBorderRadius="8px"
              propBackgroundColor="#fff"
              propPadding="0px 0px 24px"
            />
            <CardService
              img="/img-2.svg"
              iPhoneRepair="Laptop Sales"
              inTheSoonManyPerfectedOfT="High-quality laptop options"
              buttonIcons="/vector-32.svg"
              propBoxShadow="unset"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="unset"
            />
            <CardService
              img="/img-3.svg"
              iPhoneRepair="Tablet Repair"
              inTheSoonManyPerfectedOfT="Reliable tablet repair solutions"
              buttonIcons="/vector-41.svg"
              propBoxShadow="unset"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="unset"
            />
            <CardService
              img="/img-4.svg"
              iPhoneRepair="MacBook Repair"
              inTheSoonManyPerfectedOfT="Expert MacBook repair specialists"
              buttonIcons="/vector-5.svg"
              propBoxShadow="unset"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="unset"
            />
            <CardService
              img="/img-5.svg"
              iPhoneRepair="iPhone Repair"
              inTheSoonManyPerfectedOfT="Professional iPhone repair service"
              buttonIcons="/vector-6.svg"
              propBoxShadow="unset"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="unset"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage1;