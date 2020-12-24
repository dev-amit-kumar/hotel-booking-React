import '../../css/Filter.css'
const CostFilter = (props) =>{
    const filterLogic = (event) => {
        let cost = event.target.value;
        props.costType(cost)
    }
    return(
        <div className="filterDiv">
            <h6><b>Cost Filter</b></h6>
            <div className="filter" onChange={filterLogic}>
                <label className="radio">
                    <input type="radio" value="" name="cost" />All
                </label>
                <label className="radio">
                    <input type="radio" value="hcost=3000&lcost=1000" name="cost"/>Rs. 1000 - 3000
                </label>
                <label className="radio">
                    <input type="radio" value="hcost=6000&lcost=3001" name="cost"/>Rs 3001 - 6000
                </label>
                <label className="radio">
                    <input type="radio" value="hcost=12000&lcost=6001" name="cost"/>Rs 6001 - 12000
                </label>
                <label className="radio">
                    <input type="radio" value="hcost=18000&lcost=12001" name="cost"/>Rs 12001 - 18000
                </label>
            </div>
        </div>
    )
}


export default CostFilter