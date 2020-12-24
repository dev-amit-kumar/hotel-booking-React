import '../../css/Filter.css'
var sortJsonArray = require('sort-json-array');
const CostSort = (props) =>{
    const sortLogic = (event) => {
        let cost = event.target.value;
        if(cost === 'high_low'){
            sortJsonArray(props.hotel_list,'cost','des')
        }
        else if(cost === 'low_high'){
            sortJsonArray(props.hotel_list,'cost','asc')
        }
        props.all_hotel(props.hotel_list)
    }
    return(
        <div className="filterDiv">
            <button className="btn" type="button" data-toggle="collapse" data-target="#collapseCostSort" aria-expanded="false" aria-controls="collapseCostSort">
                <h6><b>Sort Cost <i className="fa fa-angle-right" aria-hidden="true"></i></b></h6>
            </button>
            <div className="filter collapse" onChange={sortLogic} id="collapseCostSort">
                <label className="radio">
                    <input type="radio" value="high_low" name="cost"/>High to Low
                </label>
                <label className="radio">
                    <input type="radio" value="low_high" name="cost"/>Low to High
                </label>
            </div>
        </div>
    )
}


export default CostSort