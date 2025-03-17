function List(props) {
  const category = props.category;
  const itemList = props.items;

  const fruitsList = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{fruitsList}</ol>
    </>
  );
}

export default List;
