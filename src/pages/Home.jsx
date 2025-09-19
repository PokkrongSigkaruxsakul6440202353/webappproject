import { Link, useNavigate  } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>ยินดีต้อนรับสู่หน้า HomePage</h1>
      <p>หน้านี้จะไม่แสดงเมนูนำทาง (nav)</p>

      {/* แบบลิงก์ */}
      <p>
        <Link to="/moviesListpage">ไปที่หน้าข้อมูลหนัง</Link>
      </p>
      <p>
        <Link to="/insertmoviespage">insert </Link>
      </p>

      {/* แบบปุ่มใช้ navigate */}
      <button onClick={() => navigate("/moviesListpage")}>
        ไปหน้า MoviesList (ด้วยปุ่ม)
      </button>
    </div>
  );
}

export default HomePage;