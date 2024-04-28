import matPic from '../Button/image/mat.png'
import searchPic from '../Button/image/search.png'
import meetingPic from '../Button/image/meeting.png'


function Buttons() {
    const handleClick = () => console.log('Clicked!')

    return (
        <>

            <div className="first" >
                <img className='icon' src={matPic} alt="icon picture" />
                <button className="button1" onClick={handleClick}> Brief </button>
                <p className='text'>Complete brief writing or simple guidance on what to include,we've got you covered.</p>

            </div>

            <div className="second" >
                <img className='icon' src={searchPic} alt="icon picture" />
                <button className="button1" onClick={handleClick}> Search </button>

                <p className='text'>In depth agency search covering;criteria matching, door knocking and due dilligence vetting. </p>
            </div>

            <div className="third" >
                <img className='icon' src={meetingPic} alt="icon picture" />
                <button className="button1" onClick={handleClick}> Pitch </button>
                <p className='text'>Comprehensive pitch management, including comms, diary managment and pitch hosting.</p>
            </div>
        </>






    );


}

export default Buttons