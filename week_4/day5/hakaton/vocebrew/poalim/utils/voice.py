from base64 import decodebytes
from io import BytesIO
from os import environ

import requests

from .get_token import get_access

# from pydub import AudioSegment
# from pydub.playback import play


def get_audio(prase):
    url = 'https://texttospeech.googleapis.com/v1/text:synthesize'
    ACCESS_TOKEN = get_access()

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {ACCESS_TOKEN}"
    }

    # Request body
    data = {
        "input": {
            "text": prase
        },
        "voice": {
            "languageCode": "he-IL",
            "name": "he-IL-Wavenet-A"
        },
        "audioConfig": {
            "audioEncoding": "MP3",
            "speakingRate": 1.2
        },
    }

    # Send the POST request
    response = requests.post(url, headers=headers, json=data)

    audio_data = response.json()["audioContent"]
    return decodebytes(audio_data.encode('utf-8'))

