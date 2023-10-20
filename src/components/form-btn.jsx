import { FaBeer } from "react-icons/fa";
const Btn = (props) =>{
    return(
        <div>
            <buttton className="btn1"><FaBeer />
            {props.text}
            </buttton>
        </div>
    )
}
export default Btn;