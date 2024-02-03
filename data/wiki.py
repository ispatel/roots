import wikipedia
from bs4 import BeautifulSoup
import requests
import re


places = ["St. Augustine's University", "John Chavis Memorial Park", "Pope House Museum", "Estey Hall at Shaw University", "African American Civil War Memorial and Museum", "Frederick Douglass National Historic Site", "Martin Luther King, Jr. Memorial", "National Museum of African American History and Culture (NMAAHC)", "Howard Theatre"]
data = {}
for x in places:
    data[x] = (wikipedia.page(x).url, wikipedia.summary(x)) 
#print(data)


def oneQuery(name): 
    return (wikipedia.page(name).url, wikipedia.summary(name)) 

def getURL(name):
    return wikipedia.page(name).url

nm = "John Chavis Memorial Park"
url = getURL(nm)
response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")


first_image_element = soup.find("img", class_="mw-file-element")
if first_image_element:
    first_image_url = first_image_element["src"]
    print(first_image_url)
else:
    print("No image with the class 'mw-file-element' found on the page.")

new = re.sub(r'[0-9]+px', '600px', first_image_url)
print(new)


