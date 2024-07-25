import { FunctionComponent } from "react";
import Call from "./Call";
import OptionPairs from "./OptionPairs";

export type InfoContactType = {
  className?: string;
};

const InfoContact: FunctionComponent<InfoContactType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-3xl text-coolgray-900 font-heading-5 ${className}`}
    >
      <div className="w-[960px] flex flex-col items-start justify-start gap-[87px] max-w-full mq450:gap-[22px] mq975:gap-[43px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <Call
            icon="/icon2.svg"
            directCallUs="Direct Call Us"
            numberSeparator="+123-456-7890"
            numberSeparator1="+123-456-7895"
            showNumberSeparator
          />
          <Call
            icon="/icon-110.svg"
            directCallUs="Location"
            numberSeparator="123 Tech Street, Cityname, Country"
            numberSeparator1="+123-456-7895"
            showNumberSeparator={false}
            propWidth="125px"
          />
          <Call
            icon="/icon-21.svg"
            directCallUs="Email Us"
            numberSeparator="cadzewoda001@st.ug.edu.gh"
            numberSeparator1="themeix@gmail.com"
            showNumberSeparator={false}
            propWidth="125px"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-base">
          <div className="w-[712px] rounded-13xl bg-backgroundcolor box-border flex flex-col items-start justify-start py-[46px] px-[47px] gap-[32px] max-w-full border-[1px] border-solid border-lightblue-100 mq450:gap-[16px] mq450:pl-[23px] mq450:pr-[23px] mq450:box-border mq725:pt-5 mq725:pb-5 mq725:box-border mq975:pt-[30px] mq975:pb-[30px] mq975:box-border">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[39px] pb-4 box-border max-w-full text-9xl">
              <div className="flex-1 flex flex-col items-start justify-start gap-[4px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                  <div className="flex flex-row items-start justify-start gap-[16.1px] mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <img
                        className="w-[32.3px] h-[23.1px] relative shrink-0"
                        alt=""
                        src="/vector-13.svg"
                      />
                    </div>
                    <h2 className="m-0 relative text-inherit font-bold font-inherit shrink-0 mq725:text-3xl">
                      Send Us a Message
                    </h2>
                  </div>
                </div>
                <div className="relative text-base leading-[170%] font-paragraph text-coolgray-600">
                  Drop us a message, and our experts will respond promptly to
                  assist you!
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px]">
                <div className="flex-1 rounded-lg box-border flex flex-row items-start justify-start py-3.5 px-6 min-w-[195px] border-[1px] border-solid border-coolgray-300">
                  <input
                    className="w-[45px] [border:none] [outline:none] font-paragraph text-base bg-[transparent] h-[27px] relative leading-[170%] text-coolgray-600 text-left inline-block p-0"
                    placeholder="Name"
                    type="text"
                  />
                </div>
                <div className="flex-1 rounded-lg box-border flex flex-row items-start justify-start py-3.5 px-6 min-w-[195px] border-[1px] border-solid border-coolgray-300">
                  <input
                    className="w-[194px] [border:none] [outline:none] font-paragraph text-base bg-[transparent] h-[27px] relative leading-[170%] text-coolgray-600 text-left inline-block p-0"
                    placeholder="Company name (optional)"
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px]">
                <div className="flex-1 rounded-lg box-border flex flex-row items-start justify-start py-3.5 px-6 min-w-[195px] border-[1px] border-solid border-coolgray-300">
                  <input
                    className="w-[105px] [border:none] [outline:none] font-paragraph text-base bg-[transparent] h-[27px] relative leading-[170%] text-coolgray-600 text-left inline-block p-0"
                    placeholder="Email address"
                    type="text"
                  />
                </div>
                <div className="flex-1 rounded-lg box-border flex flex-row items-start justify-start py-3.5 px-6 min-w-[195px] border-[1px] border-solid border-coolgray-300">
                  <input
                    className="w-[115px] [border:none] [outline:none] font-paragraph text-base bg-[transparent] h-[27px] relative leading-[170%] text-coolgray-600 text-left inline-block p-0"
                    placeholder="Phone Number"
                    type="text"
                  />
                </div>
              </div>
              <textarea
                className="bg-[transparent] h-[150px] w-auto [outline:none] self-stretch rounded-lg box-border flex flex-row items-start justify-start py-4 px-6 font-paragraph text-base text-coolgray-600 border-[1px] border-solid border-coolgray-300"
                placeholder="message"
                rows={8}
                cols={31}
              />
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-2 box-border gap-[16px] max-w-full text-coolgray-600 font-paragraph">
              <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
                <img
                  className="w-4 h-4 relative rounded-sm"
                  loading="lazy"
                  alt=""
                  src="/frame-204.svg"
                />
              </div>
              <div className="flex-1 relative leading-[170%] inline-block min-w-[380px] max-w-full mq450:min-w-full">
                Sign up to receive the Idea Catalyst newsletter filled with our
                latest thinking, insights, and provocations on corporate
                innovation (Optional)
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <b className="relative leading-[120%]">Purpose of Inquiry</b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-coolgray-600 font-paragraph">
                <OptionPairs
                  learnMoreAboutClarizentSe="Learn more about Clarizent services"
                  scopeMyProject="Scope my project"
                />
                <OptionPairs
                  learnMoreAboutClarizentSe="Discuss media and partnership"
                  scopeMyProject="Other"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[158px] flex flex-row items-start justify-start">
              <div className="flex-1 rounded-lg bg-backgroundcolor flex flex-row items-start justify-start py-[13px] px-3.5 gap-[8px] border-[2px] border-solid border-primary">
                <b className="relative text-base leading-[120%] inline-block font-heading-5 text-primary text-left min-w-[111px]">
                  Send Message
                </b>
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                  <img
                    className="w-[7px] h-3.5 relative"
                    alt=""
                    src="/vector-23.svg"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoContact;