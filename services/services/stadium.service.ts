// intermediario que habla con el front end para traer la data al front end 
import { API_BASE_URL } from "@/config/api";
import { Stadium } from "@/types/stadium";
import axios from "axios";
export async function getStadiumById(id: number): Promise<Stadium> {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/stadiums/${id}`)
    const data = await response.data.data
 

    const stadium: Stadium = {
      id: data.id,
      name: data.name,
      team: data.name_team,
      city: data.city,
      state: data.state,
      capacity: data.capacity,
      yearOpen: data.year_open,
      imageUrl: data.image_url,
    }

    return stadium

  } catch (error) {
    console.error("Error fetching stadium:", error)
    throw new Error("Failed to fetch stadium")
  }


}