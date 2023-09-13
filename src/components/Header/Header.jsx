import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 max-w-screen-xl mx-auto border-b-2 font-bold'>
            <h1 className='text-3xl'>React Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;