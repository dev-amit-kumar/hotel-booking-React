import '../../css/Filter.css'

const RoomFilter = (props) => {
    const filterLogic = (event) => {
        let roomTypeId = event.target.value;
        props.RoomType(roomTypeId)
    }

    return(
        <div className="filterDiv">
            <h6><b>Room Filter</b></h6>
            <div className="filter" onChange={filterLogic}>
                <label className="radio">
                    <input type="radio" value="" name="room"/>All
                </label>
                <label className="radio">
                    <input type="radio" value="1" name="room"/>Deluxe Room
                </label>
                <label className="radio">
                    <input type="radio" value="2" name="room"/>Premium Room
                </label>
                <label className="radio">
                    <input type="radio" value="3" name="room"/>Travel Room
                </label>
                <label className="radio">
                    <input type="radio" value="4" name="room"/>Semi Delux Room
                </label>
            </div>
        </div>
    )
}


export default RoomFilter