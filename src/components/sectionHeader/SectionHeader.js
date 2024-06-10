import './SectionHeader.css';

function SectionHeader(props) {
  return (
    <>
    <div className='section-header'>
      <h3>{props.title}</h3>
      <p>{props.disc}</p>
    </div>
    </>
    )
}

export default SectionHeader