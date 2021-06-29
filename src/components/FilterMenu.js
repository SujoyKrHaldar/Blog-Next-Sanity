const FilterMenu = ({onChange, filter}) => {
    //logic:
    //0-->false, 1---> true 
    //filter = 0
    // !filter = true
    // +true = 1
    // +false = 0 
    // +!filter = 1   

    // filter = 1
    // +!filter = 0

    return (
      <div className="filtering-menu mb-2" >
        <div style={{display:"inline-block",
                    cursor:"pointer", padding:"0.5rem", 
                    background:"black", color:"white"}} 
            onClick={() => {
                onChange("view", {list: +!filter.view.list});
            }}>
          Change View
        </div>
      </div>
    )
  }
  
  export default FilterMenu;
  