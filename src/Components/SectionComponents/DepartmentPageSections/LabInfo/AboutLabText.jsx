
import { Link } from 'react-router-dom';
import SubTitle from '../../../Shared/Titles/SubTitle/SubTitle';
import GeneralParagraphText from '../../../Shared/GeneralParagraphText/GeneralParagraphText';

const AboutLabText = ({description, linkUrl, title})=>{
    return(
        <div> 
            <section></section>
           <div>
            <div className="flex flex-col max-w-200 ">
                <div className="text-left ">
                    <h2 className="text-[25px] text-orange-600 border-b-2 border-gray-400">{title}</h2>
                </div>
                <div className="text-[15px] mt-2 mb-4 text-gray-500">
                    <p className='text-justify'>{description}</p>
                </div>
                <div className="w-fit text-white py-1 px-3 bg-green-500 rounded shadow-2xl cursor-pointer text-center">
                    <Link to={linkUrl}>
                        আরও জানুন...
                    </Link>
                </div>
            </div>
           </div>
        </div> 

    )
};

export default AboutLabText;