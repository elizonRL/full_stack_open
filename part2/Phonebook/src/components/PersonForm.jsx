const PersonForm = ({name, setName, number, setNumber, onSubmit}) => {

  return (
    <>
    <form onSubmit={onSubmit}>
        <div>
            Name:
            <input value={name} onChange={(event)=> setName(event.target.value)} />
        </div>
        <div>
            Number: 
            <input value={number} onChange={(event)=>setNumber(event.target.value)} />
        </div>
        <div>
            <button>Add</button>
        </div>
    </form>
    </>
  );
};

export default PersonForm;
