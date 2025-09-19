import '../App.css'
import React, { useState } from 'react';
import {insertmovies} from '../connectAPI/callmovies';
import { useNavigate } from 'react-router-dom'; 

function Insertmovies() {
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [picture, setpicture] = useState('');
  const [message, setMessage] = useState(''); // เพิ่ม state สำหรับ message
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // สร้าง object moviesData
    const moviesData = { 
      name: name,
      detail: detail,
      picture: picture
    };

    try {
      const data = await insertmovies(moviesData); //  ส่ง moviesData เข้าไป
      setMessage(data.message);
      navigate("/managemoviespage");
    } catch (err) {
      setMessage("เกิดข้อผิดพลาด: " + err.message);
    }
  };

  const handleCancle = () => {
    setName(''); 
    setDetail('');
    setpicture('');
  };

  return (
    <>
      <p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="กรอกชื่อหนัง"
      />
      </p>
      <p>
      <input
        type="text"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        placeholder="กรอกรายละเอียด"
      />
      </p>
      <p>
      <input
        type="text"
        value={picture}
        onChange={(e) => setpicture(e.target.value)}
        placeholder="กรอกปีที่วางจำหน่าย"
      />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button> 
        <button onClick={handleCancle}>Cancle</button>
      </p>
        {/* แสดงข้อความตอบกลับจาก API */}
        {message && <p>{message}</p>}
    </>
  );
}

export default Insertmovies;