import google.auth.exceptions
from google.auth.transport.requests import Request
from google.oauth2 import service_account


def get_access():
    credentials = None
    try:
        credentials = service_account.Credentials.from_service_account_file(
            "inlaid-backbone.json",
            scopes=["https://www.googleapis.com/auth/cloud-platform"])
        credentials = credentials.with_scopes(["https://www.googleapis.com/auth/cloud-platform"])
    except google.auth.exceptions.DefaultCredentialsError as e:
        print("Error fetching credentials: {}".format(e))

    try:
        credentials.refresh(Request())
        access_token = credentials.token
        # print("Access token: {}".format(access_token))
        return access_token
    except Exception as e:
        print("Error fetching access token: {}".format(e))
