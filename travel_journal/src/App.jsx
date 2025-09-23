import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  const comp = data.map((element) => {
    return <Entry key={element.id} {...element} />;
  });

  return (
    <>
      <Header />
      <main className="container">{comp}</main>
    </>
  );
}
