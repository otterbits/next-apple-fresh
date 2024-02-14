export default function List() {
  const goods = ['Tomatoes', 'Pasta', 'Coconut'];
  return (
    <div>
      <h2>Products</h2>
      {goods.map(function (good) {
        return (
          <div className="food">
            <h4>{good} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
