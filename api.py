import time
import requests
import os
from yelpapi import YelpAPI
from dotenv import load_dotenv
from flask import Flask

# load environment variables from dotenv
load_dotenv()

if os.environ.get('FLASK_ENV') == "development":
    app = Flask(__name__)
else:
    app = Flask(__name__, static_url_path='', static_folder='view/build')

yelp_api = YelpAPI(os.environ.get('REACT_APP_MSN_API_KEY', ""))

@app.route('/api/listing', methods=['GET'])
def get_api_listing():
    cuisines = {
        "Argentine",
        "Armenian",
        "Bangladeshi",
        "Belgian",
        "Brazilian",
        "Bulgarian",
        "Cajun/Creole",
        "Cantonese",
        "Caribbean",
        "Chinese",
        "Cypriot",
        "Danish",
        "Ethiopian",
        "Filipino",
        "French",
        "Georgian",
        "German",
        "Greek",
        "Indonesian",
        "Indian",
        "Irish",
        "Italian",
        "Japanese",
        "Jewish",
        "Korean",
        "Kurdish",
        "Laotian",
        "Latin American",
        "Mediterranean",
        "Mexican",
        "American (New)",
        "Nicaraguan",
        "Pakistani",
        "Persian/Iranian",
        "Peruvian",
        "Polish",
        "Portuguese",
        "Romanian",
        "Russian",
        "Scandinavian",
        "Somali",
        "Spanish",
        "Sri Lankan",
        "Taiwanese",
        "Tex-Mex",
        "Thai",
        "American (Traditional)",
        "Turkish",
        "Ukrainian",
        "Vietnamese",
        "Afghan",
        "African",
        "Andalusian",
        "Arabian",
        "Asturian",
        "Australian",
        "Austrian",
        "Basque",
        "Bavarian",
        "British",
        "Burmese",
        "Cambodian",
        "Catalan",
        "Chilean",
        "Corsican",
        "Cuban",
        "Czech",
        "Czech/Slovakian",
        "Galician",
        "Guamanian",
        "Halal",
        "Hawaiian",
        "Himalayan/Nepalese",
        "Honduran",
        "Hungarian",
        "Iberian",
        "Israeli",
        "Laos",
        "Lyonnais",
        "Malaysian",
        "Modern Australian",
        "Modern European",
        "Mongolian",
        "Moroccan",
        "Canadian (New)",
        "New Mexican Cuisine",
        "New Zealand",
        "Traditional Norwegian",
        "Parma",
        "Polynesian",
        "Scottish",
        "Serbo Croatian",
        "Singaporean",
        "Slovakian",
        "Swabian",
        "Swedish",
        "Swiss Food",
        "Syrian",
        "Traditional Swedish",
        "Uzbek",
        "Yugoslav"
    }

    args = {}
    
    if 'location' not in args and not ('latitude' in args and 'longitude' in args):
        args['location'] = "160 Spear Street, San Francisco, CA"
    args['term'] = args.get('term', 'restaraunts')
    args['range'] = args.get('range', 1000)
    args['offset'] = args.get('offset', 0)
    args['limit'] = args.get('limit', 50)
    args['categories'] = args.get('categories', ",".join(list(cuisines)))
    args['sort_by'] = args.get('sort_by', 'distance')
    
    result = yelp_api.search_query(**args)
    processed_cuisines = {}
    for business in result['businesses']:
        found = False
        for category in business['categories']:
            title = category['title']
            if title in cuisines:
                processed_cuisines[title] = processed_cuisines.get(
                    title, [])
                processed_cuisines[title].append(business)
                found = True
                break

    processed_cuisines = [business for sublist in sorted(
        processed_cuisines.values(), key=lambda x: len(x)) for business in sublist]
    
    
    result['businesses'] = processed_cuisines
    result['total'] = len(processed_cuisines)
    return result

@app.route('/', methods=['GET'])
def index():
    return app.send_static_file('index.html')
    
@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=os.environ.get('PORT', 3001))
