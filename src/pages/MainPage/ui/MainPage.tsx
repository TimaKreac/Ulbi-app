import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  return <div onClick={() => navigate("/about")}>MainPage</div>;
}
