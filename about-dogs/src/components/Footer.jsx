import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className='bg-yellow-c columns-1 mt-auto text-center py-5 border-t-2'>
        <p>Frontend by HMuraja</p> 
        <div className='flex justify-center text-3xl gap-x-3'>
        <a href="https://github.com/HMuraja/dog-facts" target="_blank"><FontAwesomeIcon className="hover:text-stone-500 " icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/hilla-muraja/" target="_blank"><FontAwesomeIcon className="hover:text-stone-500" icon={faLinkedin} /></a>
        </div>
        <p>API by <a className="hover:text-stone-500 font-bold" href="https://github.com/kinduff/dogapi.dog" target="_blank">kinduff</a></p> 
    </div>
  )
}

export default Footer