import './ButtonPrimary.css';

function ButtonPrimary(props) {
  return (
    <a href={props.href} className={`primary-button rounded ${props.hide}`}>{props.children}</a>
  )
}

function ButtonSecoundry(props) {
  return(
    <a href={props.href} className='secondry-button rounded'>{props.children}</a>
    )
}
function ButtonTransparent(props) {
  return(
    <>
    <a href={props.href} className='transparent-button  rounded'>{props.children}</a>
    </>
  )
}

export default ButtonPrimary;
export {ButtonSecoundry};
export {ButtonTransparent};