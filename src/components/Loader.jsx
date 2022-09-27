import { loader } from './../assets'

const Loader = ({text}) => (
  <div className='flex flex-col w-full justify-center items-center'>
    <img src={loader} alt="loader" className='w-32 h-32 object-contain'/>
    <h1 className='text-2xl text-white mt-2 font-bold'>{text || 'Loading...'}</h1>
  </div>
);

export default Loader;
