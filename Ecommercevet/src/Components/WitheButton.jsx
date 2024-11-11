import { useNavigate } from "react-router-dom";

function WhiteButton() {
  const navigate = useNavigate();
  return (
    <button className="whitebtn" onClick={() => navigate("/Boutique")}>
      Accéder à la boutique
    </button>
  );
}
export default WhiteButton;
