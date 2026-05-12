const Base_URL = "http://localhost:3000/api/";

const fetchAll = async (endpoint:string) => {
    try {
        const response = await fetch(`${Base_URL}${endpoint}`)
        if (!response.ok) {
            throw new Error("Bad response")
        }
        const data = await response.json()
        return data
    } catch (e) {
        console.error(e)
        throw e  
    }
}

const create = async (endpoint:string, data:any) => {
    try {
        const response = await fetch(`${Base_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error("Erreur lors de la création")
        }
        return response
    } catch (error) {
        console.error(error)
        throw error
    }
}

const update = async (endpoint:string, data:any) => {
    try {
        const response = await fetch(`${Base_URL}${endpoint}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error("Erreur lors de la mise à jour")
        }
        return await response.json()
    } catch (error) {
        console.error(error)
        throw error
    }
}

const supprimer = async (endpoint:string, id:number) => {
    try {
        const response = await fetch(`${Base_URL}${endpoint}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json"
            }
        })
        if (!response.ok) {
            throw new Error("Erreur lors de la suppression")
        }
       
        return response
    } catch (error) {
        console.error(error)
        throw error
    }

}

const login = async (endpoint:string, data:number) => {
    try {
        const response = await fetch(`${Base_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error("Identifiants invalides")
        }
       
        return response  
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const apiService = {
    //Operations sur utilisateurs
    getClients: async () => await fetchAll("clients"),    
    createClient: (data:any) => create("clients", data),
    updateClient: (id:number, data:any) => update(`clients/${id}`, data),
    deleteClient: (id:number) => supprimer("clients", id),
    
    //Operations sur clients
    getUtilisateur: () =>  fetchAll("users"),
    createUtilisateur: (data:any) => create("users", data),
    updateUtilisateur: (id:number, data:any) => update(`users/${id}`, data),
    deleteUtilisateur: (id:number) => supprimer("users", id),
    loginUtilisateur : (data:any)=>login("login/",data),
    //Opérations sur reservations
    getReservations: () => fetchAll("reservations"),
    createReservations: (data:any) => create("reservations", data), 
    updateReservation: (id:number, data:any) => update(`reservations/${id}`, data),
    deleteReservation: (id:number) => supprimer("reservations", id),
    //Operations sur paiements
    getPaiements: () => fetchAll("paiements"),
    createPaiements: (data:any) => create("paiements", data),
    updatePaiement: (id:number, data:any) => update(`paiements/${id}`, data),
    deletePaiement: (id:number) => supprimer("paiements", id),
    //Operations sur Retour
    getRetour: () => fetchAll("retours"),
    createRetour: (data:any) => create("retours", data),
    updateRetour: (id:number, data:any) => update(`retours/${id}`, data),
    deleteRetour: (id:number) => supprimer("retours", id),
    //Operations sur les vehicules
    getVehicules: () => fetchAll("vehicules"),
    createVehicules : (data:any) => create("vehicules", data),
    updateVehicules: (id:number, data:any) => update(`vehicules/${id}`, data),
    deleteVehicules: (id:number) => supprimer("vehicules", id),


}
