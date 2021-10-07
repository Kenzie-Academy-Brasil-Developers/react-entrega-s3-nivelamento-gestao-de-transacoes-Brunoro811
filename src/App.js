import "./App.css";
import Form from "./Components/Form";
import { useState } from "react";
import Nav from "./Components/Nav";
import Display from "./Components/Display";
import { useEffect } from "react";

function App() {
  const [isEntrada, setIsEntrada] = useState(false);
  const [isSaida, setIsSaida] = useState(false);

  const [name, setName] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");
  const [saidaFruts, setSaidaFruts] = useState([]);
  const [fruits, setFruits] = useState([
    {
      name: "Banana",
      quantidade: 10,
      valor: 10.0,
      condition: "",
    },
    {
      name: "Maça",
      quantidade: 12,
      valor: 14.0,
      condition: "",
    },
    {
      name: "Mamão",
      quantidade: 8,
      valor: 4.5,
      condition: "",
    },
  ]);
  const handleOcultarForms = () => {
    setIsSaida(false);
    setIsEntrada(false);
  };
  const handleIsEntrada = () => {
    setIsSaida(false);
    setIsEntrada(true);
  };
  const handleIsSaida = () => {
    setIsEntrada(false);
    setIsSaida(true);
  };
  const handleEntrada = () => {
    setFruits([
      ...fruits,
      {
        name: name,
        quantidade: quantidade,
        valor: valor,
        condition: "entrada",
      },
    ]);
    setName("");
    setQuantidade("");
    setValor("");
  };
  const handleSaida = () => {
    setFruits(
      fruits.map((element) =>
        element.name === name
          ? {
              ...element,
              quantidade: element.quantidade - quantidade,
            }
          : element
      )
    );
    setSaidaFruts([
      ...saidaFruts,
      {
        name: name,
        quantidade: quantidade,
        condition: "saida",
      },
    ]);
    setName("");
    setQuantidade("");
  };

  useEffect(() => {
    setSaidaFruts(saidaFruts);
  }, [saidaFruts]);
  return (
    <div className="App App-header">
      <Nav
        handleOcultarForms={handleOcultarForms}
        handleIsEntrada={handleIsEntrada}
        handleIsSaida={handleIsSaida}
        isEntrada={isEntrada}
        isSaida={isSaida}
      />

      {isEntrada && (
        <Form
          callback={handleEntrada}
          title={"Cadastrar Entrada"}
          name={name}
          setName={setName}
          quantidade={quantidade}
          setQuantidade={setQuantidade}
          valor={valor}
          setValor={setValor}
        />
      )}
      {isSaida && (
        <Form
          callback={handleSaida}
          title={"Cadastrar Saida"}
          name={name}
          setName={setName}
          quantidade={quantidade}
          setQuantidade={setQuantidade}
          valor={valor}
          setValor={setValor}
          isSaida
        />
      )}
      <Display
        setSaidaFruts={setSaidaFruts}
        saidaFruts={saidaFruts}
        arrayFruits={fruits}
      />
    </div>
  );
}

export default App;
