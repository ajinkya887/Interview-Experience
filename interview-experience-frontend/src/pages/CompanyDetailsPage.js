import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CompanyDetailsPage() {
    const { companyName } = useParams(); // Retrieve the company name from the URL
    const [companyDetails, setCompanyDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCompanyDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/experiences/${companyName}`);
                setCompanyDetails(response.data);
            } catch (error) {
                console.error('Error fetching company details:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCompanyDetails();
    }, [companyName]);

    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-6">Details for {companyName}</h1>
            {loading ? (
                <p className="text-center text-gray-500">Loading details...</p>
            ) : companyDetails.length === 0 ? (
                <p className="text-center text-gray-500">No details available for this company.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {companyDetails.map((exp) => (
                        <div
                            key={exp._id}
                            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                        >
                            <h2 className="text-xl font-semibold">{exp.jobRole}</h2>
                            <p className="text-gray-600"><strong>Difficulty:</strong> {exp.difficulty}</p>
                            <p className="text-gray-600"><strong>Tags:</strong> {exp.tags.join(', ')}</p>
                            <h3 className="mt-4 font-bold">Rounds:</h3>
                            <ul className="list-disc pl-5">
                                {exp.rounds.map((round, index) => (
                                    <li key={index}>
                                        <p><strong>Type:</strong> {round.type}</p>
                                        <p><strong>Description:</strong> {round.description}</p>
                                        <p><strong>Duration:</strong> {round.duration}</p>
                                        <p><strong>Difficulty:</strong> {round.difficulty}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CompanyDetailsPage;
