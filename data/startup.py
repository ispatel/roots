import requests

def main():
    index = 0
    num_places_per_city = 4
    places = ["St. Augustine's University", "John Chavis Memorial Park", "Pope House Museum", "Estey Hall at Shaw University", "African American Civil War Memorial and Museum", "Frederick Douglass National Historic Site", "Martin Luther King, Jr. Memorial", "National Museum of African American History and Culture (NMAAHC)", "Schomburg Center for Research in Black Culture", "African Burial Ground National Monument", "Studio Museum in Harlem", "Apollo Theater", " "]
    cities = ["Raleigh", "Washington D.C", "New York City"]
    for city in cities:
        places_in_city = places[index : index + num_places_per_city]
        for name in places_in_city:
            requests.get(f"http://localhost:5000/summary?name={name}&city={city}")
        index += num_places_per_city

if __name__ == "__main__":
    main()
