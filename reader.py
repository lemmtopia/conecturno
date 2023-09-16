import sys

statements = []

def make_statements():
    f = open(sys.argv[1], 'r')
    s = f.read()

    st = ''
    sts =  []
    for letter in s:
        if letter == '\n':
            sts.append(st)
            st = ''
        else:
            st = st + letter

    return sts

def encode(sts):
    els = []
    head = -1
    par = -1
    cur_text = ''
    for current in sts:
        for letter in current:
            if letter == '+':
                par = par * -1
                if par == -1:
                    els.append('<p>{}</p>'.format(cur_text))
                    cur_text = ''
            elif letter == '=':
                head = head * -1
                if head == -1:
                    els.append('<h1>{}</h1>'.format(cur_text))
                    cur_text = ''
            else:
                cur_text = cur_text + letter
    
    return els

def write_to_file(els):
    f = open(sys.argv[2], 'w')
    texts = ['<DOCTYPE html>\n<html lang="pt_BR"><head>\n<meta charset="UTF-8">\n<link rel="stylesheet" href="./css/style.css">\n</head>\n<body>']
    for current in els:
        texts.append('{}\n'.format(current))
    texts.append('<h6>Conecturno</h6>\n</body>\n</html>\n')

    finalt = ''
    for t in texts:
        finalt = finalt + t

    f.write(finalt)
    
statements = make_statements()                
elements = encode(statements)
write_to_file(elements)