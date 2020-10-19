email = input('Enter a email adress: ')
def check_email(mail):
    import re
    text = re.search(r'^[a-z]+[\._]?[a-z0-9]+[@][a-z]+[a-z0-9]+[.][a-z]{2,3}$', mail)
    if text:
        return print(True)
    else:
        return print(False)
check_email(email)