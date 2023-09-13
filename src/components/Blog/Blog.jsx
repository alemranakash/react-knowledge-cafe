import PropTypes from 'prop-types';
import { BsBookmark } from 'react-icons/bs';


const Blog = ({ blog, handleAddToBookmark, handleReadingTime}) => {
    console.log(blog)
    const {title, cover, author, author_img, reading_time, posted_date, hashtags}= blog
    return (
        <div>
            <img className='rounded-xl  my-2' src={cover} alt={`Cover picture of the title ${title}`} />
           <div className='flex justify-between my-5'>
            <div className='flex gap-4'>
            <img className='w-14' src={author_img} alt="" />
            <div>
            <h2 className='text-2xl'>{author}</h2>
            <p>{posted_date}</p>
            </div>
            </div>
            <div className='flex items-center'>
            <span>{reading_time} min read</span>
            <button onClick={()=>handleAddToBookmark(blog)} className='ml-4 text-2xl text-red-600'><BsBookmark></BsBookmark></button>
            </div>
           </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
hashtags.map((hash, idx)=><span key={idx}> <a href="">  {hash}   </a> </span>)
                }
            </p>
                <button onClick={()=>handleReadingTime(reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blog;