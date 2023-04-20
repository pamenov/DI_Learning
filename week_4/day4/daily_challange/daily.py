import os
from random import choice

import psycopg2
import requests
from dotenv import load_dotenv


def fix_strings(string):
    return "\\'".join(string.split("'"))

def parse_counry(json_item):
    try:
        # name = json_item['name']['nativeName']['eng']['official']
        name = fix_string(json_item['name']['official'])
    except:
        name = "No name"
    try:
        capital = fix_string(json_item['capital'])
    except:
        capital = "No capital"
    try:
        flag = json_item['flag']
    except:
        flag = "Flag unknown"
    try:
        subregion = json_item['subregion']
    except:
        subregion = "Subregion unknown"
    try:
        population = json_item['population']
    except:
        population = "Population unknown"
    return name, capital, flag, subregion, population

def get_ten_random_countries():
    url = "https://restcountries.com/v3.1/all"
    response = requests.get(url)
    country_json = response.json()
    result = []
    for _ in range(10):
        country_info = choice(country_json)
        result.append(parse_counry(country_info))
        country_json.remove(country_info)
    return result

def write_to_database(country_info):
    load_dotenv()
    connection = psycopg2.connect(
        host=os.environ["PG_HOSTNAME"],
        user=os.environ["PG_USERNAME"],
        password=os.environ["PASSWORD"],
        dbname=os.environ["DATABASE"]
    )
    capital = ','.join(country_info[1])
    beg_query = f"INSERT INTO {os.environ['DATABASE']} (name, capital, flag, subregion, population) VALUES"
    end_query = f"('{country_info[0]}', '{capital}', '{country_info[2]}', '{country_info[3]}', {country_info[4]})"
    cursor = connection.cursor()
    cursor.execute(beg_query + end_query)
    connection.commit()
    connection.close()



if __name__ == "__main__":
    # for key, value in response.json()[1]["translations"].items():
    #     print(key, value)
    # for item in response.json():
    #     print(parse_counry(item)[1])
    countries = get_ten_random_countries()
    for country in countries:
        write_to_database(country)
