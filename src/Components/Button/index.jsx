import "./style.css";
function Button({ type = "Primary", value = "botao", callback }) {
  return (
    <button onClick={callback} className={`Button ${type}`}>
      {value}
    </button>
  );
}
export default Button;
