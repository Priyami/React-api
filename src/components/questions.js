import React from 'react';
 

    const Questions = ({ questions }) => {
      console.log(questions);
      console.log(questions[0]);
      var vc = JSON.parse(questions);
      console.log(vc[0]); 


      return (
        <div>
          <center><h1>Questions</h1></center>
          <table id = "tbl1">
          <tbody>
          <tr id ="row1">
                <td id ="dd" bgcolor="#FF0000">
assasdasdadad                 </td>
                <td bgcolor="#00FF00">
                  second column
                 </td>
                 <td bgcolor="#FF0000">
                    first column
                 </td>
                <td bgcolor="#00FF00">
                  second column
                 </td>
                 <td bgcolor="#FF0000">
                    first column
                 </td>
                
          </tr>
          </tbody>
          </table>
          <table id ="tbl1">
          <tbody>
           <tr id="row2">
                <td bgcolor="#FF0000">
                    first column
                 </td>
                <td width = "313" bgcolor="#ffffff">
                  
                 </td>
                 
                 <td bgcolor="#FF0000">
                    first column
                 </td>
                
          </tr>
          </tbody>
          </table>
          <table id="tbl3">
          <tbody>
          <tr id = "row3">
                <td bgcolor="#FF0000">
                    first column
                 </td>
                <td width = "313" bgcolor="#ffffff">
                  
                 </td>
                 
                 <td bgcolor="#FF0000">
                    first column
                 </td>
                
          </tr>
          </tbody>
          </table>
          <table id ="tbl4">
          <tbody>
         <tr id ="row4">
                <td bgcolor="#FF0000">
                    first column
                 </td>
                <td width = "313" bgcolor="#ffffff">
                  
                 </td>
                 
                 <td bgcolor="#FF0000">
                    first column
                 </td>
                
          </tr>
          </tbody>
          </table>
          <table id ="tbl5">
          <tbody>
          <tr id ="row5">
                <td bgcolor="#FF0000">
                    first column
                 </td>
                <td bgcolor="#00FF00">
                  second column
                 </td>
                 <td bgcolor="#FF0000">
                    first column
                 </td>
                <td bgcolor="#00FF00">
                  second column
                 </td>
                 <td bgcolor="#FF0000">
                    first column
                 </td>
                
          </tr>
          </tbody>
          </table>
        
        
                    
              
          
         
        </div>
      )
    };
export default Questions
