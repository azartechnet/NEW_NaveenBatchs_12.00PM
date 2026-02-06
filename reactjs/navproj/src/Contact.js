import { useNavigate } from "react-router-dom";
function Contact()
{
    const navigate = useNavigate();
    return(
        <div>
            <h1>Contact Page</h1>
            <button onClick={()=>navigate("/")}>Go to Home</button>
            <button onClick={()=>navigate("/about")}>Go to About</button>
        </div>
    )
}

export default Contact;