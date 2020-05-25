import React from "react";
import ln from "../assets/images/ln.png";
import Code from "../assets/images/codequiz.jpg";
import Git from "../assets/images/git.png";
import Password from "../assets/images/password.png";
import Beach from "../assets/images/beach.jpg";
import Event from "../assets/images/event.png";

const Portfolio = () => {
  return (
    <div class='container justify-content-around bg-white'>
      <div class='content-heading'>
        <h1>Portfolio</h1>
      </div>
      <hr></hr>
      <table>
        <tr class='row justify-content-around'>
          <td>
            <div className='link'>
              <a href='https://github.com/Sittichai-nu'>
                <img
                  className='col-bg-4 com-me-6 col-xs-12 im img-thumbnail'
                  src={Git}
                  alt=''
                ></img>
              </a>
            </div>
          </td>
          <td>
            <div className='link'>
              <a href='https://www.linkedin.com/in/sittichai-chaikamol-451165196/'>
                <img
                  className='col-bg-4 com-me-6 col-xs-12 im img-thumbnail'
                  src={ln}
                  alt=''
                ></img>
              </a>
            </div>
          </td>
          <td>
            <img
              className='col-bg-4 com-me-6 col-xs-12 im img-thumbnail'
              src={Beach}
              alt=''
            ></img>
            <div className='tx'>
              <a id='link' href=' https://thawing-wave-27550.herokuapp.com/'>
                Vaendio Project
              </a>
            </div>
          </td>
        </tr>
        <tr class='row'>
          <td>
            <img
              className='col-bg-4 com-me-6 col-xs-12 im img-thumbnail'
              src={Event}
              alt=''
            ></img>
            <div className='tx'>
              <a id='link' href=' https://leola90.github.io/eventspite/'>
                Event Spite Project
              </a>
            </div>
          </td>
          <td>
            <img
              className='col-bg-4 com-me-6 col-xs-12 im img-thumbnail'
              src={Code}
              alt=''
            ></img>
            <div className='tx'>
              <a id='link' href='https://sittichai-nu.github.io/Code-Quiz/'>
                JavaScript coding Quiz
              </a>
            </div>
          </td>
        </tr>
        <tr class='row'>
          <td>
            <img
              className='col-bg-4 com-me-6 col-xs-12 im img-thumbnail'
              src={Beach}
              alt=''
            ></img>
            <div className='tx'>
              <a id='link' href='https://afternoon-eyrie-97010.herokuapp.com/'>
                Fitness Tracker
              </a>
            </div>
          </td>
          <td>
            <img
              className='col-bg-4 com-me-6 col-xs-12 im img-thumbnail'
              src={Password}
              alt=''
            ></img>
            <div className='tx'>
              <a
                id='link'
                href='https://sittichai-nu.github.io/Password-Generator/'
              >
                Password-Generator
              </a>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default Portfolio;
