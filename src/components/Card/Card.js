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