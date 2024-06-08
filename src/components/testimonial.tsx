import TestimonialProps from '../interface/testimonialProps'
import './Testimonial.css'


// const Testimonial =({name,content,image}:TestimonialProps) => {
//     const initial = name[0].toUpperCase() + name[name.length-1].toUpperCase()
//     return(
//   <div className="testimonial">
//       <img className="testimonial-image " src={image} alt={initial} />
//       <div className="testimonial-content">
//         <p className="testimonial-text">{content}</p>
//         <p className="testimonial-name">{name}</p>
        
//       </div>
//  </div>
//     )
// }
// export default Testimonial

const   Testimonial = ({name,content,image}:TestimonialProps) => {
  const initial = name[0].toUpperCase() + name[name.length-1].toUpperCase()
  return(
    <div className="testimonial">
      <img className='testimonial-image' src={image} alt={initial}/>
      <div className="testimonial-content">
        <p className='testimonial-text'>{content}</p>
        <p className='tessimonial-name'>{name}</p>
      </div>
    </div>
  )
}
export default Testimonial