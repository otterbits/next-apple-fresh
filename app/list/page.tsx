export default function List() {
  const goods = ['Tomatoes', 'Pasta', 'Coconut'];
  return (
    <div>
      <h2>Products</h2>
      {goods.map(function (good, i) {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img"></img>
            <h4>{good} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
