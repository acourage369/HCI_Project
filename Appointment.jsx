import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent9 from "../components/FrameComponent9";
import CardService4Variant from "../components/CardService4Variant";
import AppointmentCalendarWrapper from "../components/AppointmentCalendarWrapper";
import FOOTER from "../components/FOOTER";

const AppointmentBook: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onNavTextContainerClick = useCallback(() => {
    navigate("/faqs");
  }, [navigate]);

  const onNavTextContainerClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-backgroundcolor overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border gap-[27px] leading-[normal] tracking-[normal]">
      <FrameComponent9
        aboutUs="Appointment"
        homeIcon="/vector4.svg"
        aboutUs1="Appointment"
        group="/group4@2x.png"
        riarrowDropDownLine="/riarrowdropdownline.svg"
        riarrowDropDownLine1="/riarrowdropdownline.svg"
        riarrowDropDownLine2="/riarrowdropdownline.svg"
        riarrowDropDownLine3="/riarrowdropdownline.svg"
        riarrowDropDownLine4="/riarrowdropdownline.svg"
        riarrowDropDownLine5="/riarrowdropdownline.svg"
        basilsearchSolid="/basilsearchsolid4.svg"
        bgPosition="relative"
        bgTop="unset"
        bgLeft="unset"
        bgWidth="unset"
        bgAlignSelf="stretch"
        onHomeTextClick={onHomeTextClick}
        onNavTextContainerClick1={onNavTextContainerClick}
        onNavTextContainerClick2={onNavTextContainerClick1}
      />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-28 pr-[21px] pl-5 box-border max-w-full text-left text-21xl text-black font-heading-5 mq450:pb-[47px] mq450:box-border mq975:pb-[73px] mq975:box-border">
        <div className="w-[1319px] flex flex-col items-end justify-start gap-[142px] max-w-full mq450:gap-[35px] mq725:gap-[18px] mq1000:gap-[71px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[78px] max-w-full mq450:gap-[39px] mq725:gap-[19px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-13xl mq450:leading-[38px] mq725:text-5xl mq725:leading-[29px]">
              Select an Appointment
            </h1>
            <div className="flex flex-row items-center justify-start py-0 pr-20 pl-0 box-border gap-[35px] max-w-full mq450:gap-[17px] mq1000:flex-wrap mq1000:pr-10 mq1000:box-border">
              <CardService4Variant
                icon="/icon.svg"
                repairDevices="Buy Laptop"
              />
              <CardService4Variant
                icon="/icon-111.svg"
                repairDevices="Repair Service"
                propWidth="568px"
                propMinWidth="568px"
                propBorderRadius="5px"
              />
            </div>
          </div>
          <AppointmentCalendarWrapper />
        </div>
      </section>
      <FOOTER
        vector="/vector.svg"
        infoIcons="/vector-34.svg"
        vector1="/vector-43.svg"
        vector2="/vector-52.svg"
        mailIcon="/mail-icon.svg"
        group="/group-14@2x.png"
        onLogoContainerClick={onHomeTextClick}
      />
    </div>
  );
};

export default AppointmentBook;