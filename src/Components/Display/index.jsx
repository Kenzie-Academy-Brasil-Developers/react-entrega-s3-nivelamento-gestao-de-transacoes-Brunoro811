import { useEffect, useState } from "react";
import Button from "../Button";
import Card from "../Card";
import "./style.css";
function Display({ arrayFruits, saidaFruts }) {
  const [fruitsFiltered, setFruitsFiltered] = useState([]);
  const [isModified, setIsModified] = useState(
    arrayFruits.filter((element) => element.condition)
  );
  const [title, setTitle] = useState("title");
  const loadMovi = () => {
    setIsModified(arrayFruits.filter((element) => element.condition));
  };
  const handleTodosDisplay = () => {
    setTitle("Todos");
    setFruitsFiltered(arrayFruits.map((element) => element));
    loadMovi();
  };
  const handleEntradasDisplay = () => {
    setTitle("Entradas de frutas");
    setFruitsFiltered(
      arrayFruits.filter((element) => element.condition === "entrada")
    );
    loadMovi();
  };
  const handleSaidasDisplay = () => {
    setTitle("Saidas");
    setFruitsFiltered(
      saidaFruts.filter((element) => element.condition === "saida")
    );
    loadMovi();
  };
  useEffect(() => {
    handleTodosDisplay();
  }, []);
  useEffect(() => () => {}, []);
  return (
    <>
      <div className="Display">
        <p className="Instrucoes">
          Click nos Cards para atualizar uma entrada ou saída!
        </p>
        <ul className="Nav">
          <li className="Nav-Item">
            <Button callback={handleTodosDisplay} value={"Todos"} />
          </li>
          <li className="Nav-Item">
            <Button callback={handleEntradasDisplay} value={"Entradas"} />
          </li>
          <li className="Nav-Item">
            <Button callback={handleSaidasDisplay} value={"Saidas"} />
          </li>
        </ul>
        {fruitsFiltered[0] && <h3>{title}</h3>}
        {fruitsFiltered.map((element, indice) => (
          <Card key={indice} item={element} />
        ))}
        {!fruitsFiltered[0] && <p>Sem Frutas!</p>}
      </div>
      <div className="Display">
        <h3>Motimentaçoes</h3>
        {isModified[0] &&
          isModified.map((element, indice) => (
            <Card key={indice} item={element} />
          ))}
        {saidaFruts[0] &&
          saidaFruts.map((element, indice) => (
            <Card key={indice} item={element} />
          ))}
        {!isModified[0] && <p>Sem modificações!</p>}
      </div>
    </>
  );
}
export default Display;
