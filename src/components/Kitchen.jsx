import Sink from "./Sink";
import Oven from "./Oven";

function Kitchen (props){
    return (
        <div className="Kitchen">
            <Oven />
            <Sink />
            <h5>Kitchen</h5>
        </div>
    );
}
export default Kitchen;