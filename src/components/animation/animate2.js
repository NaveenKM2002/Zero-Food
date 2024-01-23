import React, { PureComponent } from 'react'
import { Animate } from 'react-move'
import { easeExpOut } from 'd3-ease'

const outerDiv = {
  borderRadius: 3,
  backgroundColor: 'rgba(128,128,128)',
  position: 'relative',
  margin: '5px 3px 10px',
  width: 200,
  height: 40,
}

class Toggle extends PureComponent {

  state = {
    open: false
}
  
  handleClick = () => {
    this.setState({ open: !this.state.open })
  }
  
  render() {
    return (
      <div>
        <button 
          onClick={this.handleClick}
        >
          Toggle
        </button>
  
        <Animate
          start={() => ({
            x: 0,
          })}

          update={() => ({
            x: [this.state.open ? 200 : 0],
            timing: { duration: 750, ease: easeExpOut }
          })}
        >
          {(state) => {
            const { x } = state
            
             return (
               <div style={outerDiv}>
                 <div 
                   style={{
                     position: 'absolute',
                     width: 50,
                     height: 50,
                     borderRadius: 4,
                     opacity: 0.7,
                     backgroundColor: '#ff69b4',
                     WebkitTransform: `translate3d(${x}px, 0, 0)`,
                     transform: `translate3d(${x}px, 0, 0)`
                   }}
                 />
               </div>
             )
           }}
         </Animate>
       </div>
     )
   }
                  
 }

export default Toggle;