import './SectionWrap.css'


function SectionWrap(props) {
  return (
    <>
    <div className='container section-wrap'>
        {props.children}
    </div>
    </>
  )
}

export default SectionWrap