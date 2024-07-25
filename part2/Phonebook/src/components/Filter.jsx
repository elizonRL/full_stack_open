const Search = ({Search, setSearch})  =>{
    return(
        <>
        <input
          value={Search}
          onChange={(event) => setSearch(event.target.value)}
        />
        </>
    )
}

export default Search;