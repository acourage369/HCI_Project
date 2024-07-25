import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent8 from "../components/FrameComponent8";
import SkillParent from "../components/SkillParent";

const About: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onNavTextContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='hEROTEXTContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavTextContainerClick1 = useCallback(() => {
    navigate("/faqs");
  }, [navigate]);

  const onNavTextContainerClick2 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavTextContainerClick3 = useCallback(() => {
    navigate("/appointmentbook");
  }, [navigate]);

  const onNavTextContainerClick4 = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="w-full relative bg-backgroundcolor overflow-hidden flex flex-col items-start justify-start gap-[143px] leading-[normal] tracking-[normal] mq450:gap-[36px] mq975:gap-[71px]">
      <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-45xl text-black font-heading-5">
        <div className="self-stretch h-[500px] relative max-w-full mq1000:h-auto mq1000:min-h-[500]">
          <div
            className="absolute top-[0px] left-[0px] bg-backgroundcolor w-full h-full overflow-hidden max-w-full"
            data-scroll-to="hEROTEXTContainer"
          >
            <div className="absolute h-[87.4%] w-[53.44%] top-[0%] right-[50%] bottom-[12.6%] left-[-3.44%] [filter:blur(150px)] rounded-t-none rounded-br-31xl rounded-bl-none bg-secondary" />
            <div className="absolute top-[calc(50%_-_61px)] left-[calc(50%_-_700px)] w-[1400.2px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[3px] max-w-full z-[1]">
              <h1 className="m-0 relative text-inherit leading-[77px] font-bold font-inherit whitespace-nowrap mq725:text-19xl mq725:leading-[46px] mq975:text-32xl mq975:leading-[61px]">
                About Us
              </h1>
              <div className="flex flex-row items-start justify-start py-0 pr-[38px] pl-9 text-5xl text-coolgray-600 font-paragraph">
                <div className="flex flex-row items-start justify-start gap-[15.9px]">
                  <h3
                    className="m-0 relative text-inherit leading-[41px] font-normal font-inherit inline-block min-w-[68px] cursor-pointer"
                    onClick={onHomeTextClick}
                  >
                    Home
                  </h3>
                  <div className="flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0">
                    <img
                      className="w-[6.9px] h-3 relative"
                      loading="lazy"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                  <h3 className="m-0 relative text-inherit leading-[41px] font-normal font-inherit inline-block min-w-[103px] whitespace-nowrap">
                    About Us
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <header className="absolute top-[51px] left-[300px] bg-gray1 w-[1320px] overflow-hidden flex flex-row items-start justify-between max-w-full gap-[20px] z-[2] text-left text-13xl text-coolgray-900 font-poppins mq1000:flex-wrap">
            <div className="flex flex-row items-start justify-start relative gap-[10px]">
              <h1 className="m-0 relative text-inherit leading-[120%] italic font-extrabold font-inherit mq725:text-lgi mq725:leading-[23px] mq975:text-7xl mq975:leading-[31px]">
                <p className="m-0 whitespace-pre-wrap">{`Comp    ter `}</p>
                <p className="m-0 text-darkorange whitespace-pre-wrap">
                  {" "}
                  Doctor
                </p>
              </h1>
              <img
                className="h-[43px] w-[34.6px] absolute !m-[0] top-[-2px] right-[51.4px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/group1@2x.png"
              />
            </div>
            <div className="w-[824px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border max-w-full text-base text-black font-paragraph">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <div
                  className="overflow-hidden flex flex-row items-start justify-start p-2.5 gap-[10px] cursor-pointer"
                  onClick={onHomeTextClick}
                >
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[46px]">
                    Home
                  </a>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/riarrowdropdownline.svg"
                  />
                </div>
                <div
                  className="overflow-hidden flex flex-row items-start justify-start p-2.5 gap-[10px] cursor-pointer text-deepskyblue"
                  onClick={onNavTextContainerClick}
                >
                  <a className="[text-decoration:underline] relative text-[inherit] inline-block min-w-[46px]">
                    About
                  </a>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/riarrowdropdownline.svg"
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
                    src="/riarrowdropdownline.svg"
                  />
                </div>
                <div
                  className="overflow-hidden flex flex-row items-start justify-start p-2.5 gap-[10px] cursor-pointer"
                  onClick={onNavTextContainerClick2}
                >
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[61px]">
                    Services
                  </a>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/riarrowdropdownline.svg"
                  />
                </div>
                <div
                  className="overflow-hidden flex flex-row items-start justify-start py-2.5 px-[5px] gap-[10px] cursor-pointer"
                  onClick={onNavTextContainerClick3}
                >
                  <a className="[text-decoration:none] relative text-[inherit]">
                    Book Appointment
                  </a>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/riarrowdropdownline.svg"
                  />
                </div>
                <div
                  className="overflow-hidden flex flex-row items-start justify-start py-2.5 px-[11px] gap-[10px] cursor-pointer"
                  onClick={onNavTextContainerClick4}
                >
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[58px]">
                    Contact
                  </a>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/riarrowdropdownline.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <img
                    className="w-[31px] h-[30px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/basilsearchsolid1.svg"
                  />
                </div>
              </div>
            </div>
          </header>
        </div>
        <FrameComponent8 />
      </section>
      <SkillParent />
    </div>
  );
};

export default About;