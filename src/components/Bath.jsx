function Bath(props){
    return (
        <div className="Bath" id={"bath" + props.size}>
        <h5>{props.size} Bath</h5>
        </div>
    );
}
export default Bath;