import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState('');
  const handleChangeCity = (value) =>{
    setCity(value);
  }

 const handleSubmit = () =>{
  const API_key ='f34d87087bfd2327c4465a0b320d6e94';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
    axios.get(url).then(res => {
      if (res?.status === 200) {
        setData(res?.data);
      }
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <div  className="border my-5 rounded-2 container col-4">
        <div className='d-flex justify-content-center'>
            <h4  className='text-warning my-2'>Weather</h4>
        </div>
        <div className='d-flex justify-content-center my-3'>
          <div className='mx-3'>
          <input className='form-control ' onChange={ e => handleChangeCity(e.target.value)} type='text'/>
          </div>

          <div>
            <input className='btn btn-success' onClick={handleSubmit} type='submit' />
          </div>
        </div>
       { data ? 
        <>
        <div className='d-flex justify-content-center'>
          <h1 className=''>{Math.round(data?.main?.temp / 10)}</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16">
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg>

        </div>
        <div className='d-flex justify-content-center'>
          <div className='mx-4'>
          <h3>Max Temp  : +{Math.round(data?.main?.temp_max / 10)}</h3>
          </div>
          <div>
          <h3>Min Temp : +{Math.round(data?.main?.temp_max / 10)}</h3>
          </div>
        </div>
        </> : <>
        <h3 className='text-danger'>Search By City To get Data</h3></>}

      </div>
    </>
  );
}

export default App;
