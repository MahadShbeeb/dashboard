import AdminForm from "@/app/components/admin/AdminForm";
import getMeal from "@/app/hooks/useMeal";

const EditPage = async({ params }: { params: { id: number } }) => {
    
    const meal = await getMeal(params.id)
    return ( <AdminForm meal={meal}/> )
}

export default EditPage