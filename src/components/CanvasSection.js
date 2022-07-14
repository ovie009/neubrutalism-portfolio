import '../css/CanvasSection.css';
import { useRef, useLayoutEffect, useState } from 'react';
// import randomInteger from '../utils/randomInteger';
// import randomFloat from '../utils/randomFloat';
// import distanceBetween from '../utils/distanceBetween';

const minBall = 50;
const maxBall = 60;
const minBlank = 5;
const maxBlank = 20;

const draw = (ctx, cw, ch, balls) => {
    ctx.clearRect(0, 0, cw, ch)
    balls.forEach(ball => {
        ctx.font = ball.fontSize+'px '+ball.fontFace; //set font property
        ctx.beginPath(); // beginn draw path
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2); // draw arc
        ctx.closePath(); // close path
        ctx.lineWidth = 2; //set linewidth
        // set properties for balls with fill type
        if (ball.type === "fill") { 
            ctx.fillStyle = ball.ballFill; // ball fill color
            ctx.strokeStyle = ball.ballStroke; // ball stroke colour
            ctx.fill(); // fill ball
            ctx.stroke(); // stroke ball
            ctx.fillStyle = ball.fontColor; // font color to write the text with
        } else if (ball.type === "stroke") { // set properties for balls with stroke type
            ctx.strokeStyle = ball.ballStroke; // stroke colour
            ctx.stroke(); // stroke ball
            ctx.fillStyle = ball.ballStroke; // font color to write the text with
        }
            
        ctx.textBaseline = "center"; // set text position
        if ( ball.numberOfWords === 1 ) { // text placement in the ball if it has only 1 word
            
            for (let i = 0; i < ball.words.length; i++) { //looping through the number of words for redundacy, already know its 1
                let textY = ball.y + ball.fontSize/4; // y position of the text
                let textX = ball.x - 2 - ball.wordWidths[i]/2; // x position of the text
                
                // if the word isn't "blank", fillText
                if (ball.words[i] !== "blank") {
                    ctx.fillText(ball.words[i], textX, textY);
                }
                
            }
            
        } else if ( ball.numberOfWords === 2 ){ // text placement of the ball if it has 2 words
            let textY = ball.y - ball.fontSize/4; // y position of the text
            for (let i = 0; i < ball.words.length; i++) {
                let textX = ball.x - 2 - ball.wordWidths[i]/2;
                ctx.fillText(ball.words[i], textX, textY);
                textY = textY + 16;
            }
        }
    });
}

const randomInteger = (min, max) => {
    return Math.round((Math.random() * (max - min)) + min);
}

const randomFloat = (min, max) => {
    return (Math.random() * (max - min)) + min;
}

// function to get distance between two balls
const distanceBetween = (x1, x2, y1, y2) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

const resizeCanvasToDisplaySize = (canvas) => {
    
    const { width, height } = canvas.getBoundingClientRect();

    // maximum possible area of text balls
    let averageRadius = (maxBall + minBall) / 2;
    let averageBlankRadius = (maxBlank + minBlank) / 2;

    let maxAreaOfBalls = averageRadius * averageRadius * Math.PI * myStack.length;
    let maxAreaOfBlankBalls = averageBlankRadius * averageBlankRadius * Math.PI * myStack.length;

    // let totalPossibleOccupiedArea = maxAreaOfBalls;
    let totalPossibleOccupiedArea = maxAreaOfBlankBalls + maxAreaOfBalls;
    // console.log("🚀 ~ file: CanvasSection.js ~ line 80 ~ resizeCanvasToDisplaySize ~ totalPossibleOccupiedArea", totalPossibleOccupiedArea)

    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        let areaOfCanvas = width * height;
        // console.log("🚀 ~ file: CanvasSection.js ~ line 86 ~ resizeCanvasToDisplaySize ~ areaOfCanvas", areaOfCanvas)
        // checking if the canvas can contain the balls to be generated
        while (totalPossibleOccupiedArea > areaOfCanvas) {
            canvas.height += 50;
            areaOfCanvas = canvas.width * canvas.height;
            // console.log("🚀 ~ file: CanvasSection.js ~ line 86 ~ resizeCanvasToDisplaySize ~ areaOfCanvas", areaOfCanvas)
        }
        // return true // here you can return some usefull information like delta width and delta height instead of just true
        // ball information can be used in the next redraw...
    }

    return [canvas.width, canvas.height];
}


const rotate = (velocity, angle) => {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}

const resolveCollision = (particle, otherParticle) => {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
    }

}


// array storing all the stack text
let  myStack = [
    { 
        text:"HTML",
        textColor: "#ffffff",
        fillColor: "#f37646",
    },
    { 
        text:"JavaScript",
        textColor: "#ffffff",
        fillColor: "#ffca3e",
    },
    { 
        text:"CSS",
        textColor: "#ffffff",
        fillColor: "#009ce6",
    },
    { 
        text:"PHP",
        textColor: "#232531",
        fillColor: "#8993be",
    },
    { 
        text:"SASS",
        textColor: "#ffffff",
        fillColor: "#cd669a",
    },
    { 
        text:"BootStrap",
        textColor: "#ffffff",
        fillColor: "#563d7c",
    },
    { 
        text:"SQL",
        textColor: "#ffffff",
        fillColor: "#157efb",
    },
    { 
        text:"Figma",
        textColor: "#ffffff",
        fillColor: "#ff3b00",
    },
    { 
        text:"Arduino",
        textColor: "#ffffff",
        fillColor: "#149399",
    },
    { 
        text:"Fritzing",
        textColor: "#ffffff",
        fillColor: "#d63222",
    },
    { 
        text:"<canvas/>",
        textColor: "#ffffff",
        fillColor: "#ff6347",
    },
    { 
        text:"AJAX",
        textColor: "#2f8bcb",
        fillColor: "#404040",
    },
    { 
        text:"JQuery",
        textColor: "#ffffff",
        fillColor: "#1e2e3b",
    },
    { 
        text:"React",
        textColor: "#61dbfb",
        fillColor: "#1e2e3b",
    },
    { 
        text:"MySQL",
        textColor: "#0075bf",
        fillColor: "#f29111",
    },
    { 
        text:"ChakraUI",
        textColor: "#ffffff",
        fillColor: "#3bc7be",
    },
]

// color array storing the color of blank balls
const colorArray = [
    "#f37646",
    "#ffca3e",
    "#009ce6",
    "#8993be",
    "#232531",
    "#cd669a",
    "#563d7c",
    "#157efb",
    "#ff3b00",
    "#149399",
    "#d63222",
    "#ff6347",
    "#2f8bcb",
    "#1e2e3b",
    "#61dbfb",
    "#0075bf",
    "#f29111",
    "#3bc7be",
]


for (let i = 0; i < colorArray.length; i++) {
    myStack.push({ 
        text:"blank",
        textColor: "",
        fillColor: colorArray[i],
    });
}

const createBalls = (ctx, cw, ch) => {
    let balls = [];
    let fontSize = 18; // set font size
    let responsiveFactor = 1; // variable to increase font size for bigger screens
    
    let numberOfStackBalls = myStack.length;
    for (let i = 0; i < numberOfStackBalls; i++) {
        let text = myStack[i].text; //select stack text
        let fontFace='Bebas Neue'; // set font family
        // let lineHeight=parseInt(fontSize*1.286); // get line height
        let words = text.split('_'); // split two words text where '_' appears and store the resulting array in words variable
        let numberOfWords = words.length; // get the number of words in words array
        let wordWidths=[]; // array to store the width of each word in the words array
        for(let i=0;i<words.length;i++){ wordWidths.push(ctx.measureText(words[i]).width * responsiveFactor); } // store word width in wordWidths array
        let radius; // declare radius variable, which determines the radius of the balls
        if (text === "blank"){ // if text is "blank" generate radius of smaller sizes
            // small circle
            radius = randomInteger(minBlank, maxBlank);
        }else{ // else auto generate the radius for everything else
            radius = randomFloat(minBall, maxBall); // first of all, auto generate a non integer radius between 3minBlank maxBlank 42
            wordWidths.forEach(width => {
                // if wordWidths is creater than diameter of the ball, increase the radius by 15px more than the wordWidth
                if (width > (2*radius - 5)) {
                    radius = width/2 + 15;
                }
            });
            
        }
        // generating random values for each of the properties of the snow ball
        // generating random x position within the canvas width, taking the radius of the ball into account
        let x = randomInteger(radius, cw - radius);
        // generating random y position within the canvas width, taking the radius of the ball into account
        let y = randomInteger(radius, ch - radius);
        // generating random speed in both x and y direction between -0.9 and 0.9
        let dx = randomFloat(-0.9, 0.9);
        let dy = randomFloat(-0.9, 0.9);
        let velocity = {
            x: dx,
            y: dy
        }

        // type of balls to be displayed in the canvas, stroke and fill
        // stroke balls have a stroke around the diameter
        // fill has a solid color fill
        // the type of ball would be selected from this array at random
        //  at a ration of 4:1 in favour of the stroke
        let typeArray = [
            "stroke",
            "fill",
            "fill",
            "stroke",
            "stroke"
        ];

        // select ball type
        let type = typeArray[randomInteger(0, 4)]

        // select defaul colours
        let fontColor = myStack[i].textColor; // lightest colour in the array as font colour
        let ballStroke = myStack[i].fillColor; // select any colour from the 4 darkest colour as stroke color
        let ballFill = ballStroke; // let stroke colour be equall to fill colour

        let mass = 1;
        // set mass of ball, useful for elastic collision function
        
        // function to check if the new ball is spawned on top of another ball
        // if it is generate new position for x and y
        if (i !== 0) {
            for (let j = 0; j < balls.length; j++) {
                if ( distanceBetween(x, balls[j].x, y, balls[j].y) < radius + balls[j].radius ) {
                    x = randomInteger(radius, cw - radius);
                    y = randomInteger(radius, ch - radius);
                    j = -1;
                }
            }
        }
        // push into stack array
        balls.push({x, y, velocity, mass, radius, type, ballFill, ballStroke, fontColor, fontSize, fontFace, numberOfWords, words, wordWidths});
    }
    return balls;
}

let balls;
const CanvasSection = ({darkMode}) => {

    const canvasRef = useRef(null);
    const [canvasHeight, setCanvasHeight] = useState("fit-content");

    
    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        
        const [cw, ch] = resizeCanvasToDisplaySize(canvas)
        setCanvasHeight(`${ch}px`)

        balls = createBalls(ctx, cw, ch);

        // console.log(balls);
        // eslint-disable-next-line
        let animationFrameId;
        
        //Our draw came here
        const render = () => {

            balls.forEach(ball => {

                for (let i = 0; i < balls.length; i++) {
                    //prevent this ball from checking if it's touching itself
                    if (ball === balls[i]) continue; 
                    // check if two balls have touched
                    if ( distanceBetween(ball.x, balls[i].x, ball.y, balls[i].y) < ball.radius + balls[i].radius ) {
                        // console.log("has collided");
                        
                        // generate new velocity direction, due to elastic collison
                        resolveCollision(ball, balls[i]);
        
                        //if two balls collide and they're not of the same type, swap their types
                        if (ball.type !== balls[i].type) {
                            if (ball.type === 'fill') {
                                ball.type = 'stroke';
                                balls[i].type = 'fill';
                            } else {
                                ball.type = 'fill';
                                balls[i].type = 'stroke';
                            }
                        }
                    }
                }

                // checking if the snowball is still within the screen width
                if (ball.x > (cw - ball.radius)|| ball.x < ball.radius) {
                    ball.velocity.x = -ball.velocity.x;
                }
                
                // checking if the snowball is still within the screen height
                if (ball.y + ball.radius > ch || ball.y < ball.radius ) {
                    // ball.velocity.y = -ball.velocity.y * ball.friction;
                    ball.velocity.y = -ball.velocity.y;
                } 
                
                // incresing x coordinate by the speed in the x direction, dx
                ball.x += ball.velocity.x; 
                // incresing y coordinate by the speed in the y direction, dy
                ball.y += ball.velocity.y;

                // draw the ball in its new position
            });
            draw(ctx, cw, ch, balls);
            
            animationFrameId = window.requestAnimationFrame(render)

        }

        render();

        return () => {
            // window.cancelAnimationFrame(animationFrameId);
            balls = [];
        }

    }, [])

    return (
        <section className="canvas-section">
            <div className="canvas-section-wrapper"  style={{
                boxShadow: `${darkMode ? '4px 4px 0 #FFFFFF' : '4px 4px 0 #000000'}`,
            }}>
                <h2 style={{
                    backgroundColor: `${darkMode ? '#404040' : '#9FDDBE'}`,
                }}>
                    My Stack
                </h2>
                <canvas ref={canvasRef} style={{
                    backgroundColor: `${darkMode ? '#F2F2F2' : '#FFFFFF'}`,
                    height: canvasHeight,
                }} />
            </div>
        </section>
    );
}
 
export default CanvasSection;