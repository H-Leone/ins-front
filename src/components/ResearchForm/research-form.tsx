import { IForm } from "@/types/research";
import ResearchRating from "../ResearchRating/research-rating";

function ResearchForm({ surveyType, description, responses }: IForm) {
    return (
        <section className="w-full flex flex-col gap-8 px-8 py-8 border-2 border-insightfy-light-gray rounded-lg">

            {surveyType === "1" && (
                <>
                    <p className="text-sm text-center font-medium text-insightfy-dark-gray">{description}</p>

                    <ResearchRating />
                </>
            )}

            {surveyType === "4" && (
                <>
                    <p className="text-sm font-medium text-insightfy-dark-gray">{description}</p>

                    <textarea className="resize-none w-full h-44 bg-insightfy-light-gray outline-none text-sm p-4 rounded-lg" placeholder="Hint text...">

                    </textarea>
                </>
            )}

        </section>
    );
}

export default ResearchForm;