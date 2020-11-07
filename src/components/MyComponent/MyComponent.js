import React from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import Footer from '../Footer/Footer'
import Header from '../Home/Header/Header'

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
 
class MyComponent extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div  ref={this.vantaRef}>
      <Header></Header>
      <Footer></Footer>
    </div>
  }
}
export default MyComponent;