import gzip
import re


def clean_line(line):
    line = re.sub(r'\[.*?\]', '', line)
    line = ' '.join(line.split())
    return line

def read_and_decode(file):
    return file.readline().decode("utf-8-sig")

def no_fuckin_dots(hebrew_line):
    arr = [ch for ch in hebrew_line if 1488 <= ord(ch) < 1515]
    return ''.join(arr)

def parse_verbs(line):
    part, category = line.split(chr(8211))
    if ',' in category:
        category = category.split(',')[0]
    return category.strip()

def clean_translate(line):
    line = re.sub(r'\(.*?\)', '', line)
    res = []
    for ch in line:
        if 1072 <= ord(ch) < 1104 or ch == ' ' or ch == ',':
            res.append(ch)
    return ''.join(res)



with gzip.open("heb-rus_Pealim_1_0-GD.dsl.dz") as f:
    for i in range(15):
        f.readline()
    with open('verbs.csv', 'w') as fout:
        categories = []
        while True:
            hebrew = no_fuckin_dots(read_and_decode(f))
            if not hebrew:
                break
            # res.append(hebrew)
            f.readline()
            # for _ in range(3):
            #     res.append(clean_line(read_and_decode(f)))
            root = no_fuckin_dots(clean_line(read_and_decode(f)))
            description = clean_line(read_and_decode(f))
            translate = clean_line(read_and_decode(f))
            if "Глагол" in description:
                part_of_speech = "verb"
                category = parse_verbs(description)
                if category not in categories:
                    categories.append(category)
                fout.write(hebrew + ";")
                fout.write(root + ";")
                fout.write(part_of_speech + ";")
                fout.write(category + ";")
                fout.write(clean_translate(translate) + '\n')
            # if len(res[1]) == 0:
            #     print("in if")
            #     res[0], res[1] = res[1], res[0]
            # fout.write(';'.join(res) + "\n")
        print(categories)
            # for ch in description:
            #     print(ch, ord(ch))
            # # print(hebrew, root, description, translate, sep='\n')
            # break
