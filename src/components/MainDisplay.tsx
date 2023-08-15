import Card from "./Card";

function MainDisplay() {
  return (
    <section className="MainContainer">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>

        </div>
      </div>
    </section>
  );
}

export default MainDisplay;
