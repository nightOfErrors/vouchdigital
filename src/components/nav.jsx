import { Button } from 'antd';
import '../nav.css';

const Nav = () => {



    return ( 
        <div style={{width:'100%', display:'flex', justifyContent:'space-between'}}>

            <b id="navTitle"><p style={{color:'#023047'}}>ATools</p><p style={{color:"#FB8500"}}>.</p></b>

            <div style={{display:'flex', marginRight:'40px', marginTop:'10px'}}>
                <Button className="navButton" style={{backgroundColor:'#023047', color:'white', width:'150px'}}>Start Free Trial</Button>
                <Button className="navButton" style={{backgroundColor:'#FB8500', color:'white', marginLeft:'10px', width:'150px'}}>Login</Button>
            </div>

        </div>
     );
}
 
export default Nav;