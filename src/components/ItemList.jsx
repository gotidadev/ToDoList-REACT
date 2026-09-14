function ItemList({ lists, SetLists }) {
  function DeleteList(id) {
    const filter = lists.filter((e) => e.id != id);
    localStorage.setItem("Names", JSON.stringify(filter));
    SetLists(filter);
  }
  function EditList(id) {
    const listNew = lists.map((list) => {
      if (list.id === id) {
        return { ...list, completed: !list.completed };
      }
      return list;
    });

    SetLists(listNew);
    localStorage.setItem("Names", JSON.stringify(listNew));
  }
  return (
    <ul className="listContainer">
      {lists.length === 0 && <p>Nenhum item</p>}
      {lists.map((list) => (
        <li
          key={list.id}
          className={list.completed ? "listItem active" : "listItem"}
        >
          <span>{list.name}</span>
          <div className="buttons">
            <button
              className="ListDeleteButton"
              onClick={() => DeleteList(list.id)}
            >
              <i className="bi bi-trash-fill"></i>
            </button>
            <button
              className="ListConfirmButton"
              onClick={() => EditList(list.id)}
            >
              <i className="bi bi-check2"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
