"use client"


import {  useState, useEffect } from 'react'

export default function Home() {
    const [vendor, setVendor] = useState([])
    const [play, setPlay] = useState(true);
    const start = () => {setPlay(true)};
    const stop = () => {setPlay(false)};

  useEffect(() => {  
    console.log(play)
    if (play) {
      const getData = async () => {


      const res = await fetch(`/api/vendors`);
      const payload = await res.json() 
      setVendor(payload.data)
      }

      // getData()
    setInterval(getData, 5000)
  } else {[]}

  },[])  


    

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <container>
            <h1>
            We pick a restaurant for you 
            </h1>
            <container >
            <div className='card w-96 bg-base-100 shadow-xl'>
            <div className='card-body'>
                <h5 className='card-title'>{vendor.name}</h5>
                <p>
                {vendor.neighborhood} | {vendor.street}
                </p>
            </div>
            </div>
            </container>
            <>{play?
              <button onClick={stop} className="btn btn-active btn-secondary">Stop</button>
              :
              <button onClick={start} className="btn btn-active btn-secondary">Play</button>
            }</>
        </container>

        <footer className="cntr-footer">
            <p> Powered by apedalmedia</p>
        </footer>
        </main>
    )
}














