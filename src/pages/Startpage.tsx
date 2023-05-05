import { Header } from "../components/Header/Header";

export const Startpage = () => {
  return (
    <>
      <Header></Header>
      <main className="startpage">
        <img
          className="start-image"
          src="https://www.torebrings.se/bilder/artikelbilder/17/17230mega.jpg"
        />
      </main>
    </>
  );
};
