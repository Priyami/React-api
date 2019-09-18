import React from 'react';
import QuestionPage from "./QuestionPage";
import Dice from "./Dice";	
    const Questions = ({ questions , steps }) => {
      console.log(questions);
      const mathQuestions = questions.math || [];
      
        console.log(mathQuestions);
        return (
        <div>
          <center><h1>Questions</h1></center>	
          <div>
          <table id = "tbl1" >
          <tbody>
          <tr id ="row1">
                <td className ="questions" bgcolor="Yellow">
                    <QuestionPage question = {mathQuestions[0]}/>
                </td>
                <td className ="questions">
                  <QuestionPage question = {mathQuestions[1]}/>
                 </td>
                 <td className ="questions" bgcolor="Yellow">
                    <QuestionPage question = {mathQuestions[2]}/>
                 </td>
                <td className ="questions">
                  <QuestionPage question = {mathQuestions[3]}/>
                 </td>
                 <td className ="questions" bgcolor="Yellow">
                    <QuestionPage question = {mathQuestions[5]}/>
                 </td>
                 <td className ="questions">
                    <QuestionPage question = {mathQuestions[6]}/>
                 </td>
                      
          </tr>

          <tr id="row2">
                <td className ="questions">
                    <QuestionPage question = {mathQuestions[8]}/>
                 </td>
                <td className="empty-cell"></td>
                 <td className="empty-cell"></td>
                 <td className="empty-cell"></td>
                 <td className="empty-cell"></td>
                 
                 <td className ="questions">
                    <QuestionPage question = {mathQuestions[9]}/>
                 </td>
                
          </tr>

          <tr id = "row3">
                <td className ="questions" bgcolor="Yellow">
                    <QuestionPage question = {mathQuestions[10]}/>
                 </td>
                <td className="empty-cell"></td>
                 <td className="empty-cell"></td>
                 <td className="empty-cell"><Dice/></td>
                 <td className="empty-cell"></td>

                 
                 <td className ="questions" bgcolor="Yellow">
                   <QuestionPage question = {mathQuestions[11]}/>
                 </td>
                
          </tr>

          <tr id ="row4">
                <td className ="questions">
                    <QuestionPage question = {mathQuestions[12]}/>
                 </td>
                 <td className="empty-cell"></td>
                 <td className="empty-cell"></td>
                 <td className="empty-cell"></td>
                 <td className="empty-cell"></td>
                 <td className ="questions" >
                    <QuestionPage question = {mathQuestions[13]}/>
                 </td>
                
          </tr>

          <tr id ="row5">
                <td  className ="questions" bgcolor="Yellow">
                    <QuestionPage question = {mathQuestions[14]}/>
                 </td>
                <td className ="questions">
                    <QuestionPage question = {mathQuestions[15]}/>
                 </td>
                 <td className ="questions" bgcolor="Yellow">
                    <QuestionPage question = {mathQuestions[16]}/>
                 </td>
                <td className ="questions">
                  <QuestionPage question = {mathQuestions[17]}/>
                 </td>
                 <td  className ="questions" bgcolor="Yellow">
                    <QuestionPage question = {mathQuestions[18]}/>
                 </td>
                 <td className ="questions">
                    <QuestionPage question = {mathQuestions[19]}/>
                 </td>
                 
                
          </tr>
          </tbody>
          </table>
          
        
        
                    
         </div>     
          
         
        </div>
      )
    };
export default Questions
