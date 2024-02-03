import wikipedia
import requests
from bs4 import BeautifulSoup

# value = input("Enter Subject: ")
value = "St. Augustine's University"
page = wikipedia.page(value)
url = page.url
data = {
"St. Augustine's University": (url, wikipedia.summary("St. Augustine's University")),
"John Chavis Memorial Park" : (url, wikipedia.summary("John Chavis Memorial Park")),
"Pope House Museum" : (url, wikipedia.summary("Pope House Museum")),
"Estey Hall at Shaw University" : (url, wikipedia.summary("Estey Hall at Shaw University")),
"African American Civil War Memorial and Museum" : (url, wikipedia.summary("African American Civil War Memorial and Museum")),
"Frederick Douglass National Historic Site" :  (url, wikipedia.summary("Frederick Douglass National Historic Site")),
"Martin Luther King, Jr. Memorial" : (url, wikipedia.summary("Martin Luther King, Jr. Memorial")),
"National Museum of African American History and Culture (NMAAHC)" : (url, wikipedia.summary("National Museum of African American History and Culture (NMAAHC)")),
"Howard Theatre" : (url, wikipedia.summary("Howard Theatre"))
 }

response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")

image_urls = [img["src"] for img in soup.find_all("img")]
print(image_urls)
#print(data[value])
