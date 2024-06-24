import './Card.css';

function Card(props) {
  return (
    <>
    <div className='serv-card rounded'>
        <div>
            {props.icon}
        </div>
        <h4>{props.title}</h4>
        <p>{props.info}</p>
    </div>
    </>
  )
}

function Cards(props) {
  
  function copy() {
    let text = props.text;
    navigator.clipboard.writeText(text)
    addCopyAlert()
  }
  function addCopyAlert() {
    let alrt = document.getElementById('textCopyAlert');
    alrt.classList.add('show')
    setTimeout(function() {
      alrt.classList.remove('show');
    }, 3000)
  }
  
  
  
  return (
    <>
    <div className='serv-card rounded' onClick={copy}>
        <div>
            {props.icon}
        </div>
        <h4>{props.title}</h4>
        <p>{props.info}</p>
    </div>
    </>
  )
}

function CardNoBorder(props) {
  return (
    <>
    <div className='serv-card no-border rounded'>
        <div>
            {props.icon}
        </div>
        <h4>{props.title}</h4>
        <p>{props.info}</p>
    </div>
    </>
  )
}

export default Card;
export {CardNoBorder};
export {Cards};