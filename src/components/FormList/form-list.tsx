import { IForm } from "@/types/research";
import ResearchForm from "../ResearchForm/research-form";

interface FormListProps {
    form: IForm[];
    isActive: boolean;
    updateQuestion: () => void;
    deleteQuestion: (index: number) => void;
    changeForm: (index: number, newDescription: string) => void;
}

function FormList({ form, isActive, updateQuestion, deleteQuestion, changeForm }: FormListProps) {
    return (
        <div className="flex flex-col gap-8">
            {form.map((f, index) => (
                <ResearchForm
                    deleteQuestion={() => deleteQuestion(index)}
                    isActive={isActive}
                    key={index}
                    updateQuestion={updateQuestion}
                    changeForm={(newDescription: string) =>
                        changeForm(index, newDescription)
                    }
                    {...f}
                />
            ))}
        </div>
    );
}

export default FormList;