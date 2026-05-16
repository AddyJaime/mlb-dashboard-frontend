// intermediario que habla con el front end para traer la data al front end 
import { API_BASE_URL } from "@/config/api";
import { Attendance } from "@/types/attendance";
import { Stadium } from "@/types/stadium";
import { StadiumAPI } from "@/types/stadium-api";




export async function getAllStadiums(): Promise<Stadium[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/stadiums`, { next: { revalidate: 3600 } })

    if (!response.ok) {
      throw new Error('Stadiums not found')
    }

    const data = await response.json()

    const stadiums = data.data.map((item: StadiumAPI) => {
      return {
        id: item.id,
        name: item.name,
        team: item.name_team,
        city: item.city,
        state: item.state,
        capacity: item.capacity,
        yearOpen: item.year_open,
        imageUrl: item.image_url,
        league: item.league,
        description: item.description

      }
    })


    return stadiums

  } catch (error) {
    console.error("Error fetching stadiums:", error)
    throw new Error("Failed to fetch stadium")
  }

}


export async function getStadiumById(id: number): Promise<Stadium> {
  // y ese stadium ahi es la promessa que espera el frontend 
  try {
    const response = await fetch(`${API_BASE_URL}/api/stadiums/${id}`, {next:{revalidate: 3600}})
    
    if (!response.ok) {
      throw new Error(`Stadium not found`) //status 404 este recurso no existe,
      //entra al catch con un error claro
    }
    const data = await response.json() //solo llega aqui si fue 200

    // Si el API envuelve la respuesta en { data: ... } usa data.data, si no, usa data directo, el stadiumAPi es el tipo de como vienen los datos del backend 
    const item: StadiumAPI = data.data ?? data

    // Transforma los campos snake_case del API al camelCase que usa el frontend
    return {
      id: item.id,
      name: item.name,
      team: item.name_team,
      city: item.city,
      state: item.state,
      capacity: item.capacity,
      yearOpen: item.year_open,
      imageUrl: item.image_url,
      league: item.league,
      description: item.description,
      latitude: item.latitude,
      longitude: item.longitude,
      leftFieldFt: item.left_field_ft,
      centerFieldFt: item.center_field_ft,
      rightFieldFt: item.right_field_ft,
      totalGames: item.total_games,
      homeWinPercentage: item.home_win_percentage,
      perfectGames: item.perfect_games
    }

  } catch (error) {
    console.error("Error fetching stadium:", error)
    throw new Error("Failed to fetch stadium")
  }
}

export async function getStadiumAttendance(id: number): Promise<Attendance[]> {

  try {
    const response = await fetch(`${API_BASE_URL}/api/stadiums/${id}/attendance`, {next: {revalidate: 3600}})

    if (!response.ok) {
      throw new Error("Stadium Attendance not available")
    }

    const data = await response.json();
    console.log(data)

    //  - Si el backend devuelve { data: { id: 1, name: 
    // ... } } → usa data.data (el objeto adentro)       
    // - Si el backend devuelve directo { id: 1, name: 
    // ... } → data.data sería undefined, entonces usa   
    // data completo   

    // data.data es un array: [{year: 2021, total_attendance: 3000000}, {year: 2022, ...}, ...]
    // .map() recorre cada elemento del array uno por uno — igual que un for loop pero devuelve un array nuevo
    // por cada item (cada año), devolvemos un objeto nuevo con los campos que necesitamos
    const attendances = data.data.map((item: Attendance) => {
      return {
        year: item.year,
        total_attendance: item.total_attendance
      }
    })

    // retornamos el array transformado al componente que lo pidió
    return attendances
  } catch (error) {
    console.error("Error fetching stadium:", error)
    throw new Error("Failed to fetch stadium")
  }

}