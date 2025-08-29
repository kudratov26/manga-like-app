import Image from "next/image";
import Table from "../components/table";

export default function Home() {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-center relative section">
        <div className="absolute -bottom-1/8 left-10 z-10 flex items-center w-[215px] h-[140px]">
          <Image src="/bubble_top.svg" alt="Bubble" width={215} height={140} />
          <div className="absolute top-[30%] left-1/5 w-[135px] leading-[150%] text-center tracking-tighter text-[#424242]" style={{ fontSize: '16px' }}>
            이제 본격적으로 OO님의 사주팔자를 분석해볼 차례네요.
          </div>
        </div>
        <Image src="/hero.svg" alt="Hero" width={500} height={500} className="relative z-0" />
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#F5F3EC] to-transparent"></div>
      </div>
      <div className="bg-[#F5F3EC] pt-30 pb-20 px-10 section">
        <Image src="/calligraphy.svg" alt="Calligraphy" width={500} height={500} />
      </div>
      <div className="flex justify-center relative section">
        <div className="absolute -top-[23%] left-10 z-10 flex items-center w-[240px] h-[116px]">
          <Image src="/bubble_bottom.svg" alt="Bubble" width={240} height={116} />
          <div className="absolute top-[18%] left-1/6 leading-[150%] text-center tracking-tighter text-[#424242]" style={{ fontSize: '16px' }}>
            <p className="text-center">제가 oo님의 사주를</p>
            <p>보기 쉽게 표로 정리했어요</p>
          </div>
        </div>
        <Image src="/books.png" alt="Books" width={500} height={500} />
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#F5F3EC] to-transparent"></div>
      </div>
      <Table />
    </div>
  );
}