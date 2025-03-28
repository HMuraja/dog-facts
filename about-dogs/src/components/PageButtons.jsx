
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faForwardStep, faBackwardStep} from '@fortawesome/free-solid-svg-icons'

function PageButtons({updatePage, breedPages, breedLinks}) {
    const btnStyle = "text-rose-c font-bold text-3xl pr-3 hover:text-violet-c hover:cursor-pointer"
    const firstPage = breedPages.current == 1;
    const lastPage = breedPages.current == 29;

  return (
    <>
        <FontAwesomeIcon 
            icon={faBackwardStep} 
            onClick={firstPage ? () => undefined :()=> updatePage(breedLinks.first)} 
            className={btnStyle}
        />
        <FontAwesomeIcon 
            icon={faCaretLeft} 
            onClick= {firstPage ? () => undefined : ()=> updatePage(breedLinks.prev)} 
            className={btnStyle}
        />
        <p className='text-center'>{breedPages.current}/{breedPages.last}</p>
        <FontAwesomeIcon 
            icon={faCaretRight} 
            onClick={lastPage ? () => undefined :()=> updatePage(breedLinks.next)} 
            className={btnStyle}
        />
        <FontAwesomeIcon 
            icon={faForwardStep} 
            onClick={lastPage ? () => undefined :()=> updatePage(breedLinks.last)} 
            className={btnStyle}
        />
    </>  
  )
}

export default PageButtons