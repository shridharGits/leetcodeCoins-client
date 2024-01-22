import React, { useEffect, useState } from 'react'
import img from './img.png'

const Index = () => {
  const [totalCoins, setTotalCoins] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const getApiResponse = async ()=>{
    const res = await fetch('https://leetcode-coins-server.onrender.com/api/users/leetcode-coins');
      const data = await res.json();
      console.log(data.points);
      return data;
  }
  useEffect(()=>{
    const coins = getApiResponse().then((res)=>{
      setTotalCoins(res.points);
      setTotalDays(totalCoins/11);
      const totalDaysLeft = totalCoins/11;
      console.log(totalDaysLeft);
    });
  }, [])
  return (
    <div className='m-6 flex flex-col justify-center content-center items-center md:flex-row text-center text-white lg:mt-12 sm: mt-36'>
      <div className='sm:w-32 lg:w-3/6 md: h-3/6 items-center content-center'><img src={img} alt="" />
      </div>
      <div className=''>
        <h1 className='text-center text-2xl md:text-7xl'>LeetCode Tshirt Coming Soon!</h1>
        <div className='text-xl md:text-7xl'><span className='text-green-500 '>{6000-totalCoins}</span> Coins and <span className='text-green-500'>{Math.round((6000-totalCoins)/11)}</span>  Days Left</div>
      </div>
    </div>
  )
}

export default Index