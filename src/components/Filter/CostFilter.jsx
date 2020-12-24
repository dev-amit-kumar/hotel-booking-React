import '../../css/Filter.css'
const CostFilter = (props) =>{
    const filterLogic = (event) => {
        let cost = event.target.value;
        props.costType(cost)
    }
    return(
        <div className="filterDiv">
            <button className="btn" type="button" data-toggle="collapse" data-target="#collapseCost" aria-expanded="false" aria-controls="collapseCost">
                <h6><b>Cost Filter <i className="fa fa-angle-right" aria-hidden="true"></i></b></h6>
            </button>
            <div className="filter collapse" onChange={filterLogic} id="collapseCost">
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