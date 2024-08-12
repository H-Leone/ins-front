function ResearchAnswers() {
    return (
        <div>

            <table className="w-full">

                <thead className="bg-insightfy-gradient min-h-10 max-h-10">

                    <tr className="text-center text-white font-semibold">

                        <td>Nome</td>
                        <td>E-mail</td>
                        <td>Resposta 1</td>
                        <td>Resposta 2</td>
                        <td>Resposta 3</td>
                        <td>Resposta 4</td>

                    </tr>

                </thead>

                <tbody>

                    {[...Array(7).keys()].map((el) => (
                        <tr className="border border-gray-300 text-center font-medium h-12" key={el}>

                            <td>arroi</td>
                            <td>arroi@gmail.com</td>
                            <td>Ariallllllll</td>
                            <td>lorem ipsum dod sfojrngf asdjoznfdvkjsd vxcd</td>
                            <td>3</td>
                            <td>08/11/2006</td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default ResearchAnswers;