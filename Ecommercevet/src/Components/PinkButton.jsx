import { useNavigate } from "react-router-dom";

function PinkButton({ title }) {
  const navigate = useNavigate();
  return (
    <button className="pinkButton" onClick={() => navigate("/Boutique")}>
      {title}
    </button>
  );
}
export default PinkButton;
