import React, { useEffect, useState } from "react";
import { getmoviess, deletemovies, updatemovies } from "../connectAPI/callmovies";

function Managemovies() {
  const [moviess, setmoviess] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editdetail, setEditdetail] = useState("");
  const [editpicture, setEditpicture] = useState("");

  const fetchmoviess = async () => {
    try {
      const data = await getmoviess();
      setmoviess(data);
    } catch (err) {
      console.error("โหลดข้อมูลล้มเหลว:", err);
    }
  };

  useEffect(() => {
    fetchmoviess();
  }, []);

  const handleDelete = async (id) => {
    await deletemovies(id);
    fetchmoviess();
  };

  const handleEdit = (movies) => {
    setEditId(movies.no);
    setEditName(movies.name);
    setEditdetail(movies.detail);
    setEditpicture(movies.picture);
  };

  const handleUpdate = async (id) => {
    await updatemovies(id, { name: editName, detail: editdetail, picture: editpicture });
    setEditId(null);
    fetchmoviess();
  };

  return (
    <div>
      <h2> รายชื่อหนัง</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>ชื่อ</th>
            <th>รายละเอียด</th>
            <th>ภาพ</th>
            <th>การจัดการ</th>
          </tr>
        </thead>
        <tbody>
          {moviess.map((movies) => (
            <tr key={movies.no}>
              {editId === movies.no ? (
                <>
                  <td>{movies.no}</td>
                  <td>
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      value={editdetail}
                      onChange={(e) => setEditdetail(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      value={editpicture}
                      onChange={(e) => setEditpicture(e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleUpdate(movies.no)}>บันทึก</button>
                    <button onClick={() => setEditId(null)}>ยกเลิก</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{movies.no}</td>
                  <td>{movies.name}</td>
                  <td>{movies.detail}</td>
                  <td>
                    <img 
                      src={movies.picture} 
                      alt={movies.name} 
                      style={{ width: "100px", height: "auto" }} 
                    />
                  </td>
                  <td>
                    <button onClick={() => handleEdit(movies)}>แก้ไข</button>
                    <button onClick={() => handleDelete(movies.no)}>ลบ</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Managemovies;
