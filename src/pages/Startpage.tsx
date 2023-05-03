import { Header } from "../components/Header/Header";

export const Startpage = () => {
  return (
    <>
      <Header></Header>
      <main className="startpage">
        <h1>Välkommen!</h1>
        <img
          className="start-image"
          src="https://img.freepik.com/free-vector/group-wild-animals_1308-43813.jpg?w=1800&t=st=1683060233~exp=1683060833~hmac=b9cb2c4f063d730857a95de0ae808b45741f6352fe48982afd5c43705261a520"
        />
      </main>
    </>
  );
};
