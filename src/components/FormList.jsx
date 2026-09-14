function FormList({ SetLists }) {

  /**
   * Envia o formulário.
   * @param {SubmitEvent} e
   * @returns {void}
   */

  function EnviarForm(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("Name");
    if(name.trim().length === 0) return;
    const NewItem = {
      name:name,
      id:Date.now(),
      completed:false
    }
    SetLists(prevs => {
      const newlist = [...prevs,NewItem]
      localStorage.setItem("Names",JSON.stringify(newlist))
      return newlist
    })
     
  }
  return (
    <form onSubmit={EnviarForm}>
      <input type="text" className="input" name="Name" placeholder="Nome" />
      <button type="submit">Concluir</button>
    </form>
  );
}

export default FormList;
