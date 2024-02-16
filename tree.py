import os,time;from random import randint as rnd,sample as smp
seed,present=rnd(12,20),'\u7530'                              
def bud(len, chr): return chr*len  
def snow(branch):
  for i in sorted(smp(range(len(branch)),int(seed/rnd(3,6)))):
    if branch[i]==present or branch[i]=='_':continue
    branch=branch[:i]+'*'+branch[i+1:]
  return branch
def grow(rows): 
  time.sleep(1.0);os.system('cls'if os.name=='nt'else'clear')
  for row in range(rows):
    if row>=rows-2:twig=bud(rows,' 'if row==rows-2 else '_') + '|'
    else:twig=bud(rows-row,' ')+bud(row,'#')+('|'if row!=0 else'#')
    print(snow(twig+(twig[::-1][:3]+present+twig[::-1][5:]\
      if row==rows-1 else twig[::-1])))
while True: grow(seed)