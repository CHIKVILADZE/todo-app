import react from 'react';
import styled from 'styled-components';
import photo from '../assets/photo.jpg'

const HeaderStyle = styled.div`
  width:430px;
  height:202px;
   border-radius: 10px 10px 0px 0px;
  background-image: url(${photo});
  background-size:430px 202px;
  border:1px solid #EEEEEE;
 
  
  `
 
 
function Header({ time, day,date, }){


  



    return(
        <HeaderStyle>
          <div className="date">{day} {date}</div>
          <div className='clock'>{time}</div>
        </HeaderStyle>  
         
            
       

    )
}
export default Header;