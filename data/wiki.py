import wikipedia


# value = input("Enter Subject: ")
value = "St. Augustine's University"
page = wikipedia.page(value)
url = page.url
places = ["St. Augustine's University", "John Chavis Memorial Park", "Pope House Museum", "Estey Hall at Shaw University", "African American Civil War Memorial and Museum", "Frederick Douglass National Historic Site", "Martin Luther King, Jr. Memorial", "National Museum of African American History and Culture (NMAAHC)", "Howard Theatre"]
data = {}
for x in places:
    data[x] = (wikipedia.page(x).url, wikipedia.summary(x)) 
    print(x)
print(data)
# data = {
# "St. Augustine's University": (wikipedia.page("St. Augustine's University").url, wikipedia.summary("St. Augustine's University")),
# "John Chavis Memorial Park" : (wikipedia.page("John Chavis Memorial Park").url, wikipedia.summary("John Chavis Memorial Park")),
# "Pope House Museum" : (wikipedia.page("Pope House Museum").url, wikipedia.summary("Pope House Museum")),
# "Estey Hall at Shaw University" : (wikipedia.page("Estey Hall at Shaw University").url, wikipedia.summary("Estey Hall at Shaw University")),
# "African American Civil War Memorial and Museum" : (wikipedia.page("African American Civil War Memorial and Museum").url, wikipedia.summary("African American Civil War Memorial and Museum")),
# "Frederick Douglass National Historic Site" :  (wikipedia.page("Frederick Douglass National Historic Site").url, wikipedia.summary("Frederick Douglass National Historic Site")),
# "Martin Luther King, Jr. Memorial" : (wikipedia.page("Martin Luther King, Jr. Memorial").url, wikipedia.summary("Martin Luther King, Jr. Memorial")),
# "National Museum of African American History and Culture (NMAAHC)" : (wikipedia.page("National Museum of African American History and Culture (NMAAHC)").url, wikipedia.summary("National Museum of African American History and Culture (NMAAHC)")),
# "Howard Theatre" : (wikipedia.page("Howard Theatre").url, wikipedia.summary("Howard Theatre"))
#  }


#print(data[value])

