import React,{Component} from 'react';


let randomHex = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let randomX=()=>{
    let X = Math.floor(Math.random()*window.innerWidth)
    return X;

}
let randomY=()=>{
    let Y = Math.floor(Math.random()*window.innerHeight)
    return Y;

}
export default class FirstComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            color1:"white",
            color2:"white",
            x:10,
            y:10
        }
    }

    render() {
        return (
        <div>        
            <div>
                <button 
                 onMouseEnter={() => { 
                    this.setState({color1:randomHex(),
                                   x:randomX(), y:randomY()
                                    })
                    
                }}
                style={{ position:"absolute",left:this.state.x,top:this.state.y }}>
                    Có
                </button>
            </div>
            <div>

                <button
                style={{backgroundColor:this.state.color2, position:"absolute", left:this.props.x, top:this.props.y}}
               
               
                onMouseEnter={() => {
                   
                    this.state.color2 = randomHex();
                    this.props.onMouseLeaveRedux();
                    
                    
                }}

                // onMouseLeave={()=>}
                > {this.props.test}</button>

            </div>
        </div>)
    }
}
const style =  {
    button:{
        
     


    },

}
