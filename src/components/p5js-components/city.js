import React from 'react';
import p5 from 'p5';
import '../projects.css';

/* This component is a drawing of a city with falling stars and an airplane passing through the sky */

class City extends React.Component {
     constructor(props) {
          super(props);
          this.myRef = React.createRef();
     }
     Sketch = ( sketch ) => {
          let xPos = 10;
          let yPos = 10;
          let xPlane = 0;
          let yPlane = 50;
          let width = 400;
          let height = 400;
        
          sketch.setup = () => {
               sketch.createCanvas(width, height);
          };
          sketch.draw = () => {
               sketch.background(29, 40, 115);
               //star drawings
               sketch.fill(255, 242, 0);
               sketch.ellipse(xPos, yPos, 10, 10);//star 1
               sketch.ellipse(xPos+50, yPos, 10, 10);//star 2
               sketch.ellipse(xPos+100, yPos, 10, 10);//star 3
               sketch.ellipse(xPos+150, yPos, 10, 10);//star 4
               sketch.ellipse(xPos+200, yPos, 10, 10);//star 5
               //if/else statement that has the stars fall to the bottom of the canvas and then reset to the beginning 
               if (yPos >= height) {
                    yPos -= height;
                    xPos -= width;
               } else {
                    xPos+=5;
                    yPos+=5;
               };
               //plane drawing
               sketch.fill(255, 255, 255);
               sketch.ellipse(xPlane+10, yPlane,70, 25);//plane body
               sketch.ellipse(xPlane+20, yPlane, 20, 60);//plane wings
               //reset plane movement using if/else statement
               if (xPlane >= width){
                    xPlane -= width;
               } else {
                    xPlane++;
               };
               //city at night background, buildings colored black in the shadow of the sky
               sketch.fill(0, 0, 0);
               sketch.rect(0, 300, 50, 100);//building 1
               sketch.rect(50, 250, 75, 150);//building 2
               sketch.rect(130,300, 45, 100);//building 3
               sketch.rect(175,200, 50, 200);// building 4
               sketch.rect(225, 250, 50, 150);// building 5
               sketch.rect(275, 325, 75, 75);//building 6
          };
     };
     componentDidMount() {
          this.myP5 = new p5(this.Sketch, this.myRef.current)
     }
     render() {
          return (
               <div className="projects"> 
                    <div ref={this.myRef}>
                    </div>
                     <p class="project-info">
                         The second project was to show my new knowledge of variables and basic animation skills.
                         When transferring it to my portfolio, I added in "If/Else" statements to keep the animation looping for the viewer.
                    </p>
               </div>
          );
     }
}
  
  export default City;