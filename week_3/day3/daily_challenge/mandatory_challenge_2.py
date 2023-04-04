import translators as ts

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
fr_en_dict = {}
for fr_word in french_words:
    en_word = ts.translate_text(
        fr_word, 
        translator="google",
        from_language="fr",
        to_language="en",
    )
    fr_en_dict[fr_word] = en_word
print(fr_en_dict)
