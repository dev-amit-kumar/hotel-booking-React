import '../../css/Filter.css'
const CostSort = (props) =>{
    const sortLogic = (event) => {
        let cost = event.target.value;
        if(cost === 'high_low' && props.costSortType !== 'high_low'){
            props.hotel_list.reverse()
        }
        else if(cost === 'low_high' && props.costSortType !== 'low_high'){
            props.hotel_list.reverse()
        }
        props.all_hotel(props.hotel_list, cost)
    }
    return(
        <div className="filterDiv">
            <button className="btn" type="button" data-toggle="collapse" data-target="#collapseCostSort" aria-expanded="false" aria-controls="collapseCostSort">
                <h6><b>Cost <i className="fa fa-angle-right" aria-hidden="true"></i></b></h6>
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