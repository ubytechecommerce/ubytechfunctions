import os

# Código do Adsense a ser inserido
adsense_code = '''
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7347586768860662"
     crossorigin="anonymous"></script>
'''

def inserir_adsense_em_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        conteudo = f.read()
    if adsense_code.strip() in conteudo:
        return  # Já inserido
    if '</head>' in conteudo:
        conteudo = conteudo.replace('</head>', f'{adsense_code}\n</head>')
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(conteudo)
        print(f'✅ Adsense inserido em: {file_path}')

def buscar_htmls_e_inserir_adsense(root_dir):
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.html'):
                inserir_adsense_em_html(os.path.join(root, file))

if __name__ == '__main__':
    buscar_htmls_e_inserir_adsense('.')