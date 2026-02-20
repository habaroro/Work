import svgPaths from "./svg-rvjkebdy4w";
import imgImage1 from "figma:asset/f228563ccb35d67e292f2f51ac565a95625dbd08.png";
import imgImage2 from "figma:asset/d6b8f0c107beec31d7b38ccf4d2ff22c032ca274.png";
import imgImage3 from "figma:asset/71f3945ce5afe5962d1e0b2a71e03034747ed047.png";
import imgImage4 from "figma:asset/2897bb468ae95606199d27545adf92fcf2a52a41.png";
import imgImage5 from "figma:asset/b9ae1985fdde75a9c854873abd3c3c8ebd9e949a.png";

function Section() {
  return <div className="absolute h-0 left-0 top-0 w-[2141px]" data-name="Section" />;
}

function Heading1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#030213] text-[16px] top-[-0.5px] tracking-[-0.3125px]">No.1</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-[0.5px] tracking-[-0.1504px]">{`밝고 경쾌한 동요 Pop 스타일 `}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[92px] top-[24px] w-[256px]" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#030213] content-stretch flex items-center justify-center left-[364px] p-px rounded-[16777200px] size-[32px] top-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#030213] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Icon />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Image (음악 1)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(0,215,36,0.2)] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[119.3%] left-[10.94%] max-w-none top-[0.23%] w-[78.95%]" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[12px] overflow-clip rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[64px] top-[12px]" data-name="Container">
      <Image />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(3,2,19,0.05)] h-[88px] relative rounded-[24px] shadow-[0px_0px_0px_0px_rgba(3,2,19,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <Container1 />
      <Button />
      <Container2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px]">No.2</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-[0.5px] tracking-[-0.1504px]">세련된 멜로디의 K-Pop 스타일</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[93px] top-[25px] w-[254px]" data-name="Container">
      <Heading2 />
      <Paragraph1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7598 14.7598">
        <g id="Icon">
          <g id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[364.24px] p-px rounded-[16777200px] size-[29.52px] top-[30.24px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(113,113,130,0.3)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Icon1 />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Image (음악 2)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(255,1,183,0.2)] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[83.76%] left-[8.08%] max-w-none top-[10.16%] w-[87.23%]" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[13px] overflow-clip rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[64px] top-[13px]" data-name="Container">
      <Image1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[90px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container4 />
      <Button1 />
      <Container5 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px]">No.3</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-[0.5px] tracking-[-0.1504px]">에너제틱한 Hook Song 스타일</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[93px] top-[25px] w-[254px]" data-name="Container">
      <Heading3 />
      <Paragraph2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7598 14.7598">
        <g id="Icon">
          <g id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[364.24px] p-px rounded-[16777200px] size-[29.52px] top-[30.24px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(113,113,130,0.3)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Icon2 />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[64px] overflow-clip relative shrink-0 w-full" data-name="Image (음악 3)">
      <div className="absolute h-[96px] left-[-8.5px] top-[-2px] w-[73px]" data-name="image 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[rgba(255,108,79,0.2)] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[59.49%] left-[24.66%] max-w-none top-[6.35%] w-[59.93%]" src={imgImage3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[13px] overflow-clip rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[64px] top-[13px]" data-name="Container">
      <Image2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[90px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container7 />
      <Button2 />
      <Container8 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px]">No.4</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-[0.5px] tracking-[-0.1504px]">귀엽고 친근한 어린이 보컬과 화음</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[93px] top-[25px] w-[254px]" data-name="Container">
      <Heading4 />
      <Paragraph3 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7598 14.7598">
        <g id="Icon">
          <g id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[364.24px] p-px rounded-[16777200px] size-[29.52px] top-[30.24px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(113,113,130,0.3)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Icon3 />
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Image (음악 4)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(72,130,248,0.2)] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[90.37%] left-[7.81%] max-w-none top-[5.24%] w-[78.91%]" src={imgImage4} />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[13px] overflow-clip rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[64px] top-[13px]" data-name="Container">
      <Image3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[90px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container10 />
      <Button3 />
      <Container11 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px]">No.5</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-[0.5px] tracking-[-0.1504px]">{`청량하고 깨끗한 K-Pop 발라드 `}</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[93px] top-[25px] w-[254px]" data-name="Container">
      <Heading5 />
      <Paragraph4 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7598 14.7599">
        <g id="Icon">
          <g id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[364.24px] p-px rounded-[16777200px] size-[29.52px] top-[30.24px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(113,113,130,0.3)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Icon4 />
    </div>
  );
}

function Image4() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Image (음악 5)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(136,0,255,0.2)] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[88.76%] left-[19.53%] max-w-none top-[6.46%] w-[60.35%]" src={imgImage5} />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[13px] overflow-clip rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[64px] top-[13px]" data-name="Container">
      <Image4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[90px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container13 />
      <Button4 />
      <Container14 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[664px] items-start left-[846.5px] pt-[24px] px-[16px] top-[81px] w-[448px]" data-name="Main Content">
      <Container />
      <Container3 />
      <Container6 />
      <Container9 />
      <Container12 />
    </div>
  );
}

function Ty() {
  return (
    <div className="bg-[#f9fafb] h-[1231px] relative shrink-0 w-full" data-name="TY">
      <Section />
      <MainContent />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1231px] items-start left-0 top-0 w-[2141px]" data-name="Body">
      <Ty />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#0a0a0a] text-[24px] top-0 tracking-[-0.5297px]">퍼펙트문해 LOGO SONG</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[19px] left-0 not-italic text-[#717182] text-[15px] top-px uppercase">마음에 드는 CM송에 투표해주세요.</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[48px] relative shrink-0 w-[315.273px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p12197200} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p34c9bb80} id="Vector_2" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p36d3e880} id="Vector_3" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <Container16 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[81px] items-start left-0 pb-px px-[846.5px] top-0 w-[2141px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(229,231,235,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Container15 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[28px] relative shrink-0 w-[62.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[28px] left-[31.5px] not-italic text-[18px] text-center text-white top-0 tracking-[-0.4395px]">투표하기</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#030213] h-[56px] relative rounded-[16px] shadow-[0px_20px_25px_0px_rgba(3,2,19,0.2),0px_8px_10px_0px_rgba(3,2,19,0.2)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <Text />
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-white h-[104px] items-start left-0 pt-[16px] px-[846.5px] to-[rgba(0,0,0,0)] top-[1127px] via-1/2 via-[rgba(255,255,255,0.9)] w-[2141px]" data-name="Container">
      <Button5 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="음악 샘플 투표 페이지">
      <Body />
      <Header />
      <Container18 />
    </div>
  );
}