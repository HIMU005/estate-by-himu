import { useContext } from "react";
import Banner from "../components/Banner";
import ShortDetails from "../components/ShortDetails";
import { AuthContext } from "../routes/provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const { fakeData } = useContext(AuthContext);



    return (
        <div>
            <Helmet>
                <title>E-State/Home</title>
            </Helmet>
            <Banner />
            <h2 className="text-3xl text-center">Details of Estate</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    fakeData.map(fakeDatum => <ShortDetails key={fakeDatum.id} fakeDatum={fakeDatum} ></ShortDetails>
                    )
                }
            </div>
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