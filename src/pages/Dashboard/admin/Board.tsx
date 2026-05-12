import { useEffect, useState } from 'react'
import Navbar from '../../../components/NavBar'
import InfoCard from '../../../components/InfoCard'
import StatusReservations from '../../../components/StatutReservations';
import HistoriqueLocations from '../../../components/HistoriqueLocations'
import AgentsCard from '../../../components/AgentsCard'
import VehiculesCard from '../../../components/VehiculesCard'
import { apiService } from '../../../services/api';

// import { apiService } from '../services/api'

function Board() {
    const [agents, setAgents] = useState([])
    const [etatVehicules, setEtatVehicules] = useState({
        "louer": 0,
        "disponible": 0,
        "maintenance": 0
    })
    const [etatReservations, setEtatReservations] = useState({
        "en_attente": 0,
        "confirmee": 0,
        "en_cours": 0,
        "terminee": 0,
        "annulee": 0
    })
    // const [paiments, setPaiments] = useState({})
    const [montantMensuel, setMontantMensuel] = useState(0)
    const [locations, setLocations] = useState([])
    const [vehicules, setVehicules] = useState([])
    



    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataPaiements = await apiService.getPaiements() || []
                const dataAgents = await apiService.getUtilisateur() || []
                const dataVehicules = await apiService.getVehicules() || []
                const dataReservations = await apiService.getReservations() || []
                console.log(dataAgents)
                setLocations(dataReservations)
                setVehicules(dataVehicules)
                const a = dataReservations.reduce((acc:any, reservation:any) => {
                    if (!acc[reservation.status]) {
                        acc[reservation.status] = 0;
                    }
                    
                    acc[reservation.status]++;
                    
                    return acc;
                }, {})
                setEtatReservations(a)
                

                setMontantMensuel(dataPaiements.reduce((accumalateur:any, paiement:any) => paiement.reservation.vehicule.prix_par_jour + accumalateur, 0))
                setAgents(dataAgents.filter((agent:any) => agent.role === "agent"))
                setEtatVehicules(dataVehicules.reduce((acc:any, vehicule:any) => {

                    if (!acc[vehicule.status]) {
                        acc[vehicule.status] = 0;
                    }

                    acc[vehicule.status]++;


                    return acc;
                }, {}));
            } catch (err) {
                console.error(err)
            } 
        }

        fetchData()
    }, [])
    
    return (
        <div className='bg-gray-100 min-h-screen'>
            <Navbar></Navbar>
            <div className='p-5'>
                <h1 className='text-2xl'>
                    Tableau de Bord
                </h1>
                <h2 className='text-gray-500'>Vue d'ensemble de votre Agence</h2>
            </div>
            <div className='grid grid-cols-4 gap-8 p-5'>
                <InfoCard nom="Revenus mensuel" nombre={montantMensuel} device="DH" src="{monnaie}"></InfoCard>
                <InfoCard nom="Vehicule loués" nombre={etatVehicules.louer} device="DH" src="{carlouer}"></InfoCard>
                <InfoCard nom="Vehicule disponible" nombre={etatVehicules.disponible} device="DH" src="{carDispo}"></InfoCard>
                <InfoCard nom="Agent actifs" nombre={agents.length} device="DH" src="{agentActif}"></InfoCard>
            </div>
            <div className='grid grid-cols-3 gap-5 m-5'> 
                <div className='col-span-1'> 
                    <StatusReservations enAttente={etatReservations.en_attente} confirmees={etatReservations.confirmee} enCours={etatReservations.en_cours} terminees={etatReservations.terminee} annulees={etatReservations.annulee} />
                </div>
                <div className='col-span-2'> 
                    <HistoriqueLocations locations={locations} />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-5 m-5'>
                <VehiculesCard vehicules={vehicules} />
                    <AgentsCard agents={agents} />
            </div>


        </div>
    )
}

export default Board