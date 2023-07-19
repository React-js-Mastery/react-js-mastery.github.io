import '../../../App.css'
function Contect(){
    const github = <a style={{textDecoration:'none'}} href="https://github.com/Ajay-Dhangafr">@Ajay-Dhangar</a>
    const linkedIn = <a href="https://linkedin.com.in/ajay-dhangar">@AjayDhangar</a>
 const myStyle = {textAlign:'center', fontSize:'20px'}

    return (

        <>
            <h2 style={{textAlign:'center'}}>Contect Us</h2>

            <ul style={myStyle} className="myNewStyle">
                <li>Github: {github}</li>
                <li>LinkedIn: {linkedIn}</li>
            </ul>

        </>
    )

}
export default Contect;