import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent10 from "../components/FrameComponent10";
import FOOTER from "../components/FOOTER";

const Faqs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onInnerSubMenuClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onNAVBARContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='hEROTEXTContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavTextContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-backgroundcolor overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent9
        aboutUs="Faq’s"
        homeIcon="/vector5.svg"
        aboutUs1="faq’s"
        group="/group5@2x.png"
        riarrowDropDownLine="/riarrowdropdownline.svg"
        riarrowDropDownLine1="/riarrowdropdownline.svg"
        riarrowDropDownLine2="/riarrowdropdownline.svg"
        riarrowDropDownLine3="/riarrowdropdownline.svg"
        riarrowDropDownLine4="/riarrowdropdownline.svg"
        riarrowDropDownLine5="/riarrowdropdownline.svg"
        basilsearchSolid="/basilsearchsolid5.svg"
        bgPosition="relative"
        bgTop="unset"
        bgLeft="unset"
        bgWidth="unset"
        bgAlignSelf="stretch"
        onInnerSubMenuClick={onInnerSubMenuClick}
        onNAVBARContainerClick={onNAVBARContainerClick}
        onNavTextContainerClick1={onNAVBARContainerClick}
        onNavTextContainerClick2={onNavTextContainerClick}
      />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[177px] box-border max-w-full text-left text-5xl text-coolgray-900 font-heading-5 mq450:pb-[75px] mq450:box-border mq975:pb-[115px] mq975:box-border">
        <div className="w-[1320px] flex flex-col items-start justify-start gap-[140px] max-w-full mq450:gap-[35px] mq725:gap-[17px] mq1000:gap-[70px]">
          <div className="self-stretch flex flex-row items-center justify-start py-[86.2px] px-0 box-border max-w-full mq450:gap-[57px] mq450:pt-14 mq450:pb-14 mq450:box-border mq725:gap-[29px]">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full shrink-0 gap-[20px] mq1000:flex-wrap">
              <div className="w-[600px] flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[32px] max-w-full mq450:gap-[16px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[16px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 box-border [row-gap:20px] max-w-full shrink-0 gap-[-47.41px] mq450:flex-wrap">
                    <h3 className="m-0 w-[609.8px] relative text-inherit leading-[120%] font-bold font-inherit inline-block shrink-0 max-w-full mq725:text-lgi mq725:leading-[23px]">
                      How much will our repair cost?
                    </h3>
                    <img
                      className="h-[37.6px] w-[37.6px] relative shrink-0 mq450:ml-0"
                      loading="lazy"
                      alt=""
                      src="/icon3.svg"
                    />
                  </div>
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-200" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[16px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 box-border [row-gap:20px] max-w-full shrink-0 gap-[-47.41px] mq450:flex-wrap">
                    <h3 className="m-0 w-[609.8px] relative text-inherit leading-[120%] font-bold font-inherit inline-block shrink-0 max-w-full mq725:text-lgi mq725:leading-[23px]">
                      How to we start repair process?
                    </h3>
                    <img
                      className="h-[37.6px] w-[37.6px] relative shrink-0 mq450:ml-0"
                      alt=""
                      src="/icon-112.svg"
                    />
                  </div>
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-200" />
                  <div className="self-stretch relative text-base leading-[170%] font-paragraph text-coolgray-600 hidden">
                    Check out our FAQ section for answers to common questions
                    about repairing and maintaining your computer accessories
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[16px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 box-border [row-gap:20px] max-w-full shrink-0 gap-[-47.41px] mq450:flex-wrap">
                    <b className="w-[609.8px] relative leading-[120%] inline-block shrink-0 max-w-full mq725:text-lgi mq725:leading-[23px]">
                      Repair and replace devices
                    </b>
                    <img
                      className="h-[37.6px] w-[37.6px] relative shrink-0 mq450:ml-0"
                      alt=""
                      src="/icon-22.svg"
                    />
                  </div>
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-200" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[16px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 box-border [row-gap:20px] max-w-full shrink-0 gap-[-47.41px] mq450:flex-wrap">
                    <b className="w-[609.8px] relative leading-[120%] inline-block shrink-0 max-w-full mq725:text-lgi mq725:leading-[23px]">
                      MacBook repair and replace
                    </b>
                    <img
                      className="h-[37.6px] w-[37.6px] relative shrink-0 mq450:ml-0"
                      alt=""
                      src="/icon-31.svg"
                    />
                  </div>
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-200" />
                </div>
              </div>
              <div className="w-[600px] flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[32px] max-w-full mq450:gap-[16px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[16px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 box-border [row-gap:20px] max-w-full shrink-0 gap-[-47.41px] mq450:flex-wrap">
                    <h3 className="m-0 w-[609.8px] relative text-inherit leading-[120%] font-bold font-inherit inline-block shrink-0 max-w-full mq725:text-lgi mq725:leading-[23px]">
                      What is the our starting process?
                    </h3>
                    <img
                      className="h-[37.6px] w-[37.6px] relative shrink-0 mq450:ml-0"
                      alt=""
                      src="/icon-41.svg"
                    />
                  </div>
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-200" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[16px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 box-border [row-gap:20px] max-w-full shrink-0 gap-[-47.41px] mq450:flex-wrap">
                    <h3 className="m-0 w-[609.8px] relative text-inherit leading-[120%] font-bold font-inherit inline-block shrink-0 max-w-full mq725:text-lgi mq725:leading-[23px]">{`Selling Laptop, Desktop, iphone, ipad `}</h3>
                    <img
                      className="h-[37.6px] w-[37.6px] relative shrink-0 mq450:ml-0"
                      alt=""
                      src="/icon-51.svg"
                    />
                  </div>
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-200" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[16px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 box-border [row-gap:20px] max-w-full shrink-0 gap-[-47.41px] mq450:flex-wrap">
                    <b className="w-[609.8px] relative leading-[120%] inline-block shrink-0 max-w-full mq725:text-lgi mq725:leading-[23px]">
                      Repairing Cost
                    </b>
                    <img
                      className="h-[37.6px] w-[37.6px] relative shrink-0 mq450:ml-0"
                      alt=""
                      src="/icon-61.svg"
                    />
                  </div>
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-200" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[16px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 box-border [row-gap:20px] max-w-full shrink-0 gap-[-47.41px] mq450:flex-wrap">
                    <h3 className="m-0 w-[609.8px] relative text-inherit leading-[120%] font-bold font-inherit inline-block shrink-0 max-w-full mq725:text-lgi mq725:leading-[23px]">
                      Replace any kind of Parts
                    </h3>
                    <img
                      className="h-[37.6px] w-[37.6px] relative shrink-0 mq450:ml-0"
                      alt=""
                      src="/icon-71.svg"
                    />
                  </div>
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-200" />
                </div>
              </div>
            </div>
          </div>
          <FrameComponent10 />
        </div>
      </section>
      <FOOTER
        vector="/vector.svg"
        infoIcons="/vector-15.svg"
        vector1="/vector-25.svg"
        vector2="/vector-35.svg"
        mailIcon="/mail-icon.svg"
        group="/group-15@2x.png"
        onLogoContainerClick={onInnerSubMenuClick}
      />
    </div>
  );
};

export default Faqs;