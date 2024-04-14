import { useContext } from "react";
import Banner from "../components/Banner";
import ShortDetails from "../components/ShortDetails";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../routes/provider/AuthProvider";
// import PropTypes from 'prop-types';


const Home = () => {
    // const fakeData = useLoaderData();
    const { fakeData } = useContext(AuthContext);
    // const singleOne = fakeData[0];
    // console.log(singleOne);


    return (
        <div>
            <h2>I am home</h2>
            <Banner />
            <h2 className="text-3xl text-center">Details of Estate</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    fakeData.map(fakeDatum => <ShortDetails key={fakeDatum.id} fakeDatum={fakeDatum} ></ShortDetails>
                    )
                }
            </div>


            {/* <ShortDetails /> */}
            {/* <div>
                <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                    <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
                        <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                    </div>
                    <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                </div>
            </div> */}



        </div>
    );
};

export default Home;

// ShortDetails.propTypes = {
//     id: PropTypes.string,
//     estate_title: PropTypes.string,
//     segment_name: PropTypes.string,
//     description: PropTypes.string,
//     price: PropTypes.string,
//     status: PropTypes.string,
//     area: PropTypes.string,
//     location: PropTypes.string,
//     facilities: PropTypes.array,
//     image: PropTypes.string,
// }