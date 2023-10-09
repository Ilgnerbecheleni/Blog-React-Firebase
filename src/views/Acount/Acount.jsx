

function Acount() {

    function handleSubmit(e){
e.preventDefault();
    }
  return (
    <div>
      <h1>Acount</h1>
   <form>
    <div>
        <label >Nome</label><input type="text" />
    </div>
    <div>
        <label >Telefone</label><input type="text" />
    </div>
     <div>
        <input type="file" name="foto" id="foto" />
    </div>
    <button onClick={handleSubmit}>Enviar</button>
   </form>
   
    </div>
  )
}

export default Acount
