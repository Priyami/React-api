import React from 'react';
import QuestionPage from "./QuestionPage";
 

    const Questions = ({ questions }) => {
      console.log(questions);
      const mathQuestions = questions.math || [];
        console.log(mathQuestions);
        return (
        <div>
          <center><h1>Questions</h1></center>
          <table id = "tbl1">
          <tbody>
          <tr id ="row1">
                <td id ="dd" bgcolor="#FF0000">
                    <QuestionPage question = {mathQuestions[0]}/>
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
