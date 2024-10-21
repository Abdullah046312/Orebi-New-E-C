import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-base h-10">
                <li>
                    <button
                        onClick={handlePrevious}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i}>
                        <button
                            onClick={() => setCurrentPage(i + 1)}
                            className={`flex items-center justify-center px-4 h-10 leading-tight ${currentPage === i + 1 ? 'bg-gray-200' : 'bg-white'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                        >
                            {i + 1}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={handleNext}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
