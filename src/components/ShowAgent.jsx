import {useState,useEffect} from "react"
function capitalize(chaine) {
    return chaine.at(0).toUpperCase() + chaine.slice(1)
}
function ShowAgent({ nom, prenom, role, id_user, email ,handleDelete,handleModifier}) {
    const [FormData, setFormData] = useState({
        nom :"",
        prenom:"",
        role:"",
        email:""
     })
     const [isEditing, setIsEditing] = useState(false)

     function handleChange(e){
        const {name,value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]:value
        }))
     }
     function handleSubmit(e){
        e.preventDefault()
        handleModifier(id_user,FormData)


     }
    return (
        <div className='bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.2)] rounded-2xl p-5 border-0 hover:bg-[rgb(238,231,231)]' >
            <div className='flex items-center mb-3'>
                <svg viewBox="0 0 100 100" className='w-10 h-10 mr-3' >
                    <text x="50" y="50" textAnchor="middle" dominantBaseline="central" fill='var(--color-blue-600)'
                        className='text-6xl font-semibold '

                    >
                        {nom.at(0)}
                    </text>
                </svg>
                <div>
                    <p><span>{`${capitalize(prenom)} `}</span><span>{capitalize(nom)}</span></p>
                    <p className='text-gray-400'>{role}</p></div>
            </div>
            <form className=' mb-3' onSubmit={()=>handleSubmit()}>
                <label htmlFor="email" className='font-semibold text-gray-700'>Email : </label>
                <input type="email" disabled value={email} className='text-gray-500 pl-3' /><br />
                <label htmlFor="i" className='font-semibold text-gray-700'>ID Agent :</label>
                <input type="text" disabled value={id_user} className='text-gray-500 pl-3' />
            </form>
            <div className='flex justify-between '>
                <button className=' text-blue-600 font-semibold hover:cursor-pointer' onClick={()=>{handleModifier(id_user, { nom, prenom, role, email })}}>
                    Modifier
                </button>
                <button className=' text-red-500 font-semibold hover:cursor-pointer' onClick={()=>handleDelete(id_user)}>
                    Supprimer
                </button>
            </div>

        </div>
    )

}

export default ShowAgent