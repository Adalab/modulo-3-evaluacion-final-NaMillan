import "../scss/layout/reset.scss"

function Reset({handleReset}) {
    return (

<button className="btn" type="button" onClick={(ev) => handleReset(ev)}>
  <strong>Reiniciar</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
</button>
 )
}

export default Reset