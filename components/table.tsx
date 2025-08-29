import React from 'react';

export default function Table() {
    return (
        <div className="max-w-md mx-auto bg-[#F5F3EC] text-black border border-black rounded-lg p-4">
            <div className="text-center mb-4">
                <span className="text-sm text-gray-600">김로켓님의 사주</span>
                <h1 className="text-lg font-bold">1980년 8월27일 08:10</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-center border-collapse">
                    <thead className="border-b">
                        <tr>
                            <th className="p-2 w-1/5 border-r"></th>
                            <th className="p-2 w-1/5 border-r">時</th>
                            <th className="p-2 w-1/5 border-r">日</th>
                            <th className="p-2 w-1/5 border-r">月</th>
                            <th className="p-2 w-1/5 border-r">年</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b'>
                            <td className="p-2 border-r w-1/5">十星</td>
                            <td className="p-2 border-r w-1/5">傷官 <br/> <span className='text-[12px]'>(상관)</span></td>
                            <td className="p-2 border-r w-1/5">比肩 <br/> <span className='text-[12px]'>(비견)</span></td>
                            <td className="p-2 border-r w-1/5">劫財 <br/> <span className='text-[12px]'>(상관)</span></td>
                            <td className="p-2 border-r w-1/5">食神 <br/> <span className='text-[12px]'>(상관)</span></td>
                        </tr>
                        <tr className='border-b'>
                            <td className="p-2 border-r w-1/5">天干</td>
                            <td className="p-2 border-r w-1/5">
                                <div className='flex flex-col gap-1 py-1 px-2 text-white bg-[#2f2f2f] rounded-xl'>
                                    <span className='text-[8px]'>임</span>
                                    <span>壬</span>
                                    <span className='text-[8px]'>陽水</span>
                                </div>
                            </td>
                            <td className="p-2 border-r w-1/5">
                                <div className='flex flex-col gap-1 py-1 px-2 text-white bg-red-700 rounded-xl'>
                                    <span className='text-[8px]'>임</span>
                                    <span>壬</span>
                                    <span className='text-[8px]'>양수</span>
                                </div>
                            </td>
                            <td className="p-2 border-r w-1/5">
                                <div className='flex flex-col gap-1 py-1 px-2 text-white bg-[#2f2f2f] rounded-xl'>
                                    <span className='text-[8px]'>임</span>
                                    <span>壬</span>
                                    <span className='text-[8px]'>양수</span>
                                </div>
                            </td>
                            <td className="p-2 border-r w-1/5">
                                <div className='flex flex-col gap-1 py-1 px-2 text-white bg-[#2f2f2f] rounded-xl'>
                                    <span className='text-[8px]'>임</span>
                                    <span>壬</span>
                                    <span className='text-[8px]'>양수</span>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-b'>
                            <td className="p-2 border-r w-1/5">지支</td>
                            <td className="p-2 border-r w-1/5">寅</td>
                            <td className="p-2 border-r w-1/5">亥</td>
                            <td className="p-2 border-r w-1/5">亥</td>
                            <td className="p-2 border-r w-1/5">亥</td>
                        </tr>
                        <tr className='border-b'>
                            <td className="p-2 border-r w-1/5">十星</td>
                            <td className="p-2 border-r w-1/5">比肩</td>
                            <td className="p-2 border-r w-1/5">劫財</td>
                            <td className="p-2 border-r w-1/5">食神</td>
                            <td className="p-2 border-r w-1/5">偏財</td>
                        </tr>
                        <tr className='border-b'>
                            <td className="p-2 border-r w-1/5">十二運星</td>
                            <td className="p-2 border-r w-1/5">死</td>
                            <td className="p-2 border-r w-1/5">帝旺</td>
                            <td className="p-2 border-r w-1/5">胎</td>
                            <td className="p-2 border-r w-1/5">長生</td>
                        </tr>
                        <tr className='border-b'>
                            <td className="p-2 border-r w-1/5">十二神殺</td>
                            <td className="p-2 border-r w-1/5">劫殺</td>
                            <td className="p-2 border-r w-1/5">地殺</td>
                            <td className="p-2 border-r w-1/5">驛馬殺</td>
                            <td className="p-2 border-r w-1/5">將星殺</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}