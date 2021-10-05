import Button from "../Button";
import "./style.css";
function Form({
  title = "titulo",
  name,
  setName,
  quantidade,
  setQuantidade,
  valor,
  setValor,
  callback,
  isSaida = false,
}) {
  return (
    <div className="Form">
      <h2 className="Form-H2">{title}</h2>
      <div className="Form-Inputs">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          type="text"
          placeholder="Nome"
        />

        <input
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          className="input"
          type="text"
          placeholder="Quantidade"
        />
        {!isSaida && (
          <input
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className="input"
            type="text"
            placeholder="Valor"
          />
        )}
        <Button callback={callback} type={"Primary"} value={"Enviar"} />
      </div>
    </div>
  );
}
export default Form;
