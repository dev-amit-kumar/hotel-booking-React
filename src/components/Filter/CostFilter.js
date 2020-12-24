import React,{Component} from 'react';

const costUrl = 'https://developerfunnel.herokuapp.com/hotellist'

class CostFilter extends Component{
    filterLogic = (event) => {
        let cost = event.target.value;
        let tripId = sessionStorage.getItem('tripid');
        let roomurl;
        if(cost===""){
            roomurl = `${costUrl}/${tripId}`
        }else{
            roomurl = `${costUrl}/${tripId}?${cost}`
        }

        fetch(roomurl, {method: 'GET'})
        .then((data) => data.json())
        .then(data => {
            this.props.costType(data)
        })
    }
    render(){
        return(
            <React.Fragment>
                <h4><b>Cost Filter</b></h4>
                <div className="filter" onChange={this.filterLogic}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="hcost=3000&lcost=1000" name="room"/>Rs. 1000 - 3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="hcost=6000&lcost=3001" name="room"/>Rs 3001 - 6000
                    </label>
                    <label className="radio">
                        <input type="radio" value="hcost=12000&lcost=6001" name="room"/>Rs 6001 - 12000
                    </label>
                    <label className="radio">
                        <input type="radio" value="hcost=18000&lcost=12001" name="room"/>Rs 12001 - 18000
                    </label>
                </div>
            </React.Fragment>
        )
    }
}


export default CostFilter