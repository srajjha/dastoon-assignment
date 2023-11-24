'use client';
import React, { useState } from 'react';

const Home = () => {

  const [inputValues, setInputValues] = useState({});
  const [imageInputs, setImageInputs] = useState({});

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const Loader = () => {
    setError("");
    return(<div class="loader mb-5"></div>)
  };

  const query = async (data) => {
    console.log(data);
    setLoading(true);

    try {
      const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
          headers: {
            "Accept": "image/png",
            "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (!response.ok)
        setError("An error occured.");
      else
        setError("");

      const result = await response.blob();
      return result;
    } catch (error) {
      setError(error.message || "");
    } finally {
      setLoading(false);
    }

  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    const { name } = event.target;
    console.log(inputValues[name]);

    if(inputValues[name] === undefined)
    {
        setError("Please insert text in the input field.")
        return;
    }
    try {
      const object = { "inputs": inputValues[name] };
      const result = await query(object);
      console.log(result);
      setImageInputs((prev) => ({ ...prev, [name]: URL.createObjectURL(result) }));
      console.log(imageInputs)
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {

    const { name, value } = event.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className='container d-flex flex-wrap w-100'>
        <div className='image-container d-flex flex-wrap justify-content-center'>
          <h1 className='my-5 text-center'> Start Generating Your Own Comic Right Now !</h1>

          <div className='img-box p-3'><img name="img1" src={imageInputs.img1 || "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height="220px"/></div>
          <div className='img-box p-3'><img name="img2" src={imageInputs.img2 || "https://plus.unsplash.com/premium_photo-1665657351368-3e2a50a3853f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height="220px" /></div>
          <div className='img-box p-3'><img name="img3" src={imageInputs.img3 || "https://images.unsplash.com/photo-1565700430899-1c56a5cf64e3?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height="220px" /></div>
          <div className='img-box p-3'><img name="img4" src={imageInputs.img4 || "https://images.unsplash.com/photo-1517328894681-0f5dfabd463c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height="220px" /></div>
          <div className='img-box p-3'><img name="img5" src={imageInputs.img5 || "https://img.freepik.com/premium-photo/harry-potter-cartoon-character-generative-ai_934475-8676.jpg"} height="220px" /></div>
          <div className='img-box p-3'><img name="img6" src={imageInputs.img6 || "https://images.unsplash.com/photo-1627012441283-79151a20adf6?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height="220px"/></div>
          <div className='img-box p-3'><img name="img7" src={imageInputs.img7 || "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height="220px" /></div>
          <div className='img-box p-3'><img name="img8" src={imageInputs.img8 || "https://plus.unsplash.com/premium_photo-1665657351618-6d5851281a1c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height="220px" /></div>
          <div className='img-box p-3'><img name="img9" src={imageInputs.img9 || "https://plus.unsplash.com/premium_photo-1665657351435-96c58da04fd1?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height="220px" /></div>
          <div className='img-box p-3'><img name="img10" src={imageInputs.img10 || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7XFvw4ZbhVS-jUwyNMMI78nelPve8OzTOg&usqp=CAU"} height="220px" /></div>
        </div>

      <div className='text-input-container w-100 d-flex flex-column align-items-center '>

        <h3 className='text-center mb-5'> Explore your imagination </h3>
        {loading && <Loader />}
        {error && <p> {error}</p>}

        <div className='text-field mb-2 w-100 d-flex'>
          <input className='py-1 w-75' type='text' name='img1' value={inputValues.img1 || ""} onChange={handleChange} placeholder='Enter some text here'/>
          <button className='btn btn-primary ms-1' name='img1' onClick={handleSubmit}> Go </button>
        </div>
        <div className='text-field mb-2 w-100 d-flex'>
          <input className='py-1 w-75' type='text' name='img2' value={inputValues.img2 || ""} onChange={handleChange} placeholder='Enter some text here' />
          <button className='btn btn-primary ms-1' name='img2' onClick={handleSubmit}>  Go</button>
        </div>
        <div className='text-field mb-2 w-100 d-flex'>
          <input className='py-1 w-75' type='text' name='img3' value={inputValues.img3 || ""} onChange={handleChange} placeholder='Enter some text here' />
          <button className='btn btn-primary ms-1' name='img3' onClick={handleSubmit}>  Go</button>
        </div>
        <div className='text-field mb-2 w-100 d-flex'>
          <input className='py-1 w-75' type='text' name='img4' value={inputValues.img4 || ""} onChange={handleChange} placeholder='Enter some text here' />
          <button className='btn btn-primary ms-1' name='img4' onClick={handleSubmit}>  Go</button>
        </div>
        <div className='text-field mb-2 w-100 d-flex'>
          <input className='py-1 w-75' type='text' name='img5' value={inputValues.img5 || ""} onChange={handleChange} placeholder='Enter some text here' />
          <button className='btn btn-primary ms-1' name='img5' onClick={handleSubmit}>  Go</button>
        </div>
        <div className='text-field mb-2 w-100 d-flex'>
          <input className='py-1 w-75' type='text' name='img6' value={inputValues.img6 || ""} onChange={handleChange} placeholder='Enter some text here' />
          <button className='btn btn-primary ms-1' name='img6' onClick={handleSubmit}>  Go</button>
        </div>
        <div className='text-field mb-2 w-100 d-flex'>
          <input className='py-1 w-75' type='text' name='img7' value={inputValues.img7 || ""} onChange={handleChange} placeholder='Enter some text here' />
          <button className='btn btn-primary ms-1' name='img7' onClick={handleSubmit}>  Go</button>
        </div>
        <div className='text-field mb-2 w-100 d-flex'>
          <input className='py-1 w-75' type='text' name='img8' value={inputValues.img8 || ""} onChange={handleChange} placeholder='Enter some text here' />
          <button className='btn btn-primary ms-1' name='img8' onClick={handleSubmit}>  Go</button>
        </div>
        <div className='text-field mb-2 w-100 d-flex'>
          <input className='py-1 w-75' type='text' name='img9' value={inputValues.img9 || ""} onChange={handleChange} placeholder='Enter some text here' />
          <button className='btn btn-primary ms-1' name='img9' onClick={handleSubmit}>  Go</button>
        </div>
        <div className='text-field mb-2 w-100 d-flex'>
          <input className='py-1 w-75' type='text' name='img10' value={inputValues.img10 || ""} onChange={handleChange} placeholder='Enter some text here' />
          <button className='btn btn-primary ms-1' name='img10' onClick={handleSubmit}>  Go</button>
        </div>
      </div>
    </div>
  );
};

export default Home;