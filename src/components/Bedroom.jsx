function Bedroom (props){
    return (
        <div className="Bedroom" id={"bedroom" + props.size}>
            <h5>Bedroom{props.bedNum}</h5>
        </div>
    );
}
export default Bedroom;