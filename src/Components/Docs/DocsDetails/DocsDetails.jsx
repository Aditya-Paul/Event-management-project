/* eslint-disable react/prop-types */


const DocsDetails = ({ value }) => {
    const { description, name } = value
    return (
        <div>
            <div className="border border-b-2 border-blue-300 mt-6 text-center">
                <h2 className="text-3xl text-blue mb-3 ">{name}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default DocsDetails;