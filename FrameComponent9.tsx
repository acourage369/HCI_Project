import {
    FunctionComponent,
    useMemo,
    type CSSProperties,
    useCallback,
  } from "react";
  import { useNavigate } from "react-router-dom";
  
  export type FrameComponent9Type = {
    className?: string;
    aboutUs?: string;
    homeIcon?: string;
    aboutUs1?: string;
    group?: string;
    riarrowDropDownLine?: string;
    riarrowDropDownLine1?: string;
    riarrowDropDownLine2?: string;
    riarrowDropDownLine3?: string;
    riarrowDropDownLine4?: string;
    riarrowDropDownLine5?: string;
    basilsearchSolid?: string;
  
    /** Style props */
    bgPosition?: CSSProperties["position"];
    bgTop?: CSSProperties["top"];
    bgLeft?: CSSProperties["left"];
    bgWidth?: CSSProperties["width"];
    bgAlignSelf?: CSSProperties["alignSelf"];
  
    /** Action props */
    onInnerSubMenuClick?: () => void;
    onHomeTextClick?: () => void;
    onNAVBARContainerClick?: () => void;
    onNavTextContainerClick1?: () => void;
    onNavTextContainerClick2?: () => void;
  };
  
  const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
    className = "",
    aboutUs,
    homeIcon,
    aboutUs1,
    group,
    riarrowDropDownLine,
    riarrowDropDownLine1,
    riarrowDropDownLine2,
    riarrowDropDownLine3,
    riarrowDropDownLine4,
    riarrowDropDownLine5,
    basilsearchSolid,
    bgPosition,
    bgTop,
    bgLeft,
    bgWidth,
    bgAlignSelf,
    onInnerSubMenuClick,
    onHomeTextClick,
    onNAVBARContainerClick,
    onNavTextContainerClick1,
    onNavTextContainerClick2,
  }) => {
    const frameHeaderStyle: CSSProperties = useMemo(() => {
      return {
        position: bgPosition,
        top: bgTop,
        left: bgLeft,
        width: bgWidth,
        alignSelf: bgAlignSelf,
      };
    }, [bgPosition, bgTop, bgLeft, bgWidth, bgAlignSelf]);
  
    const navigate = useNavigate();
  
    const onLogoContainerClick = useCallback(() => {
      navigate("/home-page");
    }, [navigate]);
  
    const onNavTextContainerClick = useCallback(() => {
      navigate("/about");
    }, [navigate]);
  
    const onNavTextContainerClick3 = useCallback(() => {
      navigate("/faqs");
    }, [navigate]);
  
    const onNavTextContainerClick4 = useCallback(() => {
      const anchor = document.querySelector(
        "[data-scroll-to='hEROTEXTContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }, []);
  
    const onNavTextContainerClick5 = useCallback(() => {
      navigate("/appointmentbook");
    }, [navigate]);
  
    const onNavTextContainerClick6 = useCallback(() => {
      navigate("/contact");
    }, [navigate]);
  
    return (
      <header
        className={`absolute top-[0px] left-[0px] w-full h-[500px] max-w-full text-left text-45xl text-black font-heading-5 ${className}`}
        style={frameHeaderStyle}
      >
        <div
          className="absolute top-[0px] left-[0px] bg-backgroundcolor w-full h-full overflow-hidden max-w-full"
          data-scroll-to="hEROTEXTContainer"
        >
          <div className="absolute h-[87.4%] w-[53.44%] top-[0%] right-[50%] bottom-[12.6%] left-[-3.44%] [filter:blur(150px)] rounded-t-none rounded-br-31xl rounded-bl-none bg-secondary" />
          <div className="absolute top-[calc(50%_-_54px)] left-[calc(50%_-_700px)] w-[1400.2px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[3px] max-w-full z-[1]">
            <h1 className="m-0 relative text-inherit leading-[77px] font-bold font-inherit">
              {aboutUs}
            </h1>
            <div className="flex flex-row items-start justify-start py-0 pr-[59px] pl-[57px] text-base text-coolgray-600 font-paragraph">
              <div
                className="flex flex-row items-start justify-start gap-[15.9px]"
                onClick={onInnerSubMenuClick}
              >
                <div
                  className="relative leading-[170%] inline-block min-w-[46px]"
                  onClick={onHomeTextClick}
                >
                  Home
                </div>
                <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                  <img
                    className="w-[6.9px] h-3 relative"
                    loading="lazy"
                    alt=""
                    src={homeIcon}
                  />
                </div>
                <div className="relative leading-[170%] inline-block min-w-[61px]">
                  {aboutUs1}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="sticky top-[0] left-[300px] bg-gray1 w-[1320px] overflow-hidden flex flex-row items-start justify-between z-[99] gap-[20px] max-w-full text-13xl text-coolgray-900 font-poppins"
          onClick={onNAVBARContainerClick}
        >
          <div
            className="flex flex-row items-start justify-start relative gap-[10px] cursor-pointer"
            onClick={onLogoContainerClick}
          >
            <h1 className="m-0 relative text-inherit leading-[120%] italic font-extrabold font-inherit shrink-0 mq1000:hidden">
              <p className="m-0 whitespace-pre-wrap">{`Comp    ter `}</p>
              <p className="m-0 text-darkorange whitespace-pre-wrap"> Doctor</p>
            </h1>
            <img
              className="h-[43px] w-[34.6px] absolute !m-[0] top-[-2px] right-[51.4px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src={group}
            />
          </div>
          <div className="w-[824px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border max-w-full text-base text-black font-paragraph mq450:w-0">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:hidden">
              <div
                className="overflow-hidden flex flex-row items-start justify-start p-2.5 gap-[10px] cursor-pointer"
                onClick={onLogoContainerClick}
              >
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[46px]">
                  Home
                </a>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src={riarrowDropDownLine}
                />
              </div>
              <div
                className="overflow-hidden flex flex-row items-start justify-start p-2.5 gap-[10px] cursor-pointer"
                onClick={onNavTextContainerClick}
              >
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[46px]">
                  About
                </a>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src={riarrowDropDownLine1}
                />
              </div>
              <div
                className="overflow-hidden flex flex-row items-start justify-start py-2.5 px-[31px] gap-[10px] cursor-pointer"
                onClick={onNavTextContainerClick1}
              >
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[38px]">
                  Faq’s
                </a>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src={riarrowDropDownLine2}
                />
              </div>
              <div
                className="overflow-hidden flex flex-row items-start justify-start p-2.5 gap-[10px] cursor-pointer text-deepskyblue"
                onClick={onNavTextContainerClick2}
              >
                <a className="[text-decoration:underline] relative text-[inherit] inline-block min-w-[61px]">
                  Services
                </a>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src={riarrowDropDownLine3}
                />
              </div>
              <div
                className="overflow-hidden flex flex-row items-start justify-start py-2.5 px-[5px] gap-[10px] cursor-pointer"
                onClick={onNavTextContainerClick5}
              >
                <a className="[text-decoration:none] relative text-[inherit] whitespace-nowrap">
                  Book Appointment
                </a>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src={riarrowDropDownLine4}
                />
              </div>
              <div
                className="overflow-hidden flex flex-row items-start justify-start py-2.5 px-[11px] gap-[10px] cursor-pointer"
                onClick={onNavTextContainerClick6}
              >
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[58px]">
                  Contact
                </a>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src={riarrowDropDownLine5}
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                <img
                  className="w-[31px] h-[30px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={basilsearchSolid}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default FrameComponent9;