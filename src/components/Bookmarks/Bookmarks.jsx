import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        
           
               
            
        <div className="md:w-1/3 bg-slate-300 rounded-xl p-5">
             <h3 className='text-4xl'>Reading time: {readingTime}</h3>
            <h2>Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmarkData, idx)=><Bookmark key={idx} bookmark={bookmarkData}></Bookmark>)
            }
        </div>
        
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;