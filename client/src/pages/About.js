import React from "react";
import "../pages/index.css"
import Profile from "../assets/images/profile.jpg"

const About = () => {
    return (
        <div className="container bg-white">
            <div className="row content-heading">
                <div className="col-md-12">
                    <h1>About Me</h1>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-md-4 img-thumbnail">
                    <img className="profile" src={Profile } alt="Profile"></img>
                </div>
            <div className="col-md-8">
                <p className="paragraph">
                    Wellcome to <b>Sittichai's portfolio</b>, <b>Comming soon,</b> First paragraph example; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aut est perferendis quis quo! Velit, similique pariatur assumenda corporis atque exercitationem commodi minus quos accusamus veritatis minima maxime! Delectus, debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nemo, dicta, impedit natus amet quis reprehenderit voluptate modi nobis praesentium velit. Excepturi error eius laborum reprehenderit modi nam dignissimos quas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae, et necessitatibus amet quidem labore provident sint perspiciatis in pariatur ad doloribus nesciunt obcaecati iste consectetur rerum reprehenderit fuga minus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptatibus ratione, libero explicabo corrupti ipsa neque nisi saepe. Libero aliquid maxime sed minima nisi et suscipit incidunt, fugit ratione optio!
                </p>
            </div>
            </div>
            <p className="paragraph">
                <b>Second paragraph example;</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sunt vel nostrum perspiciatis reprehenderit fugiat saepe illum odio beatae quas sit quis, laboriosam, quae deserunt autem corporis natus praesentium quibusdam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique repudiandae itaque impedit optio magnam voluptatibus minima, iusto ex suscipit, officiis debitis dignissimos atque necessitatibus iure fugiat unde iste assumenda provident.
            </p>
            <p className="paragraph">
                <b>Third paragraph example;</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae, et necessitatibus amet quidem labore provident sint perspiciatis in pariatur ad doloribus nesciunt obcaecati iste consectetur rerum reprehenderit fuga minus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptatibus ratione, libero explicabo corrupti ipsa neque nisi saepe. Libero aliquid maxime sed minima nisi et suscipit incidunt, fugit ratione optio!
          </p>
        </div>
    )
}
export default About;