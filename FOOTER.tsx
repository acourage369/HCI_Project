import { FunctionComponent, useCallback } from "react";

export type FOOTERType = {
  className?: string;
  vector?: string;
  infoIcons?: string;
  vector1?: string;
  vector2?: string;
  mailIcon?: string;
  group?: string;

  /** Action props */
  onLogoContainerClick?: () => void;
  onHomeTextClick?: () => void;
};

const FOOTER: FunctionComponent<FOOTERType> = ({
  className = "",
  vector,
  infoIcons,
  vector1,
  vector2,
  mailIcon,
  group,
  onLogoContainerClick,
  onHomeTextClick,
}) => {
  const onLogoContainerClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='nAVBARContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start relative max-w-full text-left text-3xl text-coolgray-900 font-heading-5 ${className}`}
    >
      <div className="self-stretch bg-backgroundcolor flex flex-row items-start justify-center py-28 px-5 box-border max-w-full mq450:gap-[20px] mq450:pt-[73px] mq450:pb-[73px] mq450:box-border">
        <div className="w-[1320px] flex flex-col items-start justify-start gap-[56px] max-w-full mq450:gap-[28px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
            <div className="w-[372px] flex flex-col items-start justify-start gap-[41px] max-w-full text-13xl font-poppins mq975:gap-[20px]">
              <div
                className="flex flex-row items-start justify-start gap-[8px] cursor-pointer"
                onClick={onLogoContainerClick}
              >
                <img
                  className="h-10 w-[30.8px] relative hidden"
                  alt=""
                  src={vector}
                />
                <h1
                  className="m-0 relative text-inherit leading-[120%] italic font-extrabold font-inherit mq450:text-7xl mq450:leading-[31px] mq975:text-lgi mq975:leading-[23px]"
                  onClick={onHomeTextClick}
                >
                  <p className="m-0 whitespace-pre-wrap">{`Comp    ter `}</p>
                  <p className="m-0">
                    <span className="whitespace-pre-wrap">{`          `}</span>
                    <span className="text-darkorange">Doctor</span>
                  </p>
                </h1>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-base text-coolgray-600 font-paragraph">
                <div className="flex flex-row items-center justify-start gap-[8px] font-lato">
                  <img
                    className="h-4 w-[12.2px] relative"
                    alt=""
                    src={infoIcons}
                  />
                  <div className="relative leading-[170%] inline-block min-w-[93px]">
                    0552233328
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img className="h-3 w-4 relative" alt="" src={vector1} />
                  <div className="relative leading-[170%] whitespace-nowrap">
                    computerdoctor@gmail.com
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full">
                  <img
                    className="h-3.5 w-[11px] relative"
                    alt=""
                    src={vector2}
                  />
                  <div className="flex-1 relative leading-[170%] inline-block max-w-[calc(100%_-_19px)]">
                    University of Ghana, Mensah Sarbah
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[563px] flex flex-row items-start justify-start gap-[24px] max-w-full mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[29px] min-w-[175px]">
                <h3 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit inline-block min-w-[97px] mq975:text-lg mq975:leading-[21px]">
                  Services
                </h3>
                <div className="flex flex-col items-start justify-start gap-[16px] text-base text-coolgray-600 font-paragraph">
                  <div className="relative leading-[170%] inline-block min-w-[105px]">
                    Laptop Repair
                  </div>
                  <div className="relative leading-[170%] inline-block min-w-[95px]">
                    Laptop Sales
                  </div>
                  <div className="relative leading-[170%] inline-block min-w-[115px]">
                    Desktop Repair
                  </div>
                  <div className="relative leading-[170%] inline-block min-w-[105px]">
                    iPhone Repair
                  </div>
                  <div className="relative leading-[170%]">
                    Smartphone Repair
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[34px] min-w-[175px]">
                <h3 className="m-0 w-[200px] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq975:text-lg mq975:leading-[21px]">
                  Social Media
                </h3>
                <div className="flex flex-col items-start justify-start gap-[16px] text-base text-coolgray-600 font-paragraph">
                  <div className="relative leading-[170%] inline-block min-w-[72px]">
                    Facebook
                  </div>
                  <div className="relative leading-[170%] inline-block min-w-[53px]">
                    Twitter
                  </div>
                  <div className="relative leading-[170%] inline-block min-w-[64px]">
                    Linkedin
                  </div>
                  <div className="relative leading-[170%] inline-block min-w-[68px]">
                    Pinterest
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[56px] min-w-[219px] max-w-full mq975:gap-[28px]">
              <div className="h-[131px] hidden flex-col items-start justify-start gap-[24px]">
                <b className="w-[212.9px] h-[26px] relative leading-[120%] inline-block mq975:text-lg mq975:leading-[21px]">
                  Contact Adddress
                </b>
                <div className="w-[278.9px] flex-1 relative text-base leading-[170%] font-paragraph text-coolgray-600 inline-block">
                  <p className="m-0">{`2118 Thornridge Cir. Syracuse, `}</p>
                  <p className="m-0">Connecticut 35624</p>
                  <p className="m-0">USA</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[18.2px] max-w-full">
                <h3 className="m-0 w-[208.6px] relative text-inherit leading-[120%] font-bold font-inherit inline-block shrink-0 mq975:text-lg mq975:leading-[21px]">
                  Newsletter
                </h3>
                <div className="self-stretch h-[37.8px] flex flex-col items-start justify-start pt-0 px-0 pb-[10.8px] box-border gap-[10.8px] shrink-0 text-base text-dimgray-200 font-paragraph">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <div className="w-[208.8px] relative leading-[170%] inline-block shrink-0">
                      Enter your email address
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[2.8px] px-0 pb-0">
                      <img
                        className="w-[19.4px] h-[15.3px] relative"
                        alt=""
                        src={mailIcon}
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-px relative box-border opacity-[0.25] shrink-0 border-t-[1px] border-solid border-coolgray-900" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-base leading-[170%] font-paragraph text-coolgray-600 inline-block max-w-full">
            ©2024 - Computer Doctor. All Rights Reserved by HCI Group 11
          </div>
        </div>
      </div>
      <img
        className="w-[34.6px] h-[43px] absolute !m-[0] top-[111px] left-[395px] object-contain z-[1]"
        alt=""
        src={group}
      />
    </footer>
  );
};

export default FOOTER;