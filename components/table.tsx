"use client";

import React from 'react';

export default function Table() {
  return (
    <div className="max-w-md mx-auto bg-[#F5F3EC] border-2 text-black p-[10px]">
      {/* Corner squares */}
      <div className='relative'>

      <div className="absolute -top-[10px] -left-[10px] w-3 h-3 border-2 border-blue-800"></div>
      <div className="absolute -top-[10px] -right-[10px] w-3 h-3 border-2 border-blue-800"></div>
      <div className="absolute -bottom-[10px] -left-[10px] w-3 h-3 border-2 border-blue-800"></div>
      <div className="absolute -bottom-[10px] -right-[10px] w-3 h-3 border-2 border-blue-800"></div>
      
      <div className="border-2 border-blue-800 p-4 relative">
        <div className="text-center mt-4 mb-6 flex flex-col gap-1">
          <span className="text-[#424242]">김로켓님의 사주</span>
          <h1 className="text-[20px] font-bold text-[#424242]">1980년 8월27일 08:10</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse font-[ZenAntique]">
            {/* Rest of your table content remains the same */}
            <thead className="border-b">
              <tr>
                <th className="p-2 w-1/5 border-r"></th>
                <th className="p-2 w-1/5 border-r text-[20px] font-normal">時</th>
                <th className="p-2 w-1/5 border-r text-[20px] font-normal">日</th>
                <th className="p-2 w-1/5 border-r text-[20px] font-normal">月</th>
                <th className="p-2 w-1/5 border-r text-[20px] font-normal">年</th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr className='border-b'>
                <td className="p-2 border-r w-1/5 bg-[#F5F3EC] leading-[100%]">十星 <br /> <span className='text-[12px]'>(십성)</span></td>
                <td className="p-2 border-r w-1/5">傷官 <br /> <span className='text-[12px]'>(상관)</span></td>
                <td className="p-2 border-r w-1/5">比肩 <br /> <span className='text-[12px]'>(비견)</span></td>
                <td className="p-2 border-r w-1/5">劫財 <br /> <span className='text-[12px]'>(상관)</span></td>
                <td className="p-2 border-r w-1/5">食神 <br /> <span className='text-[12px]'>(상관)</span></td>
              </tr>
              <tr className='border-b'>
                <td className="p-2 border-r w-1/5 bg-[#F5F3EC] leading-[100%]">천간 <br /> <span className='text-[12px]'>(천간)</span></td>
                <td className="p-1 border-r w-1/5">
                  <div className='flex flex-col gap-1 py-1 px-2 text-white bg-[#2f2f2f] rounded-xl'>
                    <span className='text-[8px]'>임</span>
                    <span className='text-[25px]'>壬</span>
                    <span className='text-[8px]'>양수</span>
                  </div>
                </td>
                <td className="p-1 border-r w-1/5">
                  <div className='flex flex-col gap-1 py-1 px-2 text-white bg-red-700 rounded-xl'>
                    <span className='text-[8px]'>임</span>
                    <span className='text-[25px]'>壬</span>
                    <span className='text-[8px]'>양수</span>
                  </div>
                </td>
                <td className="p-1 border-r w-1/5">
                  <div className='flex flex-col gap-1 py-1 px-2 text-white bg-[#2f2f2f] rounded-xl'>
                    <span className='text-[8px]'>임</span>
                    <span className='text-[25px]'>壬</span>
                    <span className='text-[8px]'>양수</span>
                  </div>
                </td>
                <td className="p-1 border-r w-1/5">
                  <div className='flex flex-col gap-1 py-1 px-2 text-white bg-[#2f2f2f] rounded-xl'>
                    <span className='text-[8px]'>임</span>
                    <span className='text-[25px]'>壬</span>
                    <span className='text-[8px]'>양수</span>
                  </div>
                </td>
              </tr>
              <tr className='border-b'>
                <td className="p-2 border-r w-1/5 bg-[#F5F3EC] leading-[100%]">地支 <br /> <span className='text-[12px]'>(지지)</span></td>
                <td className='p-1 border-r w-1/5'>
                  <div className='flex flex-col gap-1 py-1 px-2 text-white bg-[#2f2f2f] rounded-xl'>
                    <span className='text-[8px]'>임</span>
                    <span className='text-[25px]'>寅</span>
                    <span className='text-[8px]'>양수</span>
                  </div>
                </td>
                <td className="p-1 border-r w-1/5">
                  <div className='flex flex-col gap-1 py-1 px-2 text-white bg-red-700 rounded-xl'>
                    <span className='text-[8px]'>임</span>
                    <span className='text-[25px]'>亥</span>
                    <span className='text-[8px]'>양수</span>
                  </div>
                </td>
                <td className="p-1 border-r w-1/5">
                  <div className='flex flex-col gap-1 py-1 px-2 text-white bg-[#2f2f2f] rounded-xl'>
                    <span className='text-[8px]'>임</span>
                    <span className='text-[25px]'>亥</span>
                    <span className='text-[8px]'>양수</span>
                  </div>
                </td>
                <td className="p-1 border-r w-1/5">
                  <div className='flex flex-col gap-1 py-1 px-2 border text-black bg-transparent rounded-xl'>
                    <span className='text-[8px]'>임</span>
                    <span className='text-[25px]'>酉</span>
                    <span className='text-[8px]'>양수</span>
                  </div>
                </td>
              </tr>
              <tr className='border-b'>
                <td className="p-2 border-r w-1/5 bg-[#F5F3EC] leading-[100%]">十星 <br /> <span className='text-[12px]'>(십성)</span></td>
                <td className="p-2 border-r w-1/5">比肩</td>
                <td className="p-2 border-r w-1/5">劫財</td>
                <td className="p-2 border-r w-1/5">食神</td>
                <td className="p-2 border-r w-1/5">偏財</td>
              </tr>
              <tr className='border-b'>
                <td className="p-2 border-r w-1/5 bg-[#F5F3EC] leading-[100%]">十二運星 <br /> <span className='text-[12px]'>(십이운성)</span></td>
                <td className="p-2 border-r w-1/5">死</td>
                <td className="p-2 border-r w-1/5">帝旺</td>
                <td className="p-2 border-r w-1/5">胎</td>
                <td className="p-2 border-r w-1/5">長生</td>
              </tr>
              <tr className='border-b'>
                <td className="p-2 border-r w-1/5 bg-[#F5F3EC] leading-[100%]">十二神殺 <br /> <span className='text-[12px]'>(십이신살)</span></td>
                <td className="p-2 border-r w-1/5">劫殺</td>
                <td className="p-2 border-r w-1/5">地殺</td>
                <td className="p-2 border-r w-1/5">驛馬殺</td>
                <td className="p-2 border-r w-1/5">將星殺</td>
              </tr>
              <tr className='border-b'>
                <td className="p-2 border-r w-1/5 bg-[#F5F3EC]">十二神殺</td>
                <td className="p-2 border-r w-1/5 text-[10px] font-bold">(없음)</td>
                <td className="p-2 border-r w-1/5 text-[10px] font-bold">(없음)</td>
                <td className="p-2 border-r w-1/5 text-[14px]">天乙 <br /> <span className='text-[10px] font-bold'>(천을귀인)</span></td>
                <td className="p-2 border-r w-1/5">
                  <div className="flex flex-col gap-1 py-1 px-2">
                    <div className='flex flex-col gap-1'>
                      <span className='text-[14px]'>天乙</span>    
                      <span className='text-[8px] font-bold'>(천을귀인)</span>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <span className='text-[14px]'>太極</span>    
                      <span className='text-[8px] font-bold'>(태극귀인)</span>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <span className='text-[14px]'>文昌</span>    
                      <span className='text-[8px] font-bold'>(문창귀인)</span>
                    </div>
                  </div>                            
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

      <style jsx>{`
        .border-custom {
          border: 2px solid #1E3A8A; /* Outer blue border */
          padding: 10px;
          position: relative;
        }
        .border-custom::before {
          content: '';
          position: absolute;
          top: -12px;
          left: -12px;
          width: 10px;
          height: 10px;
          border: 2px solid #1E3A8A;
        }
        .border-custom::after {
          content: '';
          position: absolute;
          bottom: -12px;
          right: -12px;
          width: 10px;
          height: 10px;
          border: 2px solid #1E3A8A;
        }
        .border-custom::corner-top-right {
          content: '';
          position: absolute;
          top: -12px;
          right: -12px;
          width: 10px;
          height: 10px;
          border: 2px solid #1E3A8A;
        }
        .border-custom::corner-bottom-left {
          content: '';
          position: absolute;
          bottom: -12px;
          left: -12px;
          width: 10px;
          height: 10px;
          border: 2px solid #1E3A8A;
        }
      `}</style>
    </div>
  );
}