import ViolationContent from '../ViolationContents/ViolationContent';
import Violationpages from '../Violationpages/Violationpages';
import style from './Violations.module.css';

function Violations() {
    return (
        <div className={style.container}>
            <div className={style.profile}>
                <Violationpages />
            </div>
            <div className={style.Violations}>
                <ViolationContent />
            </div>
        </div>
    )
    
}

export default Violations;