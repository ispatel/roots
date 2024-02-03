import wikipedia

places = ["St. Augustine's University", "John Chavis Memorial Park", "Pope House Museum", "Estey Hall at Shaw University", "African American Civil War Memorial and Museum", "Frederick Douglass National Historic Site", "Martin Luther King, Jr. Memorial", "National Museum of African American History and Culture (NMAAHC)", "Howard Theatre"]
data = {}
for x in places:
    data[x] = (wikipedia.page(x).url, wikipedia.summary(x)) 
    print(x)
print(data)

def oneQuery(name): 
    return (wikipedia.page(name).url, wikipedia.summary(name)) 



