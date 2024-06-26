import logo from '../assets/whiteboardtec-logo.png'
import picture from '../assets/picture.jpg'

export const Header = ({user, contest}) => {
    return (
        <header className="w-full flex flex-row justify-between bg-[#6adb45] h-16 items-center px-4 cursor-none">
            <img src={logo} alt="" className='bg-white h-16 mx-4'/>
            <h1 className='text-white text-4xl font-bold'>{contest}</h1>
            <div className='text-black text-3xl font-semibold h-16 flex flex-row items-center'>
                {user?.name}
                <img src={picture} alt="user-picture" className='h-12 w-12 rounded-[100%] mx-2'/>
            </div>
        </header>
    );
}