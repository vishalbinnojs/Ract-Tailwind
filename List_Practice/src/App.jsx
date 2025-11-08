import "./App.css";
import data from "./data.json";
import Card from "./Card";
function App() {
  return (
    <>
      <h1 className="text-center bg-black text-2xl p-2 text-gray-200">
        List Practice
      </h1>

      {data.map((obj, i) => (
        <div className="outer px-4">
          <Card
            key={i}
            title={obj.title}
            image={obj.image}
            rating={obj.rating}
            reviews={obj.reviews}
            price={obj.price}
            originalPrice={obj.originalPrice}
            discount={obj.discount}
            offers={obj.offers}
            details={obj.details}
          />
        </div>
      ))}
    </>
  );
}

export default App;
