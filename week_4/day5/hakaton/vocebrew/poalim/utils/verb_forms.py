import re

PRONOUN = {
    "present": {
            "single_male": "אני, אתא, הוא",
            "single_female": "אני, את, היא",
            "plural_male": "אנחנו, אתם, חם",
            "plural_female": "אנחנו, אתן, חן",
    },
    "past": {
        "single": {
            "first": "אני",
            "second_m": "אתא",
            "second_f": "את",
            "third_m": "הוא",
            "third_f": "היא",
        },
        "plural": {
            "first": "אנחנו",
            "second_m": "אתם",
            "second_f": "אתן",
            "third": "חם, חן"
        }
    }
}


VAV = "ו"
TAV = "ת"
MEM = "מ"
MEM_SOFIT = "ם"
LAMED = "ל"
YUD = "י"
NUN = "נ"
NUN_SOFIT = "ן"
HE = "ה"


def get_present_forms(root, category):
    if category == 'пааль':
        result = {
            "single_male": root[0] + "ו" + root[1:],
            "single_female": root[0] + "ו" + root[1:] + "ת",
            "plural_male": root[0] + "ו" + root[1:] + "ים",
            "plural_female": root[0] + "ו" + root[1:] + "ות",
        }
    if category == 'нифъаль':
        result = {
            "single_male": NUN + root,
            "single_female": NUN + root + TAV,
            "plural_male": NUN + root + YUD + MEM_SOFIT,
            "plural_female": NUN + root + VAV + TAV,
        }
    if category == 'пиэль':
        result = {
            "single_male": f"מ{root}",
            "single_female": f"מ{root}ת",
            "plural_male": f"מ{root}ים",
            "plural_female": f"מ{root}ות",
        }
    if category == 'hитпаэль':
        result = {
            "single_male": MEM + TAV + root,
            "single_female": MEM + TAV  + root + TAV,
            "plural_male": MEM + TAV + root + YUD + MEM_SOFIT,
            "plural_female": MEM + TAV + root + VAV + TAV,
        }
    if category == 'hифъиль':
        result = {
            "single_male": MEM + root[0:-1] + YUD + root[-1],
            "single_female": MEM + root[0:-1] + YUD + root[-1] + HE,
            "plural_male": MEM + root[0:-1] + YUD + root[-1] + YUD + MEM_SOFIT,
            "plural_female": MEM + root[0:-1] + YUD + root[-1] + VAV + TAV,
        }
    if category ==  'hуфъаль':
        result = {
            "single_male": MEM + root,
            "single_female": MEM + root + TAV,
            "plural_male": MEM + root + YUD + MEM_SOFIT,
            "plural_female": MEM + root + VAV + TAV,
        }
    if category == 'пуаль':
        pass
    return result

# def get_infinitive(root, category):
#     if category == 'пааль':
#         return "ל" + root[0:-1] + "ו" + root[-1]
#
#     if category == 'нифъаль':
#         return LAMED + HE + YUD + root
#     if category == 'пиэль':
#         return LAMED +
#     if category == 'hитпаэль':
#         pass
#     if category == 'hифъиль':
#         pass
#     if category ==  'hуфъаль':
#         pass
#     if category == 'пуаль':
#         pass
#     return result

def get_past_forms(root, category):
    if category == 'пааль':
        result = {
            "single": {
                "first": root + TAV + YUD,
                "second_m": root + TAV,
                "second_f": root + TAV,
                "third_m": root,
                "third_f": root + HE,
            },
            "plural": {
                "first": root + NUN + VAV,
                "second_m": root + TAV + MEM_SOFIT,
                "second_f": root + TAV + NUN_SOFIT,
                "third":  root + VAV,
            }
        }
    if category == 'нифъаль':
        result = {
            "single": {
                "first": NUN + root + TAV + YUD,
                "second_m": NUN + root + TAV,
                "second_f": NUN + root + TAV,
                "third_m": NUN + root,
                "third_f": NUN + root + HE,
            },
            "plural": {
                "first": NUN + root + NUN + VAV,
                "second_m": NUN + root + TAV + MEM_SOFIT,
                "second_f": NUN + root + TAV + NUN_SOFIT,
                "third":  NUN + root + VAV,
            }
        }
    if category == 'пиэль':
        result = {
            "single": {
                "first": root + TAV + YUD,
                "second_m": root + TAV,
                "second_f": root + TAV,
                "third_m": root,
                "third_f": root + HE,
            },
            "plural": {
                "first": root + NUN + VAV,
                "second_m": root + TAV + MEM_SOFIT,
                "second_f": root + TAV + NUN_SOFIT,
                "third":  root + VAV,
            }
        }
    if category == 'hитпаэль':
        result = {
            "single": {
                "first": HE + TAV + root + TAV + YUD,
                "second_m": HE + TAV + root + TAV,
                "second_f": HE + TAV + root + TAV,
                "third_m": HE + TAV + root,
                "third_f": HE + TAV + root + HE,
            },
            "plural": {
                "first": HE + TAV + root + NUN + VAV,
                "second_m": HE + TAV + root + TAV + MEM_SOFIT,
                "second_f": HE + TAV + root + TAV + NUN_SOFIT,
                "third":  HE + TAV + root + VAV,
            }
        }
    if category == 'hифъиль':
        result = {
            "single": {
                "first": HE + root + TAV + YUD,
                "second_m": HE + root + TAV,
                "second_f": HE + root + TAV,
                "third_m": HE + root[0: -1] + YUD + root[-1],
                "third_f": HE + root[0: -1] + YUD + root[-1] + HE,
            },
            "plural": {
                "first": HE + root + NUN + VAV,
                "second_m": HE + root + TAV + MEM_SOFIT,
                "second_f": HE + root + TAV + NUN_SOFIT,
                "third": HE + root[0: -1] + YUD + root[-1] + VAV,
            }
        }
    if category ==  'hуфъаль':
        result = {
            "single": {
                "first": HE + root + TAV + YUD,
                "second_m": HE + root + TAV,
                "second_f": HE + root + TAV,
                "third_m": HE + root[0: -1] + YUD + root[-1],
                "third_f": HE + root[0: -1] + YUD + root[-1] + HE,
            },
            "plural": {
                "first": HE + root + NUN + VAV,
                "second_m": HE + root + TAV + MEM_SOFIT,
                "second_f": HE + root + TAV + NUN_SOFIT,
                "third": HE + root[0: -1] + root[-1] + VAV,
            }
        }
    if category == 'пуаль':
        pass
    return result
