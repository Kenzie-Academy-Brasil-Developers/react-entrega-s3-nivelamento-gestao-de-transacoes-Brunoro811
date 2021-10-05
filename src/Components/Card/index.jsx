import "./style.css";
function Card({
  item: { name = "vazio", quantidade = "vazio", valor = false },
}) {
  return (
    <ul className="Card">
      <li className="Card-Item">{name}</li>
      <li className="Card-Item">Quant: {quantidade}</li>
      {valor && <li className="Card-Item">R${valor}</li>}
    </ul>
  );
}
export default Card;
