import ToyReact, {Componet} from './ToyReact'

class MyComponet extends Componet {
  render() {
    return <div>
        {this.children}
        {true}
        {Symbol('kk')}
        {<div>ajsda </div>}
      </div>
  }
}

const element = <MyComponet id={123}>
  <span>123</span>
  <p>
    <span>167<span>asjdklad</span></span>
    <span style="color:red">666</span>
  </p>
</MyComponet>


ToyReact.render(element, document.body)