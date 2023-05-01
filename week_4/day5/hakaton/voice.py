from os import environ

import requests
from get_token import get_access

url = 'https://texttospeech.googleapis.com/v1beta1/text:synthesize'

# environ["GOOGLE_APPLICATION_CREDENTIALS"] = "inlaid-backbone.json"

ACCESS_TOKEN = get_access()

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {ACCESS_TOKEN}"
}

# Request body
data = {
    "input": {
        "text": "Hello, world!"
    },
    "voice": {
        "languageCode": "en-US",
        "name": "en-US-Wavenet-A"
    },
    "audioConfig": {
        "audioEncoding": "MP3",
        "speakingRate": 0.8
    },
    "enableTimePointing": ["SSML_MARK"]
}

# Send the POST request
response = requests.post(url, headers=headers, json=data)
print(response.json())
