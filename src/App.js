import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [image, setimage] = useState('');

  const handleChange = () => {
    axios
      .get('https://api.generated.photos/api/v1/faces?api_key=9SkJNytxaj7BgF3-73_nTQ&order_by=random')
      .then(res => {
        const uri = res.data.faces[0].urls[4][512]
        uri && setimage(uri)
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  return (
    <div className="App">
     <h1>AI Image Generator</h1>
     {image && <img src={image} alt="AI Face"/>}
     <button type="button" onClick={handleChange}>
       New Image
     </button>
    </div>
  );
}

export default App;
