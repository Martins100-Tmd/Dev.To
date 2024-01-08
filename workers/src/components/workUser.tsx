import { useEffect, useState } from 'react';
import codeUrl from '../worker/worker1';
import sleep from '../utils/sleep';

let worker: Worker;

const WorkUser = () => {
   let [data, setdata] = useState(NaN);
   if (window.Worker) worker = new Worker(codeUrl);

   const someLoop = async () => {
      for (let i = 1; i <= 10; i++) {
         await sleep(1000);
         worker.postMessage(i);
      }
   };

   worker.onmessage = (ev) => {
      setdata(ev.data);
   };

   useEffect(() => {
      someLoop();
   }, []);
   return (
      <section className='container rounded-sm  shadow w-1/2 mx-auto mt-60 p-4'>
         <section className='rounded shadow p-5 text-center w-1/2 mx-auto bg-slate-200'>
            <p className='text-center font-pop font-medium'>{data}</p>
         </section>
      </section>
   );
};

export default WorkUser;
