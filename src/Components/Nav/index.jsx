import Button from "../Button";
import "./style.css";
function Nav({
  handleIsEntrada,
  handleIsSaida,
  handleOcultarForms,
  isSaida,
  isEntrada,
}) {
  return (
    <ul className="Nav">
      <li className="Nav-Item">
        <Button callback={handleOcultarForms} value={"Ocultar"} />
      </li>
      {!isEntrada && (
        <li className="Nav-Item">
          <Button callback={handleIsEntrada} value={"Entrada"} />
        </li>
      )}
      {isEntrada && (
        <li className="Nav-Item">
          <Button callback={handleIsSaida} value={"Saida"} />
        </li>
      )}
    </ul>
  );
}
export default Nav;
