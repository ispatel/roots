import requests

def main():
    places = ["St. Augustine's University", "John Chavis Memorial Park", "Pope House Museum", "Estey Hall at Shaw University", "African American Civil War Memorial and Museum", "Frederick Douglass National Historic Site", "Martin Luther King, Jr. Memorial", "National Museum of African American History and Culture (NMAAHC)", "Howard Theatre"]
    for name in places:
        requests.get(f"localhost:5000/summary?name={name}&city={city}")

if __name__ == "__main__":
    main()