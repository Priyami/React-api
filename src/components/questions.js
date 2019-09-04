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
                <td id ="dd" className= "questions" bgcolor="Yellow">
                    <QuestionPage question = {mathQuestions[0]}/>
                </td>
                <td className= "questions">
                  <QuestionPage question = {mathQuestions[1]}/>
                 </td>
                 <td className= "questions" bgcolor="Yellow">
                    <QuestionPage question = {mathQuestions[2]}/>
                 </td>
                <td className= "questions">
                  <QuestionPage question = {mathQuestions[3]}/>
                 </td>
                 <td className= "questions" bgcolor="Yellow">
                    <QuestionPage question = {mathQuestions[4]}/>
                 </td>
                
          </tr>
          </tbody>
          </table>
          <table id ="tbl1">
          <tbody>
           <tr id="row2">
                <td className= "questions">
                    <QuestionPage question = {mathQuestions[5]}/>
                 </td>
                <td width = "610" bgcolor="#ffffff">
                  
                 </td>
                 
                 <td className= "questions">
                    <QuestionPage question = {mathQuestions[6]}/>
                 </td>
                
          </tr>
          </tbody>
          </table>
          <table id="tbl3">
          <tbody>
          <tr id = "row3">
                <td className= "questions" bgcolor="Yellow">
                    <QuestionPage question = {mathQuestions[7]}/>
                 </td>
                <td width = "610" bgcolor="#ffffff">
                  </td>
                 
                 <td className= "questions" bgcolor="Yellow">
                   <QuestionPage question = {mathQuestions[8]}/>
                 </td>
                
          </tr>
          </tbody>
          </table>
          <table id ="tbl4">
          <tbody>
         <tr id ="row4">
                <td className= "questions">
                    <QuestionPage question = {mathQuestions[9]}/>
                 </td>
                <td width = "610" bgcolor="#ffffff">
                  
                 </td>
                 
                 <td className= "questions">
                    <QuestionPage question = {mathQuestions[1]}/>
                 </td>
                
          </tr>
          </tbody>
          </table>
          <table id ="tbl5">
          <tbody>
          <tr id ="row5">
                <td className= "questions" bgcolor="Yellow">
                    <QuestionPage question = {mathQuestions[1]}/>
                 </td>
                <td className= "questions">
                    <QuestionPage question = {mathQuestions[1]}/>
                 </td>
                 <td className= "questions" bgcolor="Yellow">
                    <QuestionPage question = {mathQuestions[1]}/>
                 </td>
                <td className= "questions">
                  <QuestionPage question = {mathQuestions[1]}/>
                 </td>
                 <td  className= "questions" bgcolor="Yellow">
                    <QuestionPage question = {mathQuestions[1]}/>
                 </td>
                
          </tr>
          </tbody>
          </table>
        
        
                    
              
          
         
        </div>
      )
    };
export default Questions
